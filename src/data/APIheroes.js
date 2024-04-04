const baseUrl = 'https://overfast-api.tekrop.fr/heroes';
const locale = 'es-mx';

export async function getHeroes() {
    const url = `${baseUrl}?locale=${locale}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los héroes');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los héroes:', error);
        throw error;
    }
}


