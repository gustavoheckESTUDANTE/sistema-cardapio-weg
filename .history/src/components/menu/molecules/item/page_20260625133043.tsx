import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import findItemById from "@/services/menu/findItemById";
import Image from "next/image";

interface ItemProps {
    uuid: string
}

export default async function Item({uuid}: ItemProps) {

    const product: Product = await findItemById(uuid);

    return <>
        <div className="p-4 ">
            <Image src={product.imagem} alt={product.nome}></Image>
            <div>
                <p>{product.nome}</p>
                <MenuTag isFixo={product.fixo}></MenuTag>
            </div>
        </div>
    </>
}