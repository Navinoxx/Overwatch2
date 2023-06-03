const roles = 'https://overfast-api.tekrop.fr/roles?locale=es-mx'

export default async function getHeroesRoles() {
    try {
        const response = await fetch(roles);
        if (!response.ok) {
            throw new Error('Erorr al obtener los roles');
        }
        return response.json();
    } catch (error) {
        console.error('Erorr al obtener los roles', error);
        throw error;
    }
}
