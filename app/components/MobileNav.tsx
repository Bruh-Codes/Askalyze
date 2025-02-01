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
	BookOpen,
	FileText,
	Newspaper,
	ChevronDown,
	XIcon,
} from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MobileNav = ({
	setOpenMobileMenu,
	openMobileMenu,
}: {
	setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
	openMobileMenu: boolean;
}) => {
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	const handleHover = (menuLabel: string) => {
		setOpenMenu(openMenu === menuLabel ? null : menuLabel);
	};

	const NAV_ITEMS = [
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
			id: 3,
			label: "Resources",
			subMenus: [
				{
					title: "Tools",
					items: [
						{
							label: "Resource Center",
							description: "Today's best practices",
							icon: BookOpen,
						},
						{
							label: "Marketplace",
							description: "Extend and automate workflows",
							icon: Search,
						},
						{
							label: "Templates",
							description: "Jumpstart app development",
							icon: FileText,
						},
						{
							label: "Guides",
							description: "Find help quickly",
							icon: BookOpen,
						},
						{
							label: "Partner Finder",
							description: "Get help from solution partners",
							icon: Search,
						},
					],
				},
				{
					title: "Company",
					items: [
						{
							label: "Customers",
							description: "Trusted by the best teams",
							icon: Newspaper,
						},
						{
							label: "Blog",
							description: "The latest posts and changes",
							icon: FileText,
						},
						{
							label: "Changelog",
							description: "See what shipped",
							icon: BookOpen,
						},
						{
							label: "Press",
							description: "Read the latest news",
							icon: Newspaper,
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

	return (
		<AnimatePresence mode="wait">
			{openMobileMenu && (
				<motion.header
					initial={{ x: "100%" }}
					animate={{ x: 0 }}
					exit={{ x: "100%" }}
					transition={{
						type: "spring",
						damping: 25,
						stiffness: 120,
						duration: 0.3,
					}}
					className="fixed min-h-screen md:hidden right-0 w-full top-0 z-50"
				>
					<div className="flex items-center justify-center h-screen bg-slate-950/95 backdrop-blur-md flex-col">
						<XIcon
							onClick={() => setOpenMobileMenu(false)}
							size={25}
							className="top-5 right-5 absolute text-white hover:text-white/70 active:scale-105 cursor-pointer"
						/>
						<div className="relative w-full h-full overflow-y-auto flex items-start justify-start p-4 pt-16">
							<div className="relative h-full gap-5 flex flex-col items-center justify-center w-full">
								<ul className="relative flex flex-col items-center space-y-2 w-full">
									{NAV_ITEMS.map((navItem) => (
										<li
											key={navItem.label}
											className="relative w-full"
											onClick={() => handleHover(navItem.label)}
										>
											<button
												className={cn(
													"text-sm py-1.5 px-4 w-full flex cursor-pointer  transition-colors duration-300 items-center justify-center gap-1 text-white hover:text-white/80 relative"
												)}
											>
												<span>{navItem.label}</span>
												{navItem.subMenus && (
													<ChevronDown
														className={cn(
															"h-4 w-4 duration-300 transition-transform",
															{
																"rotate-180": openMenu === navItem.label,
															}
														)}
													/>
												)}
											</button>

											{navItem.subMenus && (
												<div
													className={cn(
														"overflow-hidden transition-all duration-300 ease-in-out w-fit mx-auto",
														openMenu === navItem.label
															? "max-h-[60vh]"
															: "max-h-0"
													)}
												>
													<div className="bg-slate-950/95 p-3 backdrop-blur-md w-full">
														<div className="flex flex-col gap-6 overflow-y-auto">
															{navItem.subMenus.map((sub) => (
																<div className="w-full" key={sub.title}>
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
																						<div className="leading-5 text-white">
																							<p className="text-sm font-medium group-hover:text-white/70 duration-300">
																								{item.label}
																							</p>
																							<p className="text-xs group-hover:text-white/70 transition-colors duration-300">
																								{item.description}
																							</p>
																						</div>
																					</a>
																				</li>
																			);
																		})}
																	</ul>
																</div>
															))}
														</div>
													</div>
												</div>
											)}
										</li>
									))}
									<li
										className="relative"
										onMouseEnter={() => handleHover("Get started")}
										onMouseLeave={() => handleHover("")}
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
										<button
											className={cn(
												"text-sm py-2 px-4 flex cursor-pointer text-black  group transition-colors duration-300 items-center justify-center gap-1 relative bg-white rounded-xl hover:text-black hover:bg-white/80 active:bg-white/80"
											)}
										>
											<span>Get started</span>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</motion.header>
			)}
		</AnimatePresence>
	);
};

export default MobileNav;
