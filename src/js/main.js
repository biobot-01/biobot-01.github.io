import {data} from './data.js';
import {Modal} from './modules/modal.js';
// import { validate, send } from './modules/form.js';

const modalButtons = document.querySelectorAll('.is-modal-button');
const siblingElem = document.querySelector('.footer');

for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', function() {
    let id = modalButtons[i].dataset.id;
    let type = modalButtons[i].dataset.type;
    let modal = new Modal(id, siblingElem, data);

    modal.create();

    if (type === 'image') {
      modal.addImage();
    } else {
      modal.addCard();
    }

    modal.close();
  });
}

const hireMeButton = document.getElementById('hireMe');

hireMeButton.addEventListener('click', function() {
  const contactSection = document.getElementById('contactSection');

  contactSection.scrollIntoView({behavior: 'smooth'});
});
