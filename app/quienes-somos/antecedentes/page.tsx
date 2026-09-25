import type { Metadata } from "next";
import Link from "next/link";
import {
	MapPin,
	Users,
	Globe2,
	Award,
	Building2,
	TrendingUp,
	Briefcase,
	CheckCircle,
	GraduationCap,
	BookOpen,
	Star,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Antecedentes | Rabanales y Asociados S.C.",
	description:
		"Más de 20 años de trayectoria en auditoría y consultoría. Conoce la historia, evolución y clientes destacados de Rabanales y Asociados S.C.",
	openGraph: {
		title: "Antecedentes | Rabanales y Asociados S.C.",
		description:
			"Historia y evolución de Rabanales y Asociados S.C., firma regional de auditoría y consultoría.",
	},
};

const timeline = [
	{
		year: "2001",
		label: "Fundación",
		title: "Oficina Profesional Contable y Auditoría",
		description:
			"El Licenciado Rabanales López inicia operaciones en Guatemala con una empresa dedicada a contabilidades externas, sentando las bases de lo que se convertiría en una firma regional de referencia.",
		accent: true,
	},
	{
		year: "2007",
		label: "Transformación",
		title: "Nace Rabanales y Asociados, S.C.",
		description:
			"Atendiendo las necesidades crecientes de los clientes, la firma se transforma y constituye formalmente como Rabanales y Asociados, S.C., ampliando su oferta a Auditoría, Sistematización Contable, Consultoría Fiscal y Legal, Financiera y Gerencial.",
		accent: false,
	},
	{
		year: "2010",
		label: "Especialización",
		title: "División de Consultoría Fiscal y Legal",
		description:
			"Se crea la División de Consultoría Fiscal y Legal bajo la dirección del Lic. Gustavo Cabria, quien aporta más de 8 años de trayectoria al área, consolidando la estructura de cuatro divisiones de la firma.",
		accent: true,
	},
	{
		year: "Hoy",
		label: "Presencia Regional",
		title: "Firma con Alcance Latinoamericano",
		description:
			"Con presencia activa en México, Centroamérica, Panamá, República Dominicana y Colombia, y como miembro de Cayco International Allied Global Firms, la firma atiende grupos corporativos multinacionales.",
		accent: false,
	},
];

const cifras = [
	{
		valor: "15+",
		etiqueta: "Años de experiencia",
		icono: <Award className="h-6 w-6 text-accent" />,
	},
	{
		valor: "16+",
		etiqueta: "Clientes regionales",
		icono: <Users className="h-6 w-6 text-accent" />,
	},
	{
		valor: "5+",
		etiqueta: "Países con presencia",
		icono: <Globe2 className="h-6 w-6 text-accent" />,
	},
	{
		valor: "4",
		etiqueta: "Divisiones especializadas",
		icono: <Briefcase className="h-6 w-6 text-accent" />,
	},
];

const fases = [
	{
		fase: "Fase 1",
		periodo: "2001 – 2006",
		titulo: "Orígenes",
		descripcion:
			"La firma nace como una oficina de contabilidades externas en Guatemala, especializada en auditoría financiera y asesoría contable para el sector comercial e industrial.",
		items: [
			"Servicios de contabilidad externa",
			"Asesoría fiscal y auditoria financiera",
			"Primeros clientes del sector comercial",
			"Equipo fundador con enfoque técnico",
		],
		icono: <Building2 className="h-8 w-8 text-accent" />,
	},
	{
		fase: "Fase 2",
		periodo: "2007 – 2009",
		titulo: "Expansión",
		descripcion:
			"Con la constitución formal de la sociedad, la firma diversifica sus servicios y amplía su base de clientes a grupos empresariales en toda la región centroamericana.",
		items: [
			"Constitución formal de la S.C.",
			"Sistematización contable computarizada",
			"Consultoría Fiscal, Legal y Financiera",
			"Expansión a clientes regionales clave",
		],
		icono: <TrendingUp className="h-8 w-8 text-accent" />,
	},
	{
		fase: "Fase 3",
		periodo: "2010 – Presente",
		titulo: "Profesionalización",
		descripcion:
			"La firma alcanza su estructura actual con cuatro divisiones especializadas, adopción plena de estándares internacionales e integración a la red global Cayco International.",
		items: [
			"Cuatro divisiones especializadas",
			"Normas profesionales de aceptación internacional",
			"Membresía en Cayco International",
			"Presencia activa en 5+ países",
		],
		icono: <Globe2 className="h-8 w-8 text-accent" />,
	},
];

