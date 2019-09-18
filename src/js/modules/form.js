const messages = {
  required: 'The %s field is required.',
  validEmail: 'The %s field must contain a valid email address.',
  minLength: 'The %s field must be at least %s characters in length.',
};

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

class Form {
  constructor(formName) {
    this.formName = formName;
    this.fields = this.makeFormFields();
    this.validations = {
      require: (value) => {
        return (value !== null && value !== '');
      },
      validEmail: (value) => {
        return value.match(emailRegex);
      },
      minLength: (value) => {
        return value.length > 3;
      },
    };
  }

  makeFormFields() {
    let inputs = Array.from(
      this.formName.querySelectorAll('input'));
    let textAreas = Array.from(
      this.formName.querySelectorAll('textarea'));
    let fieldsArr = inputs ? inputs.concat(textAreas) : [];
    return fieldsArr;
  }

  validate() {
    const inputs = this.fields;
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let value = input.value;
      let attr = input.dataset.validation;
      let rules = attr ? attr.split('|') : '';
      input.addEventListener('input', function() {
        for (let j = 0; j < rules.length; i++) {
          if (!this.validations[rules[j]](value)) {
            let errors = new UI;
            errors.showErrors();
            return false;
          }
        }
      });
    }
    return this;
  }

  send() {
    this.formName.addEventListener('submit', function(event) {
      let httpRequest = new XMLHttpRequest();
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Proceed with sending form
        if (httpRequest.status === 200) {
          // Send form
          httpRequest.open(
            'POST',
            'https://formspree.io/kevingsx@gmail.com',
          );
          httpRequest.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded',
          );
          httpRequest.send(this.FormData)
        } else {
          // Error with the request
          // TODO: Create error notification to display above the form
          let errorNotification = new UI;
          errorNotification.showFormErrors();
        }
      }
      event.preventDefault();
    });
  }
}

class UI {
  showFormErrors() {
    let paragraph = document.createElement('p');
    paragraph.className = 'help is-danger';

  }

  showSuccess() {
    const message = document.createElement('p');
    this.notification.append(message);
    this.notification.classList.add('is-success');
    message.innerHTML = 'Form Successfully Submitted!<br>I will be in touch with you shortly.'
  }
}

export {Form};
