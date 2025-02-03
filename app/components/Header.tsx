"use client";
import {
	Cpu,
	Globe,
	Eye,
	Shield,
	Rocket,
	Box,
	Search,
	Palette,
	ChevronDown,
	Menu,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import Link from "next/link";

export const NAV_ITEMS = [
	{
		id: 1,
		label: "Products",
		subMenus: [
			{
				title: "DX Platform",
				items: [
					{
						label: "Previews",
						description: "Helping teams ship 6× faster",
						icon: Cpu,
					},
					{
						label: "AI",
						description: "Powering breakthroughs",
						icon: Search,
					},
				],
			},
			{
				title: "Managed Infrastructure",
				items: [
					{
						label: "Rendering",
						description: "Fast, scalable, and reliable",
						icon: Globe,
					},
					{
						label: "Observability",
						description: "Trace every step",
						icon: Eye,
					},
					{
						label: "Security",
						description: "Scale without compromising",
						icon: Shield,
					},
				],
			},
			{
				title: "Open Source",
				items: [
					{
						label: "Next.js",
						description: "The native Next.js platform",
						icon: Rocket,
					},
					{
						label: "Turborepo",
						description: "Speed with Enterprise scale",
						icon: Box,
					},
					{
						label: "AI SDK",
						description: "The AI Toolkit for TypeScript",
						icon: Palette,
					},
				],
			},
		],
	},
	{
		id: 2,
		label: "Solutions",
		subMenus: [
			{
				title: "Use Cases",
				items: [
					{
						label: "AI Apps",
						description: "Deploy at the speed of AI",
						icon: Cpu,
					},
					{
						label: "Composable Commerce",
						description: "Power storefronts that convert",
						icon: Box,
					},
					{
						label: "Marketing Sites",
						description: "Launch campaigns fast",
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
			{
				title: "Users",
				items: [
					{
						label: "Platform Engineers",
						description: "Automate away repetition",
						icon: Cpu,
					},
					{
						label: "Design Engineers",
						description: "Deploy for every idea",
						icon: Palette,
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
];
export default function Header() {
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const handleHover = (menuLabel: string | null) => {
		setOpenMenu(menuLabel);
	};

	return (
		<>
			<header className="fixed flex justify-between p-5 bg-slate-950/70 backdrop-blur-md text-white left-0 w-full right-0  top-0 z-50 gap-5">
				<div className="relative w-full flex items-center justify-between">
					<p className="mr-auto"> Logo</p>
					<div className="relative ml-auto gap-5 hidden md:flex flex-col items-center justify-center">
						<ul className="relative flex items-center justify-between">
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
											<div className="w-auto absolute left-0 top-full pt-2">
												<motion.div
													className="bg-slate-950/95 backdrop-blur-md p-4 w-max"
													style={{ borderRadius: 16 }}
													layoutId="menu"
												>
													<div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
														{navItem.subMenus.map((sub) => (
															<motion.div
																layout
																className="w-full"
																key={sub.title}
															>
																<h3 className="mb-4 text-sm font-medium capitalize text-white">
																	{sub.title}
																</h3>
																<ul className="space-y-6">
																	{sub.items.map((item) => {
																		const Icon = item.icon;
																		return (
																			<li key={item.label}>
																				<a
																					href="#"
																					className="flex items-start space-x-3 group"
																				>
																					<div className="text-white rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
																						<Icon className="h-5 w-5 flex-none" />
																					</div>
																					<div className="leading-5 w-max text-white">
																						<p className="text-sm font-medium group-hover:text-white/70 shrink-0 duration-300">
																							{item.label}
																						</p>
																						<p className="text-xs  shrink-0 group-hover:text-white/70 transition-colors duration-300">
																							{item.description}
																						</p>
																					</div>
																				</a>
																			</li>
																		);
																	})}
																</ul>
															</motion.div>
														))}
													</div>
												</motion.div>
											</div>
										)}
									</AnimatePresence>
								</li>
							))}
							<li
								className="relative"
								onMouseEnter={() => handleHover("Get started")}
								onMouseLeave={() => handleHover(null)}
							>
								<button
									className={cn(
										"text-sm py-1.5 px-4 flex cursor-pointer text-white hover:text-white/80 transition-colors duration-300 items-center justify-center gap-1 relative"
									)}
								>
									<span>Sign in</span>
								</button>
							</li>
							<li className="relative">
								<Link
									href={""}
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
								</Link>
							</li>
						</ul>
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
