import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
	title: "Contactar",
	description:
		"Contáctenos para asesoría en auditoría, consultoría fiscal y financiera. Oficina central en Guatemala con presencia regional en Centroamérica y Latinoamérica.",
	openGraph: {
		title: "Contactar | Rabanales y Asociados S.C.",
		description:
			"Hable con un socio de Rabanales y Asociados. Respondemos a la brevedad.",
	},
};

export default function Contact() {
	return (
		<main className="bg-white">
			<section className="bg-primary pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4 sm:mb-6">
						Contactar con un{" "}
						<span className="text-accent">Socio</span>
					</h1>
					<p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed sm:leading-8 font-sans">
						Estamos listos para asesorarle en sus desafíos
						financieros y fiscales. Trabajamos para brindarle
						respuestas oportunas y adaptadas a sus necesidades.
					</p>
				</div>
			</section>

			<section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
						<div className="space-y-8 sm:space-y-12">
							<div>
								<h2 className="text-xl sm:text-2xl font-montserrat font-bold text-primary mb-4 sm:mb-8">
									Información Regional
								</h2>
								<div className="space-y-5 sm:space-y-8">
									<div className="flex gap-3 sm:gap-4 items-start">
										<div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 shrink-0">
											<MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
										</div>
										<div>
											<h4 className="font-montserrat font-bold text-primary text-xs sm:text-base uppercase tracking-wider mb-1">
												Oficina Central
											</h4>
											<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
												23 calle 14-58 zona 4 de Mixco,{" "}
												<br />
												Condado Naranjo. Edificio CRECE,{" "}
												<br />
												Torre 1, Oficina 1104.
												Guatemala.
											</p>
										</div>
									</div>

									<div className="flex gap-3 sm:gap-4 items-center">
										<div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 shrink-0">
											<Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
										</div>
										<div>
											<h4 className="font-montserrat font-bold text-primary text-xs sm:text-base uppercase tracking-wider mb-1">
												Teléfono Directo
											</h4>
											<p className="text-sm sm:text-base text-slate-600 font-sans">
												(+502) 2215-7303
											</p>
										</div>
									</div>

									<div className="flex gap-3 sm:gap-4 items-start">
										<div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 shrink-0 mt-0.5">
											<Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
										</div>
										<div className="min-w-0 flex-1">
											<h4 className="font-montserrat font-bold text-primary text-xs sm:text-base uppercase tracking-wider mb-1">
												Canal de Consultas
											</h4>
											<p className="text-slate-600 font-sans text-xs sm:text-sm md:text-base break-all">
												infoauditoria
												<wbr />
												@rabanalesyasociados.com
											</p>
										</div>
									</div>

									<div className="flex gap-3 sm:gap-4 items-center">
										<div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 shrink-0">
											<Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
										</div>
										<div>
											<h4 className="font-montserrat font-bold text-primary text-xs sm:text-base uppercase tracking-wider mb-1">
												Horario de Atención
											</h4>
											<p className="text-sm sm:text-base text-slate-600 font-sans">
												Lunes a Viernes: 8:00 AM - 5:00
												PM
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-100 hidden lg:flex items-center gap-4 sm:gap-6">
								<Shield className="h-8 w-8 sm:h-12 sm:w-12 text-primary opacity-20 shrink-0" />
								<p className="text-xs sm:text-base text-slate-500 italic leading-relaxed font-sans">
									"Sus datos serán tratados con la más alta
									confidencialidad y bajo estándares de
									calidad y de protección de información
									financiera."
								</p>
							</div>
						</div>

						<ContactForm />
					</div>

					<div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-100 flex items-center gap-4 sm:gap-6 lg:hidden mt-4">
						<Shield className="h-8 w-8 sm:h-12 sm:w-12 text-primary opacity-20 shrink-0" />
						<p className="text-xs sm:text-base text-slate-500 italic leading-relaxed font-sans">
							"Sus datos serán tratados con la más alta
							confidencialidad y bajo estándares de calidad y de
							protección de información financiera."
						</p>
					</div>
				</div>
			</section>

			<section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
				<div className="mx-auto max-w-7xl">
					<div className="h-[280px] sm:h-[400px] relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 overflow-hidden rounded-xl sm:rounded-2xl">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.091523989217!2d-90.54213282542617!3d14.650745775848097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1003197d7f1%3A0x658c3ace759e1fde!2sEdificio%20crece!5e0!3m2!1ses-419!2sgt!4v1778625958447!5m2!1ses-419!2sgt"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Ubicación Rabanales y Asociados S.C."
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
