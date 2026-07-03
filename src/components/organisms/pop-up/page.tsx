"use client";

import SimpleButton from "@/components/atoms/simple-button/page";
import { useState } from "react";
import PutBody from "./pop-up-body/put/page";
import PostBody from "./pop-up-body/post/page";

interface PopUpProps {
    text: string;
    type: "put" | "post"
    productId?: string
}

export default function PopUp({ text, type = "put", productId}: PopUpProps) {

    const [isOpen, setIsOpen] = useState(false)

    let isEdit;

    if (type == "put") {
        isEdit = true;
    } else {
        isEdit = false;
    }

    return <>
        <SimpleButton onClick={() => setIsOpen(true)}>{text}</SimpleButton>
        {isOpen && (isEdit ?
            <PutBody closeButtonProps={{ onClick: () => setIsOpen(false) }} sendButtonProps={{ onClick: () => setIsOpen(false) }} id={productId || ""} />
            :
            <PostBody closeButtonProps={{ onClick: () => setIsOpen(false) }} sendButtonProps={{ onClick: () => setIsOpen(false) }} />)}
    </>
}