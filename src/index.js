import { common } from './js/common';
import { instruments } from './js/helpers/instruments';
import { createMarkup } from './js/helpers/createMarkup';
import { createModal } from './js/helpers/createModal';
import { findProduct } from './js/helpers/findProduct';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(instruments, list);
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

  if (e.target.classList.contains('js-basket')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));

    //   ?Написано через функцію деструктаризирувати але вона важча для розуміння
    // const product = findProduct(e.target);
  }

  if (e.target.classList.contains('js-favorite')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    //   Робимо що вибрані товари не повторювались
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));

    //   ?Написано через функцію деструктаризирувати але вона важча для розуміння
    // const product = findProduct(e.target);
  }
}
