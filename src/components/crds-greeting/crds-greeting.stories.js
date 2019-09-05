import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Personalization', module);
stories
  .addDecorator(withKnobs)
  .add('<crds-greeting />', () => {
    const token = text('sessionId', '');
    const defaultName = text('defaultName', '');
    return `<crds-greeting auth-token=${token} default-name=${defaultName}></crds-greeting>`;
  });