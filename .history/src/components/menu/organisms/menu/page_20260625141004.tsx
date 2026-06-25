import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";

export default async function Menu() {
    const productList : Array<Product> = await getItems();


}

function ramdomProductsByCategory (list : Array<Product>, qtd : number, category : string) {
    const filteredProductList : Array<Product> = new Array;

    filteredProductList = 
}