export { getBreeds, getRandomBreedImgs as getRandomBreedImg, getRandomImgs as getRandomImg }


import { FetchConfig, Breed } from './interfaces';
/* {"weight":{"imperial":"7  -  10","metric":"3 - 5"},"id":"abys","name":"Abyssinian","cfa_url":"http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx","vetstreet_url":"http://www.vetstreet.com/cats/abyssinian","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian","temperament":"Active, Energetic, Independent, Intelligent, Gentle","origin":"Egypt","country_codes":"EG","country_code":"EG","description":"The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.","life_span":"14 - 15","indoor":0,"lap":1,"alt_names":"","adaptability":5,"affection_level":5,"child_friendly":3,"dog_friendly":4,"energy_level":5,"grooming":1,"health_issues":2,"intelligence":5,"shedding_level":2,"social_needs":5,"stranger_friendly":5,"vocalisation":1,"experimental":0,"hairless":0,"natural":1,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)","hypoallergenic":0,"reference_image_id":"0XYvRd7oD"}
make this an interface */

const API_URL = "https://api.thecatapi.com/v1";
const apiKey = "live_TGIYO4G6HlG5ac7vCGvxoo0Ca2sNsOHMDg63541TzntkwuvRBOzmJ0jv6DyikAV7";



const fetchConfig: FetchConfig = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    },
};


async function getBreeds(): Promise<any[]> {
    try {
        const response: Response = await fetch(`${API_URL}/breeds`);
        if (!response.ok) throw new Error("Could not get breed list");

        const data: Breed[] = await response.json();
        return data.map(breed => ({ id: breed.id, name: breed.name }));
    }
    catch (error) {
        throw new Error("Network error");
    }
}

async function getRandomBreedImgs(breedId: string, n: number = 1): Promise<string[]> {
    try {
        let url: string = `${API_URL}/images/search?breed_ids=${breedId}&limit=${n}`;
        if (n > 10) url += `&api_key=${apiKey}}`;


        const response: Response = await fetch(url);

        if (!response.ok) throw new Error("Could not get breed image");

        const data: any[] = await response.json();
        return data.map((img) => img.url);
    }
    catch (error) {
        throw new Error("Network error");
    }
}

async function getRandomImgs(n: number = 1): Promise<string[]> {
    try {
        let url = `${API_URL}/images/search?limit=${n}`;
        if (n > 10) url += `&api_key=${apiKey}}`;

        const response: Response = await fetch(url);
        const data: any[] = await response.json();
        return data.map((img) => img.url);
    }
    catch (error) {
        throw new Error("Could not get image");
    }
}