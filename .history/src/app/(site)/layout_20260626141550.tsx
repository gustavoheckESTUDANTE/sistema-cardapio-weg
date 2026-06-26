import Header from "@/components/componentsa/organisms/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="bg-blue-200 flex flex-col min-h-screen w-full">
			<Header />
			<div className="w-[95%] m-auto flex flex-col flex-1 py-6">
				{children}
			</div>
		</main>
	);
}
