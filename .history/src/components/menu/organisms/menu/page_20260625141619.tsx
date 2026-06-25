import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";

export default async function Menu() {
    const productList : Array<Product> = await getItems();


}

function ramdomProductsByCategory (productList : Array<Product>, qtd : number, category : string) {
    let CategoryFilteredProductList : Array<Product> = new Array;
    CategoryFilteredProductList = productList.filter(product => product.categoria == category)
    const let CategoryFilteredProductList : Array<Product> = new Array;
    for (let i = 0; i < qtd; i++) {
        let randomNumber : number = Math.floor(Math.random() * qtd);

    }
}