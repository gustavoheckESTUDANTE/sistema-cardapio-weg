import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";

export default async function Menu() {
    const productList : Array<Product> = await getItems();


}

function ramdomProductsByCategory (productList : Array<Product>, qtd : number, category : string) {
    let filteredProductList : Array<Product> = new Array;
    filteredProductList = productList.filter(product => product.categoria == category)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}