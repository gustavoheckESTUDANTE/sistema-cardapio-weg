import { Product } from "@/types/product";
import MenuTag from "../../atoms/menutag/page";
import findItemById from "@/services/menu/findItemById";

interface ItemProps {
    uuid: string
}

export default async function Item({uuid}: ItemProps) {

    const product: Product = findItemById(uuid)

    return <>
        <div>
            <div>
                <p></p>
                <MenuTag ></MenuTag>
            </div>
        </div>
    </>
}