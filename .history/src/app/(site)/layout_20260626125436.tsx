import Header from "@/components/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="bg-blue-200">
			<Header />
			<div className=" w-[95%] m-auto h-full">
				{children}
			</div>
		</main >
	);
}
