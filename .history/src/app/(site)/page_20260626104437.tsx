import Menu from "@/components/menu/organisms/menu/page";

export default function Home() {
	return (
		<>
			<div className="w-full h-full flex justify-center items-center">
				<div className="flex justify content-center items-center">
					<div className="flex flex-row gap-5 content-center items-center">
						<Menu></Menu>
						<Menu></Menu>
						<Menu></Menu>
						<Menu></Menu>
						<Menu></Menu>
						<Menu></Menu>
					</div>
				</div>
			</div>
		</>
	);
}
