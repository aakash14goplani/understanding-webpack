import './hello-world.css';

function helloWorld() {
	const heading = document.createElement('h1');
  const body = document.querySelector('body');
  
	heading.innerHTML = 'Understanding Webpack Basics';
  heading.classList.add('heading');
  body.appendChild(heading);
}

export default helloWorld;
