import findItemById from "@/services/menu/findItemById";

export default async function MenuTag(itemUuid : string) {

    return <>
        <div>
            <p>{(data.fixo) ? ("Fixo") : ("Aleatório")}</p>
        </div>
    </>
}