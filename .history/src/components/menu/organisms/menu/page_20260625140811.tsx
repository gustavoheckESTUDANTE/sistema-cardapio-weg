import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";

export default async function Menu() {
    const list : Array<Product> = await getItems();


}

function ramdomProduct (list : Array<Product>) {
    
}