import { setMode } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';
export { MyComponent, defineCustomElement as defineCustomElementMyComponent } from './my-component.js';

const initialize = () => {
  console.log('Calling initialize in component-library');
  setMode(() => {
    console.log('Calling setMode from @stencil/core');
    return 'ios';
  });
};

export { initialize };
