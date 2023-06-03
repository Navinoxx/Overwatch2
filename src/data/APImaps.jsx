const urlMaps = 'https://overfast-api.tekrop.fr/maps?locale=es-mx';

export default async function getMaps() {
    try {
        const response = await fetch(urlMaps);
        if (!response.ok) {
            throw new Error('Error al obtener los mapas');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los mapas:', error);
        throw error;
    }
}
