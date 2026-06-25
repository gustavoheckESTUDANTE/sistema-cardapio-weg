import findItemById from "@/services/menu/findItemById";

export default async function MenuTag(isFixo : boolean) {

    interface TagProps {
  label: string; // O texto da tag
  variant?: 'primary' | 'secondary'; // Opcional: caso queira mudar a cor depois
}

    return <>
        <div className="p-2.5 bg-green-300">
            <p>{}</p>
        </div>
    </>
}