import express, { Express, Request, Response } from "express";
import { faker } from "@faker-js/faker";

const app: Express = express();
const port = 3000;

interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: number;
}
interface Category {
  id: number;
  name: string;
}

const nOfCategories = 5;

const products: Product[] = Array.from({ length: 20 }, (_, i) => {
  return {
    id: i + 1,
    categoryId: faker.datatype.number({ min: 1, max: nOfCategories }),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
  } as Product;
});

const categories: Category[] = Array.from({ length: nOfCategories }, (_, i) => {
  return {
    id: i + 1,
    name: faker.commerce.department(),
  } as Category;
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/products", (req: Request, res: Response) => {
  const { id } = req.query;
  const idAsN = parseInt(id as string);
  if (id) {
    const product = products.find((p) => p.id === idAsN);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Product not found");
    }
  } else {
    res.json(products);
  }
});

app.get("/products/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.get("/categories", (req: Request, res: Response) => {
  res.json(categories);
});

app.get("/categories/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).send("Category not found");
  }
});

app.listen(port);
