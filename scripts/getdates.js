function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('currentYear').textContent = getCurrentYear();
  });

  function getLastModified() {
    return new Date(document.lastModified);
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('lastModified').textContent = getLastModified();
  });