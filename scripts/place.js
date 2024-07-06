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