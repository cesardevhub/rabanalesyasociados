import type { Metadata } from "next";
import {
	ShieldCheck,
	UserCheck,
	Clock,
	Award,
	CheckCircle,
	TrendingUp,
	Calculator,
	BarChart3,
	Cpu,
	Briefcase,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Metodología y Calidad",
	description:
		"Conoce la metodología de trabajo de Rabanales y Asociados: normas internacionales, control de calidad riguroso y servicio personalizado en cada proyecto.",
	openGraph: {
		title: "Metodología y Calidad | Rabanales y Asociados S.C.",
		description:
			"Normas internacionales, control de calidad y servicio personalizado.",
	},
};

export default function Metodologia() {
	const pillars = [
		{
			title: "Control de Calidad",
			icon: <ShieldCheck className="h-8 w-8 text-accent" />,
			text: "Todos nuestros trabajos se realizan bajo normas profesionales de aceptación internacional y la metodología propia de la firma, cumpliendo con los más altos estándares de calidad global.",
		},
		{
			title: "Servicio Personalizado",
			icon: <UserCheck className="h-8 w-8 text-accent" />,
			text: "Nuestros socios y personal profesional están siempre disponibles para atender sus necesidades y consultas con una relación personal, rápida y oportuna en cada fase del servicio.",
		},
		{
			title: "Entrega Oportuna",
			icon: <Clock className="h-8 w-8 text-accent" />,
			text: "Cumplimos estrictamente las fechas planeadas para la presentación de informes, apoyando así la gestión patrimonial y estratégica de su representada.",
		},
	];

	return (
		<main className="bg-white">
			<section className="bg-primary pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
				<div className="mx-auto max-w-7xl">
					<span className="text-accent font-montserrat font-bold tracking-[0.3em] uppercase text-xs mb-3 sm:mb-4 block">
						Excelencia Operativa
					</span>
					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 sm:mb-8 leading-[1.1]">
						Nuestra Metodología <br />y{" "}
						<span className="italic font-normal text-accent font-sans">
							Compromiso de Calidad
						</span>
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
						Rabanales y Asociados es una firma especializada donde
						cada proceso está blindado por estándares de aceptación
						internacional.
					</p>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 md:border-none">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-8 text-balance">
						Un reto constante por la perfección técnica
					</h2>
					<p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans mb-8 sm:mb-12">
						Nuestra función es un reto continuo. El objetivo de
						nuestro control de calidad se centra en tres ejes
						fundamentales que garantizan la integridad de nuestros
						resultados:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-left">
						{[
							"Cumplimiento de normas profesionales internacionales.",
							"Planificación apropiada de procedimientos.",
							"Cumplimiento de leyes y resoluciones reguladoras.",
						].map((item, i) => (
							<div
								key={i}
								className="flex gap-3 items-start bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100"
							>
								<CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
								<span className="text-xs sm:text-base font-semibold text-primary/80">
									{item}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 md:pt-0 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
						{pillars.map((pillar, i) => (
							<div
								key={i}
								className="group p-6 sm:p-10 rounded-3xl border border-slate-100 md:last:col-span-2 md:last:w-1/2 md:last:mx-auto lg:last:col-span-1 lg:last:w-auto lg:last:mx-0"
							>
								<div className="mb-4 sm:mb-8 p-3 sm:p-4 bg-slate-50 w-fit rounded-2xl group-hover:bg-accent/10 transition-colors">
									{pillar.icon}
								</div>
								<h3 className="text-lg sm:text-xl font-montserrat font-bold text-primary mb-3 sm:mb-6">
									{pillar.title}
								</h3>
								<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
									{pillar.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				id="controles-internos"
				className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-20"
			>
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
						<div>
							<h2 className="text-xs sm:text-base font-bold text-accent uppercase tracking-[0.2em] mb-3 sm:mb-6">
								Controles de Calidad Internos
							</h2>
							<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-8 leading-tight">
								Nuestro personal profesional: <br />{" "}
								Seleccionado para competir globalmente
							</h3>
							<p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans mb-6 sm:mb-8">
								Tanto los socios como el personal profesional
								han sido seleccionados después de un cuidadoso
								proceso, reuniendo los estándares establecidos
								por la profesión para competir a nivel
								internacional con entrenamiento obtenido en
								Guatemala y en el exterior.
							</p>
							<div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
								<p className="text-sm sm:text-base text-slate-600 font-sans italic border-l-4 border-accent pl-4 sm:pl-6">
									"Contamos con programas de adiestramiento
									que incluyen un mínimo de horas anuales de
									participación en cursos especialmente
									preparados para cada uno de los niveles
									profesionales."
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-3 sm:gap-4">
							{[
								{
									name: "Temas Contables",
									icon: (
										<TrendingUp className="h-7 w-7 sm:h-10 sm:w-10" />
									),
								},
								{
									name: "Auditoría",
									icon: (
										<ShieldCheck className="h-7 w-7 sm:h-10 sm:w-10" />
									),
								},
								{
									name: "Fiscales",
									icon: (
										<Calculator className="h-7 w-7 sm:h-10 sm:w-10" />
									),
								},
								{
									name: "Financieros",
									icon: (
										<BarChart3 className="h-7 w-7 sm:h-10 sm:w-10" />
									),
								},
								{
									name: "Sistemas",
									icon: (
										<Cpu className="h-7 w-7 sm:h-10 sm:w-10" />
									),
								},
								{
									name: "Negocios",
									icon: (
										<Briefcase className="h-7 w-7 sm:h-10 sm:w-10" />
									),
								},
							].map((item, i) => (
								<div
									key={i}
									className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 flex flex-col gap-3 sm:gap-4"
								>
									<div className="text-accent">
										{item.icon}
									</div>
									<span className="text-xs sm:text-base font-bold text-primary tracking-tight">
										{item.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 bg-primary text-white overflow-hidden relative">
				<div className="absolute inset-0 opacity-10">
					<Award className="h-96 w-96 absolute -bottom-20 -right-20 rotate-12" />
				</div>
				<div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
					<h2 className="text-xl sm:text-3xl font-montserrat font-bold mb-6 sm:mb-8 italic">
						"Expresamos a ustedes el deseo de servirles y en espera
						de que nos puedan conceder una audiencia para aclarar
						panoramas e inquietudes."
					</h2>
					<div className="pt-6 sm:pt-10 border-t border-white/20 inline-block w-full max-w-xs">
						<p className="font-montserrat font-bold uppercase tracking-widest text-accent text-xs sm:text-base mb-1 sm:mb-2">
							Atentamente,
						</p>
						<p className="text-lg sm:text-xl font-sans font-light">
							La Dirección General
						</p>
						<p className="text-accent text-xs sm:text-base mt-1">
							Rabanales y Asociados S.C.
						</p>
					</div>
					<div className="mt-8 sm:mt-16">
						<Link
							href="/contact"
							className="rounded-full bg-white text-primary px-6 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base font-bold hover:bg-accent hover:text-white transition-all inline-block"
						>
							Agendar Audiencia Profesional
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
