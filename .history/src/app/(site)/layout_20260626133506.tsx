import Header from "@/components/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="bg-blue-200 flex-col h-screen w-full">
			<Header />
			<div className="w-[95%] m-auto flex-1 min-h-0">
				{children}
			</div>
		</main >
	);
}
