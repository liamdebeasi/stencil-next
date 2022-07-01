const withTM = require("next-transpile-modules")(["component-library-react", "component-library", "@stencil/core"]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
