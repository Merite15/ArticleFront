const baseUrl = import.meta.env.VITE_API_URL;

export const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Erreur avec fetch:', error);

        throw error;
    }
};
