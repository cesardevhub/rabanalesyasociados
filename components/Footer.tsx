import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-primary text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 xl:py-12 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-2.5 sm:space-y-4 xl:space-y-8">
						<h3 className="text-base sm:text-lg xl:text-xl font-montserrat font-bold tracking-tight">
							Rabanales y Asociados S.C.
						</h3>
						<p className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-6 text-slate-300 max-w-xs">
							Auditing, Tax Laws and Business Advisors. Contadores
							Públicos y Auditores.
						</p>
						<div className="flex space-x-6"></div>
					</div>
					<div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-1 md:gap-8">
							<div>
								<h3 className="text-xs sm:text-sm md:text-base font-semibold leading-6 text-accent">
									Divisiones
								</h3>
								<ul
									role="list"
									className="mt-2.5 sm:mt-3 xl:mt-6 space-y-2 sm:space-y-2.5 xl:space-y-4"
								>
									<li>
										<Link
											href="/servicios#auditoria"
											className="text-xs sm:text-sm md:text-base leading-6 text-slate-300 hover:text-white transition-colors"
										>
											Auditoría
										</Link>
									</li>
									<li>
										<Link
											href="/servicios#fiscal"
											className="text-xs sm:text-sm md:text-base leading-6 text-slate-300 hover:text-white transition-colors"
										>
											Consultoría Fiscal y Legal
										</Link>
									</li>
									<li>
										<Link
											href="/servicios#financiera"
											className="text-xs sm:text-sm md:text-base leading-6 text-slate-300 hover:text-white transition-colors"
										>
											Consultoría Financiera
										</Link>
									</li>
									<li>
										<Link
											href="/servicios#it"
											className="text-xs sm:text-sm md:text-base leading-6 text-slate-300 hover:text-white transition-colors"
										>
											Tecnología de IT
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-1 md:gap-8">
							<div>
								<h3 className="text-xs sm:text-sm md:text-base font-semibold leading-6 text-accent">
									Contacto Regional
								</h3>
								<ul
									role="list"
									className="mt-2.5 sm:mt-3 xl:mt-6 space-y-2 sm:space-y-2.5 xl:space-y-4"
								>
									<li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-6 text-slate-300">
										<MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
										<span>
											23 calle 14-58 zona 4 de Mixco,
											Condado Naranjo. Edificio CRECE,
											Torre 1, Oficina 1104
										</span>
									</li>
									<li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-6 text-slate-300">
										<Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
										<span>(+502) 2215-7303</span>
									</li>
									<li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-6 text-slate-300 min-w-0">
										<Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0 mt-0.5" />
										<p className="break-all hover:text-white transition-colors">
											infoauditoria
											<wbr />
											@rabanalesyasociados.com
										</p>
									</li>
									<li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-6 text-slate-300">
										<Globe className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
										<span>
											México - CA - Panamá - RD - Colombia
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6 sm:mt-8 xl:mt-16 border-t border-white/10 pt-4 sm:pt-6 xl:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
					<p className="text-[11px] sm:text-xs md:text-sm leading-5 text-slate-400 text-center md:text-left">
						&copy; {new Date().getFullYear()} Rabanales y Asociados
						S.C. Todos los derechos reservados.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs md:text-sm text-slate-400">
						<Link
							href="/terminos"
							className="hover:text-white transition-colors"
						>
							Términos y Condiciones
						</Link>
						<span className="text-white/20 hidden sm:inline">
							•
						</span>
						<Link
							href="/privacidad"
							className="hover:text-white transition-colors"
						>
							Política de Privacidad
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
