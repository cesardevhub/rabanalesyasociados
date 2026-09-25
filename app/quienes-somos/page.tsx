import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Globe2, Target, Eye, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
	title: "Quiénes Somos | Rabanales y Asociados S.C.",
	description:
		"Firma de auditoría y consultoría con más de 15 años de experiencia regional. Conoce nuestra filosofía, trayectoria y presencia internacional.",
	openGraph: {
		title: "Quiénes Somos | Rabanales y Asociados S.C.",
		description:
			"Firma de auditoría y consultoría con más de 15 años de experiencia regional.",
	},
};

const valores = [
	{
		icon: <Shield className="h-7 w-7 text-accent" />,
		title: "Integridad",
		description:
			"Actuamos con honestidad y transparencia en cada compromiso profesional, manteniendo los más altos estándares éticos.",
	},
	{
		icon: <Award className="h-7 w-7 text-accent" />,
		title: "Excelencia Técnica",
		description:
			"Aplicamos normas profesionales de aceptación internacional y metodologías propias que garantizan resultados de la más alta calidad.",
	},
	{
		icon: <Shield className="h-7 w-7 text-accent" />,
		title: "Confidencialidad",
		description:
			"Protegemos la información financiera de nuestros clientes con los protocolos de seguridad y discreción más rigurosos.",
	},
	{
		icon: <Heart className="h-7 w-7 text-accent" />,
		title: "Compromiso",
		description:
			"Cumplimos estrictamente los plazos y compromisos adquiridos, respaldando la gestión estratégica de cada organización.",
	},
];

