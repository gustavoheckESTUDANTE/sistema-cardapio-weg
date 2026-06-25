import findItemById from "@/services/menu/findItemById";

interface TagProps {
    texto: string;
    var: number;
}

export default async function MenuTag({texto, var}: TagProps) {
    return <>
        <div className={`p-2.5 ${(isFixo) ? ("Fixo") : ("Aleatório")}`}>
            <p>{texto}</p>
        </div>
    </>
}