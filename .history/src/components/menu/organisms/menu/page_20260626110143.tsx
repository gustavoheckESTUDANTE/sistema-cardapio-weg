import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import Item from "../../molecules/item/page";

export default async function Menu() {
    const productList: Array<Product> = await getItems();
    return <>
        <div className="w-full">
            <div>
                <p>Dia da Semana</p>
                <MenuTag text="12 Itens" variant="quantity"></MenuTag>
            </div>
            <div>
                <p>Carnes</p>
                <div className="flex flex-col gap-1">
                    {ramdomProductsByCategory(productList, 3, "Carnes").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p>Entradas</p>
                <div>
                    {ramdomProductsByCategory(productList, 3, "Entradas").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p>Principais</p>
                <div>
                    {ramdomProductsByCategory(productList, 3, "Pratos Principais").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p>Sobremesa</p>
                <div>
                    {ramdomProductsByCategory(productList, 1, "Sobremesas").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    </>
}

function ramdomProductsByCategory(productList: Array<Product>, qtd: number, category: string): Array<Product> {
    let CategoryFilteredProductList: Array<Product> = new Array;
    CategoryFilteredProductList = productList.filter(product => product.categoria == category)
    const filteredProductList: Array<Product> = new Array;
    for (let i = 0; i < qtd; i++) {
        let randomProductIndex: number = Math.floor(Math.random() * CategoryFilteredProductList.length);
        console.log(filteredProductList.at(-1))
        if (!(filteredProductList.at(i-1) === CategoryFilteredProductList.at(randomProductIndex)!)) {
            filteredProductList.push(CategoryFilteredProductList.at(randomProductIndex)!);
        } else {
            i = i-1;
            console.log(i);
        }
    }
    return filteredProductList
}