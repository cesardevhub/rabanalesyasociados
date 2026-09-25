import type { Metadata } from "next";
import Link from "next/link";
import {
	ShieldCheck,
	Lock,
	Eye,
	FileText,
	Mail,
	Building2,
	Scale,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Política de Privacidad",
	description:
		"Política de privacidad y protección de datos personales de Rabanales y Asociados S.C., firma de auditoría y consultoría regional.",
	openGraph: {
		title: "Política de Privacidad | Rabanales y Asociados S.C.",
		description:
			"Conozca nuestro compromiso con la confidencialidad y la protección de su información personal y corporativa.",
	},
};

export default function PrivacidadPage() {
	return (
		<main className="bg-white">

			<section className="bg-primary pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
						<ShieldCheck className="w-4 h-4" />
						Transparencia y Confidencialidad
					</div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4 sm:mb-6">
						Política de{" "}
						<span className="text-accent">Privacidad</span>
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed sm:leading-8 font-sans">
						En Rabanales y Asociados S.C., la confidencialidad y el
						resguardo de la información constituyen principios
						fundamentales de nuestro ejercicio profesional en
						auditoría, consultoría fiscal y financiera.
					</p>
					<p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
						Última actualización: Septiembre de 2026
					</p>
				</div>
			</section>

			<section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl">
					<div className="prose prose-slate max-w-none space-y-8 sm:space-y-12 text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
						{/* 1. Responsable */}
						<div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-8">
							<div className="flex items-center gap-3 mb-3 sm:mb-4">
								<Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary m-0">
									1. Identificación del Responsable del
									Tratamiento
								</h2>
							</div>
							<p>
								El responsable del tratamiento de los datos
								personales recabados a través de este portal web
								es:
							</p>
							<ul className="list-disc pl-5 sm:pl-6 mt-3 space-y-1 text-slate-600">
								<li>
									<strong>Razón Social:</strong> Rabanales y
									Asociados S.C. (Contadores Públicos,
									Auditores y Asesores de Negocios).
								</li>
								<li>
									<strong>Sede Central:</strong> 23 calle
									14-58 zona 4 de Mixco, Condado Naranjo.
									Edificio CRECE, Torre 1, Oficina 1104,
									Ciudad de Guatemala, Guatemala.
								</li>
								<li>
									<strong>Teléfono de contacto:</strong>{" "}
									(+502) 2215-7303
								</li>
								<li>
									<strong>
										Correo electrónico de privacidad y
										consultas:
									</strong>{" "}
									infoauditoria
									<wbr />
									@rabanalesyasociados.com
								</li>
								<li>
									<strong>Ámbito de operación:</strong>{" "}
									Guatemala y cobertura en la región de
									Centroamérica y Latinoamérica.
								</li>
							</ul>
						</div>

						{/* 2. Datos que recopilamos */}
						<div>
							<div className="flex items-center gap-3 mb-3 sm:mb-4">
								<Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary m-0">
									2. Datos que Recopilamos
								</h2>
							</div>
							<p>
								A través de nuestro sitio web recopilamos{" "}
								<strong>única y exclusivamente</strong> la
								información que usted decide suministrarnos de
								manera voluntaria al completar nuestro
								formulario de contacto o al comunicarse
								directamente con nosotros:
							</p>
							<div className="mt-4 not-prose">
								<div className="p-4 sm:p-6 rounded-xl border border-slate-100 bg-white shadow-sm">
									<h3 className="font-bold text-primary text-sm sm:text-base mb-2 sm:mb-3">
										Datos provistos voluntariamente
									</h3>
									<ul className="list-disc pl-5 sm:pl-6 space-y-2 text-xs sm:text-base text-slate-600 leading-relaxed">
										<li>
											<strong>Nombre y apellido:</strong>{" "}
											Para identificar a la persona de
											contacto.
										</li>
										<li>
											<strong>Correo electrónico:</strong>{" "}
											Para responder a su solicitud o
											consulta.
										</li>
										<li>
											<strong>
												Nombre de su empresa o entidad:
											</strong>{" "}
											Para contextualizar su requerimiento
											profesional o institucional.
										</li>
										<li>
											<strong>Asunto y mensaje:</strong>{" "}
											Detalle de la consulta o necesidad
											en materia de auditoría, asesoría
											fiscal, financiera o de TI.
										</li>
									</ul>
								</div>
							</div>
							<p className="text-xs sm:text-base text-slate-500 mt-3 sm:mt-4 italic">
								* Nota: Rabanales y Asociados S.C. no realiza
								seguimiento de perfiles, no recopila datos de
								hábitos de navegación ni almacena historiales de
								búsqueda con fines publicitarios.
							</p>
						</div>

						{/* 3. Finalidad del tratamiento */}
						<div>
							<div className="flex items-center gap-3 mb-3 sm:mb-4">
								<FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary m-0">
									3. Finalidades del Tratamiento
								</h2>
							</div>
							<p>
								Los datos recabados son tratados con las
								siguientes finalidades legítimas:
							</p>
							<ul className="list-disc pl-5 sm:pl-6 space-y-2 text-slate-600">
								<li>
									Responder a consultas, solicitudes de
									información o propuestas de servicios
									profesionales en materia de auditoría,
									impuestos, finanzas y TI.
								</li>
								<li>
									Coordinar reuniones técnicas, evaluaciones
									preliminares y contacto comercial formal con
									los socios y directores de la firma.
								</li>
								<li>
									Garantizar la seguridad del portal web y
									prevenir fraudes o abusos cibernéticos.
								</li>
								<li>
									Cumplir con las disposiciones normativas y
									regulatorias vigentes en los países donde
									operamos.
								</li>
							</ul>
							<div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-accent/10 border border-accent/20 text-xs sm:text-base text-primary">
								<strong>
									Garantía de no comercialización:
								</strong>{" "}
								Rabanales y Asociados S.C. no comercializa, no
								alquila, no cede ni transfiere bajo ninguna
								circunstancia sus datos personales o información
								empresarial a terceros con fines publicitarios o
								comerciales.
							</div>
						</div>

						{/* 4. Estándar de confidencialidad profesional */}
						<div>
							<div className="flex items-center gap-3 mb-3 sm:mb-4">
								<Lock className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary m-0">
									4. Secreto Profesional y Confidencialidad
								</h2>
							</div>
							<p>
								Como firma constituida por Contadores Públicos,
								Auditores y Consultores Fiscales Colegiados,
								todo el personal y los socios de Rabanales y
								Asociados S.C. se rigen por el más estricto{" "}
								<strong>deber de secreto profesional</strong>,
								regulado tanto por el Código de Ética
								Profesional del Colegio de Contadores Públicos y
								Auditores de Guatemala (IGCPA/CCPA) como por el
								Código de Ética para Profesionales de la
								Contabilidad emitido por el IESBA (IFAC).
							</p>
							<p className="mt-3">
								Cualquier información comercial, contable o
								financiera compartida con nuestra firma será
								tratada bajo los más rigurosos estándares de
								confidencialidad corporativa.
							</p>
						</div>

						{/* 5. Conservación de datos */}
						<div>
							<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary mb-2 sm:mb-3">
								5. Plazos de Conservación de Datos
							</h2>
							<p>
								Conservamos los datos recabados únicamente
								durante el tiempo estrictamente necesario para
								cumplir con la finalidad para la cual fueron
								solicitados o mientras exista una relación
								contractual, precontractual o una obligación
								legal o fiscal aplicable que exija su retención.
							</p>
						</div>

						{/* 6. Medidas de seguridad */}
						<div>
							<div className="flex items-center gap-3 mb-3 sm:mb-4">
								<ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary m-0">
									6. Medidas de Seguridad
								</h2>
							</div>
							<p>
								Hemos implementado medidas técnicas,
								administrativas y organizativas de seguridad
								para proteger su información contra pérdida, uso
								indebido, acceso no autorizado, alteración o
								divulgación:
							</p>
							<ul className="list-disc pl-5 sm:pl-6 space-y-2 text-slate-600">
								<li>
									Cifrado de comunicaciones mediante
									protocolos SSL/TLS en todo el sitio web.
								</li>
								<li>
									Acceso restringido a las comunicaciones
									únicamente por parte de personal autorizado
									y debidamente capacitado.
								</li>
							</ul>
						</div>

						{/* 7. Derechos del titular */}
						<div>
							<div className="flex items-center gap-3 mb-3 sm:mb-4">
								<Scale className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0" />
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary m-0">
									7. Ejercicio de Derechos (Acceso,
									Rectificación y Cancelación)
								</h2>
							</div>
							<p>
								Usted tiene derecho a conocer qué datos
								personales tenemos en nuestros registros,
								solicitar su rectificación en caso de ser
								inexactos, pedir su supresión cuando considere
								que no son necesarios para los fines
								estipulados, u oponerse a su tratamiento.
							</p>
							<p className="mt-3">
								Para ejercer cualquiera de estos derechos, puede
								remitir una solicitud por escrito al correo:
							</p>
							<div className="mt-3 flex items-center gap-3 p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl min-w-0">
								<Mail className="w-5 h-5 text-accent shrink-0" />
								<p className="font-semibold text-primary break-all text-xs sm:text-sm md:text-base">
									infoauditoria
									<wbr />
									@rabanalesyasociados.com
								</p>
							</div>
						</div>

						{/* 8. Modificaciones */}
						<div className="border-t border-slate-200 pt-6 sm:pt-8">
							<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary mb-2 sm:mb-3">
								8. Modificaciones a la Presente Política
							</h2>
							<p>
								Rabanales y Asociados S.C. se reserva el derecho
								de actualizar o modificar esta Política de
								Privacidad periódicamente para reflejar cambios
								legales, normativos o de procedimientos
								internos. Toda modificación será publicada de
								forma visible en esta misma página web.
							</p>
						</div>

						{/* CTA Contacto */}
						<div className="bg-primary text-white rounded-2xl p-6 sm:p-8 text-center not-prose">
							<h3 className="text-lg sm:text-xl font-montserrat font-bold mb-2">
								¿Tiene alguna duda sobre nuestra política o el
								tratamiento de sus datos?
							</h3>
							<p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-4 sm:mb-6">
								Nuestro equipo está a su disposición para
								resolver cualquier inquietud relativa a la
								privacidad y confidencialidad de su información.
							</p>
							<Link
								href="/contact"
								className="inline-block bg-accent hover:bg-accent/90 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-base transition-all"
							>
								Contactar a la Firma
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
