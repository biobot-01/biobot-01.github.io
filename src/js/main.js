import {data} from './data.js';
import {Modal} from './modules/modal.js';
// import { validate, send } from './modules/form.js';

let modalButtons = document.querySelectorAll('.is-modal-button');
let siblingElem = document.querySelector('.footer');

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
