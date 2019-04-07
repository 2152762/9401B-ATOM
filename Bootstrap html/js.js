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
                let title = document.getElementsByClassName('popTitle');
            var res = data.results;
            for (var i = 0; i < res.length; i++) {
             console.log(data.results)
            }
             
                for(var z = 0; z < imgs.length; z++){
                    imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
    //                console.log(imgs[z])
                }
            
                    for(var x = 0; x < title.length; x++){
                         title[x].innerHTML = ''.concat(res[x].title)   
                    }
            })
//            document.addEventListener('DOMContentLoaded');
            
            
        }
    nextPagePop = function (){
        if(dataPage >= 1 && dataPage < 4){
                 dataPage += 1
                     console.log('next',dataPage);
            
            let url = ''.concat(baseURL, 'movie/popular?api_key=', APIKEY,'&page=', dataPage);
                    fetch(url)
                    .then(result=>result.json())
                    .then((data)=>{
                        let imgs  = document.getElementsByClassName('popImage');
                        let title = document.getElementsByClassName('popTitle');
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                    // get the size of the inner array
    //               console.log(res[i])

                }
             
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
        //                console.log(imgs[z])
                    }
                        for(var x = 0; x < title.length; x++){
                         title[x].innerHTML = ''.concat(res[x].title)   
                        }

                //work with results array...
            })
//            document.addEventListener('DOMContentLoaded');
            
            }
    }
    previousPagePop = function() {
            
            if(dataPage >= 1 && dataPage !== 1){
                dataPage -= 1
                console.log('prev',dataPage)
        
                let url = ''.concat(baseURL, 'movie/popular?api_key=', APIKEY,'&page=', dataPage);
                fetch(url)
                .then(result=>result.json())
                .then((data)=>{
                    let imgs  = document.getElementsByClassName('popImage');
                    let title = document.getElementsByClassName('popTitle');
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                    // get the size of the inner array
                   console.log(res[i])
                }
             
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
        //                console.log(imgs[z])
                    }
                         for(var x = 0; x < title.length; x++){
                         title[x].innerHTML = ''.concat(res[x].title)   
                        }
            
                })
//            document.addEventListener('DOMContentLoaded');
            }
    }
        popularMovies();

        let upcoming = function () {
            let url = ''.concat(baseURL, 'movie/upcoming?api_key=', APIKEY,'&page=1');
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let imgs  = document.getElementsByClassName('itemCar');
                let title = document.getElementsByClassName('upTitle')
            var res = data.results;
            for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
//               console.log(res[i])
             
            }
                 for(var x = 0; x < title.length; x++){
                         title[x].innerHTML = ''.concat(res[x].title)   
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
        let url = ''.concat(baseURL, 'movie/top_rated?api_key=', APIKEY,'&page=', dataPage);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let imgs  = document.getElementsByClassName('top');
                let title = document.getElementsByClassName('topTitle')
            var res = data.results;
            for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
//               console.log(res[i])
             
            }
                 for(var x = 0; x < title.length; x++){
                        title[x].innerHTML = ''.concat(res[x].title)   
                 }
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);

                    }

                //work with results array...
            })
            
            }
        

        nextPage = function (){
            if(dataPage >= 1 && dataPage < 4){
                     dataPage += 1
                     console.log('next',dataPage);
            
                let url = ''.concat(baseURL, 'movie/top_rated?api_key=', APIKEY,'&page=', dataPage);
                    fetch(url)
                    .then(result=>result.json())
                    .then((data)=>{
                    let imgs  = document.getElementsByClassName('top');
                    let title = document.getElementsByClassName('topTitle')
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                    // get the size of the inner array
                }
                     for(var x = 0; x < title.length; x++){
                        title[x].innerHTML = ''.concat(res[x].title)   
                    }
             
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
                    }

                //work with results array...
            })
            
            }
        }
        previousPage = function() {
            
                if(dataPage >= 1 && dataPage !== 1){
                    dataPage -= 1
                    console.log('prev',dataPage)
        
                let url = ''.concat(baseURL, 'movie/top_rated?api_key=', APIKEY,'&page=', dataPage);
                fetch(url)
                .then(result=>result.json())
                .then((data)=>{
                    let imgs  = document.getElementsByClassName('top');
                    let title = document.getElementsByClassName('topTitle')
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                    // get the size of the inner array
                   console.log(res[i])
                }
                     for(var x = 0; x < title.length; x++){
                         title[x].innerHTML = ''.concat(res[x].title)   
                     }
             
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);

                    }
            })
                    
            }
        }
    
        topRated();

    let nowPlaying = function () {
        let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY,'&page=', dataPage);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                let imgs  = document.getElementsByClassName('now');
                let title = document.getElementsByClassName('nowTitle')
            var res = data.results;
            for (var i = 0; i < res.length; i++) {
                // get the size of the inner array
//               console.log(res[i])
             
            }
                 for(var x = 0; x < title.length; x++){
                        title[x].innerHTML = ''.concat(res[x].title)   
                 }
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);

                    }

                //work with results array...
            })
            
            }
        nextPageNow = function (){
            if(dataPage >= 1 && dataPage < 4){
                     dataPage += 1
                     console.log('next',dataPage);
            
                let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY,'&page=', dataPage);
                    fetch(url)
                    .then(result=>result.json())
                    .then((data)=>{
                    let imgs  = document.getElementsByClassName('now');
                    let title = document.getElementsByClassName('nowTitle')
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                    // get the size of the inner array
                }
                     for(var x = 0; x < title.length; x++){
                        title[x].innerHTML = ''.concat(res[x].title)   
                    }
             
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);
                    }

                //work with results array...
            })
            
            }
        }
        previousPageLatest = function() {
            
                if(dataPage >= 1 && dataPage !== 1){
                    dataPage -= 1
                    console.log('prev',dataPage)
        
                let url = ''.concat(baseURL, 'movie/now_playing?api_key=', APIKEY,'&page=', dataPage);
                fetch(url)
                .then(result=>result.json())
                .then((data)=>{
                    let imgs  = document.getElementsByClassName('now');
                    let title = document.getElementsByClassName('nowTitle')
                var res = data.results;
                for (var i = 0; i < res.length; i++) {
                    // get the size of the inner array
                   console.log(res[i])
                }
                     for(var x = 0; x < title.length; x++){
                         title[x].innerHTML = ''.concat(res[x].title)   
                     }
             
                    for(var z = 0; z < imgs.length; z++){
                        imgs[z].src = ''.concat(baseImageURL,'original',res[z].poster_path);

                    }
            })
                    
            }
        }
    nowPlaying();