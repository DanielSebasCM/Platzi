import { getRandomImg, getBreeds, getRandomBreedImg } from './theCatApi';

window.onload = () => {
    const button: HTMLButtonElement = document.querySelector('#newPhoto')!;
    const images: HTMLImageElement[] = Array.from(document.querySelectorAll('img')!);
    setRandImgs(images);

    button.onclick = () => setRandImgs(images);

    getBreeds().then((breeds: any[]) => {
        const container: HTMLDivElement = document.createElement('div');
        container.id = 'breedContainer';
        container.classList.add('grid');
        document.body.appendChild(container);

        let newBtn: HTMLButtonElement;
        breeds.forEach((breed) => {
            newBtn = document.createElement('button');
            newBtn.innerText = breed.name;
            newBtn.onclick = () => setRandBreedImgs(breed.id, images);
            container.appendChild(newBtn);
        });
    });

    function setRandImgs(images: HTMLImageElement[]) {
        getRandomImg(images.length).then((urls: string[]) => {
            images.map((image, index) => image.src = urls[index])
        });
    }

    function setRandBreedImgs(breed, images: HTMLImageElement[]) {
        getRandomBreedImg(breed, images.length).then((urls: string[]) => {
            images.map((image, index) => image.src = urls[index])
        });
    }

}