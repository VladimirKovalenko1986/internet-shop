import { instruments } from './instruments';

//!!! Більш легше для розуміння функція
function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}

//!!! Функція деструктаризації
// function findProduct(elem) {
//   const productId = Number(elem.closest('.js-card').dataset.id);
//   return instruments.find(({ id }) => id === productId);
// }

export { findProduct };
