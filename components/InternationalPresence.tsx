import { MapPin } from "lucide-react";

interface Country {
	name: string;
	flag: string;
	focus: string;
	description: string;
	isHeadquarters?: boolean;
}

export default function InternationalPresence() {
	const countries: Country[] = [
		{
			name: "Guatemala",
			flag: "🇬🇹",
			focus: "Oficinas Principales & Operaciones",
			description:
				"Sede corporativa ubicada en Condado Naranjo, Ciudad de Guatemala. Centro directivo y operativo para auditoría, consultoría fiscal y financiera.",
			isHeadquarters: true,
		},
		{
			name: "Honduras",
			flag: "🇭🇳",
			focus: "Sector Financiero & Agroindustria",
			description:
				"Atención estratégica a reconocidas entidades bancarias, instituciones aseguradoras y grupos agroindustriales de primer nivel.",
		},
		{
			name: "México",
			flag: "🇲🇽",
			focus: "Consultoría Fiscal & Corporativa",
			description:
				"Asesoría y acompañamiento a corporaciones en planeación fiscal estratégica, auditoría y estructuración financiera binacional.",
		},
		{
			name: "Panamá",
			flag: "🇵🇦",
			focus: "Servicios Comerciales & Logística",
			description:
				"Soporte profesional a compañías comerciales y logísticas multinacionales en uno de los centros financieros clave de las Américas.",
		},
		{
			name: "Colombia",
			flag: "🇨🇴",
			focus: "Consultoría Técnica & Financiera",
			description:
				"Servicios de consultoría contable, control administrativo y trabajos especiales para grupos empresariales en expansión.",
		},
		{
			name: "República Dominicana",
			flag: "🇩🇴",
			focus: "Auditoría & Control Interno",
			description:
				"Acompañamiento a organizaciones en cumplimiento de normativas internacionales, aseguramiento financiero y gestión tributaria.",
		},
	];

	return (
		<section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

				<div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-primary tracking-tight mb-3">
						Cobertura en la Región
					</h2>
					<p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
						Brindamos servicios especializados de auditoría y
						consultoría adaptados al marco regulatorio y
						empresarial de cada país.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{countries.map((c) => (
						<div
							key={c.name}
							className="rounded-2xl bg-white p-5 sm:p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
						>
							<div>
								<div className="flex items-center justify-between gap-2 mb-3">
									<div className="flex items-center gap-2.5">
										<span
											className="text-2xl select-none"
											role="img"
											aria-label={`Bandera de ${c.name}`}
										>
											{c.flag}
										</span>
										<h3 className="text-xl font-montserrat font-bold text-primary">
											{c.name}
										</h3>
									</div>
									{c.isHeadquarters && (
										<span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
											Sede Central
										</span>
									)}
								</div>

								<div className="flex items-center gap-1.5 text-xs text-accent font-semibold mb-3">
									<MapPin className="h-3.5 w-3.5 shrink-0" />
									<span>{c.focus}</span>
								</div>

								<p className="text-sm text-slate-600 font-sans leading-relaxed">
									{c.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
