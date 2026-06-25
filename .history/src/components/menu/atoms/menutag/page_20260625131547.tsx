import findItemById from "@/services/menu/findItemById";
import getMenuData from "@/services/menu/findItemById";

export default function MenuTag() {

    const data = await findItemById();
    return <>
        <div>
            <p>{data.}</p>
        </div>
    </>
}