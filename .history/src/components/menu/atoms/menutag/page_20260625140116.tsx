import findItemById from "@/services/menu/findItemById";

interface TagProps {
    text: string;
    variant?: 'fix' | 'random' | 'quantity';
}

export default async function MenuTag({texto, variant="fix"}: TagProps) {

    let variantStyle: string = ""; 

    switch (variant) {
        case "fix":
            variantStyle = "bg-green-200 font-medium"
            break;
        case "random":
            variantStyle = "bg-gray-200 font-medium"
            break;
        case "quantity":
            variantStyle = "bg-blue-200 font-bold"
            break;
        default:
            console.error("A variante do menu é inválida")
            break;
    }
    
    return <>
        <div className={"p-2.5" + {variantStyle}}>
            <p>{texto}</p>
        </div>
    </>
}