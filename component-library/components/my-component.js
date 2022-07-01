import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const myComponentIosCss = ":host{display:block;background:rgba(0, 0, 255, 0.5)}";

const myComponentMdCss = ":host{display:block;background:rgba(0, 255, 0, 0.5)}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h("div", null, "Component should be blue for ios mode and green for md mode");
  }
  static get style() { return {
    ios: myComponentIosCss,
    md: myComponentMdCss
  }; }
}, [33, "my-component"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
