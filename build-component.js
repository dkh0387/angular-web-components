const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
  const files = [
    './dist/angular-web-components/runtime.js',
    './dist/angular-web-components/polyfills.js',
    './dist/angular-web-components/main.js'
  ];

  await fs.ensureDir('widget');
  await concat(files, 'widget/news-widget.js');
}
build();
