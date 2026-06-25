import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import findItemById from "@/services/menu/findItemById";
import Image from "next/image";

interface ItemProps {
    product: Product
}

export default async function Item({product}: ItemProps) {

    return <>
        <div className="p-4 flex justify-center w-full border-2 border-black">
            <Image src={product.imagem} alt={product.nome}></Image>
            <div className="flex flex-col justify-center">
                <p>{product.nome}</p>
                <MenuTag isFixo={(product.fixo) ? () }></MenuTag>
            </div>
        </div>
    </>
}