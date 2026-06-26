import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import findItemById from "@/services/menu/findItemById";
import Image from "next/image";

interface ItemProps {
    product: Product
}

export default async function Item({ product }: ItemProps) {

    return <>
        <div className="p-4 flex justify-center w-full border-2 border-black">
            <div className="flex ">
                <div className="w-20 h-20 relative overflow-hidden">
                    <Image src={product.imagem} alt={product.nome} fill className="object-cover"></Image>
                </div>
                <div className="flex flex-col justify-center">
                    <p>{product.nome}</p>
                    <MenuTag text={(product.fixo) ? ("Fixo") : ("Aleatório")} variant={(product.fixo) ? ("fixed") : ("random")}></MenuTag>
                </div>
            </div>
        </div>
    </>
}