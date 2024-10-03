// Función para obtener los planetas desde la API
async function fetchPlanets() {
  try {
    const response = await fetch("https://dragonball-api.com/api/planets");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const planets = await response.json();
    
    // Verifica si la respuesta contiene datos válidos
    if (!planets || planets.length === 0) {
      throw new Error("No planets data found.");
    }

    return planets;
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
}

// Función que muestra los planetas
async function displayPlanets() {
  const planets = await fetchPlanets();

  if (planets) {
    console.log("Planets from API:", planets);
    // Aquí puedes renderizar los planetas en el DOM si es necesario
  } else {
    console.log("No planets available to display.");
  }
}

// Llamada para mostrar los planetas
displayPlanets();
