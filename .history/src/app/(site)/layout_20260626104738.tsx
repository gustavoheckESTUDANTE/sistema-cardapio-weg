import Header from "@/components/header/page";

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
				<Header/>
				<div className="className="w-[95%] m-auto>

				</div>
				{children}
		</main>
	);
}
