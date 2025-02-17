import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const iBM_Plex_Serif = IBM_Plex_Serif({
	variable: "--font-montserrat",
	subsets: ["latin", "vietnamese"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${iBM_Plex_Serif.variable} antialiased`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
