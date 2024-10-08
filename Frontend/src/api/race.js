

export async function getDataRace() {
    const url = `http://localhost:4000/characters`; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json; // Retornamos los datos
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }