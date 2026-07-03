import { Product } from "@/types/product";
import MenuTag from "../../atoms/tag/page";
import Item from "../../molecules/item/page";
import getFixedItems from "@/services/menu/getFixedItems";
import getNotFixedItems from "@/services/menu/getNotFixedItems";

interface MenuProps {
    diaSemana: "Segunda-Feira" | "Terça-Feira" | "Quarta-Feira" | "Quinta-Feira" | "Sexta-Feira"
}

export default async function Menu({ diaSemana }: MenuProps) {
    const fixedProductList: Array<Product> = await getFixedItems();
    const productList: Array<Product> = await getNotFixedItems();

    return <>
        <div className="w-full h-full flex flex-col gap-4 border-2 border-blue-700 bg-blue-300 rounded-2xl p-4 text-white font-bold 2xl:h-500">
            <div className="flex justify-between">
                <p>{diaSemana}</p>
                <MenuTag text="12 Itens" variant="quantity"></MenuTag>
            </div>
            <div>
                <p className="text-center">Carboidrato</p>
                <div className="flex flex-col gap-1">
                    {filterByCategory(fixedProductList, "Carnes").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                    {ramdomProductsByCategory(productList, 2, "Carnes").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-center">Acompanhamentos</p>
                <div className="flex flex-col gap-1">
                    {filterByCategory(fixedProductList, "Acompanhamentos").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                    {ramdomProductsByCategory(productList, 3, "Acompanhamentos").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-center">Saladas</p>
                <div className="flex flex-col gap-1">
                    {filterByCategory(fixedProductList, "Saladas").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                    {ramdomProductsByCategory(productList, 1, "Saladas").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-center">Sobremesa</p>
                <div>
                    {filterByCategory(fixedProductList, "Sobremesas").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                    {ramdomProductsByCategory(productList, 1, "Sobremesas").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    </>
}

function ramdomProductsByCategory(productList: Array<Product>, qtd: number, category: string): Array<Product> {
    let categoryFilteredProductList: Array<Product> = filterByCategory(productList, category);
    const filteredProductList: Array<Product> = new Array;
    for (let i = 0; i < qtd; i++) {
        let randomProductIndex: number = Math.floor(Math.random() * categoryFilteredProductList.length);
        if (!(filteredProductList.at(i - 1) === categoryFilteredProductList.at(randomProductIndex)!)) {
            const encounteredProduct: Product = categoryFilteredProductList.at(randomProductIndex)!;
            if (!"FeijaoArrozOvo".includes(encounteredProduct.nome)) {
                filteredProductList.push(encounteredProduct);
            } else {
                i = i - 1;
            }
        } else {
            i = i - 1;
        }
    }
    return filteredProductList
}

function filterByCategory(productList: Array<Product>, category: string) {
    let categoryFilteredProductList: Array<Product> = new Array;
    return categoryFilteredProductList = productList.filter(product => product.categoria == category)
}