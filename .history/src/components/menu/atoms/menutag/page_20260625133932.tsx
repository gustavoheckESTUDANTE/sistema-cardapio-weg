import findItemById from "@/services/menu/findItemById";

interface TagProps {
    texto: string;
    variant?: 'primary' | 'secondary' | 'terciary';
}

export default async function MenuTag({texto, variant="primary"}: TagProps) {

    let variantStyle: string; 

    switch (variant) {
        case "fix":
            
            break;
        case "secondary":
            
            break;
        case "terciary":
            
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