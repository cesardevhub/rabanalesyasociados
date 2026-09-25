import type { Metadata } from "next";
import {
	ShieldCheck,
	Calculator,
	BarChart3,
	Cpu,
	CheckCircle2,
	ArrowRight,
	ChevronDown,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Servicios Profesionales",
	description:
		"Auditoría financiera, consultoría fiscal y legal, consultoría financiera y de negocios, y tecnología de la información para empresas de la región centroamericana.",
	openGraph: {
		title: "Servicios Profesionales | Rabanales y Asociados S.C.",
		description:
			"Servicios especializados de auditoría y consultoría para empresas de la región.",
	},
};

const divisions = [
	{
		id: "auditoria",
		title: "División de Auditoría",
		icon: <ShieldCheck className="h-10 w-10 text-accent" />,
		description:
			"Proveemos servicios de auditoría orientados a validar información financiera para uso de la alta dirección, consejos de administración, inversionistas, instituciones de crédito y otros terceros interesados en la empresa. Evaluamos controles internos administrativos y contables para determinar el grado de confianza que se puede depositar en los mismos.",
		services: [
			"Auditoría de estados financieros",
			"Auditoría operacional",
			"Auditoría por segmentos",
			"Auditoría de organizaciones no gubernamentales",
			"Due Dilligence – Auditorías de compra",
			"Auditorías especiales",
		],
		faqs: [
			{
				q: "¿En qué consiste una auditoría de estados financieros?",
				a: "Es un examen independiente de los registros contables y estados financieros de una empresa, con el fin de emitir una opinión profesional sobre si presentan razonablemente la situación financiera de la organización conforme a las Normas Internacionales de Información Financiera (NIIF).",
			},
			{
				q: "¿Cuándo necesita mi empresa una auditoría externa?",
				a: "Es recomendable cuando la empresa accede a financiamiento bancario, tiene socios o inversionistas que requieren información verificada, opera bajo contratos gubernamentales, o cuando la alta dirección necesita validar la confiabilidad de sus controles internos. En sectores regulados puede ser obligatoria por ley.",
			},
			{
				q: "¿Qué es un Due Diligence y en qué casos aplica?",
				a: "Es un proceso de revisión profunda de los estados financieros, controles y operaciones de una empresa, típicamente realizado antes de una compra, fusión o inversión. Permite al comprador o inversor conocer con precisión los riesgos y el valor real de la empresa objetivo.",
			},
			{
				q: "¿Qué diferencia hay entre una auditoría financiera y una operacional?",
				a: "La auditoría financiera verifica que los estados financieros reflejen fielmente la situación de la empresa. La auditoría operacional evalúa la eficiencia y efectividad de los procesos internos, identificando áreas de mejora en la gestión y las operaciones.",
			},
		],
	},
	{
		id: "fiscal",
		title: "Consultoría Fiscal y Legal",
		icon: <Calculator className="h-10 w-10 text-accent" />,
		description:
			"Servicio encaminado a verificar que las empresas cumplan con las disposiciones tributarias vigentes, así como ayudarlas en su planeación de impuestos y orientarlas sobre los posibles problemas fiscales en sus decisiones gerenciales; así como los aspectos legales relacionados.",
		services: [
			"Diagnóstico fiscal operativo",
			"Asesoría permanente de impuestos",
			"Planificación tributaria",
			"Asesoría en defensa por reparos fiscales",
			"Recursos ante la Administración Tributaria y Tribunal Administrativo",
			"Defensa en casos de demandas por defraudación tributaria",
			"Auditoría y asesoría en devolución de créditos fiscales",
			"Revisión de declaraciones de impuestos",
			"Calificaciones a leyes de incentivos fiscales",
			"Registro de marcas y patentes",
			"Constitución de empresas individuales y jurídicas",
		],
		faqs: [
			{
				q: "¿Qué es la planificación tributaria y cómo beneficia a mi empresa?",
				a: "Es el análisis estratégico de la situación fiscal de su empresa para optimizar la carga impositiva dentro del marco legal vigente. Permite anticipar obligaciones fiscales, aprovechar incentivos y exenciones legales, y tomar decisiones gerenciales con pleno conocimiento de sus implicaciones tributarias.",
			},
			{
				q: "¿Qué hago si recibo un reparo fiscal de la SAT u otra autoridad tributaria?",
				a: "Contamos con especialistas en defensa fiscal que analizan la procedencia del reparo, preparan la documentación de respaldo y representan a su empresa ante la Administración Tributaria y el Tribunal Administrativo, buscando la resolución más favorable dentro de los plazos legales establecidos.",
			},
			{
				q: "¿Pueden ayudarnos a constituir nuestra empresa legalmente?",
				a: "Sí. Apoyamos en la constitución de empresas individuales y jurídicas, el registro de marcas y patentes, y la calificación a leyes de incentivos fiscales, asegurando que su empresa inicie operaciones con una estructura legal y fiscal sólida.",
			},
			{
				q: "¿Qué incluye el diagnóstico fiscal operativo?",
				a: "Es una revisión integral del cumplimiento tributario de su empresa: declaraciones presentadas, impuestos pagados, retenciones aplicadas y posibles contingencias fiscales. Resulta especialmente útil antes de una auditoría de la autoridad tributaria o al iniciar una relación comercial importante.",
			},
		],
	},
	{
		id: "financiera",
		title: "Consultoría Financiera y de Negocios",
		icon: <BarChart3 className="h-10 w-10 text-accent" />,
		description:
			"Permite que pongamos en práctica nuestro conocimiento de los negocios tanto locales como internacionales, dominio de la tecnología y el enfoque práctico de nuestros especialistas en Consultoría, nos permite ofrecer soluciones en un contexto complejo e implementar soluciones que son más efectivas y ayudar a su empresa a ser más eficiente, más competitiva y más rentable.",
		services: [
			"Análisis de estados financieros",
			"Planificación financiera y presupuestos",
			"Valuación de empresas",
			"Formulación y evaluación de proyectos",
			"Reestructuración administrativa",
			"Fusiones y Adquisiciones",
			"Diagnósticos de Productividad y rentabilidad",
			"Reorganización y estructuración de sociedades",
			"Outsourcing de personal",
			"Factoraje",
			"Estudios de precios de transferencia",
		],
		faqs: [
			{
				q: "¿Para qué sirve la valuación de empresas?",
				a: "Determina el valor económico real de una empresa con base en sus activos, flujos de caja, posición en el mercado y proyecciones. Es indispensable en procesos de venta, fusión, incorporación de socios o negociaciones con inversionistas y entidades financieras.",
			},
			{
				q: "¿Qué son los estudios de precios de transferencia?",
				a: "Son análisis que verifican que las transacciones entre empresas relacionadas —grupos empresariales o filiales internacionales— se realicen a precios de mercado, cumpliendo con las normativas fiscales internacionales y evitando contingencias ante las autoridades tributarias.",
			},
			{
				q: "¿En qué casos conviene el outsourcing de personal contable?",
				a: "Cuando la empresa requiere optimizar costos administrativos, acceder a personal especializado sin carga laboral directa, o cubrir necesidades contables en períodos de alta demanda o transición. Permite enfocarse en el negocio principal mientras se garantiza el cumplimiento financiero y fiscal.",
			},
			{
				q: "¿Qué implica una reestructuración administrativa?",
				a: "Es un rediseño integral de la organización, procesos y estructura de la empresa para mejorar su eficiencia operativa, reducir costos y aumentar su competitividad. Incluye diagnóstico, diseño del nuevo modelo y acompañamiento durante la implementación.",
			},
		],
	},
	{
		id: "it",
		title: "Tecnología de la Información - IT",
		icon: <Cpu className="h-10 w-10 text-accent" />,
		description:
			"Nuestros servicios en esta división están enfocados en la optimización tecnológica de los procesos contables y administrativos, asegurando que la tecnología sea un aliado estratégico en la toma de decisiones.",
		services: [
			"Diseño e instalación de programas de contabilidad",
			"Diseño de programas específicos",
			"Evaluación de sistemas de información",
			"Asesoría en adquisición de software y hardware",
			"E-commerce y soluciones digitales",
			"E-government",
			"Auditorías de Programas Informáticos",
		],
		faqs: [
			{
				q: "¿Qué es una auditoría de programas informáticos?",
				a: "Es una revisión técnica e independiente de los sistemas de información de su empresa —software, bases de datos, controles de acceso y procesos automatizados— para verificar su integridad, seguridad y confiabilidad como soporte a la toma de decisiones.",
			},
			{
				q: "¿Nos pueden asesorar para elegir el software contable adecuado?",
				a: "Sí. Evaluamos las necesidades específicas de su organización y las comparamos con las soluciones disponibles en el mercado, brindando una recomendación objetiva e independiente sobre el software y hardware más conveniente para su operación.",
			},
			{
				q: "¿Qué soluciones de e-commerce ofrecen?",
				a: "Apoyamos en el diseño e implementación de plataformas de comercio electrónico adaptadas a las necesidades de su empresa, integrando procesos contables y administrativos para garantizar trazabilidad financiera desde la venta hasta el registro contable.",
			},
			{
				q: "¿En qué consiste la evaluación de sistemas de información?",
				a: "Es un diagnóstico técnico del estado actual de los sistemas que usa su empresa: qué tan bien soportan los procesos de negocio, qué riesgos representan y qué mejoras se recomiendan para optimizar la gestión y el control interno.",
			},
		],
	},
];

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: divisions.flatMap((d) =>
		d.faqs.map((faq) => ({
			"@type": "Question",
			name: faq.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.a,
			},
		})),
	),
};

