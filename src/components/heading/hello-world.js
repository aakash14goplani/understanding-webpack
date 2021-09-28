import './hello-world.css';

function helloWorld(title) {
	const heading = document.createElement('h1');
  const body = document.querySelector('body');
  
	heading.innerHTML = 'Understanding Basics of ' + title;
  heading.classList.add('heading');
  body.appendChild(heading);
}

export default helloWorld;
