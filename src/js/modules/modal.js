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

    modal.id = this.id;
    modal.className = 'modal is-active';
    modalBackground.className = 'modal-background';
    this.html.classList.add('is-clipped');

    this.modal = document.getElementById(this.id);
  }

  addImage() {
    let modalContent = document.createElement('div');
    let closeButton = document.createElement('button');
    let box = document.createElement('div');
    let imageContent = document.createElement('figure');
    let image = document.createElement('img');

    this.modal.append(modalContent);
    this.modal.append(closeButton);
    modalContent.append(box);
    box.append(imageContent);
    imageContent.append(image);

    modalContent.className = 'modal-content';
    closeButton.className = 'modal-close is-large';
    closeButton.setAttribute('role', 'button');
    closeButton.setAttribute('aria-label', 'close');
    box.className = 'box';
    imageContent.className = 'image is-16by9';

    for (let i = 0; i < this.data.length; i++) {
      if (this.id === this.data[i].id) {
        image.setAttribute('src', this.data[i].src);

        if ('srcset' in this.data[i] && 'sizes' in this.data[i]) {
          image.setAttribute('srcset', this.data[i].srcset);
          image.setAttribute('sizes', this.data[i].sizes);
        }

        image.setAttribute('alt', this.data[i].alt);
      }
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
    let techTags = document.createElement('div');
    let cardImageContent = document.createElement('figure');
    let cardImage = document.createElement('img');
    let cardFoot = document.createElement('footer');
    let cardLink = document.createElement('a');

    this.modal.append(card);
    card.append(cardHead);
    cardHead.append(cardTitle);
    cardHead.append(closeButton);
    card.append(cardBody);
    cardBody.append(cardContent);
    cardContent.append(cardDescription);
    cardContent.append(techTags);
    cardBody.append(cardImageContent);
    cardImageContent.append(cardImage);
    card.append(cardFoot);
    cardFoot.append(cardLink);

    card.className = 'modal-card';
    cardHead.className = 'modal-card-head';
    cardTitle.className = 'modal-card-title has-text-dark';

    closeButton.className = 'delete';
    closeButton.setAttribute('role', 'button');
    closeButton.setAttribute('aria-label', 'close');

    cardBody.className = 'modal-card-body';
    cardContent.className = 'content';
    cardDescription.className = 'title has-text-dark';
    techTags.className = 'tags';
    cardImageContent.className = 'image is-9by16 has-text-dark';

    cardFoot.className = 'modal-card-foot';
    cardLink.className = 'button is-primary';
    cardLink.innerHTML = 'View';

    for (let i = 0; i < this.data.length; i++) {
      if (this.id === this.data[i].id) {
        cardTitle.innerHTML = this.data[i].title;
        cardDescription.innerHTML = this.data[i].description;

        let techArr = this.data[i].technologies;
        for (let j = 0; j < techArr.length; j++) {
          let techTag = document.createElement('span');
          techTags.append(techTag);

          techTag.innerHTML = techArr[j];
          techTag.className = 'tag is-dark';
        }

        cardImage.setAttribute('src', this.data[i].image.src);

        if ('srcset' in this.data[i].image && 'sizes' in this.data[i].image) {
          cardImage.setAttribute('srcset', this.data[i].image.srcset);
          cardImage.setAttribute('sizes', this.data[i].image.sizes);
        }

        cardImage.setAttribute('alt', this.data[i].image.alt);

        cardLink.setAttribute('href', this.data[i].link);
      }
    }

    this.closeButton = document.querySelector('.delete');
  }

  close() {
    let modal = this.modal;
    let html = this.html;

    this.closeButton.addEventListener('click', function() {
      modal.remove();
      html.classList.remove('is-clipped');
    });
  }
}

export {Modal};
