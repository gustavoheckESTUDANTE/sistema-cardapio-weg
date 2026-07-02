import MenuTag from "@/components/atoms/tag/page"
import { Product } from "@/types/product"
import Image from "next/image";

interface AdminItemProps {
    product: Product
}

export default function AdminItem({ product }: AdminItemProps) {



    return <>
        <div className="p-4 flex justify-center border-2 border-white bg-blue-700 rounded-3xl text-white font-medium flex-1 2xl:h-80">
            <div className="flex flex-col justify-center items-center gap-7">
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="w-20 h-20 relative overflow-hidden rounded-2xl">
                        <Image src={product.imagem} alt={product.nome} fill className="object-cover"></Image>
                    </div>
                    <p>{product.nome}</p>
                    <div className="flex justify-center gap-1.5 flex-wrap">
                        <MenuTag text={(product.fixo) ? ("Fixo") : ("Aleatório")} variant={(product.fixo) ? ("fixed") : ("random")}></MenuTag>
                        {
                            product.destacado ? <MenuTag text={"Destacado"} variant={"quantity"}></MenuTag> : null
                        }
                        <MenuTag text={product.categoria} variant={"quantity"}></MenuTag>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <button className="p-4 bg-green-300 text-green-900 font-bold rounded-2xl"> Editar </button>
                    <button className="p-4 bg-red-600 text-white font-bold rounded-2xl"> Excluir </button>
                </div>
            </div>
        </div>
    </>

}