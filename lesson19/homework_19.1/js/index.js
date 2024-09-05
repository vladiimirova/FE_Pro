const apiKey = "e917ec57d65838355c517ea9193436de"; 
const city = "Lisbon";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        document.querySelector('.location').innerText = data.name;
        document.querySelector('.degrees').innerText = `${data.main.temp}°C`;
        document.querySelector('.feels-like').innerText = `Feels like: ${data.main.feels_like}°C`;
        document.querySelector('.description').innerText = data.weather[0].description;
        document.querySelector('.pressure').innerText = `Pressure: ${data.main.pressure} hPa`;
        document.querySelector('.humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.querySelector('.wind').innerText = `Wind speed: ${data.wind.speed} m/s`;

        const timezoneOffset = data.timezone; 
        updateDateTime(timezoneOffset);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateDateTime(timezoneOffset) {
    const nowUTC = new Date(); 
    const utcTime = nowUTC.getTime() + (nowUTC.getTimezoneOffset() * 60000); 
    const localTime = new Date(utcTime + timezoneOffset * 1000); 

    document.querySelector('.date').innerText = localTime.toLocaleDateString();
    document.querySelector('.time').innerText = localTime.toLocaleTimeString();
}

fetchWeather();

document.querySelector('.update-btn').addEventListener('click', fetchWeather);
