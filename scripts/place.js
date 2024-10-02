const temperature = 48;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16)
  );
}

function displayWindChill() {
  const weatherSection = document.getElementById("weather");
  let windChill = "N/A";

  if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(2); // Calculate wind chill
  }

  weatherSection.textContent = `Wind Chill: ${windChill} °F`;
}

const temperatureElement = document.getElementById("temperature");
temperatureElement.textContent = `${temperature} °F`;

const conditionsElement = document.getElementById("conditions");
conditionsElement.textContent = "Partly Cloudy";

const windElement = document.getElementById("wind");
windElement.textContent = `${windSpeed} km/h`;

const windChillElement = document.getElementById("windChill");
windChillElement.textContent = "9.8°C";
