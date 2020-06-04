// file for each function to respect the separation of concern
// my file that is about movies: my concern is about fetching movies and appending it to the dom
// a concern === one objective

const toJson = response => response.json();

const insertMovie = (data) => {
  const resultsList = document.getElementById('results')
  resultsList.innerHTML = ""; //replacing the html of ul tag by nothing
  data.Search.forEach((babyObject) => {
    const titleMovie = babyObject.Title;
    const imgMovie = babyObject.Poster;
    const yearMovie = babyObject.Year;

    const movie = `<li class="list-inline-item">
    <img src="${imgMovie}" with="20" alt="">
    <h4>${titleMovie}</h4>
    <p>${yearMovie}</p>
    </li>`
    resultsList.insertAdjacentHTML('beforeend', movie)
  });
}

const fetchMovies = (keyword) => {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
   .then(toJson) //toJson is a callback function
   .then(insertMovie); //insertMovie is also a callbackFunction
}

const updateListMovies = (event) => {
  event.preventDefault(); //prevent default behavior
  const userInput = document.querySelector("#keyword").value;
  fetchMovies(userInput)
}

// export { functionName } //making this function accessible/public
export { updateListMovies };
