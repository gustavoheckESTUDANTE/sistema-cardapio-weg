
interface TagProps {
    text: string;
    callback: CallableFunction;
    variant?: 'white' | 'black';
}

export default async function SimpleButton({callback, variant="white", text}: TagProps) {

    let variantStyle: string = ""; 

    switch (variant) {
        case "white":
            variantStyle = "bg-white text-black"
            break;
        case "black":
            variantStyle = "bg-black text-white"
            break;
        default:
            console.error("A variante do menu é inválida")
            break;
    }
    
    return <>
        <button className={"w-fit p-4 rounded-2xl font-medium " + variantStyle} onClick={callback()}>
            <p>{text}</p>
        </button>
    </>
}