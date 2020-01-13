import { Component, Prop, Element, h } from '@stencil/core';
// import { window } from './crds-subscribe-form-interface';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'crds-subscribe-form',
  styleUrl: 'crds-subscribe-form.scss',
  shadow: true
})
export class CrdsSubsribeForm {
  private formEl?: HTMLInputElement;

  @Prop() formId: string; //For use with fetching/storing data for this specific form
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

  private initializeForm() {
    if (!window.hbspt) {
      throw new Error('Hubspot //js.hsforms.net/forms/v2.js embed script must be present on the page.');
    }

    window.hbspt.forms.create({
      portalId: '3993985',
      formId: '52b50268-5d9c-4369-8359-e96ff69094f9',
      formInstanceId: '1',
      submitButtonClass: 'btn btn-cyan btn-lg push-top',
      errorMessageClass: 'hs-error-msgs inputs-list list-unstyled',
      onFormReady() {
        // Start of example conversion
        // this.formEl.getQuerySelector('div[data-reactid=".hbspt-forms-0.1:$0.0"]').classList.push('push-bottom')
        // Figure out how to trigger change event
        //
        // $('div[data-reactid=".hbspt-forms-0.1:$0.0"]').addClass('push-bottom').change();
        // $('div[data-reactid=".hbspt-forms-0.5.1"]').addClass('btn-block-mobile').change();
        // $('label[data-reactid=".hbspt-forms-0.1:$0.$email.0"]').hide().change();
        // $('input[data-reactid=".hbspt-forms-0.1:$0.$email.$email.0"]').addClass('form-control').attr("placeholder", "Email Address").change();
      }
    });
  }

  public componentDidRender() {
    this.initializeForm();
  }

  public render() {
    return <div class="form" ref={el => (this.formEl = el as HTMLInputElement)}></div>;
  }
}
