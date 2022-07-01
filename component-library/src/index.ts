import { setMode } from '@stencil/core';

export { Components, JSX } from './components';

export const initialize = () => {
  console.log('Calling initialize in component-library');
  setMode(() => {
    console.log('Calling setMode callback from @stencil/core');
    return 'ios'
  });
  console.log('Provided a callback for setMode');
}
