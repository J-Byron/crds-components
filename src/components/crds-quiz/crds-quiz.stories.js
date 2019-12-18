import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';

var js = document.createElement("script");
js.type = "text/javascript";
js.src = '../dist/collection/global/app.js';


const stories = storiesOf('Interactions', module);
stories
  .addDecorator(withKnobs, js)
  .add('crds-quiz', () => {
    const contentID = text('contentID', '');
    return `<crds-quiz content-id=${contentID}></crds-quiz>`;
  });
