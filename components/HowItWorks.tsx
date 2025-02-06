"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface HowITworksProps {
	className?: string;
	title?: string;
	autoPlayInterval?: number;
	imageHeight?: string;
}

export function HowITworks({
	className,
	title = "How to get Started",
	autoPlayInterval = 3000,
	imageHeight = "h-[400px]",
}: HowITworksProps) {
	const [currentFeature, setCurrentFeature] = useState(0);
	const [progress, setProgress] = useState(0);

	const features = [
		{
			step: "Sign In",
			title: "Sign In and Authenticate",
			content: "Sign in and authenticate yourself.",
			image: "/images/upload-documents.jpg",
		},
		{
			step: "Upload",
			title: "Upload Documents",
			content:
				"Upload your documents in various formats including PDF, DOCX, and TXT.",
			image: "/images/upload-documents.jpg",
		},
		{
			step: "Analyze",
			title: "AI-Powered Analysis",
			content:
				"Our advanced AI analyzes your documents, extracting key information and insights.",
			image: "/images/ai-analysis.jpg",
		},
		{
			step: "Interact",
			title: "Conversational Interface",
			content:
				"Engage with your documents through a natural language chat interface.",
			image: "/images/chat-interface.jpg",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			if (progress < 100) {
				setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
			} else {
				setCurrentFeature((prev) => (prev + 1) % features.length);
				setProgress(0);
			}
		}, 100);

		return () => clearInterval(timer);
	}, [progress, autoPlayInterval, features.length]);

	return (
		<div className="container lg:w-10/12 mx-auto py-24 w-full p-5">
			<div className="flex gap-4 w-full flex-col items-center">
				<Badge>How it works</Badge>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-4xl text-center sm:text-6xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-white"
				>
					Just 4 steps to get started
				</motion.h2>
			</div>
			<div className={cn("", className)}>
				<div className="max-w-7xl mx-auto w-full">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
					>
						{title}
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
						className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10"
					>
						<div className="order-2 md:order-1 space-y-8">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-6 md:gap-8"
									initial={{ opacity: 0.3 }}
									animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
									transition={{ duration: 0.5 }}
								>
									<motion.div
										className={cn(
											"w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
											index === currentFeature
												? "bg-primary border-primary text-primary-foreground scale-110"
												: "bg-primary border-primary text-primary-foreground scale-110"
										)}
									>
										{index <= currentFeature ? (
											<div className="relative w-10 h-10 shrink-0 aspect-square inline-block overflow-hidden rounded-full p-[1.5px]">
												<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
												<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
													<a
														className={cn(
															"inline-flex shrink-0 aspect-square w-10 h-10 rounded-full text-center text-white group items-center justify-center  bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent hover:bg-gradient-to-tr hover:via-purple-400/40 hover:to-transparent hover:from-zinc-300/10 transition-all sm:w-auto py-3 px-7 text-lg",
															className
														)}
													>
														<span className="text-lg font-bold">✓</span>
													</a>
												</div>
											</div>
										) : (
											<span className="text-lg font-semibold">{index + 1}</span>
										)}
									</motion.div>

									<div className="flex-1">
										<h3 className="text-xl text-white md:text-2xl font-semibold">
											{feature.title || feature.step}
										</h3>
										<p className="text-sm md:text-lg text-muted-foreground">
											{feature.content}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						<div
							className={cn(
								"order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg",
								imageHeight
							)}
						>
							<AnimatePresence mode="wait">
								{features.map(
									(feature, index) =>
										index === currentFeature && (
											<motion.div
												key={index}
												className="absolute inset-0 rounded-lg overflow-hidden"
												initial={{ y: 100, opacity: 0, rotateX: -20 }}
												animate={{ y: 0, opacity: 1, rotateX: 0 }}
												exit={{ y: -100, opacity: 0, rotateX: 20 }}
												transition={{ duration: 0.5, ease: "easeInOut" }}
											>
												<Image
													src={feature.image || "/placeholder.svg"}
													alt={feature.step}
													className="w-full h-full object-cover transition-transform transform"
													width={1000}
													height={500}
												/>
												<div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
											</motion.div>
										)
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
