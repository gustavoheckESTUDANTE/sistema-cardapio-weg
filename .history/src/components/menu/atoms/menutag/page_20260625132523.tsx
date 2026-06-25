import findItemById from "@/services/menu/findItemById";

interface TagProps {
    isFixo: boolean;
}

export default async function MenuTag({isFixo}: TagProps) {



    return <>
        <div className={}>
            <p>{(isFixo) ? ("Fixo") : ("Aleatório")}</p>
        </div>
    </>
}