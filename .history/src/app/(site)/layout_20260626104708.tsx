import Header from "@/components/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-[95%] margin-auto">
				<Header/>
				{children}
		</main>
	);
}
