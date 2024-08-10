const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');
const temperatureElement = document.querySelector('.temperature');
const weatherElement = document.querySelector('.weather');
const locationElement = document.querySelector('.location');

searchButton.addEventListener('click', () => {
    const searchTerm = searchBar.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weather = data.weather[0].description;
            const location = data.name;
            temperatureElement.textContent = `${temperature} °C`;
            weatherElement.textContent = weather;
            locationElement.textContent = `Location: ${location}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            temperatureElement.textContent = 'Error fetching data';
            weatherElement.textContent = '';
            locationElement.textContent = '';
        });
});
