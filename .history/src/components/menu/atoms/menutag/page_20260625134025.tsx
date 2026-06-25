import findItemById from "@/services/menu/findItemById";

interface TagProps {
    texto: string;
    variant?: 'fix' | 'random' | 'quantity';
}

export default async function MenuTag({texto, variant="fix"}: TagProps) {

    let variantStyle: string; 

    switch (variant) {
        case "fix":
            variantStyle = `bg-green-200 text-`
            break;
        case "random":
            
            break;
        case "quantity":
            
            break;
        default:
            console.error("A variante do menu é inválida")
            break;
    }
    
    return <>
        <div className={`p-2.5}`}>
            <p>{texto}</p>
        </div>
    </>
}