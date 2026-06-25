export default async function findItemById (uuid : string)  {
    const fetchApi = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${uuid}`);

}