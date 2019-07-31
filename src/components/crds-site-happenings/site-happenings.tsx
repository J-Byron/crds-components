import { Component, Prop, State, Element, h } from '@stencil/core';
import axios from 'axios';
import marked from 'marked';
import { Utils } from '../../shared/utils';
import { CrdsUser, CrdsHappening, MpCongregation } from './site-happenings-interface';

@Component({
  tag: 'crds-site-happenings',
  styleUrl: 'site-happenings.scss',
  shadow: true
})
export class SiteHappenings {
  analytics = window['analytics'] || {};
  gqlUrl = process.env.CRDS_GQL_ENDPOINT;
  sites: string[] = [];
  mpSites: MpCongregation[] = [];
  happenings: CrdsHappening[] = [];
  user: CrdsUser = { name: '', site: '' };
  selectedSiteId: string = '';

  @Prop() authToken: string;
  @State() selectedSite: string = 'Churchwide';
  @State() authenticated: boolean = false;
  @Element() host: HTMLElement;

  /**
   * Check to see if user is authenticated
   * then fetch MP data is applicable
   */
  componentWillLoad() {
    this.selectedSite = 'Churchwide';
    return Promise.all([
      this.fetchMpData(), 
      this.fetchContentfulData()
    ]);
  }

  componentWillUpdate() {
    console.log('will update', this.authToken);
    return this.fetchMpData();
  }

  private fetchMpData() {
    if (this.authToken) {
      return Promise.all([
        this.fetchSitesData(this.authToken), 
        this.fetchUserData(this.authToken)
      ]);
    }
  }

  /**
   * Get happenings content
   */
  // componentDidLoad() {
  //   this.fetchContentfulData();
  // }

  /**
   * Update the width of the dropdown based
   * on the current selected site
   */
  componentDidRender() {
    this.setWidthBasedOnText(this.host.shadowRoot.querySelector('.happenings-dropdown-select'), this.selectedSite);
  }

  /**
   * Update selected site state
   * from dropdown
   */
  handleSiteSelection(event) {
    this.selectedSite = event.target.value;
    this.setWidthBasedOnText(event.target, event.target.value);
  }

  /**
   * Receive user input from the select site
   * modal
   */
  handleSetDefaultSite(event) {
    this.selectedSiteId = event.target.value;
    this.selectedSite = event.target.options[event.target.selectedIndex].text;
    this.user = { ...this.user, site: this.selectedSite };
    this.defaultToUserSite(this.user.site);
    this.handleClose();
    this.updateUserSite(this.authToken);
    this.analytics.track('Site Updated', {
      id: this.selectedSiteId,
      name: this.selectedSite
    });
  }

  /**
   * Receive input from user clicks on happenings
   * cards
   */
  handleHappeningsClicked(event) {
    let target = event.target;
    let params = {
      title: target.innerText.toLowerCase(),
      url: target.href,
      userSite: this.user.site || 'logged out',
      selectedSite: this.selectedSite
    };
    if (target.tagName !== 'A') {
      params = { ...params, title: target.alt.toLowerCase(), url: target.parentNode.href };
      this.analytics.track('Happenings Clicked', {
        params
      });
    } else {
      this.analytics.track('Happenings Clicked', {
        params
      });
    }
  }

  /**
   * Close the site select modal
   */
  handleClose() {
    this.host.shadowRoot.querySelector('.site-select-message').classList.add('hidden');
  }

  /**
   * Override HTML's behavior of
   * sizing dropdowns to the largest
   * string in the list
   */
  setWidthBasedOnText(el, text) {
    let tmpSelect = document.createElement('select');
    let tmpOption = document.createElement('option');
    let styles = window.getComputedStyle(el);
    tmpSelect.style.visibility = 'hidden';
    tmpSelect.appendChild(tmpOption);
    tmpSelect.style.fontSize = styles.fontSize;
    tmpOption.innerText = text;
    this.host.shadowRoot.appendChild(tmpSelect);
    el.style.width = `${tmpSelect.offsetWidth}px`;
    this.host.shadowRoot.removeChild(tmpSelect);
  }

