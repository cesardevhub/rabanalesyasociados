import type { Metadata } from "next";
import Link from "next/link";
import {
	AlertTriangle,
	FileCheck,
	Scale,
	ShieldAlert,
	Copyright,
	ExternalLink,
	Mail,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Términos y Condiciones de Uso",
	description:
		"Términos, condiciones de uso y aviso legal del sitio web de Rabanales y Asociados S.C., Contadores Públicos, Auditores y Asesores de Negocios.",
	openGraph: {
		title: "Términos y Condiciones | Rabanales y Asociados S.C.",
		description:
			"Aviso legal y condiciones que rigen el acceso y uso del portal oficial de Rabanales y Asociados S.C.",
	},
};

export default function TerminosPage() {
	return (
		<main className="bg-white">

			<section className="bg-primary pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
						<Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
						Marco Legal y Regulatorio
					</div>
					<h1 className="text-2xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-3 sm:mb-4">
						Términos y{" "}
						<span className="text-accent">Condiciones</span>
					</h1>
					<p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
						Condiciones generales de uso, aviso legal y deslinde de
						responsabilidad profesional aplicables a la navegación y
						utilización del portal web de Rabanales y Asociados S.C.
					</p>
					<p className="text-xs sm:text-base text-slate-400 mt-2 sm:mt-3">
						Última actualización: Septiembre de 2026
					</p>
				</div>
			</section>

			<section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<div className="prose prose-slate max-w-none space-y-6 sm:space-y-10 text-xs sm:text-base text-slate-600 font-sans leading-relaxed">
						{/* 1. Aceptación */}
						<div>
							<div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
								<FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
								<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary m-0">
									1. Aceptación de los Términos
								</h2>
							</div>
							<p>
								El acceso, navegación y utilización del sitio
								web <strong>rabanalesyasociados.com</strong> (en
								adelante, el &ldquo;Sitio Web&rdquo;) atribuye
								la condición de usuario e implica la aceptación
								plena y sin reservas de todas y cada una de las
								disposiciones contenidas en estos Términos y
								Condiciones. Si el usuario no está de acuerdo
								con alguno de los términos aquí estipulados,
								deberá abstenerse de utilizar este sitio.
							</p>
						</div>

						{/* 2. AVISO LEGAL Y DESLINDE PROFESIONAL (CRÍTICO) */}
						<div className="bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-4 sm:p-6">
							<div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
								<AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
								<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary m-0">
									2. Deslinde de Responsabilidad Profesional
									(Disclaimer)
								</h2>
							</div>
							<p className="text-slate-800 font-medium">
								La información y contenidos publicados en este
								portal web (incluyendo resúmenes de servicios,
								descripciones de normas tributarias,
								financieras, contables o de auditoría) tienen un
								propósito{" "}
								<strong>
									exclusivamente informativo y general
								</strong>
								.
							</p>
							<ul className="list-disc pl-4 sm:pl-5 mt-2.5 sm:mt-3 space-y-1.5 text-slate-600">
								<li>
									<strong>
										No constituye dictamen ni asesoría
										vinculante:
									</strong>{" "}
									Ningún contenido del Sitio Web debe
									considerarse como una opinión pericial,
									dictamen contable, asesoramiento fiscal
									particular ni recomendación legal directa
									para situaciones específicas.
								</li>
								<li>
									<strong>Formalización de servicios:</strong>{" "}
									La consulta de este sitio no crea una
									relación profesional cliente-firma. Toda
									relación de prestación de servicios
									profesionales se formaliza única y
									exclusivamente mediante la firma de una{" "}
									<em>Carta Convenio (Engagement Letter)</em>{" "}
									o contrato de servicios profesionales
									debidamente suscrito por los socios
									autorizados de Rabanales y Asociados S.C.
								</li>
								<li>
									<strong>Dinámica normativa:</strong> Las
									leyes tributarias, normas internacionales de
									auditoría (NIA) y de información financiera
									(NIIF) están sujetas a reformas y
									variaciones continuas. Rabanales y Asociados
									S.C. no garantiza que toda la información
									disponible en el portal se encuentre
									permanentemente actualizada en tiempo real
									respecto a cambios legislativos inmediatos.
								</li>
							</ul>
						</div>

						{/* 3. Propiedad Intelectual */}
						<div>
							<div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
								<Copyright className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
								<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary m-0">
									3. Derechos de Propiedad Intelectual e
									Industrial
								</h2>
							</div>
							<p>
								Todos los contenidos de este Sitio Web
								—incluyendo de manera enunciativa más no
								limitativa: marcas, nombres comerciales,
								logotipos, isotipos, textos, metodologías de
								trabajo descritas, fotografías, material
								multimedia, diseño gráfico y código fuente— son
								propiedad exclusiva de{" "}
								<strong>Rabanales y Asociados S.C.</strong> o de
								terceros que han otorgado su autorización de
								uso, encontrándose protegidos por la legislación
								guatemalteca e internacional de propiedad
								intelectual y derechos de autor.
							</p>
							<p className="mt-2.5">
								Queda expresamente prohibida la reproducción,
								distribución, comunicación pública,
								transformación o explotación no autorizada de
								dichos contenidos sin el consentimiento previo y
								por escrito de Rabanales y Asociados S.C.
							</p>
						</div>

						{/* 4. Uso debido del sitio */}
						<div>
							<div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
								<ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
								<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary m-0">
									4. Obligaciones y Uso Debido del Usuario
								</h2>
							</div>
							<p>
								El usuario se compromete a hacer un uso
								diligente y lícito del portal web y de sus
								formularios de contacto, absteniéndose de:
							</p>
							<ul className="list-disc pl-4 sm:pl-5 space-y-1.5 text-slate-600">
								<li>
									Introducir o difundir virus informáticos,
									malware o cualquier sistema técnico
									susceptible de provocar daños en los
									sistemas de la firma o de terceros.
								</li>
								<li>
									Utilizar el formulario de contacto para el
									envío masivo de publicidad no solicitada
									(SPAM), cadenas o información falsa.
								</li>
								<li>
									Intentar acceder a áreas restringidas,
									vulnerar medidas de autenticación o realizar
									ingeniería inversa sobre el portal.
								</li>
							</ul>
						</div>

						{/* 5. Enlaces a terceros */}
						<div>
							<div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
								<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
								<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary m-0">
									5. Enlaces a Sitios Web de Terceros
								</h2>
							</div>
							<p>
								El Sitio Web puede contener enlaces o
								referencias a portales de entidades
								gubernamentales, organismos profesionales
								reguladores (SAT, IGCPA, IFAC) o instituciones
								aliadas. Rabanales y Asociados S.C. no ejerce
								control sobre dichos sitios externos y no asume
								responsabilidad alguna por sus contenidos,
								políticas de privacidad o disponibilidad
								técnica.
							</p>
						</div>

						{/* 6. Limitación de responsabilidad */}
						<div>
							<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary mb-2">
								6. Disponibilidad del Servicio y Limitación de
								Responsabilidad
							</h2>
							<p>
								Rabanales y Asociados S.C. realiza esfuerzos
								continuos para garantizar el óptimo
								funcionamiento y disponibilidad del Sitio Web.
								No obstante, no asume responsabilidad por
								interrupciones temporales del servicio debidas a
								tareas de mantenimiento técnico, incidencias en
								las redes de telecomunicaciones, causas de
								fuerza mayor o eventos fuera del control
								razonable de la firma.
							</p>
						</div>

						{/* 7. Legislación y jurisdicción */}
						<div>
							<div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
								<Scale className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
								<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary m-0">
									7. Legislación Aplicable y Jurisdicción
								</h2>
							</div>
							<p>
								Los presentes Términos y Condiciones se rigen e
								interpretan de conformidad con las leyes de la{" "}
								<strong>República de Guatemala</strong>. Para
								cualquier controversia, litigio o reclamación
								derivada de la interpretación o ejecución de
								este documento o del uso del portal web, las
								partes se someten expresamente a la jurisdicción
								de los tribunales competentes de la Ciudad de
								Guatemala, renunciando a cualquier otro fuero
								que pudiera corresponderles por razón de sus
								domicilios presentes o futuros.
							</p>
						</div>

						{/* 8. Contacto */}
						<div className="border-t border-slate-200 pt-5 sm:pt-6">
							<h2 className="text-base sm:text-xl font-montserrat font-bold text-primary mb-2">
								8. Consultas Legales
							</h2>
							<p>
								Para cualquier consulta, aclaración o
								notificación relativa a los presentes Términos y
								Condiciones, puede dirigirse a:
							</p>
							<div className="mt-2.5 sm:mt-3 flex items-center gap-2.5 p-3 sm:p-3.5 bg-slate-50 border border-slate-200 rounded-xl min-w-0">
								<Mail className="w-4 h-4 text-accent shrink-0" />
								<p className="font-semibold text-primary break-all text-xs sm:text-base">
									infoauditoria
									<wbr />
									@rabanalesyasociados.com
								</p>
							</div>
						</div>

						{/* Link a privacidad */}
						<div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center not-prose flex flex-col sm:flex-row items-center justify-between gap-3">
							<div className="text-left">
								<h4 className="font-bold text-primary text-xs sm:text-base">
									¿Desea revisar cómo protegemos sus datos?
								</h4>
								<p className="text-slate-600 text-xs sm:text-base">
									Consulte los detalles en nuestra Política de
									Privacidad.
								</p>
							</div>
							<Link
								href="/privacidad"
								className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded-full text-xs sm:text-base transition-all shrink-0"
							>
								Ver Política de Privacidad
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
