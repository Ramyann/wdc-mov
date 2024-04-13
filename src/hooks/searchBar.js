const apiKey = 'd7e0676ac6420cc72fe6fc753fed0fed'; // Replace 'YOUR_API_KEY' with your TMDB API key

const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.search-icon');
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', handleInput);
searchIcon.addEventListener('click', handleSearchIconClick);


async function handleInput() {
  const query = searchInput.value.trim();
  if (query.length === 0) {
    suggestionsList.innerHTML = '';
    suggestionsList.style.display = 'none';
    return;
  }

  const suggestions = await fetchSuggestions(query);
  displaySuggestions(suggestions);
}

async function handleSearchIconClick() {
  const query = searchInput.value.trim();
  if (query.length === 0) {
    return;
  }

  const suggestions = await fetchSuggestions(query);
  if (suggestions.length > 0) {
    navigateToMovieDetails(suggestions[0].id);
  }
}

async function fetchSuggestions(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
  const data = await response.json();
  return data.results;
}

function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = '';
  if (suggestions.length === 0) {
    suggestionsList.style.display = 'none';
    return;
  }

  suggestions.forEach(movie => {
    const suggestion = document.createElement('div');
    suggestion.classList.add('suggestion');
    suggestion.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" alt="${movie.title}">
      <div>
        <p>${movie.title}</p>
        <p>(${movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'})</p>
      </div>
    `;
    suggestion.addEventListener('click', () => {
      navigateToMovieDetails(movie.id);
    });
    suggestionsList.appendChild(suggestion);
  });

  suggestionsList.style.display = 'block';
}

function navigateToMovieDetails(movieId) {
  window.location.href = `movie_details.html?id=${movieId}`;
}