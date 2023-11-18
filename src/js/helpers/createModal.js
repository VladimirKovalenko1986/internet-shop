import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createModal(product) {
  const option = {
    handler: null,
    onShow(instance) {
      this.handler = closeModal.bind(instance);
      document.addEventListener('keydown', this.handler);
    },
    onClose() {
      document.removeEventListener('keydown', this.handler);
    },
  };
  const instance = basicLightbox.create(
    `
<div class="modal">
  <img src="${product.img}" alt="${product.name}" />
  <h2>${product.name}</h2>
  <h3>Ціна: ${product.price} грн.</h3>
  <p>${product.description}</p>
  <div>
    <button class="js-favorite">Add to favorite</button>
    <button class="js-basket">Add to basket</button>
  </div>
</div>
`,
    option
  );
  instance.show();
}

function closeModal(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}

export { createModal };
