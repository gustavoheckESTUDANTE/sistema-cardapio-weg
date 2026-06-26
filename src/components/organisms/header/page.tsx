import Image from "next/image";
import Link from "next/link";
import logoWeg from "@public/logo-weg.png"

export default function Header () {
    return (
        <>
            <header className="w-full p-4 px-10 bg-blue-600">
                <div className="flex justify-between items-center">
                    <Image
                        alt="Logo da Weg"
                        src={logoWeg}
                        sizes="(max-width: 768px) 20vw, 10vw"
                        className="max-w-15"
                    />

                    <div className="flex gap-8 text-1xl">
                        <Link href={"/"} className="text-white hover:text-gray-400 font-medium">Home</Link>
                        <Link href={"/admin"} className="text-white hover:text-gray-400 font-medium">Admin</Link>
                    </div>

                </div>
            </header>
        </>
    )
} 