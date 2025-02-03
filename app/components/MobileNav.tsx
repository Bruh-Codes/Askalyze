"use client";
import { ChevronDown, XIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "./Header";
import Link from "next/link";

const MobileNav = ({
	setOpenMobileMenu,
	openMobileMenu,
}: {
	setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
	openMobileMenu: boolean;
}) => {
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	const handleDropDownClick = (menuLabel: string) => {
		setOpenMenu(openMenu === menuLabel ? null : menuLabel);
	};

	useEffect(() => {
		const handleKeyboardPress = (event: globalThis.KeyboardEvent) => {
			if (openMobileMenu && event.key == "Escape") {
				setOpenMobileMenu(false);
			}
		};
		document.addEventListener("keydown", handleKeyboardPress);
		return () => {
			document.removeEventListener("keydown", handleKeyboardPress);
		};
	}, [openMobileMenu, setOpenMobileMenu]);

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
							className="top-5 right-5 z-50 absolute text-white hover:text-white/70 active:scale-105 cursor-pointer"
						/>
						<div className="relative w-full h-full overflow-y-auto flex items-start justify-start p-4 pt-16">
							<div className="relative h-full gap-5 flex flex-col items-center justify-center w-full">
								<ul className="relative flex flex-col items-center space-y-2 w-full">
									{NAV_ITEMS.map((navItem) => (
										<li
											key={navItem.label}
											className="relative w-full"
											onClick={() => handleDropDownClick(navItem.label)}
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
														"overflow-auto [scrollbar-width:thin] transition-all duration-300 ease-in-out w-fit mx-auto",
														openMenu === navItem.label
															? "max-h-[60vh]"
															: "max-h-0"
													)}
												>
													<div className="bg-slate-900 p-5  rounded-md backdrop-blur-md w-full">
														<div className="flex flex-col gap-10 ">
															{navItem.subMenus.map((sub) => (
																<div className="w-full" key={sub.title}>
																	<h3 className="mb-4 text-sm font-semibold capitalize text-white">
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
									<li className="relative">
										<button
											className={cn(
												"text-sm py-1.5 px-4 flex cursor-pointer text-white hover:text-white/80 transition-colors duration-300 items-center justify-center gap-1 relative"
											)}
										>
											<span>Sign in</span>
										</button>
									</li>
									<li className="relative">
										<li className="relative">
											<Link
												href={""}
												type="button"
												className="relative inline-block overflow-hidden rounded-full p-[1.5px]"
											>
												<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
												<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 font-medium backdrop-blur-3xl">
													<a
														className={cn(
															"inline-flex rounded-full text-center text-white group items-center w-full justify-center  bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent hover:bg-gradient-to-tr  transition-all sm:w-auto py-2 px-5"
														)}
													>
														Get started
													</a>
												</div>
											</Link>
										</li>
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
