export default function fetchData(urlApi: string) {
    return fetch(urlApi)
        .then(response => response.json())
        .catch(error => console.log(error));
}
