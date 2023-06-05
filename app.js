const form = document.querySelector(`#SearchForm`);

form.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  //console.dir(form);
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  console.log(res.data);
  //for (let i = 0; i < res.length; i++) {
  //console.log(res.data[i].show.name);
  //}
});
