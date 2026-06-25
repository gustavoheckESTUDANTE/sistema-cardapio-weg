import findItemById from "@/services/menu/findItemById";
import getMenuData from "@/services/menu/findItemById";

export default function MenuTag(itemUuid) {

    const data = await findItemById(itemUuid);
    return <>
        <div>
            <p>{(data.fixo) ? ("") : ("")}</p>
        </div>
    </>
}