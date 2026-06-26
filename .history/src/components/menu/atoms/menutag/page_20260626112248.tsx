import findItemById from "@/services/menu/findItemById";

interface TagProps {
    text: string;
    variant?: 'fixed' | 'random' | 'quantity';
}

export default async function MenuTag({text, variant="fixed"}: TagProps) {

    let variantStyle: string = ""; 

    switch (variant) {
        case "fixed":
            variantStyle = "bg-green-200 font-medium text-black"
            break;
        case "random":
            variantStyle = "bg-gray-200 font-medium text-black"
            break;
        case "quantity":
            variantStyle = "bg-blue-800 font-bold"
            break;
        default:
            console.error("A variante do menu é inválida")
            break;
    }
    
    return <>
        <div className={"w-fit p-1.5 rounded-2xl" + variantStyle}>
            <p>{text}</p>
        </div>
    </>
}