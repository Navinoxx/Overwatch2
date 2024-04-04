const baseUrl = 'https://overfast-api.tekrop.fr/heroes';
const locale = 'es-mx';

export async function getHeroesDetails(path) {
    const url = `${baseUrl}/${path}?locale=${locale}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los detalles del héroe');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los detalles del héroe:', error);
        throw error;
    }
}