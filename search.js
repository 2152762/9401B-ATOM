let baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
let basicUrl = 'https://api.themoviedb.org/3/movie/';
const query = '&query='
let APIKEY = '32bb73effdd6a18cf39e0cfbe164c2c1';
const searchurl = baseURL + APIKEY + query;
const form = document.querySelector('form');
var input = document.querySelector('#keyword');
form.addEventListener('submit', submitted);
const resultSection = document.querySelector('#result');
const detailSection = document.querySelector('#detail');

let movieId = sessionStorage.getItem("movieId");


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
<div class="col-sm-2">  
<a onclick="movieSelected('${movie.id}')" href="#">
<img src="http://image.tmdb.org/t/p/w185${movie.poster_path}" class="card-img-top"></img>
 <h5 class="card-title text-center">${movie.original_title}</h5>
</a>
</div>
`;
    });
    resultSection.innerHTML = html;
}

/*function movieSelected(id){
	sessionStorage.setItem('movieId', id);
	window.location='movieDetails.html';
	return false;
}

function movieDetail(response){
	const url1 = `${basicUrl}${movieID}?api_key=${APIKEY}`;
	console.log(url1);
    fetch(url1)
    .then(result => result.json())
    .then(data => getMovie(data.results));
}

function getMovie(response){
	axios.get("https://api.themoviedb.org/3/movie/"+movieID+'?api_key='+APIKEY);
	detailSection.innerHTML = '';
    let html = '';
	let movie = response.data.results;
    for(let i = 0; i < movie.length; i++){
					html += `
					<div class="card">
						<div class="overlay">
						<div class="movie">
							<h2>${movie[i].title}</h2>
								<p id="p_rating"><strong>Rating:</strong> <span>${movie[i].vote_average} / 10  <i class="material-icons star">star_rate</i></span> </p>
								<p><strong>Release date:</strong> <span>${movie[i].release_date} <i class="material-icons date">date_range</i> </span></p>
								<a onclick="movieSelected('${movie[i].id}')" href="#">Details</a>
						</div>
						</div>
						<div class="card_img">
							<img src="http://image.tmdb.org/t/p/w400/${movie[i].poster_path}" onerror="this.onerror=null;this.src='../images/imageNotFound.png';">
						</div>
					</div>
					`
				}
    detailSection.innerHTML = html;
	
}*/
	
function getMovie(){
	
	
	const movieInfo = `${basicUrl}${movieId}?${APIKEY}`;
	Promise.all([movieInfo])
		.then( ([movieInfoResponse]) =>{
			const movie = movieInfoResponse.data;
			const genres = movieInfoResponse.genres;

			//Grab the popularity parameter from the data and rounds it to a whole number%.
			popularity = movieInfoResponse.popularity;
			popularity = Math.floor(popularity)
			
			let output = `
			<div class="moviePage">
			<div class="poster"><img src="http://image.tmdb.org/t/p/w300/${movie.poster_path}"></div>
			<div class="info">
				<h2>${movie.title}</h2>
				<ul>`;
					
					output += `</li>
					<li><strong>Genres:</strong> `;
					for(let i = 0; i < genres.length; i++){
						if ( i != genres.length -1){
							output += `${genres[i].name}, `;
						} else {
							output += `${genres[i].name}.`;
						}
					}
					output += `</li>
					<li><strong>Tagline:</strong> ${movie.tagline} </li>
					<li><strong>Release Date:</strong> ${movie.release_date}</li>
					<li><strong>Runtime:</strong> ${movie.runtime} (min)</li>
					<li><strong>Rating:</strong> ${movie.vote_average} / 10 <span id="smallText">(${movie.vote_count} votes)</span></li>
					<li><strong>Revenue:</strong> ${revenue}</li>
					<li><strong>Status:</strong> ${movie.status}</li>
					<li><strong>Production companies:</strong> ${movie.production_companies[0].name}</li>
				</ul>
				<div class="buttons">
					<a href="https://www.imdb.com/title/${movie.imdb_id}" target="_blank"> IMDB Link </a>
					<a id="addToWatchList" onclick="addToList('${movie.id}')"> Add to watchlist </a>
					<a class="twitter-share-button twitter" onclick="tweet('${movie.title}')"></a>
					<a onclick="goBack()"> Go back </a>
				</div>
			</div>
		</div>
		<div class="plot">
			<h3>Plot</h3>
			<p>${movie.overview}</p>
		</div>`;

		//Targets the "movie" element and appends the output to it.
		const info = document.getElementById("movie");
		info.innerHTML = output;

		})
		//If there is an error, show this.
		/*.catch ((err)=>{
			let output = "";
			output += `<h1 id="errorTitle">SORRY !</h1>
			<p id="errorText">We could not provide informations about this movie at this particular moment. Be sure to come back again. Thank you for your understanding. </p>
			<div class="buttons errorBack">
				<a onclick="goBack()"> Go back </a>
			</div>`;
			// Hide elements if theres an error.
			let info = document.getElementById("detail");
			info.innerHTML = output;
			document.getElementById("rec_title");
			document.querySelector(".page");
			document.getElementById("recommended");
			document.getElementById("trailer");
			document.getElementById("trailer_title");
			document.getElementById("rec_title");
		});*/

}

//Go back button function.
function goBack(){
	window.close();
}

// Take user to details page.
function movieSelected(id){
	sessionStorage.setItem("movieId", id);
	location.replace("movieDetails.html");
	return false;
}