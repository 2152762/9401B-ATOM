let baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
let basicUrl = 'https://api.themoviedb.org/3/movie/';
const query = '&query='
let APIKEY = '32bb73effdd6a18cf39e0cfbe164c2c1';
const searchurl = baseURL + APIKEY + query;
const form = document.querySelector('form');
var input = document.querySelector('#keyword');
form.addEventListener('submit', submitted);
const resultSection = document.querySelector('#result');
const detailSection = document.querySelector('#movie');
document.get


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
}

function showResults(response){
    resultSection.innerHTML = '';
    let html = '';
    response.forEach(movie => {
        html += `
<div class="mt-2 col-sm-2">  
<a onclick="movieSelected('${movie.id}')" href="#">
<img src="http://image.tmdb.org/t/p/w185${movie.poster_path}" class="card-img-top"></img>
 <h5 class="card-title text-center">${movie.original_title}</h5>
</a>
</div>
`;
    });
    resultSection.innerHTML = html;
}

// Take user to details page.
function movieSelected(id){
	sessionStorage.setItem('movieId', id);
	window.location = 'movieDetails.html';
	return false;
}


function getMovie(){
	let movieId = sessionStorage.getItem('movieId');
	detailSection.innerHTML = '';
    	let html = '';
	//const movieInfo = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + APIKEY;
	const movieInfo = axios.get("https://api.themoviedb.org/3/movie/"+movieId+'?api_key='+APIKEY+'&language=en-US');
	const trailer = axios.get("https://api.themoviedb.org/3/movie/"+movieId+'/videos?api_key='+APIKEY+'&language=en-US')
	Promise.all([movieInfo, trailer])
		.then( ([movieInfoResponse, movieTrailer]) =>{
			let movie = movieInfoResponse.data;
			let trailer = movieTrailer.data.results;
		
			let min = 0;
				// -1 so it takes into account if theres only 1 item in the trailer length( at position 0).
			let max = trailer.length - 1;
			min = Math.ceil(min);
			max = Math.floor(max);
			let trailerNumber = Math.floor(Math.random() * (max-min +1)) + min;

			//Grab the popularity parameter from the data and rounds it to a whole number%.
			popularity = movieInfoResponse.popularity;
			popularity = Math.floor(popularity)
			
			html += `
		<div class="row">

			<div class="col-md-4 mt-2"> 
				<img src="http://image.tmdb.org/t/p/w300${movie.poster_path}"></img>
			<div class="info mt-2">
				<ul>
					<li><strong>Release Date:</strong> ${movie.release_date}</li>
					<li><strong>Rating:</strong> ${movie.vote_average} / 10 <span id="smallText">(${movie.vote_count} votes)</span></li>
					<li><strong>Runtime:</strong> ${movie.runtime} (min)</li>
				</ul>
			</div>
			</div>

			<div class="video col-md-8 mt-2">
				<h2 style="background-color: #b3c6ff">${movie.title}</h2>
			<div class="trailer">
				<iframe width="620" height="400" src="https://www.youtube.com/embed/${trailer[trailerNumber].key}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</di>
			<div class="plot">
				<h3>Plot</h3>
				<p>${movie.overview}</p>
			</div>
			</div>		
		</div>`;

		//Targets the "movie" element and appends the output to it.
		detailSection.innerHTML = html;

		});
		
}

