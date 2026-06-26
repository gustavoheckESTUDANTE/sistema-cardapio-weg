import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import findItemById from "@/services/menu/findItemById";
import Image from "next/image";

interface ItemProps {
    product: Product
}

export default async function Item({ product }: ItemProps) {

    return <>
        <div className="p-4 flex justify-center w-full border-2 border-black bg-blue-700 rounded-3xl">
            <div className="w-full flex gap-5">
                <div className="w-20 h-20 relative overflow-hidden rounded-2xl">
                    <Image src={product.imagem} alt={product.nome} fill className="object-cover"></Image>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                    <p>{product.nome}</p>
                    <MenuTag text={(product.fixo) ? ("Fixo") : ("Aleatório")} variant={(product.fixo) ? ("fixed") : ("random")}></MenuTag>
                </div>
            </div>
        </div>
    </>
}