import { Product } from "@/types/product";
import { ProductPut } from "@/types/productPut";

export default async function updateProduct (putProduct : ProductPut, id: string): Promise<Product> {
    const updateResponse = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(putProduct)
    });

    if (!updateResponse.ok) {
        throw new Error('Erro ao atualizar o item');
    }

    return updateResponse.json();
}