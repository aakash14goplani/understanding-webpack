import helloWorld from './components/heading/hello-world'
import KiwiImage from './components/kiwi-image/kiwi-image';
import Redirect from './components/redirect/redirect';
// import { upperFirst } from 'lodash-es';
import _ from 'lodash-es';
import React from 'react';

helloWorld(_.upperFirst('kiwi'));
const kiwiImage = new KiwiImage();
const redirect = new Redirect();
redirect.redirectToPage('http://localhost:9000/');
kiwiImage.render();

import('IndexApp/Button').then(module => {
  const buttonFromModule = module.default;
  const button = new buttonFromModule();
  button.render();
});
