import getMenuData from "@/services/menu/findItemById";

export default function MenuTag() {

    const data = await getMenuData();
    return <>
        <div>
            <p>{data.}</p>
        </div>
    </>
}