  /**
   * Update happenings cards to current user's
   * selected site
   */
  defaultToUserSite(site) {
    if (site == 'Not site specific' || site == 'I do not attend Crossroads' || site == 'Anywhere' || site == null) {
      this.selectedSite = 'Churchwide';
    } else {
      this.selectedSite = site;
    }
  }

  /**
   * get user info from MP
   * via graphQL
   */
  fetchUserData(token) {
    return axios
      .post(
        this.gqlUrl,
        {
          query: `
          {
            user {
              site {
                id
                name
              }
            }
          }`
        },
        {
          headers: {
            authorization: token
          }
        }
      )
      .then(success => {
        let mpUser = success.data.data.user;
        let siteName;
        mpUser.site !== null ? (siteName = mpUser.site.name) : (siteName = null);
        this.authenticated = true;
        this.user = { ...this.user, site: siteName };
        this.defaultToUserSite(this.user.site);
      });
  }

  /**
   * Get sites list from MP
   * via graphQL
   */
  fetchSitesData(token) {
    return axios
      .post(
        this.gqlUrl,
        {
          query: `
          {
            sites {
              id
              name
            }
          }
          `
        },
        {
          headers: {
            authorization: token
          }
        }
      )
      .then(success => {
        this.mpSites = success.data.data.sites;
        this.renderSetSiteOptions(this.mpSites);
      })
      .catch(err => console.log(err));
  }

  /**
   * Update a user's site
   * in MP via graphQL
   */
  updateUserSite(token) {
    return axios
      .post(
        this.gqlUrl,
        {
          query: `
          mutation {
            setSite(siteId: ${this.selectedSiteId}) {
              site {
                id
                name
              }
            }
          }
          `
        },
        {
          headers: {
            authorization: token
          }
        }
      )
      .then(success => {
        console.log('updated site', success);
      })
      .catch(err => console.error(err));
  }

  /**
   * Get 'promos' content
   */
  fetchContentfulData() {
    let apiUrl = `https://graphql.contentful.com/content/v1/spaces/${
      process.env.CONTENTFUL_SPACE_ID
    }/environments/${process.env.CONTENTFUL_ENV || 'master'}`;
    return axios
      .get(apiUrl, {
        params: {
          access_token: process.env.CONTENTFUL_ACCESS_TOKEN,
          query: `{
            promoCollection {
              items {
                title
                image {
                  url
                }
                description
                targetAudience
                linkUrl
              }
            }
          }`
        }
      })
      .then(success => {
        this.setContentfulData(success.data.data.promoCollection.items);
      });
  }

  /**
   * Create cards for each promo
   */
  setContentfulData(data) {
    this.happenings = data.filter(promo => promo.targetAudience !== null);
    this.renderHappenings(this.happenings);
    let audiences = [];
    for (let i = 0; i < this.happenings.length; i += 1) {
      if (this.happenings[i].targetAudience) {
        for (let x = 0; x < this.happenings[i].targetAudience.length; x += 1) {
          audiences.push(this.happenings[i].targetAudience[x]);
        }
      }
    }

    let unique_audiences = audiences.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    this.sites = unique_audiences.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
  }

  /**
   * Create cards for each promo
   */
  renderSetSiteModal() {
    return (
      <div class="site-select-message">
        <button type="button" class="close" aria-label="Close" onClick={() => this.handleClose()}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="10" x2="10" y2="1" stroke="#fff" strokeWidth="2" />
            <line x1="1" y1="1" x2="10" y2="10" stroke="#fff" strokeWidth="2" />
          </svg>
        </button>
        <div class="text-center">
          <h2 class="component-header flush-bottom">Looks like you haven't set a Crossroads site</h2>
          <p class="flush-top">
            Let us know which site you attend and we will keep you up to date on everything going on.
          </p>
          <select class="dropdown" onInput={event => this.handleSetDefaultSite(event)}>
            <option disabled selected>
              Choose a site
            </option>
            {this.renderSetSiteOptions(this.mpSites)}
          </select>
          <p>
            <small>*This will update the site field in your profile</small>
          </p>
        </div>
      </div>
    );
  }

