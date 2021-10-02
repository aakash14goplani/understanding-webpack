import './redirect.css';

class Redirect {
  redirectToPage = (page) => {
    const body = document.querySelector('body');
    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', page);
    anchorTag.classList.add('link');
    anchorTag.innerText = 'View ' + page + ' Page';
    body.appendChild(anchorTag);
  };
}

export default Redirect;
