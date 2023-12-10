import paymentSystem from './systemPayment';
import validateCard from './validateCard';

export default class Widget {
  constructor() {
    this.input = document.querySelector('.input');
    this.button = document.querySelector('.button');
    this.cards = Array.from(document.querySelectorAll('.icon'));
  }

  inputEvent() {
    this.input.addEventListener('input', () => {
      this.inputHandler();
    });
  }

  inputHandler() {
    const { value } = this.input;
    if (!value.value) {
      this.cards.forEach((item) => {
        item.classList.remove('active');
      });
    }
    const systemRecognised = paymentSystem(value);
    if (systemRecognised) {
      this.changeClass(systemRecognised);
    }
  }

  changeClass(nameClass) {
    this.cards.forEach((item) => {
      if (item.classList.contains(`${nameClass}`)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  buttonEvent() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.buttonHandler();
    });
  }

  buttonHandler() {
    const { value } = this.input;

    const check = validateCard(value);

    if (check) {
      this.input.classList.remove('invalid');
      this.input.classList.add('valid');
    } else {
      this.input.classList.remove('valid');
      this.input.classList.add('invalid');
    }
  }

  start() {
    this.inputEvent();
    this.buttonEvent();
  }
}
