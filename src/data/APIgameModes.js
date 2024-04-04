const urlGameModes = 'https://overfast-api.tekrop.fr/gamemodes?locale=es-mx';

export async function getGameModes() {
    try {
        const response = await fetch(urlGameModes);
        if (!response.ok) {
            throw new Error('Error al obtener los modos de juego');   
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los modos:', error);
        throw error;
    }
}