export default function Services() {
	return (
		<main className="bg-white">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			<section className="bg-primary pt-16 sm:pt-32 pb-10 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
				<div className="mx-auto max-w-7xl relative z-10">
					<span className="text-accent font-montserrat font-bold tracking-[0.3em] uppercase text-[11px] sm:text-xs mb-2.5 sm:mb-4 block">
						Rabanales y Asociados S.C.
					</span>
					<h1 className="text-2xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-3 sm:mb-8 max-w-4xl leading-tight">
						Servicios Profesionales de <br />
						<span className="italic font-normal">
							Alto Impacto Regional
						</span>
					</h1>
					<p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
						Combinamos la experiencia de nuestros socios con una
						visión tecnológica moderna para ofrecer soluciones
						integrales en auditoría, consultoría y gestión
						empresarial.
					</p>
				</div>
			</section>

			<nav className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 hidden md:block">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex justify-start gap-12 py-5">
						{divisions.map((div) => (
							<a
								key={div.id}
								href={`#${div.id}`}
								className="text-xs md:text-sm font-montserrat font-bold uppercase tracking-widest text-primary/60 hover:text-accent transition-colors"
							>
								{div.id.toUpperCase()}
							</a>
						))}
					</div>
				</div>
			</nav>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="space-y-14 sm:space-y-32">
						{divisions.map((division, index) => (
							<div
								key={division.id}
								id={division.id}
								className="scroll-mt-24 sm:scroll-mt-32"
							>
								<div
									className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-16 items-start ${
										index % 2 !== 0
											? "lg:flex-row-reverse"
											: ""
									}`}
								>
									<div className="lg:col-span-5 space-y-4 sm:space-y-8">
										<div className="flex items-center gap-3 sm:gap-4">
											<div className="p-2.5 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-10 sm:[&>svg]:w-10 shrink-0">
												{division.icon}
											</div>
											<h2 className="text-lg sm:text-2xl lg:text-3xl font-montserrat font-bold text-primary leading-snug">
												{division.title}
											</h2>
										</div>
										<p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-sans">
											{division.description}
										</p>
										<div className="pt-2 sm:pt-4">
											<Link
												href="/contact"
												className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent/50 text-sm sm:text-base"
											>
												Solicitar Asesoría en esta área{" "}
												<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
											</Link>
										</div>
									</div>

									<div className="lg:col-span-7">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
											{division.services.map(
												(service, sIndex) => (
													<div
														key={sIndex}
														className="bg-slate-50/50 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 group"
													>
														<div className="flex gap-3 sm:gap-4">
															<CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
															<span className="text-xs sm:text-base font-semibold text-primary/80 leading-snug">
																{service}
															</span>
														</div>
													</div>
												),
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
				<div className="mx-auto max-w-7xl">
					<div className="text-center mb-10 sm:mb-16">
						<span className="text-accent font-montserrat font-bold tracking-[0.3em] uppercase text-xs mb-3 sm:mb-4 block">
							Resolvemos sus dudas
						</span>
						<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
							Preguntas Frecuentes
						</h2>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 sm:gap-y-14">
						{divisions.map((division) => (
							<div key={division.id}>
								<h3 className="text-xs sm:text-sm font-montserrat font-bold uppercase tracking-widest text-primary/40 mb-3 sm:mb-5 flex items-center gap-3">
									<span className="h-px flex-1 bg-slate-100" />
									{division.title}
									<span className="h-px flex-1 bg-slate-100" />
								</h3>
								<div className="space-y-2.5 sm:space-y-3">
									{division.faqs.map((faq, fIndex) => (
										<details
											key={fIndex}
											className="group border border-slate-100 rounded-xl overflow-hidden"
										>
											<summary className="flex items-center justify-between gap-4 p-3.5 sm:p-5 cursor-pointer list-none bg-slate-50/50 hover:bg-slate-50 transition-colors">
												<span className="text-xs sm:text-base font-semibold text-primary">
													{faq.q}
												</span>
												<ChevronDown className="h-4 w-4 text-accent shrink-0 transition-transform group-open:rotate-180" />
											</summary>
											<div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-2 sm:pt-3 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
												{faq.a}
											</div>
										</details>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-14 sm:py-24 bg-slate-50 border-t border-slate-100">
				<div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
					<h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6">
						¿No encuentra el servicio específico que necesita?
					</h3>
					<p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
						Nuestro equipo de socios tiene la capacidad de diseñar
						trámites especiales y auditorías a medida según la
						complejidad de su organización.
					</p>
					<Link
						href="/contact"
						className="rounded-full bg-primary px-6 sm:px-12 py-3.5 sm:py-5 text-xs sm:text-base font-bold text-white hover:bg-primary/80 transition-all inline-block"
					>
						Consultar con un Especialista
					</Link>
				</div>
			</section>
		</main>
	);
}
