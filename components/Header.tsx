"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {

	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);
	const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(
		() => new Set(["/quienes-somos", "/servicios"]),
	);

	const navLinks = [
		{
			name: "Quiénes somos",
			href: "/quienes-somos",
			dropdown: [
				{ name: "Filosofía", href: "/quienes-somos" },
				{ name: "Antecedentes", href: "/quienes-somos/antecedentes" },
			],
		},
		{
			name: "Servicios",
			href: "/servicios",
			dropdown: [
				{ name: "Servicios Profesionales", href: "/servicios" },
				{
					name: "Metodología y Calidad",
					href: "/servicios/metodologia",
				},
			],
		},
	];

	const openMenu = () => {
		setIsOpen(true);
		setOpenDropdowns(
			new Set(navLinks.filter((l) => l.dropdown).map((l) => l.href)),
		);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const toggleDropdown = (href: string) => {
		setOpenDropdowns((prev) => {
			const next = new Set(prev);
			next.has(href) ? next.delete(href) : next.add(href);
			return next;
		});
	};

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
				<div className="mx-auto flex h-14 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<div className="flex items-center gap-8">
						<Link
							href="/"
							className="-m-1.5 p-1.5 transition-transform hover:scale-105"
							onClick={closeMenu}
						>
							<span className="sr-only">Rabanales y Asociados S.C.</span>
							<Image
								src="/isotipo.png"
								alt="Rabanales y Asociados"
								width={100}
								height={100}
								className="h-8 sm:h-12 w-auto"
								priority
							/>
						</Link>

						<nav className="hidden [@media(min-width:1200px)]:flex [@media(min-width:1200px)]:gap-x-8">
							{navLinks.map((link) => {
								const isActive = pathname.startsWith(link.href);
								return (
									<div
										key={link.href}
										className="relative group py-6"
									>
										<Link
											href={link.href}
											className={`flex items-center gap-1 text-sm font-semibold leading-6 transition-colors ${
												isActive
													? "text-accent"
													: "text-primary hover:text-accent"
											}`}
										>
											{link.name}
											{link.dropdown && (
												<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
											)}
										</Link>

										{link.dropdown && (
											<div className="absolute left-0 top-[100%] w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200">
												<div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3">
													{link.dropdown.map(
														(subItem) => (
															<Link
																key={
																	subItem.href
																}
																href={
																	subItem.href
																}
																className="block px-6 py-3 text-sm font-medium text-slate-600 hover:text-accent hover:bg-slate-50 transition-all"
															>
																{subItem.name}
															</Link>
														),
													)}
												</div>
											</div>
										)}
									</div>
								);
							})}
						</nav>
					</div>

					<div className="flex items-center gap-2 sm:gap-4">
						<Link
							href="/contact"
							className="flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 sm:px-6 py-1.5 sm:py-2.5 text-xs sm:text-base font-bold transition-all bg-primary text-white hover:bg-primary/80"
						>
							Contactar{" "}
							<User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
						</Link>
						<button
							className="block [@media(min-width:1200px)]:hidden p-1.5 sm:p-2 text-primary"
							onClick={openMenu}
							aria-label="Abrir menú"
						>
							<Menu className="h-5 w-5 sm:h-6 sm:w-6" />
						</button>
					</div>
				</div>
			</header>

			<div
				className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={closeMenu}
				aria-hidden="true"
			/>

			<div
				className={`fixed right-0 top-0 z-[101] flex h-screen w-[320px] sm:w-[380px] max-w-full flex-col bg-primary shadow-2xl transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>

				<div className="flex h-14 sm:h-20 shrink-0 items-center justify-between px-4 sm:px-6">
					<Link
						href="/"
						onClick={closeMenu}
						className="flex items-center gap-3"
					>
						<Image
							src="/isotipo.png"
							alt="Rabanales y Asociados"
							width={100}
							height={100}
							className="h-10 w-auto brightness-0 invert opacity-90"
						/>
						<span className="text-sm font-bold text-white/80 leading-tight">
							Rabanales
							<br />y Asociados
						</span>
					</Link>
					<button
						onClick={closeMenu}
						className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
						aria-label="Cerrar menú"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				<div className="mx-6 h-px shrink-0 bg-white/10" />

				<nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
					{navLinks.map((link) => {
						const isActive = pathname.startsWith(link.href);
						const isExpanded = openDropdowns.has(link.href);
						return (
							<div key={link.href}>
								<div
									className={`flex items-center justify-between rounded-xl transition-colors ${
										isActive
											? "bg-white/10"
											: "hover:bg-white/5"
									}`}
								>
									<Link
										href={link.href}
										onClick={
											link.dropdown
												? undefined
												: closeMenu
										}
										className={`flex-1 px-4 py-3.5 text-sm sm:text-base font-semibold transition-colors ${
											isActive
												? "text-accent"
												: "text-white/80 hover:text-white"
										}`}
									>
										{link.name}
									</Link>
									{link.dropdown && (
										<button
											onClick={() =>
												toggleDropdown(link.href)
											}
											className="p-3 text-white/40 transition-colors hover:text-white/80"
											aria-label={`Expandir ${link.name}`}
										>
											<ChevronDown
												className={`h-4 w-4 transition-transform duration-200 ${
													isExpanded
														? "rotate-180"
														: ""
												}`}
											/>
										</button>
									)}
								</div>

								{link.dropdown && (
									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${
											isExpanded
												? "max-h-72 opacity-100"
												: "max-h-0 opacity-0"
										}`}
									>
										<div className="mb-2 ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-4">
											{link.dropdown.map((subItem) => (
												<Link
													key={subItem.href}
													href={subItem.href}
													onClick={closeMenu}
													className="block rounded-lg px-3 py-2.5 text-sm sm:text-base text-white/55 transition-all hover:bg-white/5 hover:text-white"
												>
													{subItem.name}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						);
					})}
				</nav>


				<div className="shrink-0 border-t border-white/10 px-4 pb-8 pt-5 space-y-3">
					<Link
						href="/contact"
						onClick={closeMenu}
						className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm sm:text-base font-bold text-white transition-all hover:opacity-90"
					>
						Contactar <User className="h-4 w-4" />
					</Link>
					<p className="block text-center text-xs sm:text-sm text-white/40 hover:text-white transition-colors break-all">
						infoauditoria
						<wbr />
						@rabanalesyasociados.com
					</p>
				</div>
			</div>
		</>
	);
}
