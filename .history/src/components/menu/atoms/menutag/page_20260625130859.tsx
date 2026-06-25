import getMenuData from "@/services/menu/menuService";

export default function MenuTag() {

    const data = await getMenuData();
    return <>
        <div>
            <p>{dat}</p>
        </div>
    </>
}