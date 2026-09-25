export default function Alliances() {
	const financialAlliance = {
		category: "Sector Financiero & Seguros",
		items: [
			"Banco de Occidente, S.A. Honduras",
			"Grupo BAC-Credomatic-VISA Honduras",
			"Seguros Crefisa Honduras",
			"Grupo TAS Corp. Nivel Latinoamericano",
		],
	};

	const agroAlliance = {
		category: "Agroindustria & Energía",
		items: [
			"Grupo Castine Energy a Nivel Mundial",
			"Grupo Ayco Farms y Agrobassy, Nivel Mundial",
			"Grupo Profilaxis Nivel Regional",
			"Grupo ISERTEC Nivel Regional",
		],
	};

	const servicesAlliance = {
		category: "Servicios, Salud & Logística",
		items: [
			"Grupo John Deree Honduras",
			"Grupo CENDEMA Nivel Regional",
			"Wellco Corporation Nivel Regional",
			"CBI International -Guatemala-",
			"Eventus Guatemala",
			"Grupo Health Care Nivel Regional",
			"Grupo Tecnofijaciones Guatemala",
			"Transportes Hernández Guatemala",
		],
	};

	return (
		<section className="relative py-14 sm:py-24 bg-primary overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-32 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
				<div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

				<div className="absolute -top-10 left-6 opacity-10 hidden md:block text-accent">
					<svg
						viewBox="0 0 120 120"
						fill="none"
						className="w-48 h-48 stroke-current"
						strokeWidth="0.8"
					>
						<circle cx="60" cy="60" r="50" strokeDasharray="3 3" />
						<ellipse cx="60" cy="60" rx="50" ry="20" />
						<ellipse cx="60" cy="60" rx="20" ry="50" />
						<line x1="10" y1="60" x2="110" y2="60" />
						<line x1="60" y1="10" x2="60" y2="110" />
					</svg>
				</div>

				<div className="absolute top-10 right-8 opacity-10 hidden md:block text-accent">
					<svg
						viewBox="0 0 100 100"
						fill="none"
						className="w-40 h-40 stroke-current"
						strokeWidth="0.8"
					>
						<circle cx="50" cy="50" r="36" strokeDasharray="2 3" />
						<line x1="50" y1="4" x2="50" y2="96" />
						<line x1="4" y1="50" x2="96" y2="50" />
						<line x1="17" y1="17" x2="83" y2="83" />
						<line x1="17" y1="83" x2="83" y2="17" />
					</svg>
				</div>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-white tracking-tight mb-2 sm:mb-3">
						Nuestras Alianzas
					</h2>
					<p className="text-sm sm:text-base lg:text-lg text-slate-200 font-sans">
						Entre los principales grupos atendidos a nivel Regional
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
					<div className="group relative rounded-2xl border border-white/20 bg-white/[0.07] p-2 sm:p-2.5 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-[0_12px_40px_rgba(0,163,224,0.25)] flex flex-col">
						<div className="relative flex-1 rounded-xl border border-white/10 p-5 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
							<div className="absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none opacity-20 transition-opacity duration-300 group-hover:opacity-35 text-accent">
								<svg
									viewBox="0 0 100 100"
									fill="none"
									className="w-14 h-14 sm:w-20 sm:h-20 stroke-current"
									strokeWidth="1.2"
								>
									<circle
										cx="50"
										cy="50"
										r="42"
										stroke="currentColor"
									/>
									<ellipse
										cx="50"
										cy="50"
										rx="42"
										ry="18"
										stroke="currentColor"
										transform="rotate(-15 50 50)"
									/>
									<ellipse
										cx="50"
										cy="50"
										rx="18"
										ry="42"
										stroke="currentColor"
										transform="rotate(-15 50 50)"
									/>
									<line
										x1="8"
										y1="50"
										x2="92"
										y2="50"
										stroke="currentColor"
										transform="rotate(-15 50 50)"
									/>
								</svg>
							</div>

							<div>
								<h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white tracking-tight leading-tight mb-4 sm:mb-8">
									Sector Financiero <br />
									&amp; Seguros
								</h3>
								<ul className="space-y-3 sm:space-y-4">
									{financialAlliance.items.map(
										(item, idx) => (
											<li
												key={idx}
												className="flex items-center gap-2.5 sm:gap-3 text-white/90 text-sm sm:text-base font-medium tracking-wide transition-colors group-hover:text-white"
											>
												<span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_var(--color-accent)]" />
												<span>{item}</span>
											</li>
										),
									)}
								</ul>
							</div>
						</div>
					</div>

					<div className="group relative rounded-2xl border border-white/20 bg-white/[0.07] p-2 sm:p-2.5 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-[0_12px_40px_rgba(0,163,224,0.25)] flex flex-col">
						<div className="relative flex-1 rounded-xl border border-white/10 p-5 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">

							<div className="absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none opacity-20 transition-opacity duration-300 group-hover:opacity-35 text-accent">
								<svg
									viewBox="0 0 100 100"
									fill="none"
									className="w-14 h-14 sm:w-20 sm:h-20 stroke-current"
									strokeWidth="1.3"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M25 82 C 35 62, 48 44, 70 30" />
									<path d="M70 30 C 85 24, 90 37, 76 46 C 62 54, 55 42, 70 30 Z" />
									<path d="M70 30 C 74 38, 76 42, 76 46" />
									<path d="M48 44 C 40 34, 50 22, 62 27 C 68 32, 60 42, 48 44 Z" />
									<path d="M48 44 C 54 36, 58 32, 62 27" />
								</svg>
							</div>

							<div>

								<h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white tracking-tight leading-tight mb-4 sm:mb-8">
									Agroindustria <br />
									&amp; Energía
								</h3>

								<ul className="space-y-3 sm:space-y-4">
									{agroAlliance.items.map((item, idx) => (
										<li
											key={idx}
											className="flex items-center gap-2.5 sm:gap-3 text-white/90 text-sm sm:text-base font-medium tracking-wide transition-colors group-hover:text-white"
										>
											<span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_var(--color-accent)]" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className="group relative rounded-2xl border border-white/20 bg-white/[0.07] p-2 sm:p-2.5 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-[0_12px_40px_rgba(0,163,224,0.25)] flex flex-col">
						<div className="relative flex-1 rounded-xl border border-white/10 p-5 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">

							<div className="absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none opacity-20 transition-opacity duration-300 group-hover:opacity-35 text-accent">
								<svg
									viewBox="0 0 100 100"
									fill="none"
									className="w-14 h-14 sm:w-20 sm:h-20 stroke-current"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle
										cx="50"
										cy="50"
										r="34"
										stroke="currentColor"
										strokeDasharray="2 3"
										opacity="0.6"
									/>
									<polygon
										points="50,12 54,46 50,46"
										fill="currentColor"
										opacity="0.7"
									/>
									<polygon
										points="50,12 46,46 50,46"
										stroke="currentColor"
									/>
									<polygon
										points="50,88 46,54 50,54"
										fill="currentColor"
										opacity="0.7"
									/>
									<polygon
										points="50,88 54,54 50,54"
										stroke="currentColor"
									/>
									<polygon
										points="12,50 46,46 46,50"
										fill="currentColor"
										opacity="0.7"
									/>
									<polygon
										points="12,50 46,54 46,50"
										stroke="currentColor"
									/>
									<polygon
										points="88,50 54,54 54,50"
										fill="currentColor"
										opacity="0.7"
									/>
									<polygon
										points="88,50 54,46 54,50"
										stroke="currentColor"
									/>
									<line
										x1="24"
										y1="24"
										x2="76"
										y2="76"
										stroke="currentColor"
										opacity="0.6"
									/>
									<line
										x1="24"
										y1="76"
										x2="76"
										y2="24"
										stroke="currentColor"
										opacity="0.6"
									/>
									<circle
										cx="50"
										cy="50"
										r="2.5"
										fill="currentColor"
									/>
								</svg>
							</div>

							<div>

								<h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white tracking-tight leading-tight mb-4 sm:mb-8">
									Servicios, Salud <br />
									&amp; Logística
								</h3>


								<ul className="space-y-3 sm:space-y-3.5">
									{servicesAlliance.items.map((item, idx) => (
										<li
											key={idx}
											className="flex items-center gap-2.5 sm:gap-3 text-white/90 text-sm sm:text-base font-medium tracking-wide transition-colors group-hover:text-white"
										>
											<span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_var(--color-accent)]" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
