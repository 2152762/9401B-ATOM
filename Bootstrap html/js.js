        let baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = "http://image.tmdb.org/t/p/";
        let APIKEY = '32bb73effdd6a18cf39e0cfbe164c2c1';
//        let image = "http://image.tmdb.org/t/p/";
      
//        let getConfig = function () {
//            
//            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
//            fetch(url)
//            .then((result)=>{
//                return result.json();
//            })
//            .then((data)=>{
//            var keyword = document.getElementById("keyword").value;
//                baseImageURL = data.images.secure_base_url;
//                configData = data.images;
////                console.log('config:', data);
////                console.log('config fetched');
////                console.log('keyword:', keyword)
////                console.log(data.poster_path)
//                runSearch(keyword)
//            })
//            .catch(function(err){
//                alert(err);
//            });
//        }
    
        
        
        let popularMovies = function () {
            let url = ''.concat(baseURL, 'movie/popular?api_key=', APIKEY,'&page=1');
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
//                let divs = document.getElementsByTagName('div');
                let imgs  = document.getElementsByClassName('popImage');
                let over = document.getElementsByClassName('over')
                var res = data.results;
            for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
               console.log(res[i])
             
            }
             
            for (var x = 0; x < over.length; x++){
                over[x].innerHTML = res[x].overview;
                
            }
            for(var z = 0; z < imgs.length; z++){
                imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
                console.log(imgs[z])
            }
                
            
            
                
                
                //work with results array...
            })
//            document.addEventListener('DOMContentLoaded');
            
        }
        popularMovies();

//        let nowPlaying = function () {
//            let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY,'&page=1');
//            fetch(url)
//            .then(result=>result.json())
//            .then((data)=>{
////                let divs = document.getElementsByTagName('div');
//                let imgs  = document.getElementsByClassName('item');
////                let over = document.getElementsByClassName('item')
//                var res = data.results;
//            for (var i = 0; i < res.length; i++) {
//                // get the size of the inner array
//               console.log(res[i])
//             
//            }
//             
//            for(var z = 0; z < imgs.length; z++){
//                imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
//                console.log(imgs[z])
//            }
//                
//            
//            
//                
//                
//                //work with results array...
//            })
////            document.addEventListener('DOMContentLoaded');
//            
//        }
//        nowPlaying();