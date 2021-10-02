import helloWorld from '../heading/hello-world'
import addImage from '../image/add-image';
import Button from '../button/button';
import Redirect from '../redirect/redirect';

class IndexPage {
  render = () => {
    helloWorld('Webpack');
    const button = new Button();
    button.render();
    const redirect = new Redirect();
    redirect.redirectToPage('http://localhost:9001/');
    addImage();
  }
}

export default IndexPage;
