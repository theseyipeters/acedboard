import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";

export const manrope = Manrope({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	fallback: ["sans-serif"],
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	fallback: ["sans-serif"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="/acedboardFavicon.svg"
				/>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
				<title>{metadata.title}</title>
			</head>
			<body className={`${manrope.className} ${montserrat.className}`}>
				{children}
			</body>
		</html>
	);
}
