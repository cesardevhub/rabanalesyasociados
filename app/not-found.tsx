import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-[80vh] flex items-center justify-center bg-white px-4 sm:px-6 py-12 sm:py-0">
			<div className="text-center max-w-lg">
				<div className="inline-flex p-4 sm:p-6 rounded-full bg-slate-50 border border-slate-100 mb-6 sm:mb-8 text-3xl sm:text-4xl font-bold text-primary">
					404
				</div>

				<h1 className="text-7xl sm:text-9xl font-montserrat font-extrabold text-primary/5 tracking-tighter absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 select-none">
					404
				</h1>

				<h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-3 sm:mb-4">
					Página no encontrada
				</h2>

				<p className="text-base sm:text-lg text-slate-600 font-sans mb-8 sm:mb-10 leading-relaxed">
					Lo sentimos, la página que buscas no está disponible en este
					momento. Te sugerimos verificar el enlace o regresar a la
					página principal para encontrar lo que necesitas
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
					<Link
						href="/"
						className="rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white hover:bg-primary/80 transition-all"
					>
						Volver al Inicio
					</Link>
				</div>
			</div>
		</main>
	);
}
