import {data, fields} from './data.js';
import Modal from './modules/modal.js';
import FormValidator from 'validate-js';

const modalButtons = Array.from(
  document.querySelectorAll('.is-modal-button'));
const siblingElem = document.querySelector('.footer');
const hireMeButton = document.getElementById('hireMe');

for (let i = 0; i < modalButtons.length; i++) {
  let button = modalButtons[i];

  button.addEventListener('click', (event) => {
    let id = button.dataset.id;
    let type = button.dataset.type;
    let modal = new Modal(id, siblingElem, data);

    modal.create();

    switch (type) {
    case 'image':
      modal.addImage();
      break;
    case 'card':
      modal.addCard();
      break;
    }

    modal.close();
    event.preventDefault();
  });
}

hireMeButton.addEventListener('click', function(event) {
  const contactSection = document.getElementById('contactSection');
  contactSection.scrollIntoView({behavior: 'smooth'});
  event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
  new FormValidator(
    'contact',
    fields,
    (errors, event) => {
      if (errors.length > 0) {
        // Show the errors
        console.log(errors);
        for (let i = 0; i < errors.length; i++) {
          let error = errors[i];
          let helpElem = document.createElement('p');
          helpElem.className = 'help is-danger has-text-left';
          error.element.closest('.field').append(helpElem);
          helpElem.innerHTML = error.message;
        }
        event.preventDefault();
        return false;
      } else {
        // Show success
        const form = document.forms.contact;
        form.setAttribute('action', 'https://formspree.io/kevingsx@gmail.com');
        let httpRequest = new XMLHttpRequest();
        let formData = new FormData(form);
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          // Proceed with sending form
          if (httpRequest.status === 200) {
            // Send form
            httpRequest.open(
              'POST',
              form.action,
            );
            httpRequest.setRequestHeader(
              'Content-Type',
              'application/x-www-form-urlencoded',
            );
            httpRequest.send(formData);
            let requestSuccess = document.createElement('div');
            form.before(requestSuccess);
            requestSuccess.className = 'notification is-success';
            requestSuccess.innerHTML = httpRequest.responseText;
          } else {
            // Error with the request
            let requestError = document.createElement('div');
            form.before(requestError);
            requestError.className = 'notification is-danger';
            requestError.innerHTML = httpRequest.responseText;
            return false;
          }
        }
      }
    }
  );
});
