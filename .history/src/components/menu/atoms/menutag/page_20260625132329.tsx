import findItemById from "@/services/menu/findItemById";

export default async function MenuTag(isFixo : boolean) {

    interface TagProps {
        isFixo: boolean; // O texto da tag
    }

    return <>
        <div className="p-2.5 bg-green-300">
            <p>{}</p>
        </div>
    </>
}