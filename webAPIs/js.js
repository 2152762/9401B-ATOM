        let baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = "http://image.tmdb.org/t/p/";
        let APIKEY = '32bb73effdd6a18cf39e0cfbe164c2c1';
//        let image = "http://image.tmdb.org/t/p/";
        let getConfig = function () {
            
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
            fetch(url)
            .then((result)=>{
                return result.json();
            })
            .then((data)=>{
            var keyword = document.getElementById("keyword").value;
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
//                console.log('config:', data);
//                console.log('config fetched');
//                console.log('keyword:', keyword)
//                console.log(data.poster_path)
                runSearch(keyword)
            })
            .catch(function(err){
                alert(err);
            });
        }
    
        
        
        let runSearch = function (keyword) {
            let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                //process the returned data  
                document.getElementById('output').innerHTML = 
                   data.results[0];
               var arr = data.results[0].poster_path
               console.log(arr)
                
                //work with results array...
            })
//            document.addEventListener('DOMContentLoaded');
        }
//        getConfig();