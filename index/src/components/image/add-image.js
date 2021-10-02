import Image from '../../../assest/Empty-Profile-Picture.jpg'
import './add-image.scss'

function addImage() {
  const image = document.createElement('img');
  image.alt = 'empty profile picture';
  image.classList.add('img-responsive');
  image.src = Image;

  const body = document.querySelector('body');
  body.appendChild(image);
}

export default addImage;
