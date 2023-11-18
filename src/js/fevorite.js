import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { findProduct } from './helpers/findProduct';
import { instruments } from './helpers/instruments';
import { createModal } from './helpers/createModal';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);

list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-info')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    createModal(product);

    //   ?Написано через функцію деструктаризирувати але вона важча для розуміння
    // const product = findProduct(e.target);
  }
}
