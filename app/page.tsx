import type { Metadata } from "next";
import Link from "next/link";
import { User } from "lucide-react";
import Alliances from "@/components/Alliances";

export const metadata: Metadata = {
	title: "Auditoría y Consultoría Regional",
	description:
		"Firma de auditoría, consultoría fiscal, financiera y de TI con más de 15 años de experiencia en Guatemala y la región centroamericana. Estándares internacionales al servicio de su empresa.",
	openGraph: {
		title: "Rabanales y Asociados S.C. | Auditoría y Consultoría Regional",
		description:
			"Más de 15 años de experiencia en auditoría y consultoría para empresas de la región centroamericana.",
	},
};

import {
	ShieldCheck,
	BarChart3,
	Calculator,
	Briefcase,
	Globe2,
	ArrowRight,
} from "lucide-react";

export default function Home() {
	const services = [
		{
			title: "Auditoría Financiera",
			description:
				"Servicios de atestiguamiento y revisión de estados financieros bajo estándares internacionales.",
			icon: <ShieldCheck className="h-8 w-8 text-accent" />,
			url: "/servicios#auditoria-financiera",
		},
		{
			title: "Consultoría Fiscal",
			description:
				"Asesoría estratégica para el cumplimiento y optimización de obligaciones tributarias.",
			icon: <Calculator className="h-8 w-8 text-accent" />,
			url: "/servicios#fiscal",
		},
		{
			title: "Consultoría Financiera",
			description:
				"Análisis de operaciones, fusiones, adquisiciones y sistematización contable.",
			icon: <BarChart3 className="h-8 w-8 text-accent" />,
			url: "/servicios#financiera",
		},
		{
			title: "Asesoría de Negocios",
			description:
				"Control interno administrativo y consultoría técnica especializada.",
			icon: <Briefcase className="h-8 w-8 text-accent" />,
			url: "/servicios#financiera",
		},
	];

	return (
		<main className="bg-white">
			<section className="relative min-h-[85vh] sm:h-[90vh] flex items-center py-16 sm:py-0">
				<div className="absolute inset-0 z-0">
					<div
						className="absolute inset-0 bg-cover bg-scroll desktop:bg-fixed bg-center"
						style={{
							backgroundImage: "url('/hero-bg.png')",
							filter: "brightness(0.5)",
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
				</div>

				<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
					<div className="max-w-3xl">
						<h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-bold tracking-tight text-white mb-4 sm:mb-6">
							Excelencia en <br />
							<span className="text-accent italic">
								Auditoría y Consultoría
							</span>
						</h1>
						<p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 text-slate-200 mb-6 sm:mb-10">
							Más de 15 años de experiencia profesional en áreas
							contables, financieras, control administrativo y
							fiscal.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
							<Link
								href="/servicios"
								className="rounded-full bg-white text-primary px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-center hover:bg-accent hover:text-white transition-all"
							>
								Nuestros Servicios
							</Link>
							<Link
								href="/contact"
								className="rounded-full border border-white/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white text-center backdrop-blur-sm hover:bg-white/10 transition-all"
							>
								Hablar con un Socio
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 bg-slate-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
						<div>
							<h2 className="text-xs sm:text-sm font-semibold leading-7 text-accent uppercase tracking-widest mb-2 sm:mb-4">
								Quiénes Somos
							</h2>
							<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6 leading-tight">
								Trayectoria, Integridad y <br />
								Visión Estratégica
							</h3>
							<p className="text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-600 mb-4 sm:mb-8">
								Contamos con una amplia experiencia en asesorías
								de entidades comerciales, industriales,
								construcciones, servicios, financieras,
								entidades gubernamentales y no lucrativas, y
								proyectos de organismos internacionales.
							</p>
							<p className="text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-600">
								Hemos acumulado experiencia en auditoría y
								consultoría fiscal y financiera, sistematización
								contable computarizada, así como de trabajos
								especiales y de atestiguamiento.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3 sm:gap-4">
							<div className="glass-card p-4 sm:p-8 rounded-2xl border-l-4 border-accent">
								<span className="block text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
									15+
								</span>
								<span className="text-[11px] sm:text-base text-slate-500 uppercase tracking-wider">
									Años de Experiencia
								</span>
							</div>
							<div className="glass-card p-4 sm:p-8 rounded-2xl border-l-4 border-accent">
								<span className="block text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
									Regional
								</span>
								<span className="text-[11px] sm:text-base text-slate-500 uppercase tracking-wider">
									Presencia en 5+ Países
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary sm:text-4xl">
							Soluciones Profesionales
						</h2>
						<p className="mt-2 sm:mt-4 text-base sm:text-lg text-slate-600">
							Servicios especializados para el crecimiento y
							seguridad de su empresa.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="group p-5 sm:p-8 rounded-2xl border border-slate-100 hover:shadow-sm hover:border-slate-200 transition-all duration-300"
							>
								<div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
									{" "}
									{service.icon}{" "}
								</div>
								<h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-4">
									{" "}
									{service.title}{" "}
								</h4>
								<p className="text-slate-600 text-sm sm:text-base leading-relaxed sm:leading-6 mb-4 sm:mb-6">
									{" "}
									{service.description}{" "}
								</p>
								<Link
									href={service.url}
									className="text-accent flex items-center gap-2 text-sm sm:text-base font-bold group/link hover:text-primary"
								>
									Explorar <ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						))}
					</div>

					<div className="text-center mt-8 sm:mt-16">
						<p className="mt-2 sm:mt-4 text-sm sm:text-lg leading-relaxed text-slate-600 max-w-4xl mx-auto">
							Nuestra experiencia incluye la ejecución y dirección
							de varios proyectos tales como auditorías
							financieras y fiscales, auditorías internas,
							análisis de operaciones y su impacto contable y
							fiscal, revisiones del Impuesto Sobre la Renta de
							empresas nacionales y transnacionales, aspectos
							contables, financieros y fiscales de fusiones y
							adquisiciones
						</p>
					</div>
				</div>
			</section>

			<Alliances />

			<section className="py-14 sm:py-24 bg-slate-50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
						<div className="flex-1">
							<Globe2 className="h-8 w-8 sm:h-12 sm:w-12 text-accent mb-4 sm:mb-6" />
							<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-3 sm:mb-6">
								Presencia Internacional
							</h2>
							<p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
								Operamos de manera estratégica en puntos clave
								de la región para brindar un servicio local con
								visión global.
							</p>
							<ul className="grid grid-cols-1 gap-2.5 sm:gap-3 sm:grid-cols-2">
								{[
									"México",
									"Centroamérica",
									"Panamá",
									"República Dominicana",
									"Colombia",
									"Honduras (B. de Occidente)",
								].map((country) => (
									<li
										key={country}
										className="flex items-center gap-2 text-sm sm:text-base text-slate-600"
									>
										<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
										{country}
									</li>
								))}
							</ul>
						</div>
						<div className="flex-1 w-full h-[260px] sm:h-[400px] bg-slate-100 rounded-2xl relative overflow-hidden">
							<div className="absolute inset-0 flex items-center justify-center text-slate-300">
								<Globe2 className="h-32 w-32 sm:h-48 sm:w-48 opacity-20" />
							</div>
							<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-ping" />
							<div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" />
							<div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-bounce" />
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-12 sm:py-24 shadow-2xl sm:px-24 xl:py-32">
						<div className="absolute top-0 left-0 w-full h-full opacity-10">
							<div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
						</div>
						<div className="relative z-10 text-center max-w-2xl mx-auto">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold tracking-tight text-white">
								¿Listo para fortalecer su seguridad financiera?
							</h2>
							<p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-300">
								Inicie una conversación con nuestros expertos
								hoy mismo y descubra cómo podemos potenciar su
								crecimiento.
							</p>
							<div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6">
								<Link
									href="/contact"
									className="bg-white text-primary flex items-center gap-2 rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-accent hover:text-white transition-all"
								>
									Contactar <User className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
