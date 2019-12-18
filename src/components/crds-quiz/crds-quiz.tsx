import { Component, Prop, State, Element, Watch, h } from '@stencil/core';
import { User } from './crds-quiz.interface';
import { HTMLStencilElement } from '@stencil/core/internal';
import { GET_USER } from './crds-quiz.graphql';
import { CrdsApolloService } from '../../shared/apollo';
import { isAuthenticated } from '../../global/authInit';

@Component({
  tag: 'crds-quiz',
  styleUrl: 'crds-quiz.scss',
  shadow: true
})
export class CrdsQuiz {
  private user: User;
  private typeformEl?: HTMLInputElement;

  @Prop() formId: string; //For use with fetching/storing data for this specific quiz
  @Prop() height: string;
  @Prop() userEmail: string;
  @Element() public host: HTMLStencilElement;

  constructor() {
    this.initializeForm = this.initializeForm.bind(this);
  }

  private validateFormId() {
    if (!this.formId) {
      throw new Error('form-id is required.');
    }
  }

  public connectedCallback() {
    this.validateFormId();
  }

  private getUserEmail() {
    if (this.userEmail) {
      return this.userEmail;
    }

    if (isAuthenticated() && this.user && this.user.email) {
      return this.user.email;
    }
  }

  private formUrl() {
    let url = `https://crossroadswebteam.typeform.com/to/${this.formId}`;
    const email = this.getUserEmail();
    if (email) {
      url = `${url}?email=${email}`;
    }

    return url;
  }

  private initializeForm() {
    if (!window.typeformEmbed) {
      throw new Error('Typeform https://embed.typeform.com/embed.js embed script must be present on the page.');
    }

    // Docs: https://developer.typeform.com/embed/modes/#widget-mode
    window.typeformEmbed.makeWidget(this.typeformEl, this.formUrl(), {
      opacity: 0
    });
  }

  public async componentWillLoad() {
    await CrdsApolloService.subscribeToApolloClient();
    return Promise.all([isAuthenticated() ? this.getUser() : null]);
  }

  public componentDidRender() {
    this.initializeForm();
  }

  private getUser() {
    return CrdsApolloService.apolloClient.query({ query: GET_USER }).then(response => {
      this.user = response.data.user;
    });
  }

  public render() {
    return (
      <div>
        <div
          class="typeform-quiz"
          style={{ height: this.height }}
          ref={el => (this.typeformEl = el as HTMLInputElement)}
        ></div>
      </div>
    );
  }
}
