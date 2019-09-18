class Modal {
  constructor(id, sibling, data = []) {
    this.id = id;
    this.sibling = sibling;
    this.data = data;
    this.closeButton = null;
    this.modal = null;
    this.html = document.documentElement;
  }

  create() {
    let modal = document.createElement('div');
    let modalBackground = document.createElement('div');

    this.sibling.after(modal);
    modal.append(modalBackground);

    modal.setAttribute('id', this.id);
    modal.className = 'modal is-active';
    modalBackground.className = 'modal-background';
    this.html.classList.add('is-clipped');

    this.modal = document.getElementById(this.id);
  }

  addImage() {
    let modalContent = document.createElement('div');
    let closeButton = document.createElement('button');
    let box = document.createElement('div');
    let figure = document.createElement('figure');
    let image = document.createElement('img');
    let data = this.data.find(item => item.id === this.id);

    this.modal.append(modalContent);
    this.modal.append(closeButton);
    modalContent.append(box);
    box.append(figure);
    figure.append(image);

    modalContent.className = 'modal-content';
    closeButton.className = 'modal-close is-large';
    closeButton.setAttribute('role', 'button');
    closeButton.setAttribute('aria-label', 'close');
    box.className = 'box';
    figure.className = 'image is-16by9';

    if ('src' in data && 'alt' in data) {
      image.setAttribute('src', data.src);
      image.setAttribute('alt', data.alt);
    }

    if ('srcset' in data && 'sizes' in data) {
      image.setAttribute('srcset', data.srcset);
      image.setAttribute('sizes', data.sizes);
    }

    this.closeButton = document.querySelector('.modal-close');
  }

  addCard() {
    let card = document.createElement('article');
    let cardHead = document.createElement('header');
    let cardTitle = document.createElement('h4');
    let closeButton = document.createElement('button');
    let cardBody = document.createElement('section');
    let cardContent = document.createElement('div');
    let cardDescription = document.createElement('h5');
    let tags = document.createElement('div');
    let cardfigure = document.createElement('figure');
    let cardImage = document.createElement('img');
    let cardFoot = document.createElement('footer');
    let cardLink = document.createElement('a');
    let data = this.data.find(item => item.id === this.id);
    let technologies = data ? data.technologies : [];
    let image = data ? data.image : {};

    this.modal.append(card);
    card.append(cardHead);
    cardHead.append(cardTitle);
    cardHead.append(closeButton);
    card.append(cardBody);
    cardBody.append(cardContent);
    cardContent.append(cardDescription);
    cardContent.append(tags);
    cardBody.append(cardfigure);
    cardfigure.append(cardImage);
    card.append(cardFoot);
    cardFoot.append(cardLink);

    card.className = 'modal-card';
    cardHead.className = 'modal-card-head';
    cardTitle.className = 'modal-card-title has-text-dark';
    cardTitle.innerHTML = data.title;

    closeButton.className = 'delete';
    closeButton.setAttribute('role', 'button');
    closeButton.setAttribute('aria-label', 'close');

    cardBody.className = 'modal-card-body';
    cardContent.className = 'content';
    cardDescription.className = 'title has-text-dark';
    cardDescription.innerHTML = data.description;
    tags.className = 'tags';
    cardfigure.className = 'image is-9by16 has-text-dark';

    cardFoot.className = 'modal-card-foot';
    cardLink.className = 'button is-primary';
    cardLink.innerHTML = 'View';
    cardLink.setAttribute('href', data.link);

    for (let i = 0; i < technologies.length; i++) {
      let tag = document.createElement('span');
      tags.append(tag);

      tag.innerHTML = technologies[i];
      tag.className = 'tag is-dark';
    }

    if ('src' in image && 'alt' in image) {
      cardImage.setAttribute('src', image.src);
      cardImage.setAttribute('alt', image.alt);
    }
    if ('srcset' in image && 'sizes' in image) {
      cardImage.setAttribute('srcset', image.srcset);
      cardImage.setAttribute('sizes', image.sizes);
    }

    this.closeButton = document.querySelector('.delete');
  }

  close() {
    this.closeButton.addEventListener('click', (event) => {
      this.modal.remove();
      this.html.classList.remove('is-clipped');
      event.preventDefault();
    });
  }
}

export default Modal;
