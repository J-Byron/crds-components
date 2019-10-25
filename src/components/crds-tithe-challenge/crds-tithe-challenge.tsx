import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import ApolloClient from 'apollo-client';
import { TitheUser } from './crds-tithe-challenge.interface';
import { ContentBlockHandler } from '../../shared/contentBlocks/contentBlocks';
import { CrdsApollo } from '../../shared/apollo';
import { GET_DONATIONS, GET_USER_GROUPS } from './crds-tithe-challenge.graphql';
import { SvgSrc } from '../../shared/svgSrc';

@Component({
  tag: 'crds-tithe-challenge',
  styleUrl: 'crds-tithe-challenge.scss',
  shadow: true
})
export class CrdsTitheChallenge {
  private apolloClient: ApolloClient<{}> = null;
  private contentBlockHandler: ContentBlockHandler;
  private feelings: any[] = [
    { text: 'Blessed', href: '' },
    { text: 'Discouraged', href: '' },
    { text: 'Nervous', href: '' },
    { text: 'Meh', href: '' },
    { text: 'Hopeful', href: '' },
    { text: 'Excited', href: '' }
  ];
  private lengthOfChallenge: number = 90;

  @State() user: TitheUser = null;
  @Prop() authToken: string;
  @Prop() selectedFeeling: string;
  @Element() public host: HTMLStencilElement;

  @Watch('authToken')
  authTokenHandler(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.apolloClient = CrdsApollo(newValue);
      this.getUser();
    }
  }

  public componentWillLoad() {
    this.apolloClient = CrdsApollo(this.authToken);
    this.contentBlockHandler = new ContentBlockHandler(this.apolloClient, 'tithe challenge');
    return this.contentBlockHandler.getCopy();
  }

  public componentWillRender() {
    if (!this.isUserInChallenge()) return; //exit because we cant do anything else at this point
    if (!this.user.donations) return this.getUserDonations();
  }

  public getUser() {
    return this.apolloClient.query({ query: GET_USER_GROUPS }).then(response => {
      this.user = response.data.user;
    });
  }

  public getUserDonations() {
    return this.apolloClient
      .query({
        variables: { startDate: this.user.groups[0].userStartDate },
        query: GET_DONATIONS
      })
      .then(response => {
        this.user.donations = response.data.user.donations;
      });
  }

  private isUserActive() {
    return this.user.donations.length;
  }

  private isUserInChallenge() {
    return this.user && this.user.groups.length;
  }

  private toggleDropdown() {
    const dropdownEl = this.host.shadowRoot.getElementById('feelingsDropdown');
    if (dropdownEl.classList.contains('open')) dropdownEl.classList.remove('open');
    else dropdownEl.classList.add('open');
  }

  private getProgress() {
    var today = new Date();
    var startDate = new Date(0);
    startDate.setTime(this.user.groups[0].userStartDate * 1000);
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    return Math.floor((this.convertTimeToDays(diffTime) / this.lengthOfChallenge) * 100);
  }

  private convertTimeToDays(time: number): number {
    return Math.ceil(time / (1000 * 60 * 60 * 24));
  }

  private handleFeelingSelected(event) {
    //fire to graphql/cosmos
    console.log(event.target.value);
    this.selectedFeeling = event.target.value;
  }

  public render() {
    if (!this.shouldShowComponent()) return null;
    return <div>{this.isUserActive() ? this.renderStarted() : this.renderNotStarted()}</div>;
  }

  public renderNotStarted() {
    return (
      <div class="tithe-container d-flex">
        <div class="m-auto text-center">
          <img
            class="tithe-logo"
            src="https://crds-media.imgix.net/3dIdKWdPR5u6rpMn0VF8r7/070c06da454b1c178a1605cbc4421d05/90DTT-logo.png"
          />
        </div>
        <div class="divider" />
        <div class="text-container">
          {this.contentBlockHandler.getContentBlock('tithe-encourage', { userName: this.user.nickName })}
          <button
            class="btn btn-blue schedule-btn"
            type="button"
            onClick={() => {
              window.location.href = '/give';
            }}
          >
            Schedule your tithe now
          </button>
          <button
            class="btn btn-white btn-outline"
            type="button"
            onClick={() => {
              console.log('redirect to brians message from 10/27');
            }}
          >
            Watch a message from Brian
          </button>
          <br />
          <a class="text-gray-light push-half-top inline-block" href="">
            What's the 90 Day Tithe Test?
          </a>
          <br />
        </div>
      </div>
    );
  }

  public renderStarted() {
    return (
      <div class="tithe-container d-flex">
        <div class="m-auto text-center">
          <img
            class="tithe-logo"
            src="https://crds-media.imgix.net/3dIdKWdPR5u6rpMn0VF8r7/070c06da454b1c178a1605cbc4421d05/90DTT-logo.png"
          />
        </div>
        <div class="divider" />
        <div class="text-container">
          {this.contentBlockHandler.getContentBlock('tithe-started', { name: this.user.nickName })}
          {this.selectedFeeling ? this.renderFeelingResponse() : this.renderFeelingSelection()}
        </div>
      </div>
    );
  }

  public renderFeelingSelection() {
    return (
      <div class="d-flex">
        <p class="text-white push-half-right">I'm feeling</p>
        <div id="feelingsDropdown" class="dropdown" role="presentation">
          <button
            class="btn btn-blue dropdown-toggle"
            type="button"
            onClick={() => {
              this.toggleDropdown();
            }}
            aria-haspopup="true"
            aria-expanded="false"
          >
            #Blessed
            {/* {SvgSrc.chevronDown()} */}
          </button>
          <ul class="crds-list dropdown-menu">
            {this.feelings.map(feeling => (
              <li value={feeling.id} onClick={event => this.handleFeelingSelected(event)} data-name={feeling.text}>
                <a>{feeling.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  public renderFeelingResponse() {
    return this.contentBlockHandler.getContentBlock(`feelingResponse${this.selectedFeeling}`);
  }

  private shouldShowComponent(): boolean {
    return this.user && !!this.user.groups.length;
  }
}
