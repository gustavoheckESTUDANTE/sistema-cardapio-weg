"use client";

import SimpleButton from "@/components/atoms/simple-button/page";
import { useState } from "react";

interface PopUpProps {
    text: string;
    type: "put" | "post"
}

export default function PopUp({ text, type="put" }: PopUpProps) {

    const [isOpen, setIsOpen] = useState(false)


    return <>
        <SimpleButton onClick={() => setIsOpen(true)}>{text}</SimpleButton>

        {isOpen && (
            
        )}
    </>
}