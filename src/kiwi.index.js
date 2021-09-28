import helloWorld from './components/heading/hello-world'
import KiwiImage from './components/kiwi-image/kiwi-image';
// import { upperFirst } from 'lodash-es';
import _ from 'lodash-es';
import React from 'react';

helloWorld(_.upperFirst('kiwi'));
const kiwiImage = new KiwiImage();
kiwiImage.render();
