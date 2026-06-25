import findItemById from "@/services/menu/findItemById";

interface TagProps {
    texto: Str;
}

export default async function MenuTag({isFixo}: TagProps) {
    return <>
        <div className={`p-2.5 ${(isFixo) ? ("Fixo") : ("Aleatório")}`}>
            <p>{(isFixo) ? ("Fixo") : ("Aleatório")}</p>
        </div>
    </>
}