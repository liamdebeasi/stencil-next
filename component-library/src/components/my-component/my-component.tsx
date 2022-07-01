import { Component, h } from '@stencil/core';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'my-component',
  styleUrls: {
    'ios': 'my-component.ios.css',
    'md': 'my-component.md.css'
  },
  shadow: true,
})
export class MyComponent {
  render() {
    return <div>Component should be blue for ios mode and green for md mode</div>;
  }
}
