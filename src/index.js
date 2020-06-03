console.log("Hello from src/index.js!");

// FIRST PART OF THE LECTURE: <!-- Button exercise recap on DOM & EVENTS -->
 // When the user click on the button, we should change the text to 'good morning' and disable the button to be cliked.

// const button = document.querySelector("#click-me")

// // element.addEventListener(event_type, callbackFunction)
// button.addEventListener('click', (event) => {
//   console.log(event); //print the event type to verify it
//   console.log(event.currentTarget); //checking my target button
//   event.currentTarget.innerText = "heheh guys in da place for js";
// });


// // refactoring our code
// const button = document.querySelector("#click-me")


// const callbackFunctionBtn = (event) => {
//   console.log(event); //print the event type to verify it
//   console.log(event.currentTarget); //checking my target button
//   event.currentTarget.innerText = "heheh guys in da place for js";
// }

// // element.addEventListener(event_type, callbackFunction)
// button.addEventListener('click', callbackFunctionBtn);
// element.addEventListener(event_type, function executed when event is performed by the user)

// SECOND PART OF THE LECTURE: HTTP & AJAX
  // GET REQUEST
  //   fetch(url).then((response) => {
  //   // Do something once HTTP response is received
  // });

  // FIRST STEP: PLAYING WITH THE DATA
  // fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7") // open an url and getting back a respsonse
  // // .then(callbackFunction)
  // .then(response => response.json()) //i transform my response into a json object (object from js)
  // .then((data) => {
  //   // console.log(data.Search); //Search is the key from my big Object I got my back from my apo
  //   data.Search.forEach((babyObject) => {
  //     console.log(babyObject);
  //   })
  // });


  // fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7") // open an url and getting back a respsonse
  // // .then(callbackFunction)
  // .then(response => response.json()) //i transform my response into a json object (object from js)
  // .then((data) => {
  //   // console.log(data.Search); //Search is the key from my big Object I got my back from my apo
  //   data.Search.forEach((babyObject) => {
  //     // console.log(babyObject);
  //     const titleMovie = babyObject.Title;
  //     const imgMovie = babyObject.Poster;
  //     const yearMovie = babyObject.Year;

  //     // 1.create the movie variable with some nice html and css around
  //     const movie = `<li class="list-inline-item">
  //     <h2>${titleMovie}</h2>
  //     <p>${yearMovie}</p>
  //     <img src="${imgMovie}" alt="">
  //     </li>`
  //     // 2. insert/append it to the DOM
  //     // elementFromTheDOM.insertAdjacentHTML(position, content)
  //     const resultsList = document.getElementById('results')
  //     resultsList.insertAdjacentHTML('beforeend', movie)
  //   })
  // });


// THIRD STEP: REFACTORING
// const toJson = response => response.json(); // function stored into a variable claled toJson

//   const insertMovie = (data) => {
//     data.Search.forEach((babyObject) => {
//       const titleMovie = babyObject.Title;
//       const imgMovie = babyObject.Poster;
//       const yearMovie = babyObject.Year;

//       const movie = `<li class="list-inline-item">
//       <h2>${titleMovie}</h2>
//       <p>${yearMovie}</p>
//       <img src="${imgMovie}" alt="">
//       </li>`
//       const resultsList = document.getElementById('results')
//       resultsList.insertAdjacentHTML('beforeend', movie)
//     });
//   }

//   fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7") // open an url and getting back a respsonse
//   .then(toJson) //toJson is a callback function
//   .then(insertMovie); //insertMovie is also a callbackFunction



// LAST STEP : MAKE IT DYNAMIC WITH A FORM, AS A USER, I CAN SEARCH FOR ANY MOVIE AND GET BACK THE RESULTS WITH AN AJAX REQUEST

const toJson = response => response.json();

const insertMovie = (data) => {
  const resultsList = document.getElementById('results')
  resultsList.innerHTML = ""; //replacing the html of ul tag by nothing
  data.Search.forEach((babyObject) => {
    const titleMovie = babyObject.Title;
    const imgMovie = babyObject.Poster;
    const yearMovie = babyObject.Year;

    const movie = `<li class="list-inline-item">
    <h2>${titleMovie}</h2>
    <p>${yearMovie}</p>
    <img src="${imgMovie}" alt="">
    </li>`
    resultsList.insertAdjacentHTML('beforeend', movie)
  });
}

const apiCall = (keyword) => {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
   .then(toJson) //toJson is a callback function
   .then(insertMovie); //insertMovie is also a callbackFunction
}

const myForm = document.getElementById('search-movies')

myForm.addEventListener('submit', (event) => {
  const userInput = document.querySelector("#keyword").value;
  apiCall(userInput)
});



// POST REQUEST
  // difference with GET is the second argument, the boyd of information we're sending !

  // { method: "POST", body: JSON.stringify({ query: event.currentTarget.value })}

  // const searchAlgoliaPlaces = (event) => {
  //   fetch("https://places-dsn.algolia.net/1/places/query", {
  //     method: "POST",
  //     body: JSON.stringify({ query: event.currentTarget.value })
  //   })
  //     .then(response => response.json())
  //     .then((data) => {
  //       console.log(data.hits); // Look at local_names.default
  //     });
  // };

  // const input = document.querySelector("#search");
  // input.addEventListener("keyup", searchAlgoliaPlaces);




































