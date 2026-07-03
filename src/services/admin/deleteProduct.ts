import { ProductDeleteResponse } from "@/types/productDeleteResponse";

export default async function deleteProduct (id : string): Promise<ProductDeleteResponse> {
    const deleteResponse = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`);

    if (!deleteResponse.ok) {
        throw new Error('Erro ao deletar o item');
    }

    return deleteResponse.json();
}