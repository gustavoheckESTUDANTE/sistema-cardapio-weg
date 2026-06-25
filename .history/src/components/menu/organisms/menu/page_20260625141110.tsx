import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";

export default async function Menu() {
    const productList : Array<Product> = await getItems();


}

function ramdomProductsByCategory (productList : Array<Product>, qtd : number, category : string) {
    const filteredProductList : Array<Product> = new Array;

    filteredProductList = productList.filter(product => product.categoria ==)
}