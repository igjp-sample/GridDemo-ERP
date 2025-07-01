
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/GridDemo-ERP/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-6XMN2VMZ.js",
      "dynamicImport": false
    }
  ],
  "node_modules/@lit-labs/virtualizer/layouts/flow.js": [
    {
      "path": "chunk-5EXXFQ7C.js",
      "dynamicImport": false
    }
  ],
  "src/app/sales-trends-chart/sales-trends-chart.component.ts": [
    {
      "path": "chunk-L242CFM2.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 42159, hash: '610e49ea502efc58a332d8ecd06e99736b085d20e4e93120b1fcd6950de6f72d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7323, hash: '7782ccb23ba9016bbe2e1f067cd3e293c88b5ce8e08fa5b909af5f1596763218', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XW4TQ7GS.css': {size: 562148, hash: 'Qvlj6p14Rjw', text: () => import('./assets-chunks/styles-XW4TQ7GS_css.mjs').then(m => m.default)}
  },
};
