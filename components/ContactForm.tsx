"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
	const [state, setState] = useState<FormState>("idle");
	const [form, setForm] = useState({
		name: "",
		email: "",
		company: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setState("loading");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (res.ok) {
				setState("success");
				setForm({
					name: "",
					email: "",
					company: "",
					subject: "",
					message: "",
				});
			} else {
				setState("error");
			}
		} catch {
			setState("error");
		}
	};

	if (state === "success") {
		return (
			<div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 flex flex-col items-center justify-center text-center min-h-[480px]">
				<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
					<CheckCircle className="h-8 w-8 text-green-500" />
				</div>
				<h3 className="text-xl font-montserrat font-bold text-primary mb-3">
					Mensaje enviado exitosamente
				</h3>
				<p className="text-slate-600 font-sans max-w-xs text-sm sm:text-base">
					Nos pondremos en contacto con usted a la brevedad posible.
				</p>
				<button
					onClick={() => setState("idle")}
					className="mt-8 text-accent text-sm sm:text-base font-semibold hover:underline"
				>
					Enviar otro mensaje
				</button>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-100">
			<form
				onSubmit={handleSubmit}
				className="space-y-4 sm:space-y-6 font-sans"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					<div>
						<label className="block text-xs sm:text-base font-semibold text-primary mb-1.5 sm:mb-2">
							Nombre Encargado{" "}
							<span className="text-red-400">*</span>
						</label>
						<input
							type="text"
							name="name"
							required
							value={form.name}
							onChange={handleChange}
							className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
							placeholder="Ej. Juan Pérez"
						/>
					</div>
					<div>
						<label className="block text-xs sm:text-base font-semibold text-primary mb-1.5 sm:mb-2">
							Correo Electrónico{" "}
							<span className="text-red-400">*</span>
						</label>
						<input
							type="email"
							name="email"
							required
							value={form.email}
							onChange={handleChange}
							className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
							placeholder="juan@empresa.com"
						/>
					</div>
				</div>

				<div>
					<label className="block text-xs sm:text-base font-semibold text-primary mb-1.5 sm:mb-2">
						Empresa / Organización
					</label>
					<input
						type="text"
						name="company"
						value={form.company}
						onChange={handleChange}
						className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
						placeholder="Nombre de su entidad"
					/>
				</div>

				<div>
					<label className="block text-xs sm:text-base font-semibold text-primary mb-1.5 sm:mb-2">
						Asunto de Consulta
					</label>
					<input
						type="text"
						name="subject"
						value={form.subject}
						onChange={handleChange}
						className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
						placeholder="Razón de consulta"
					/>
				</div>

				<div>
					<label className="block text-xs sm:text-base font-semibold text-primary mb-1.5 sm:mb-2">
						Mensaje o Detalle{" "}
						<span className="text-red-400">*</span>
					</label>
					<textarea
						rows={4}
						name="message"
						required
						value={form.message}
						onChange={handleChange}
						className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none resize-none"
						placeholder="Describa brevemente su requerimiento..."
					/>
				</div>

				{state === "error" && (
					<p className="text-red-500 text-xs sm:text-base font-medium">
						Ocurrió un error al enviar el mensaje. Por favor intente
						de nuevo o contáctenos directamente.
					</p>
				)}

				<button
					type="submit"
					disabled={state === "loading"}
					className="w-full rounded-full bg-primary py-3.5 sm:py-4 text-xs sm:text-base font-bold text-white hover:bg-primary/80 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
				>
					{state === "loading" ? (
						<>
							<span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
							Enviando...
						</>
					) : (
						<>Enviar Consulta</>
					)}
				</button>

				<p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed">
					Al enviar este formulario, usted acepta nuestra{" "}
					<Link
						href="/privacidad"
						className="text-primary font-semibold hover:text-accent underline underline-offset-2 transition-colors"
					>
						Política de Privacidad
					</Link>{" "}
					y el tratamiento confidencial de sus datos.
				</p>
			</form>
		</div>
	);
}
