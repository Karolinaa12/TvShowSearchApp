const form = document.querySelector(`#SearchForm`);
const searchResultsContainer = document.querySelector(`#searchResults`);

form.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  searchResultsContainer.innerHTML = "";
  //console.dir(form);
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement(`img`);
      img.src = result.show.image.medium;
      //searchResultsContainer.append(img);
      const div = document.createElement(`div`);
      searchResultsContainer.append(div);
      div.classList.add(`col`);
      div.classList.add(`text-center`);

      const divCard = document.createElement(`div`);
      div.append(divCard);
      divCard.classList.add(`card`);
      divCard.classList.add(`text-bg-dark`);
      divCard.append(img);
      img.classList.add(`card-img-top`);

      const divBody = document.createElement(`div`);
      divBody.classList.add(`card-body`);
      divCard.append(divBody);

      const title = document.createElement(`h5`);
      title.classList.add(`card-title`);
      title.innerText = result.show.name;
      divBody.append(title);

      //img.classList.add(`img-fluid`);
      //console.log(result.show.name);
      //const filmInfo = document.createElement(`span`);
      //filmInfo.innerText = result.show.name;
      //filmInfo.classList.add(`info-display`);
      //searchResultsContainer.append(filmInfo);
    }
  }
};
