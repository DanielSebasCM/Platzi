
export default function postData(urlApi, data): Promise<string> {
    let request = fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin'
    });

    return request.then(response => response.json());
}