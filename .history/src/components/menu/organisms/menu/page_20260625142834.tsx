import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import Item from "../../molecules/item/page";

export default async function Menu() {
    const productList: Array<Product> = await getItems();

    return <>
        <div>
            <div>
                <p>Dia da Semana</p>
                <MenuTag text="12 Itens" variant="quantity"></MenuTag>
            </div>
            <div>
                <p>Carnes</p>
                <div>
                    {ramdomProductsByCategory(productList, 3, "Carnes").map((product) => (
                        <Item product={product}></Item>
                    ))}
                </div>
            </div>
            <div>
                <p>Entradas</p>
                <div>

                </div>
            </div>
            <div>
                <p>Principais</p>
                <div>

                </div>
            </div>
            <div>
                <p>Sobremesa</p>
                <div>

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
        let randomProductIndex: number = Math.floor(Math.random() * qtd);
        filteredProductList.push(CategoryFilteredProductList.at(randomProductIndex)!);
    }
    return filteredProductList
}