document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city");
    const searchButton = document.getElementById("search");
    const temperatureSpan = document.getElementById("temperature");
    const descriptionSpan = document.getElementById("description");
    const apiKey = "f5c39b7d9915935bcc823bcde1afd366"; //API que funciona 47bb0f832c6c8c24647c539afaee8d54

    searchButton.addEventListener("click", () => fetchWeather(cityInput.value));
    async function fetchWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) throw new Error('No se pudo obtener datos climáticos');
            const data = await response.json();
            const { temp } = data.main;
            const { description } = data.weather[0];

            temperatureSpan.textContent = `${temp}°C`;
            descriptionSpan.textContent = description;
        } catch (error) {
            console.error("Error al obtener datos climáticos:", error);
        }
    }
});

