import { storiesOf } from '@storybook/polymer';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { colors, sizes, displays, types } from './crds-button-options';

const stories = storiesOf('DDK/Atoms', module);
stories.addDecorator(withKnobs).add('crds-button', () => {
  const type = select('type', types, '');
  const color = select('color', colors, type == 'link' ? '' : 'blue');
  const buttonText = text('text', 'Button');
  const href = text('href', '');
  const size = select('size', sizes, '');
  const display = select('display', displays, '');
  const disabled = boolean('disabled', false);
  const secondary = boolean('secondary', false);

  return `<crds-button 
              ${color && type !== 'link' ? 'color=' + color : ''}
              ${buttonText ? 'text=' + buttonText : ''} 
              ${href ? 'href=' + href : ''} 
              ${type ? 'type=' + type : ''} 
              ${size ? 'size=' + size : ''}  
              ${display ? 'display=' + display : ''} 
              ${disabled ? 'disabled=' + disabled : ''} 
              ${secondary ? 'secondary=' + secondary : ''} 
              ></crds-button>`;
});
