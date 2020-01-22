import { Component, Prop, State, Element, Watch, h } from '@stencil/core';
import { ProfileSecurityUser } from './crds-profile-security-interface';
import { HTMLStencilElement } from '@stencil/core/internal';
import { GET_USER } from './crds-profile-security.graphql';
import { CrdsApolloService } from '../../shared/apollo';
import { isAuthenticated } from '../../global/authInit';
import validate from 'validate.js';

@Component({
  tag: 'crds-profile-security',
  styleUrl: 'crds-profile-security.scss',
  shadow: true
})
export class CrdsProfileSecurity {
  private user: ProfileSecurityUser = null;
  //private chunkOfDay: string;

  @State() displayName: string = null;
  @Prop() defaultName: string;
  @State() currentEmail: string;
  @Element() public host: HTMLStencilElement;


  public async componentWillLoad(){
    return CrdsApolloService.subscribeToApolloClient();
  }

  public componentWillRender() {
    //this.chunkOfDay = this.getChunkOfDay(new Date().getHours());
    if (isAuthenticated()) return this.getUser();
  }

  public componentDidRender() {

    var constraints = {
      password: {
        presence: true,
        length: {
          minimum: 6,
          message: "must be at least 6 characters"
        }
      },
      currentEmail: {
        email: true
      },
    };

    const renderedEvent = new CustomEvent('component rendered', {
      detail: this.host
    });
    document.dispatchEvent(renderedEvent);
    console.log(validate({password: "bad", currentEmail: this.renderEmail()}, constraints));

    //setTimeout(() => {
      //this.host.shadowRoot.querySelector('.greeting').classList.add('fade-in');
    //}, 0);
  }

  public getUser() {
    return CrdsApolloService.apolloClient
      .query({ query: GET_USER })
      .then(success => {
        this.user = success.data.user;
        this.getDisplayName();
        return;
      })
      .catch(err => {
        this.getDisplayName();
        this.logError(err);
      });
  }

  private getDisplayName(): void {
    this.displayName = (this.user && (this.user.nickName || this.user.firstName)) || this.defaultName || '';
  }

  public renderName() {
    return `${this.displayName}`;
  }


  public renderEmail() {
    return `${this.user.email}`;
    //return `${this.email}`;
  }

  private logError(err) {
    console.error(err);
  }

  public render() {
    if (!this.displayName) return '';
    return (
      <div class="row">
        <div class="col-sm-12 soft-ends">
          <h3 class="component-header">Change Email</h3>
          <div class="input-group">
            <label>Email</label>
            <input class="form-control" type="email" id="currentEmail" name="currentEmail" placeholder="Enter email address" value={this.renderEmail()} />
          </div>
          <div class="input-group">
            <label>Current Password</label>
            <input class="form-control" type="password" id="current-password" name="password" placeholder="Current password"/>
          </div>
          <button class="btn btn-medium btn-blue">Save</button><span>{this.renderEmail()}</span>
        </div>
        <div class="col-sm-12 soft-ends">
          <h3 class="component-header">Change Password</h3>
          <div class="input-group">
            <label>Current Password</label>
            <input class="form-control" type="password" id="current-password" name="password" placeholder="Current password"/>
          </div>
          <div class="input-group">
            <label>New Password</label>
            <input class="form-control" type="password" id="new-password" name="password" placeholder="New password"/>
            <input class="form-control" type="password" id="confirm-password" name="password" placeholder="Confirm new password"/>
          </div>
          <button class="btn btn-medium btn-blue">Save</button>
        </div>
      </div>
    );
  }
}
