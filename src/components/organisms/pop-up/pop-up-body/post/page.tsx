import postProduct from "@/services/admin/postProduct";
import { ProductPost } from "@/types/productPost";
import { ComponentPropsWithoutRef, useState } from "react";

interface PostBodyProps {
    closeButtonProps: ComponentPropsWithoutRef<"button">;
    sendButtonProps: ComponentPropsWithoutRef<"button">;
}

export default function PostBody({ closeButtonProps, sendButtonProps }: PostBodyProps) {

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const nome = formData.get('nome') as string;
        const descricao = formData.get('descricao') as string;
        const categoria = formData.get('categoria') as string;
        const preco = Number(formData.get('preco'));
        const imagem = formData.get('imagem') as string;
        const porcoes = Number(formData.get('porcoes'));
        const valorEnergetico = Number(formData.get('valorEnergetico'));
        const fixo: boolean = Boolean(formData.get('destacado'));
        const destacado: boolean = Boolean(formData.get('fixo'));

        const produtoCompleto: ProductPost = {
            nome,
            descricao,
            categoria,
            preco,
            imagem,
            destacado,
            fixo,
            porcoes,
            valorEnergetico
        };

        postProduct(produtoCompleto)
    };

    return <>

        <main className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 text-left shadow-xl">
                <div className="flex flex-col gap-4">
                    <div className="flex w-full justify-end">
                        <button
                            {...closeButtonProps}
                            className="text-2xl">
                            X
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-center">Adicionar um novo Produto!</h3>
                    <form className="flex flex-col gap-4 mb-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="flex" htmlFor="nome"><p className="text-red-700">*</p>Nome:</label>
                            <input className="border-2 border-black rounded-lg" name="nome" id="nome" type="text" required={true}></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="flex" htmlFor="descricao"><p className="text-red-700">*</p>Descricao:</label>
                            <input className="border-2 border-black rounded-lg" name="descricao" type="text" id="descricao" required={true}></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="flex" htmlFor="categoria"><p className="text-red-700">*</p>Categoria:</label>
                            <input className="border-2 border-black rounded-lg" name="categoria" type="text" id="categoria" required={true}></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="flex" htmlFor="preco"><p className="text-red-700">*</p>Preco:</label>
                            <input className="border-2 border-black rounded-lg" name="preco" type="number" id="preco" required={true}></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="flex" htmlFor="imagem"><p className="text-red-700">*</p>Imagem:</label>
                            <input className="border-2 border-black rounded-lg" name="imagem" id="imagem" type="text" required={true}></input>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label htmlFor="destacado-1" className="ms-2 text-sm text-gray-900">Destacar</label>
                                <input id="destacado-1" type="radio" name="destacado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                            </div> 
                            <div className="flex flex-col">
                                <label htmlFor="destacado-2" className="ms-2 text-sm text-gray-900">Não Destacar</label>
                                <input id="destacado-2" type="radio" name="destacado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label htmlFor="fixo-1" className="ms-2 text-sm text-gray-900">Fixar</label>
                                <input id="fixo-1" type="radio" name="fixo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                            </div> 
                            <div className="flex flex-col">
                                <label htmlFor="fixo-2" className="ms-2 text-sm text-gray-900">Não Fixar</label>
                                <input id="fixo-2" type="radio" name="fixo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="flex" htmlFor="porcoes"><p className="text-red-700">*</p>Porcoes:</label>
                            <input className="border-2 border-black rounded-lg" name="porcoes" id="porcoes" type="number" required={true}></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="flex" htmlFor="valorEnergetico"><p className="text-red-700">*</p>Valor Energetico:</label>
                            <input className="border-2 border-black rounded-lg" name="valorEnergetico" type="number" id="valorEnergetico" required={true}></input>
                        </div>
                        <button
                            className="p-4 bg-blue-600 rounded-2xl text-lg text-white font-bold"
                            {...sendButtonProps}
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </>
}