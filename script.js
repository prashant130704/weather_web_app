const apiKey = "30f7e6b8215032b81b54729fdf7cd682" ; // Replace with your weather API key
const weatherDisplay = document.getElementById('weatherDisplay');
const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const currentLocationBtn = document.getElementById('currentLocationBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

async function fetchWeather(location) {
    try {
        loading.style.display = 'block';
        weatherDisplay.style.display = 'none';
        error.style.display = 'none';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
            loading.style.display = 'none';
        } else {
            showError(data.message);
        }
    } catch (err) {
        showError('Failed to fetch weather data.');
    }
}

function displayWeather(data) {
    const { name, main, weather, wind, sys, visibility } = data;

    document.getElementById('locationName').textContent = name;
    document.getElementById('temperature').textContent = Math.round(main.temp);
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
    document.getElementById('weatherDescription').textContent = weather[0].description;
    document.getElementById('feelsLike').textContent = Math.round(main.feels_like);
    document.getElementById('humidity').textContent = main.humidity;
    document.getElementById('windSpeed').textContent = wind.speed;
    document.getElementById('pressure').textContent = main.pressure;
    document.getElementById('visibility').textContent = visibility / 1000;
    document.getElementById('uvIndex').textContent = 'N/A'; // UV Index is not available in this endpoint
    document.getElementById('sunrise').textContent = formatTime(new Date(sys.sunrise * 1000));
    document.getElementById('sunset').textContent = formatTime(new Date(sys.sunset * 1000));

    const currentTime = new Date();
    document.getElementById('currentTime').textContent = `Last updated: ${currentTime.toLocaleTimeString()}`;

    weatherDisplay.style.display = 'block';
}

function showError(message) {
    loading.style.display = 'none';
    error.style.display = 'block';
    error.textContent = message;
}

function formatTime(date) {
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

searchBtn.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeather(location);
    } else {
        showError('Please enter a location.');
    }
});

currentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            try {
                loading.style.display = 'block';
                weatherDisplay.style.display = 'none';
                error.style.display = 'none';

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
                const data = await response.json();

                if (response.ok) {
                    displayWeather(data);
                    loading.style.display = 'none';
                } else {
                    showError(data.message);
                }
            } catch (err) {
                showError('Failed to fetch weather data.');
            }
        });
    } else {
        showError('Geolocation is not supported by this browser.');
    }
});
