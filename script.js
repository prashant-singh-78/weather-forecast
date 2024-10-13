/*function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=621d3c1a0703454d96d171055240203&q=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather-result').innerHTML = `<p class="weather-info">${data.error}</p>`;
            } else {
                console.log('Weather Data:', data);
                document.getElementById('weather-result').innerHTML = `
                    <p class="weather-info">City: ${data.location.name}</p>
                    <p class="weather-info">Temperature: ${data.current.temp_c}°C</p>
                    <p class="weather-info">Humidity: ${data.current.humidity}</p>
                    <p class="weather-info">climate: ${data.current.condition.text}</p>
                `;
            }
            // Function to change the image based on weather condition
        function updateImageBasedOnWeather(condition) {
            const weatherImage = document.getElementById('weatherImage');

        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p class="weather-info">Error fetching weather data.</p>`;
        });
}
*/
/*
function getWeather() {
    const city = document.getElementById('city').value;
    
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=621d3c1a0703454d96d171055240203&q=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather-result').innerHTML = `<p class="weather-info">${data.error.message}</p>`;
            } else {
                console.log('Weather Data:', data);
                
                document.getElementById('weather-result').innerHTML = `
                    <p class="weather-info">City: ${data.location.name}</p>
                    <p class="weather-info">Temperature: ${data.current.temp_c}°C</p>
                    <p class="weather-info">Humidity: ${data.current.humidity}%</p>
                    <p class="weather-info">Climate: ${data.current.condition.text}</p>
                    <img id="weatherImage" src="" alt="Weather condition image" />
                `;

                // Update image based on the current weather condition
                updateImageBasedOnWeather(data.current.condition.text);
            }
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p class="weather-info">Error fetching weather data.</p>`;
            console.error('Error:', error);
        });
}

// Function to change the image based on weather condition
function updateImageBasedOnWeather(condition) {
    const weatherImage = document.getElementById('weatherImage');
    let imageUrl = '';

    if (condition.includes('Sunny')) {
        imageUrl = 'sunny.png'; // Replace with an actual image URL or path
    } else if (condition.includes('Rain')) {
        imageUrl = 'rainy.png';
    } else if (condition.includes('Cloudy')) {
        imageUrl = 'cloudy.png';
    } else if (condition.includes('Snow')) {
        imageUrl = 'snowy.png';
    } else {
        imageUrl = 'default.png'; // Default image if condition is not matched
    }

    weatherImage.src = imageUrl;
}
*/
function getWeather() {
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=621d3c1a0703454d96d171055240203&q=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather-result').innerHTML = `<p class="weather-info">${data.error.message}</p>`;
            } else {
                document.getElementById('city-name').textContent = `City: ${data.location.name}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
                document.getElementById('condition').textContent = `Condition: ${data.current.condition.text}`;

                updateEmojiBasedOnCondition(data.current.condition.text);
            }
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p class="weather-info">Error fetching weather data.</p>`;
        });
}

function updateEmojiBasedOnCondition(condition) {
    const emoji = document.getElementById('emoji');
    if (condition.includes('Sunny')) {
        emoji.textContent = '☀️';
    } else if (condition.includes('Rain')) {
        emoji.textContent = '🌧️';
    } else if (condition.includes('Cloud')) {
        emoji.textContent = '☁️';
    } else if (condition.includes('Snow')) {
        emoji.textContent = '❄️';
    } else {
        emoji.textContent = '🌤️';
    }
}