export default function QuienesSomos() {
	return (
		<main className="bg-white">
			<section className="bg-primary pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
				<div className="mx-auto max-w-7xl relative z-10">
					<span className="text-accent font-montserrat font-bold tracking-[0.3em] uppercase text-xs mb-3 sm:mb-4 block">
						Rabanales y Asociados S.C.
					</span>
					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 sm:mb-8 leading-tight">
						Trayectoria, Integridad <br />
						<span className="italic font-normal">
							y Visión Estratégica
						</span>
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
						Más de 15 años brindando servicios de auditoría y
						consultoría con los más altos estándares profesionales a
						nivel regional.
					</p>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
						<div>
							<h2 className="text-xs sm:text-base font-semibold leading-7 text-accent uppercase tracking-widest mb-2 sm:mb-4">
								Sobre la Firma
							</h2>
							<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6 leading-tight">
								Una firma construida <br /> sobre la confianza
							</h3>
							<p className="text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-600 mb-6 sm:mb-8">
								Somos una firma de Auditoría, Consultoría Fiscal
								y de Negocios integrada por Contadores Públicos
								y Auditores con más de 10 años de ejercicio
								profesional en el país.
							</p>
							<ul className="space-y-4 sm:space-y-5 text-sm sm:text-base">
								<li className="flex items-start gap-4 text-slate-600">
									<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>
										Trabajo personalizado en cada área de la
										firma, respaldado por la experiencia
										acumulada de todos los que la conforman.
									</span>
								</li>
								<li className="flex items-start gap-4 text-slate-600">
									<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>
										Profesionales con experiencia específica
										en cada área, garantizando la más alta
										calidad en los servicios que prestamos.
									</span>
								</li>
								<li className="flex items-start gap-4 text-slate-600">
									<span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
									<span>
										Servicios diseñados para agregar valor a
										nuestros clientes, así como otros
										servicios profesionales relacionados que
										complementan su gestión.
									</span>
								</li>
							</ul>
						</div>
						<div className="grid grid-cols-2 gap-3 sm:gap-4">
							<div className="border border-slate-100 p-5 sm:p-8 rounded-2xl">
								<span className="block text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
									15+
								</span>
								<span className="text-xs sm:text-base text-slate-500 uppercase tracking-wider font-sans">
									Años de Experiencia
								</span>
							</div>
							<div className="border border-slate-100 p-5 sm:p-8 rounded-2xl">
								<span className="block text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
									5+
								</span>
								<span className="text-xs sm:text-base text-slate-500 uppercase tracking-wider font-sans">
									Países con Presencia
								</span>
							</div>
							<div className="border border-slate-100 p-5 sm:p-8 rounded-2xl col-span-2">
								<span className="block text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
									4
								</span>
								<span className="text-xs sm:text-base text-slate-500 uppercase tracking-wider font-sans">
									Divisiones Especializadas
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
				<div className="mx-auto max-w-7xl">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-xs sm:text-base font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-4">
							Nuestra Filosofía
						</h2>
						<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
							Misión, Visión y Valores
						</h3>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
						<div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 flex flex-col gap-4 sm:gap-6">
							<div className="p-3.5 sm:p-4 bg-slate-50 w-fit rounded-2xl">
								<Target className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
							</div>
							<div>
								<h4 className="text-lg sm:text-xl font-montserrat font-bold text-primary mb-2 sm:mb-4">
									Misión
								</h4>
								<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
									Velamos por el patrimonio de nuestros
									clientes y contribuimos a su sostenibilidad
									en las distintas ramas de la industria, a
									través de servicios que generan valor,
									logran ahorros y minimizan riesgos.
								</p>
							</div>
						</div>
						<div className="bg-primary rounded-3xl p-6 sm:p-10 flex flex-col gap-4 sm:gap-6">
							<div className="p-3.5 sm:p-4 bg-white/10 w-fit rounded-2xl">
								<Eye className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
							</div>
							<div>
								<h4 className="text-lg sm:text-xl font-montserrat font-bold text-white mb-2 sm:mb-4">
									Visión
								</h4>
								<p className="text-sm sm:text-base text-white font-medium leading-relaxed font-sans">
									Ser la mejor firma prestadora de servicios
									profesionales en forma personalizada,
									cumpliendo con los más altos estándares de
									calidad a través de prácticas de
									profesionalización internacional.
								</p>
							</div>
						</div>
						<div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 flex flex-col gap-4 sm:gap-6">
							<div className="p-3.5 sm:p-4 bg-slate-50 w-fit rounded-2xl">
								<Globe2 className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
							</div>
							<div>
								<h4 className="text-lg sm:text-xl font-montserrat font-bold text-primary mb-2 sm:mb-4">
									Alcance
								</h4>
								<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
									Operamos en puntos clave de Latinoamérica,
									con sede en Guatemala y presencia activa en
									México, Honduras, República Dominicana y
									Colombia.
								</p>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{valores.map((valor, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-100 group"
							>
								<div className="mb-4 sm:mb-6 p-3 bg-slate-50 w-fit rounded-xl">
									{valor.icon}
								</div>
								<h5 className="text-base sm:text-lg font-montserrat font-bold text-primary mb-2 sm:mb-3">
									{valor.title}
								</h5>
								<p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
									{valor.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
						<div className="border-l-2 border-accent pl-5 sm:pl-8">
							<p className="text-xs sm:text-base font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-3">
								Nuestro enfoque
							</p>
							<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
								Proveemos servicios con personal profesional
								altamente calificado, trabajando de manera
								conjunta con cada cliente para alcanzar la
								calidad que su organización requiere.
							</p>
						</div>
						<div className="border-l-2 border-accent pl-5 sm:pl-8">
							<p className="text-xs sm:text-base font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-3">
								Nuestro compromiso
							</p>
							<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
								Contribuimos con la comunidad de negocios
								mediante un comportamiento de alta calidad y
								ética transparente, siendo referencia segura en
								la profesión y sustento de nuestra reputación en
								el mercado.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
				<div className="mx-auto max-w-5xl text-center">
					<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6">
						¿Quiere conocer más sobre la firma?
					</h2>
					<p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto font-sans">
						Nuestro equipo de socios está disponible para brindarle
						información detallada sobre nuestra trayectoria y
						metodología de trabajo.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<Link
							href="/quienes-somos/antecedentes"
							className="rounded-full border-2 border-primary px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-base font-bold text-primary hover:bg-primary hover:text-white transition-all text-center"
						>
							Nuestra Historia
						</Link>
						<Link
							href="/contact"
							className="rounded-full bg-primary px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-base font-bold text-white hover:bg-primary/80 transition-all text-center"
						>
							Contactar un Socio
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
