import helloWorld from './components/heading/hello-world'
import addImage from './components/image/add-image';
import Button from './components/button/button';
import './index.scss';

helloWorld();
const button = new Button();
button.render();
addImage();
