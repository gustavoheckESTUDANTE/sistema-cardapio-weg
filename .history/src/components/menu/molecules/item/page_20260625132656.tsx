import MenuTag from "../../atoms/menutag/page";

interface ItemProps {
    uuid: string
}

export default function Item({uuid}: ItemProps) {
    return <>
        <div>
            <div>
                <p></p>
                <MenuTag ></MenuTag>
            </div>
        </div>
    </>
}