const sectores = [
	{ sector: "Entidades comerciales e industriales" },
	{ sector: "Instituciones financieras y bancarias" },
	{ sector: "Construcción y servicios" },
	{ sector: "Organismos internacionales" },
	{ sector: "Entidades gubernamentales" },
	{ sector: "Organizaciones no lucrativas (ONG)" },
	{ sector: "Grupos energéticos multinacionales" },
	{ sector: "Empresas agropecuarias y agroindustriales" },
];

const clientes = [
	{
		nombre: "Banco de Occidente, S.A.",
		sector: "Financiero",
		cobertura: "Honduras",
	},
	{
		nombre: "Grupo BAC-Credomatic-VISA",
		sector: "Financiero",
		cobertura: "Honduras · Nicaragua · C.R.",
	},
	{ nombre: "Grupo Castine Energy", sector: "Energía", cobertura: "Mundial" },
	{
		nombre: "Grupo TAS Corp.",
		sector: "Corporativo",
		cobertura: "Latinoamérica",
	},
	{ nombre: "Seguros Crefisa", sector: "Seguros", cobertura: "Honduras" },
	{
		nombre: "Grupo John Deere",
		sector: "Agroindustrial",
		cobertura: "Honduras",
	},
	{ nombre: "Grupo CENDEMA", sector: "Corporativo", cobertura: "Regional" },
	{
		nombre: "Wellco Corporation",
		sector: "Corporativo",
		cobertura: "Regional",
	},
	{
		nombre: "Grupo Ayco Farms y Agrobassy",
		sector: "Agroindustrial",
		cobertura: "Mundial",
	},
	{ nombre: "Grupo Health Care", sector: "Salud", cobertura: "Regional" },
	{ nombre: "Grupo ISERTEC", sector: "Tecnología", cobertura: "Regional" },
	{ nombre: "Grupo Profilaxis", sector: "Salud", cobertura: "Regional" },
];

const credenciales = [
	{
		icono: <GraduationCap className="h-5 w-5 text-accent" />,
		texto: "Contador Público y Auditor, USAC",
	},
	{
		icono: <BookOpen className="h-5 w-5 text-accent" />,
		texto: "Pensum Cerrado, Maestría en Derecho Tributario, USAC",
	},
	{
		icono: <Star className="h-5 w-5 text-accent" />,
		texto: "Colegiado CPA No. 6006",
	},
	{
		icono: <Users className="h-5 w-5 text-accent" />,
		texto: "Catedrático, Facultad de Ciencias Económicas, USAC",
	},
	{
		icono: <Award className="h-5 w-5 text-accent" />,
		texto: "Comisión de Eventos Académicos y Científicos 2015-2017",
	},
];

