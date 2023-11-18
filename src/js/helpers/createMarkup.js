function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => ` 
    <li data-id = "${id}" class ="js-card">
        <img src="${img}" alt="${name}" />
        <h2>${name}</h2>
        <p><a href="#" class="js-info text-information">More information</a></p>
        <div>
          <button class ="js-favorite">Add to favorite</button>
          <button class ="js-basket">Add to basket</button>
        </div>
    </li>`
      )
      .join('');
  } else {
    markup = `<li class = "list-error">
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg" alt="404" class ="img-error"/>
    </li>`;
  }
  list.innerHTML = markup;
}

export { createMarkup };
