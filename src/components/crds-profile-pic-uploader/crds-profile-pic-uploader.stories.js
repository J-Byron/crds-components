import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';

  const stories = storiesOf('Pic Uploader', module);
  stories.add('<crds-profile-pic-uploader />', () => {
    return `<crds-profile-pic-uploader></crds-profile-pic-uploader>`;
  });
