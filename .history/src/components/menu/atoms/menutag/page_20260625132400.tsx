import findItemById from "@/services/menu/findItemById";

interface TagProps {
    isFixo: boolean;
}

export default async function MenuTag({ isFixo, variant = 'primary' }: TagProps) {



    return <>
        <div className="p-2.5 bg-green-300">
            <p>{ }</p>
        </div>
    </>
}