import Menu from "@/components/components/organisms/menu/page";

export default function Home() {
	return (
		<>
			<div className="w-full h-full flex justify-center items-center mb-10 mt-10">
				<div className="flex flex-row gap-5 content-center items-center h-full">
					<Menu diaSemana={"Segunda-Feira"}></Menu>
					<Menu diaSemana={"Terça-Feira"}></Menu>
					<Menu diaSemana={"Quarta-Feira"}></Menu>
					<Menu diaSemana={"Quinta-Feira"}></Menu>
					<Menu diaSemana={"Sexta-Feira"}></Menu>
				</div>
			</div>
		</>
	);
}
