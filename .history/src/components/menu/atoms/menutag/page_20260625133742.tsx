import findItemById from "@/services/menu/findItemById";

interface TagProps {
    texto: string;
    variant?: 'primary' | 'secondary' | 'terciary';
}

export default async function MenuTag({texto, variant="primary"}: TagProps) {
    
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
    
    return <>
        <div className={`p-2.5}`}>
            <p>{texto}</p>
        </div>
    </>
}