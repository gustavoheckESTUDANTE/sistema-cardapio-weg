import MenuTag from "@/components/atoms/tag/page"
import { Product } from "@/types/product"
import Image from "next/image";

interface AdminItemProps {
    product: Product
}

export default function AdminItem({product}: AdminItemProps) {

    return <>
        <div className="p-4 flex justify-center w-full border-2 border-white bg-blue-700 rounded-3xl text-white font-medium">
            <div className="w-full flex gap-5">
                <div className="w-20 h-20 relative overflow-hidden rounded-2xl">
                    <Image src={product.imagem} alt={product.nome} fill className="object-cover"></Image>
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                    <p>{product.nome}</p>
                    <MenuTag text={(product.fixo) ? ("Fixo") : ("Aleatório")} variant={(product.fixo) ? ("fixed") : ("random")}></MenuTag>
                    {
                        product.destacado ? <MenuTag text={"Destacado"} variant={"quantity"}></MenuTag> : null
                    }
                    <MenuTag text={product.categoria} variant={"quantity"}></MenuTag>
                </div>
            </div>
        </div>
    </>

}