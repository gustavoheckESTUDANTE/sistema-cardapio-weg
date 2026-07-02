import { ComponentPropsWithoutRef, ReactNode } from "react";

interface TagProps extends ComponentPropsWithoutRef<"button">{
    children: ReactNode;
    variant?: 'white' | 'black';
}

export default function SimpleButton({ children, variant = "white", ...props} : TagProps) {

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
        <button
            {...props}
            className={"rounded-lg p-4 font-medium " + variantStyle} 
        >
            {children}
        </button>
    </>
}