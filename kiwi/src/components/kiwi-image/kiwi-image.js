import Image from './Kiwi_image.jpg';
import './kiwi-image.scss';

class KiwiImage {

  render() {
    const image = document.createElement('img');
    image.alt = 'kiwi image';
    image.classList.add('kiwi-img-responsive');
    image.src = Image;
  
    const body = document.querySelector('body');
    body.appendChild(image);
  }
}

export default KiwiImage;
