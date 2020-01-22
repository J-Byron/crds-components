import { Component, Prop, State, Element, Watch, h } from '@stencil/core';
import { ProfileSecurityUser } from './crds-profile-security-interface';
import { HTMLStencilElement } from '@stencil/core/internal';
import { GET_USER } from './crds-profile-security.graphql';
import { CrdsApolloService } from '../../shared/apollo';
import { isAuthenticated } from '../../global/authInit';

// 3rd Party Libraries
import toastr from 'toastr';
import validate from 'validate.js';

@Component({
  tag: 'crds-profile-security',
  styleUrl: 'crds-profile-security.scss',
  shadow: true
})
export class CrdsProfileSecurity {
  private user: ProfileSecurityUser = null;

  @State() displayName: string = null;
  // @State() value: string;
  @Prop() defaultName: string;
  @State() currentEmail: string;
  @State() newEmail: string;
  @State() currentPassword: string;
  @State() constraints = {
    currentPassword: {
      presence: true,
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    },
    newEmail: {
      email: true
      }
  };
  @State() newPassword: string;
  @Element() public host: HTMLStencilElement;

  public async componentWillLoad(){
    this.initToastr();
    return CrdsApolloService.subscribeToApolloClient();
  }

  public componentWillRender() {
    if (isAuthenticated()) return this.getUser();
  }

  public componentDidRender() {

    const renderedEvent = new CustomEvent('component rendered', {
      detail: this.host
    });
    document.dispatchEvent(renderedEvent);
    //console.log(validate({password: "bad", currentEmail: this.renderEmail()}, constraints));
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
  }

  private logError(err) {
    console.error(err);
  }

  // public handleFocus() {
  //   console.log('you clicked into the input 👌')
  // }

  // public handleBlur() {
  //   console.log('you clicked out of the input 👋')
  // }

  public initToastr() {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }

  handlePasswordSubmit(e) {
    e.preventDefault();
  }

  handleEmailSubmit(e) {
    e.preventDefault();


    //
    console.log(e.target);
    console.log(this.host);
    let newEmailInput = e.target.querySelectorAll("#newEmail")[0];
    let currentPasswordInput = e.target.querySelectorAll("#currentPassword")[0];

    console.log(newEmailInput.value);
    console.log(currentPasswordInput.value);

    if(validate({currentPassword: currentPasswordInput.value, currentEmail: newEmailInput.value}, this.constraints)) {
      // If validate() returns anything, there are Errors
      toastr.error('BAD');
    } else {
      // validate returned nothing, good to submit
      toastr.success('Hey, we made it make toaster come up on form submission');
    }

    //console.log(this.currentPassword);


    // send data to our backend
  }

  handleChange(event) {
    console.log(event);
  }

  public render() {
    if (!this.displayName) return '';
    return (
      <div class="row">
        <div class="col-sm-12 soft-ends">
          <form onSubmit={(e) => this.handleEmailSubmit(e)}>
            <h3 class="component-header">Change Email</h3>
            <div class="input-group">
              <label>Current Email</label>
              <input class="form-control" type="email" id="currentEmail" name="currentEmail" placeholder="Enter email address"
               value={this.user.email} disabled />
            </div>
            <div class="input-group">
              <label>New Email</label>
              <input class="form-control" type="email" id="newEmail" name="newEmail" placeholder="Enter email address"
               value="" onInput={(event) => this.handleChange(event)}  required />
            </div>
            <div class="input-group">
              <label>Current Password</label>
              <input class="form-control" type="password" id="currentPassword" name="currentPassword" placeholder="Current password" value="" required />
            </div>
            <button class="btn btn-medium btn-blue" type="submit" value="Submit">Update Email</button><span class="label push-left">{this.value}</span>
          </form>
        </div>
        <div class="col-sm-12 soft-ends">
          <form onSubmit={(e) => this.handlePasswordSubmit(e)}>
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
            <button class="btn btn-medium btn-blue" type="submit" value="Submit">Update Password</button>
          </form>
        </div>
      </div>
    );
  }
}
