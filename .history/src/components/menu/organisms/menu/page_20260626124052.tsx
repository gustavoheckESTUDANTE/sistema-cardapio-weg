import getItems from "@/services/menu/getItems";
import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import Item from "../../molecules/item/page";
import findItemById from "@/services/menu/findItemById";

interface MenuProps {
    diaSemana: "Segunda-Feira" | "Terça-Feira" | "Quarta-Feira" | "Quinta-Feira" | "Sexta-Feira"
}

export default async function Menu({ diaSemana }: MenuProps) {
    const ovo: Product = await findItemById("fa8fcece-f3f5-40ff-aa77-794770b627b3")
    const arroz: Product = await findItemById("996b6a84-07c7-4e19-91f6-237b512fd96e")
    const feijao: Product = await findItemById("c01778de-e687-4165-9cd7-b6a0dd7fd10d")

    const productList: Array<Product> = await getItems();
    return <>
        <div className="w-full flex flex-col gap-4 border-2 border-blue-700 bg-blue-300 rounded-2xl p-4 text-white font-bold">
            <div className="flex justify-between">
                <p>{diaSemana}</p>
                <MenuTag text="10 Itens" variant="quantity"></MenuTag>
            </div>
            <div>
                <p className="text-center">Carboidrato</p>
                <Item key={ovo?.id} product={ovo} />
                <div className="flex flex-col gap-1">
                    {ramdomProductsByCategory(productList, 2, "Carnes").map((product: Product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-center">Entradas</p>
                <div className="flex flex-col gap-1">
                    {ramdomProductsByCategory(productList, 3, "Entradas").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-center">Principais</p>
                <Item key={feijao?.id} product={feijao} />
                <Item key={arroz?.id} product={arroz} />
                <div className="flex flex-col gap-1">
                    {ramdomProductsByCategory(productList, 1, "Pratos Principais").map((product) => (
                        <Item key={product?.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-center">Sobremesa</p>
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
        if (!(filteredProductList.at(i - 1) === CategoryFilteredProductList.at(randomProductIndex)!)) {
            const encounteredProduct: Product = CategoryFilteredProductList.at(randomProductIndex)!;
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