import helloWorld from './components/heading/hello-world'
import addImage from './components/image/add-image';
import Button from './components/button/button';
import Redirect from './components/redirect/redirect';
// import { upperFirst } from 'lodash-es';
import _ from 'lodash-es';
import React from 'react';

helloWorld(_.upperFirst('webpack'));
const button = new Button();
button.render();
const redirect = new Redirect();
redirect.redirectToPage('kiwi');
addImage();
