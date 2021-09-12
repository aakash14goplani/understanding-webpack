import './button.css';

class Button {
  buttonclass = 'button-primary';
  textClass = 'text-primary';

  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');

    button.innerHTML = 'Click Me';
    button.classList.add(this.buttonclass)
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = 'Button Clicked...';
      p.classList.add(this.textClass);
      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default Button;