export default function Antecedentes() {
	return (
		<main className="bg-white">

			<section className="bg-primary pt-24 sm:pt-32 pb-14 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
				<div className="mx-auto max-w-7xl relative z-10">
					<span className="text-accent font-montserrat font-bold tracking-[0.3em] uppercase text-xs mb-3 sm:mb-4 block">
						Quiénes Somos
					</span>
					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 sm:mb-8 leading-tight">
						Antecedentes <br />
						<span className="italic font-normal">de la Firma</span>
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
						Más de 15 años de trayectoria construidos sobre la
						confianza, la integridad y el compromiso con la
						excelencia técnica en cada etapa de nuestro crecimiento.
					</p>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-4">
							Nuestra Historia
						</h2>
						<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
							Línea de Tiempo
						</h3>
						<p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans">
							Cada etapa de nuestra evolución refleja el
							compromiso con nuestros clientes y la región.
						</p>
					</div>

					{/* Hito destacado */}
					<div className="mb-10 sm:mb-16 bg-slate-50 rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto">
						<p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans italic">
							"De una pequeña oficina contable fundada en 2001 a
							una firma regional con presencia en más de cinco
							países latinoamericanos y membresía en una red
							internacional de firmas aliadas — nuestra historia
							es la de un equipo que crece junto con sus
							clientes."
						</p>
					</div>

					{/* Timeline vertical */}
					<div className="relative max-w-3xl mx-auto">
						<div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />
						<div className="space-y-6 sm:space-y-10">
							{timeline.map((item, i) => (
								<div
									key={i}
									className="relative flex gap-4 sm:gap-8 items-start group"
								>
									<div className="relative z-10 shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl font-montserrat font-bold text-xs sm:text-base text-white bg-primary">
										{item.year}
									</div>
									<div className="flex-1 pb-2">
										<span className="text-[11px] sm:text-base font-bold text-accent uppercase tracking-widest block mb-1">
											{item.label}
										</span>
										<h4 className="text-base sm:text-xl font-montserrat font-bold text-primary mb-1 sm:mb-2">
											{item.title}
										</h4>
										<p className="text-slate-600 text-xs sm:text-base leading-relaxed font-sans">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CIFRAS CLAVE */}
			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
						{cifras.map((c, i) => (
							<div
								key={i}
								className="border border-slate-100 bg-white p-5 sm:p-8 rounded-2xl"
							>
								<div className="mb-2 sm:mb-4">{c.icono}</div>
								<span className="block text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
									{c.valor}
								</span>
								<span className="text-xs sm:text-base text-slate-500 uppercase tracking-wider font-sans">
									{c.etiqueta}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FASES DE EVOLUCIÓN */}
			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-4">
							Evolución
						</h2>
						<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
							Tres Etapas de Crecimiento
						</h3>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
						{fases.map((fase, i) => (
							<div
								key={i}
								className="group p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-accent/30 transition-all"
							>
								<div className="mb-4 sm:mb-6 p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-accent/10 transition-colors">
									{fase.icono}
								</div>
								<span className="text-accent text-xs sm:text-base font-bold uppercase tracking-widest block mb-1">
									{fase.fase} · {fase.periodo}
								</span>
								<h4 className="text-lg sm:text-xl font-montserrat font-bold text-primary mb-2 sm:mb-3">
									{fase.titulo}
								</h4>
								<p className="text-slate-600 text-xs sm:text-base leading-relaxed font-sans mb-4 sm:mb-6">
									{fase.descripcion}
								</p>
								<ul className="space-y-2.5 sm:space-y-3">
									{fase.items.map((item, j) => (
										<li
											key={j}
											className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-base text-slate-700 font-sans"
										>
											<CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* EXPERIENCIA ACUMULADA / SECTORES */}
			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
						<div>
							<h2 className="text-xs sm:text-sm font-semibold leading-7 text-accent uppercase tracking-widest mb-2 sm:mb-4">
								Experiencia Acumulada
							</h2>
							<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6 leading-tight">
								Amplia cobertura <br /> sectorial
							</h3>
							<p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans mb-6 sm:mb-8">
								A lo largo de nuestra trayectoria hemos
								desarrollado experiencia sólida en múltiples
								industrias, lo que nos permite entender las
								particularidades operativas, fiscales y
								financieras de cada sector.
							</p>
							<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
								Esta diversidad sectorial, combinada con el
								rigor de las normas profesionales
								internacionales que aplicamos, es uno de los
								pilares de nuestro valor diferenciado.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
							{sectores.map((s, i) => (
								<div
									key={i}
									className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 bg-white rounded-xl border border-slate-100 hover:border-accent/30 transition-all group"
								>
									<div className="shrink-0 w-2 h-2 rounded-full bg-accent transition-transform" />
									<span className="text-xs sm:text-base font-semibold text-primary">
										{s.sector}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CLIENTES DESTACADOS */}
			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-4">
							Referencias
						</h2>
						<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
							Clientes que nos Respaldan
						</h3>
						<p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans">
							Grupos empresariales nacionales e internacionales
							que han confiado en nuestra firma para sus procesos
							de auditoría y consultoría.
						</p>
					</div>

					<div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white">
						<table className="w-full text-xs sm:text-base">
							<thead>
								<tr className="bg-primary text-white">
									<th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-montserrat font-bold tracking-wide">
										Cliente
									</th>
									<th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-montserrat font-bold tracking-wide">
										Sector
									</th>
									<th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-montserrat font-bold tracking-wide">
										Cobertura
									</th>
								</tr>
							</thead>
							<tbody>
								{clientes.map((c, i) => (
									<tr
										key={i}
										className={`border-t border-slate-50 hover:bg-slate-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}
									>
										<td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-primary">
											{c.nombre}
										</td>
										<td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-600 font-sans">
											{c.sector}
										</td>
										<td className="px-4 sm:px-6 py-3 sm:py-4">
											<span className="inline-flex items-center gap-1.5 text-slate-600 font-sans">
												<MapPin className="h-3.5 w-3.5 text-accent" />
												{c.cobertura}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-400 text-center font-sans">
						Lista representativa. La firma atiende a muchos más
						clientes en la región, entre otros.
					</p>
				</div>
			</section>

			{/* EQUIPO FUNDADOR */}
			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
				<div className="mx-auto max-w-7xl">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-2 sm:mb-4">
							Liderazgo
						</h2>
						<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
							Equipo Fundador
						</h3>
						<p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans">
							Profesionales cuya trayectoria y visión dieron
							origen y forma a lo que hoy es Rabanales y Asociados
							S.C.
						</p>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="rounded-3xl border border-slate-100 overflow-hidden bg-white">
							<div className="bg-primary p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
								<div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 flex items-center justify-center">
									<span className="text-2xl sm:text-3xl font-montserrat font-bold text-white">
										JR
									</span>
								</div>
								<div>
									<h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-1">
										Lic. Juan S. Rabanales
									</h3>
									<span className="text-accent font-semibold text-xs sm:text-base uppercase tracking-widest">
										Contador Público y Auditor · CEO
									</span>
									<p className="mt-3 sm:mt-4 text-slate-300 leading-relaxed font-sans text-xs sm:text-base max-w-xl">
										Fundador de la firma y Socio Director,
										con una trayectoria profesional de más
										de 20 años en auditoría financiera,
										consultoría fiscal y precios de
										transferencia. Impulsó la evolución de
										una oficina contable a una firma
										regional miembro de Cayco International.
									</p>
								</div>
							</div>
							<div className="p-6 sm:p-10">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
									{credenciales.map((c, i) => (
										<div
											key={i}
											className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-base text-slate-600 font-sans"
										>
											<span className="shrink-0 mt-0.5">
												{c.icono}
											</span>
											{c.texto}
										</div>
									))}
								</div>
								<div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
									<div className="text-center sm:text-left">
										<span className="block text-xs sm:text-base text-slate-400 uppercase tracking-widest mb-1 font-sans">
											Especialidades
										</span>
										<div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 justify-center sm:justify-start">
											{[
												"Auditoría Financiera",
												"Consultoría Fiscal",
												"Precios de Transferencia",
												"Derecho Tributario",
											].map((esp, i) => (
												<span
													key={i}
													className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] sm:text-base font-semibold text-primary"
												>
													{esp}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-5xl text-center">
					<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6">
						Una firma con visión de futuro
					</h2>
					<p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto font-sans">
						Nuestra historia es el reflejo del compromiso con
						nuestros clientes y la región. Contáctenos para conocer
						cómo podemos apoyar el crecimiento de su organización.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<Link
							href="/servicios"
							className="rounded-full border-2 border-primary px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-base font-bold text-primary hover:bg-primary hover:text-white transition-all text-center"
						>
							Nuestros Servicios
						</Link>
						<Link
							href="/contact"
							className="rounded-full bg-primary px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-base font-bold text-white hover:bg-primary/80 transition-all text-center"
						>
							Hablar con un Socio
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
