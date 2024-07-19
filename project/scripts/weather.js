document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '5a0c36a07a68cb639509c5d212b97a77';
    const city = 'selcuk';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temp = document.getElementById('temp');
            const desc = document.getElementById('desc');
            const mint = document.getElementById('min-temp');
            const maxt = document.getElementById('max-temp');
            if (data.cod === 200) {
                const temperature = Math.round(data.main.temp);
                const description = data.weather[0].description;
                const minTemp = Math.round(data.main.temp_min);
                const maxTemp = Math.round(data.main.temp_max);
                temp.textContent = `${temperature}°C`;
                desc.textContent = `${description}`;
                mint.textContent = `Minimum: ${minTemp}°C`;
                maxt.textContent = `Minimum: ${maxTemp}°C`;
            } else {
                temperature.textContent = `Error: ${data.message}`;
            }
        })
        .catch(error => {
            const temperature = document.getElementById('temp');
            temperature.textContent = `Error fetching weather data: ${error}`;
        });
});