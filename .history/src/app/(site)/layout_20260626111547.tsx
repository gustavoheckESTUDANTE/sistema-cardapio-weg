import Header from "@/components/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="bg-blue-100">
			<Header />
			<div className=" w-[95%] m-auto">
				{children}
			</div>
		</main >
	);
}
