import { Product } from "@/types/product";
import { ProductPost } from "@/types/productPost";

export default async function postProduct(productPost: ProductPost): Promise<Product> {
    const postResponse = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productPost)
    });

    if (!postResponse.ok) {
        throw new Error('Erro ao adicionar o item');
    }

    return postResponse.json();
}