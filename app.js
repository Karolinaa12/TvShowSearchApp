const form = document.querySelector(`#SearchForm`);
const searchResultsContainer = document.querySelector(`#searchResults`);

form.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  //console.dir(form);
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  makeImages(res.data);
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement(`img`);
      img.src = result.show.image.medium;
      searchResultsContainer.append(img);
      img.classList.add(`img-fluid`);
    }
  }
};
