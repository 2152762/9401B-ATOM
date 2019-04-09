let baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
let baseImage = 'http://image.tmdb.org/t/p/w185';
const query = '&query='
let APIKEY = '32bb73effdd6a18cf39e0cfbe164c2c1';
const searchurl = baseURL + APIKEY + query;
const form = document.querySelector('form');
var input = document.querySelector('#keyword');
//form.addEventListener('submit', submitted);
const resultSection = document.querySelector('#result');

function submitted(Event){
    Event.preventDefault();
    const searchTerm = input.value;
    getResults(searchTerm);
}

function getResults(searchTerm){
    const url = `${searchurl}${searchTerm}`;
    console.log(url);
    fetch(url)
    .then(result => result.json())
    .then(data => showResults(data.results));
//    showResults(response);
}

function showResults(response){
//    resultSection.innerHTML = '';
    let html = '';
    response.forEach(movie => {
//        html += `
//<div class="col-sm-2">  
//<img src="http://image.tmdb.org/t/p/w185${movie.poster_path}" class="card-img-top" alt="${movie.original_title}">
//  <div class="card-body">
//    <h5 class="card-title">${movie.original_title}</h5>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
//</div>
//`;
        document.getElementById('img').src =  ''.concat(baseImage, movie.poster_path);       
    });
    resultSection.innerHTML = html;
}