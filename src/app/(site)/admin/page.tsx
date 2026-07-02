import SimpleButton from "@/components/atoms/simpleButton/page"
import AdminItem from "@/components/molecules/adminItem/page"
import getItems from "@/services/admin/getItems"
import { Product } from "@/types/product"

export default async function Admin() {

    const products: Array<Product> = await getItems()

    function popup() {
        console.log("popup")
    }

    return <>
        <div className="flex items-center justify-center flex-col gap-4">
            <div className="flex justify-between items-center w-full">
                <h1 className="font-bold text-2xl text-blue-700">Painel de Administrador</h1>
                <SimpleButton text="Add +" callback={popup}></SimpleButton>
            </div>
            <div className="grid grid-cols-6 gap-4">
                {products.map((product: Product) => (
                    <AdminItem product={product} key={product.id}></AdminItem>
                ))}
            </div>
        </div> 
    </>
}