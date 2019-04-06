        let baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = "http://image.tmdb.org/t/p/";
        let APIKEY = '32bb73effdd6a18cf39e0cfbe164c2c1';
        let dataPage = 1;
        let popularMovies = function () {
            let url = ''.concat(baseURL, 'movie/popular?api_key=', APIKEY,'&page=1');
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
//                let divs = document.getElementsByTagName('div');
                let imgs  = document.getElementsByClassName('popImage');
//                let over = document.getElementsByClassName('over')
                var res = data.results;
            for (var i = 0; i < res.length; i++) {
             
            }
             
            for(var z = 0; z < imgs.length; z++){
                imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
//                console.log(imgs[z])
            }
                            
                //work with results array...
            })
//            document.addEventListener('DOMContentLoaded');
            
            
        }
        popularMovies();

        let upcoming = function () {
            let url = ''.concat(baseURL, 'movie/upcoming?api_key=', APIKEY,'&page=1');
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let imgs  = document.getElementsByClassName('itemCar');

                var res = data.results;
            for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
//               console.log(res[i])
             
            }
             
            for(var z = 0; z < imgs.length; z++){
                imgs[z].src = ''.concat(baseImageURL,'original',res[z].backdrop_path);
//                console.log(imgs[z])
            }

                //work with results array...
            })
//            document.addEventListener('DOMContentLoaded');
            
        } 
        upcoming();

    let topRated = function () {

        nextPage = function (){
            if(dataPage >= 1){
                     dataPage += 1
                     console.log('next',dataPage);
            
            let url = ''.concat(baseURL, 'movie/top_rated?api_key=', APIKEY,'&page=', dataPage);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let imgs  = document.getElementsByClassName('top');
                
                var res = data.results;
            for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
//               console.log(res[i])
             
            }
             
            for(var z = 0; z < imgs.length; z++){
                imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
//                console.log(imgs[z])
            }

                //work with results array...
            })
//            document.addEventListener('DOMContentLoaded');
            
            }
        }
        previousPage = function() {
            
                if(dataPage >= 1){
                    dataPage -= 1
                    console.log('prev',dataPage)
        
        let url = ''.concat(baseURL, 'movie/top_rated?api_key=', APIKEY,'&page=', dataPage);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let imgs  = document.getElementsByClassName('top');
                
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
               console.log(res[i])
                }
             
            for(var z = 0; z < imgs.length; z++){
                imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
//                console.log(imgs[z])
                }
            })
//            document.addEventListener('DOMContentLoaded');
        }
        }
    }
        topRated();

    