  /**
   * Map crds sites to dropdown
   */
  renderSetSiteOptions(mpSites) {
    return mpSites
      .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      .filter(site => site.name !== 'Not site specific' && site.name !== 'Xroads Church')
      .map(site => (
        <option value={site.id} data-name={site.name}>
          {site.name}
        </option>
      ));
  }

  /**
   * map list of cards filtered by dropdown
   */
  renderHappenings(happenings) {
    if (!happenings.length) return this.renderHappeningsSkeleton();
    return happenings
      .filter(happening => happening.targetAudience.find(ta => ta === this.selectedSite))
      .map((obj, index) => (
        <div class="card" key={index}>
          <a class="relative" href={obj.linkUrl} onClick={event => this.handleHappeningsClicked(event)}>
            <img
              alt={obj.title}
              class="img-responsive"
              src={Utils.imgixify(obj.image.url) + `?auto=format&w=400&h=300&fit=crop`}
            />
          </a>
          <div class="card-block">
            <h4 class="card-title card-title--overlap text-uppercase">
              <a href={obj.linkUrl} onClick={event => this.handleHappeningsClicked(event)}>
                {obj.title}
              </a>
            </h4>
            <div class="card-text" innerHTML={marked(obj.description)} />
          </div>
        </div>
      ));
  }

  /**
   * Map 4 fake cards while processing data
   * from ctfl
   */
  renderHappeningsSkeleton() {
    return [1, 2, 3, 4].map(() => (
      <div class="card-skeleton">
        <svg
          width="270px"
          height="302px"
          viewBox="0 0 323 302"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns-xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.5">
            <g id="Short-skeleton-double" transform="translate(-30.000000, -30.000000)" fill="#979797">
              <g transform="translate(30.000000, 30.000000)">
                <rect id="bg-recent-1-copy" x="0" y="0" width="323" height="182" rx="1" />
                <rect id="Rectangle" x="0" y="196" width="94" height="9" rx="1" />
                <rect id="Rectangle" x="0" y="293" width="72" height="9" rx="1" />
                <rect id="Rectangle" x="0" y="219" width="275" height="25" rx="1" />
                <rect id="Rectangle" x="0" y="254" width="145" height="25" rx="1" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    ));
  }

  render() {
    return (
      <div class="container push-top">
        <div class="relative">
          {(this.authenticated && this.user.site == 'Not site specific') || this.user.site == null
            ? this.renderSetSiteModal()
            : ''}
          <hr class="push-bottom-half" />
          <div class="d-flex align-items-center push-bottom-half">
            <h4 id="happening-filter-label" class="flush font-size-base font-family-base text-gray-light">
              happening at crossroads
            </h4>
            <div class="happenings-dropdown" data-automation-id="happenings-dropdown">
              <select
                class="happenings-dropdown-select font-family-base"
                onInput={event => this.handleSiteSelection(event)}
              >
                {this.sites.map(site => (
                  <option value={site} selected={this.selectedSite === site}>
                    {site}
                  </option>
                ))}
              </select>
              <svg
                class="dropdown-caret icon icon-1 pull-right push-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 237 152"
              >
                <path
                  d="M200.731 135.586L92.136 244.182c-1.854 1.853-4.05 2.78-6.587 2.78s-4.731-.927-6.586-2.78l-24.295-24.295c-1.854-1.854-2.781-4.05-2.781-6.587s.927-4.732 2.78-6.586L132.385 129 54.669 51.285c-1.854-1.853-2.781-4.05-2.781-6.586 0-2.537.927-4.732 2.78-6.587l24.296-24.295c1.854-1.853 4.05-2.78 6.586-2.78 2.537 0 4.732.927 6.587 2.78L200.73 122.414c1.854 1.853 2.781 4.049 2.781 6.586s-.927 4.732-2.78 6.586z"
                  transform="translate(-9 -53) rotate(90 127.7 129)"
                />
              </svg>
              {this.selectedSite === this.user.site ? <span class="my-site-label">(my site)</span> : ''}
            </div>
          </div>
          <div class="card-deck carousel" data-crds-carousel="mobile-scroll">
            <div
              id="section-what-s-happening"
              class="feature-cards card-deck--expanded-layout"
              data-automation-id="happenings-cards"
              data-crds-carousel="mobile-scroll"
            >
              {this.renderHappenings(this.happenings)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}