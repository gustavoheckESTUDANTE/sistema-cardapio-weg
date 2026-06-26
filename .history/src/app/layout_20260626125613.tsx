import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
    title: {
        default: "Cardapio Semanal - WEG",
        template: "%s | Cardapio Semanal - WEG"
    },
    description: "Sistema para o gerenciamento dos cardápios semanais da empresa WEG.",
    keywords: ["weg", "cardápio digital", "comida", "almoço", "janta"]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
            <body className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}
