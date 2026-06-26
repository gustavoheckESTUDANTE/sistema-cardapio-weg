import { Product } from "@/types/product";

export default async function getItems (): Promise<Product[]> {
    const fetchApi = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos?fixo=false`);

    if (!fetchApi.ok) {
        throw new Error('Erro ao buscar os items');
    }

    return fetchApi.json();
}