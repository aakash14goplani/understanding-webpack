import './hello-world.css';
import $ from 'jquery';

function helloWorld() {
	const heading = $('<h1>');
  const body = $('body');
  
	heading.text('Understanding Webpack Basics');
  heading.addClass('heading');
  body.append(heading);
}

export default helloWorld;
