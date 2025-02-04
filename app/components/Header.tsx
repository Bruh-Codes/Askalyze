"use client";
import {
	Cpu,
	Globe,
	Eye,
	Shield,
	Rocket,
	Box,
	Search,
	ChevronDown,
	Menu,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export const NAV_ITEMS = [
	{
		id: 1,
		label: "Products",
		subMenus: [
			{
				items: [
					{
						label: "Document Automation",
						description:
							"Streamline your organization's most complex document workflows. Our AI-powered automation engine handles tasks freeing your team to focus on higher-value work.",
						icon: Cpu,
					},
					{
						label: "Predictive Insights",
						description:
							"Uncover hidden trends and patterns in your business data for smart decision making. ",
						icon: Search,
					},
					{
						label: "Secure Collaboration",
						description:
							"Enable seamless teamwork while maintaining ironclad control over your sensitive documents. Our platform provides granular access permissions, audit trails, and secure file sharing to protect your critical information.",
						icon: Globe,
					},
					{
						label: "Intelligent Document Generation",
						description:
							"Save time and resources by automating the creation of complex documents. Our platform leverages Natural Language Processing to understand your content and generate personalized reports.",
						icon: Eye,
					},
					{
						label: "Intelligent Document Transformation",
						description:
							"Our AI can transform your document and even extract insights into any preferred format  - with a single click.",
						icon: Shield,
					},
					{
						label: "Unified Document Ecosystem",
						description:
							"Effortlessly access and manage your business-critical documents, Connect Ai with cloud storage providers like Google Drive, Microsoft OneDrive allowing you to centralize control over your entire documents.",
						icon: Rocket,
					},
				],
			},

			// {
			// .it: "Open Source",
			// 	items: [
			// 		{
			// 			label: "Turborepo",
			// 			description: "Speed with Enterprise scale",
			// 			icon: Box,
			// 		},
			// 		{
			// 			label: "AI SDK",
			// 			description: "The AI Toolkit for TypeScript",
			// 			icon: Palette,
			// 		},
			// 	],
			// },
		],
	},
	{
		id: 2,
		label: "Solutions",
		subMenus: [
			{
				items: [
					{
						label: "AI Apps",
						description: "Deploy at the speed of AI",
						icon: Cpu,
					},
					{
						label: "Financial Services",
						description:
							"Automate document-centric processes like loan origination, claims processing, and auditing with intelligent automation.",
						icon: Box,
					},
					{
						label: "Automated Invoice Processing",
						description:
							"Streamline your accounts payable workflows with lightning-fast invoice processing. Our AI quickly capture, validate, and route invoices for approval reducing manual data entry",
						icon: Box,
					},
					{
						label: "HR Onboarding",
						description:
							"Simplify new hire paperwork with digital document workflows. Centralize employee records and streamline onboarding from offer to orientation and eliminate manual data entry.",
						icon: Rocket,
					},
					{
						label: "Multi-tenant Platforms",
						description: "Scale apps with one codebase",
						icon: Globe,
					},
					{
						label: "Web Apps",
						description: "Ship features, not infrastructure",
						icon: Search,
					},
				],
			},
		],
	},

	{
		id: 6,
		label: "Pricing",
		link: "#",
	},
	{
		id: 7,
		label: "Contact",
		link: "#",
	},
];
export default function Header() {
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const handleHover = (menuLabel: string | null) => {
		setOpenMenu(menuLabel);
	};

	return (
		<>
			<header className="fixed flex justify-between p-5 bg-slate-950/70 backdrop-blur-md text-white left-0 w-full right-0 top-0 z-50">
				<div className="relative w-full flex items-center justify-between container mx-auto max-w-[1400px] px-4">
					<p className=""> Logo</p>
					<div className="relative gap-5 hidden md:flex flex-col items-center justify-center flex-1">
						<ul className="relative flex items-center justify-center space-x-2">
							{NAV_ITEMS.map((navItem) => (
								<li
									key={navItem.label}
									className="relative"
									onMouseEnter={() => handleHover(navItem.label)}
									onMouseLeave={() => handleHover(null)}
								>
									<button
										className={cn(
											"text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-white hover:text-white/80 relative"
										)}
									>
										<span>{navItem.label}</span>
										{navItem.subMenus && (
											<ChevronDown
												className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                  ${openMenu === navItem.label ? "rotate-180" : ""}`}
											/>
										)}
									</button>

									<AnimatePresence>
										{openMenu === navItem.label && navItem.subMenus && (
											<div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[90vw] max-w-[1200px]">
												<motion.div
													className="bg-slate-950/95 backdrop-blur-md p-6 w-full"
													style={{ borderRadius: 16 }}
													layoutId="menu"
												>
													<div className="w-full flex overflow-hidden">
														<motion.div layout className="w-full">
															<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
																{navItem.subMenus.map((sub) => {
																	return sub.items.map((item) => {
																		const Icon = item.icon;
																		return (
																			<li key={item.label}>
																				<a
																					href="#"
																					className="flex items-start space-x-3 group p-2 hover:bg-slate-900/50 rounded-lg transition-colors"
																				>
																					<div className="text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
																						<Icon className="h-5 w-5 flex-none" />
																					</div>
																					<div className="leading-5 flex-1 min-w-0 text-white">
																						<p className="text-sm font-medium group-hover:text-white/70 duration-300">
																							{item.label}
																						</p>
																						<p className="text-xs text-white/70 group-hover:text-white/50 transition-colors duration-300 line-clamp-2">
																							{item.description}
																						</p>
																					</div>
																				</a>
																			</li>
																		);
																	});
																})}
															</ul>
														</motion.div>
													</div>
												</motion.div>
											</div>
										)}
									</AnimatePresence>
								</li>
							))}
						</ul>
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							onMouseEnter={() => handleHover("Get started")}
							onMouseLeave={() => handleHover(null)}
							className={cn(
								"text-sm py-1.5 px-4 flex cursor-pointer text-white hover:text-white/80 transition-colors duration-300 items-center justify-center gap-1 relative"
							)}
						>
							<span>Sign in</span>
						</button>

						<button
							type="button"
							className="relative inline-block overflow-hidden rounded-full p-[1.5px]"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
								<a
									className={cn(
										"inline-flex rounded-full text-center text-white group items-center w-full justify-center  bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent hover:bg-gradient-to-tr  transition-all sm:w-auto py-3 px-5 text-sm"
									)}
								>
									Get started
								</a>
							</div>
						</button>
					</div>
				</div>

				<button type="button" onClick={() => setOpenMobileMenu(true)}>
					<Menu className="ml-auto md:hidden cursor-pointer text-white hover:text-white/70" />
				</button>

				<MobileNav
					openMobileMenu={openMobileMenu}
					setOpenMobileMenu={setOpenMobileMenu}
				/>
			</header>
		</>
	);
}
