import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';

// This will need to be added to the page.
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//js.hsforms.net/forms/v2.js';
document.getElementsByTagName('body')[0].appendChild(script);

const stories = storiesOf('Subscribe Form', module)
stories.addDecorator(withKnobs).add('crds-subscribe-form', () => {
  const formId = text('Form Id', '52b50268-5d9c-4369-8359-e96ff69094f9');

  return `
    <div style="margin: 20px 0;">
      <strong>IMPORTANT:</strong> The form requires //js.hsforms.net/forms/v2.js to be loaded on the page
    </div>
    <crds-subscribe-form form-id=${formId}></crds-subscribe-form>
  `;
});
