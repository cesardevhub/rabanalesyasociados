import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const BASE_URL = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export const metadata: Metadata = {
	title: {
		default:
			"Rabanales y Asociados S.C. | Auditoría y Consultoría Regional",
		template: "%s | Rabanales y Asociados S.C.",
	},
	description:
		"Firma de auditoría, consultoría fiscal y financiera con más de 15 años de experiencia en Guatemala y la región centroamericana.",
	metadataBase: new URL(BASE_URL),
	openGraph: {
		type: "website",
		locale: "es_GT",
		siteName: "Rabanales y Asociados S.C.",
		title: "Rabanales y Asociados S.C. | Auditoría y Consultoría Regional",
		description:
			"Firma de auditoría, consultoría fiscal y financiera con más de 15 años de experiencia en Guatemala y la región centroamericana.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "AccountingService",
	name: "Rabanales y Asociados S.C.",
	description:
		"Firma de auditoría y consultoría fiscal, financiera y de tecnología con presencia regional en Centroamérica y Latinoamérica.",
	url: BASE_URL,
	telephone: "(+502) 2215-7303",
	email: "infoauditoria@rabanalesyasociados.com",
	address: {
		"@type": "PostalAddress",
		streetAddress:
			"23 calle 14-58 zona 4 de Mixco, Condado Naranjo, Edificio CRECE, Torre 1, Oficina 1104",
		addressLocality: "Guatemala",
		addressCountry: "GT",
	},
	areaServed: [
		"Guatemala",
		"Honduras",
		"El Salvador",
		"Costa Rica",
		"Panamá",
		"México",
		"República Dominicana",
		"Colombia",
	],
	serviceType: [
		"Auditoría Financiera",
		"Consultoría Fiscal",
		"Consultoría Financiera",
		"Tecnología de la Información",
	],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="es"
			className="h-full antialiased"
			data-scroll-behavior="smooth"
		>
			<body className="min-h-full flex flex-col font-sans">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
