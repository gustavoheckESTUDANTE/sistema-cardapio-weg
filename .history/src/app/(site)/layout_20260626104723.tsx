import Header from "@/components/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-[95%] m-auto">
				<Header/>
				{children}
		</main>
	);
}
