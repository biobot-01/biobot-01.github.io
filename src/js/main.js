import {data} from './data.js';
import {Modal} from './modules/modal.js';
const FormValidator = require('../../node_modules/validate-js/validate.js');

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

const fields = [
  {
    name: 'name',
    rules: 'required|min_length[3]',
  },
  {
    name: 'email',
    rules: 'required|valid_email',
  },
  {
    name: 'message',
    rules: 'required|min_length[6]',
  },
];

new FormValidator(
  'contact',
  fields,
  function(errors, event) {
    if (errors.length > 0) {
      // Show the errors
      event.preventDefault();
      for (let i = 0; i < errors.length; i++) {
        let helpElem = document.createElement('p');
        helpElem.className = 'help is-danger has-text-left';
        errors[i].element.closest('.field').append(helpElem);
        helpElem.innerHTML = errors[i].message;
      }
      return false;
    } else {
      // Show success
      const form = document.forms.contact;
      form.action = 'https://formspree.io/kevingsx@gmail.com'
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
