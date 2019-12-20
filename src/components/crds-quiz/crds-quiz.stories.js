import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';

var js = document.createElement('script');
js.type = 'text/javascript';
js.src = '../dist/collection/global/app.js';

// This will need to be added to the page.
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://embed.typeform.com/embed.js';
document.getElementsByTagName('body')[0].appendChild(script);

const stories = storiesOf('Interactions', module);
stories.addDecorator(withKnobs, js).add('crds-quiz', () => {
  const formId = text('Typeform Form Id', 'kgiAZR');
  const height = text('Height', '500px');
  const userEmail = text('Test Email', '');

  return `
    <div style="margin: 20px 0;">
      <strong>IMPORTANT:</strong> The quiz requires https://embed.typeform.com/embed.js to be loaded on the page
      <br>
      <strong>IMPORTANT:</strong> The default example form uses a Netlify function to send the Typeform webhook payload to the email address entered for testing.
    </div>
    <crds-quiz form-id=${formId} height=${height} user-email=${userEmail}></crds-quiz>
  `;
});
