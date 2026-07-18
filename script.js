// Weather Fetching
async function fetchWeather() {
    const apiKey = '238416beb1e4e9ee3e1c4c8f16fc2a2c';
    const city = 'Hyderabad';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('weather-display').innerHTML = 
            `<strong>${data.main.temp}°C</strong> | ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById('weather-display').innerText = "Unable to load weather.";
    }
}

// Simple logic to display market prices
function updatePrices() {
    // In a real app, fetch this from an API
    document.getElementById('wheat-price').innerText = "₹2,450/q";
    document.getElementById('rice-price').innerText = "₹3,100/q";
}

fetchWeather();
updatePrices();
