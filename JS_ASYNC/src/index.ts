import fetchData from "./fetch";
import postData from "./fetch-post";

const API: string = ' https://api.escuelajs.co/api/v1';

interface Product {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

async function getProduct(): Promise<string> {
    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        const category = await fetchData(`${API}/categories/${product?.category?.id}`);
        return `El producto es ${product.title} y pertenece a la categoría ${category.name}`;
    }
    catch (error) {
        return error;
    }

}


getProduct().then((response) => console.log(response));

const product: Product = {
    title: 'Escuela JS',
    price: 100,
    description: 'Curso de JavaScript',
    categoryId: 1,
    images: ['https://escuelajs.co/static/images/logo.png']
};

postData(`${API}/products`, product).then((response) => console.log(response));