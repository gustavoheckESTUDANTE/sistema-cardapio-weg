import findItemById from "@/services/menu/findItemById";

interface TagProps {
    texto: string;
    variant: string
}

export default async function MenuTag({texto, var}: TagProps) {
    return <>
        <div className={`p-2.5}`}>
            <p>{texto}</p>
        </div>
    </>
}