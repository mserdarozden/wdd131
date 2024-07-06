function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  function getLastModified() {
    return new Date(document.lastModified).toLocaleString();
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (currentYearElement) {
      currentYearElement.textContent = getCurrentYear();
    }
    
    if (lastModifiedElement) {
      lastModifiedElement.textContent = getLastModified();
    }
    
  });

  const temperature = 10; 
  const windSpeed = 5; 
  
  function calculateWindChill(temp, wind) {
      // Formula for wind chill factor in Celsius
      // Wind Chill Temperature (°C) = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
      return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
  }
  
  if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChill(temperature, windSpeed);
      document.getElementById('wind-chill').textContent = `${windChill.toFixed(1)}°C`;
  } else {
      document.getElementById('wind-chill').textContent = 'N/A';
  }