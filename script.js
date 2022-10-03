 // fetching information from tmdb and themoviedb.org
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'   
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
// Event Listeners
const main = document.getElementById('main')  
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)
//  Event Listeners for loading the overview page Whenever the overview page is loaded.
async function getMovies(url) {   // async function that will be called when the user clicks on the button and the overview page will be loaded. This function is called when the user clicks on the overview page and the overview page is loaded.
    const res = await fetch(url)     // await function 
    const data = await res.json()  // await function
//  Event Listeners for the overview page loading events
    showMovies(data.results) 
}
// Event Listeners for the overview page loading events for the overview pages are loaded.
function showMovies(movies) {  
    main.innerHTML = ''  
// foreach the movies in the results array we display them in the screen reader window and the overview pages are loaded.
    movies.forEach((movie) => { //  Event Listeners
        const { title, poster_path, vote_average, overview } = movie   

        const movieEl = document.createElement('div') 
        movieEl.classList.add('movie') // Add the title to the elements element for the overview pages.
        // Add the poster_path to the elements element for the overview pages.
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}"> 
            <div class="movie-info"> 
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span> 
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}
 //  Event Listeners for loading the overview page Whenever the overview page is loaded.
function getClassByRate(vote) { //  Event Listeners
    if(vote >= 8) { //  Event Listeners
        return 'green' 
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
//  Event Listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})