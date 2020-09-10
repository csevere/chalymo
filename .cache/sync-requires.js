const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/.cache/dev-404-page.js"))),
  "component---src-pages-components-footer-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/src/pages/components/footer.js"))),
  "component---src-pages-components-hero-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/src/pages/components/hero.js"))),
  "component---src-pages-components-navbar-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/src/pages/components/navbar.js"))),
  "component---src-pages-components-product-row-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/src/pages/components/product-row.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/src/pages/index.js"))),
  "component---src-pages-main-index-js": hot(preferDefault(require("/Users/carlita/Documents/GitHub/chalymo/src/pages/main/index.js")))
}

