import helloWorld from '../heading/hello-world'
import KiwiImage from '../kiwi-image/kiwi-image';
import Redirect from '../redirect/redirect';

class KiwiPage {
  render = () => {
    helloWorld('Kiwi');
    const kiwiImage = new KiwiImage();
    const redirect = new Redirect();
    redirect.redirectToPage('http://localhost:9000/');
    kiwiImage.render();
  }
}

export default KiwiPage;
