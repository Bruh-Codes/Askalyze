"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import GetStartedButton from "./GetStartedButton";
import RetroGrid from "./RetroGrid";
import ElegantShape from "./ElegantShape";
import { Badge } from "@/components/ui/badge";
import {
	PackageSearch,
	ShieldAlert,
	ShieldQuestion,
	ZapOff,
} from "lucide-react";
// const pacifico = Pacifico({
// 	subsets: ["latin"],
// 	weight: ["400"],
// 	variable: "--font-pacifico",
// });

export function Hero({
	title1 = "Revolutionize Document Analysis with AI-Powered Insights",
}: {
	badge?: string;
	title1?: string;
}) {
	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5 + i * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
	};

	return (
		<>
			<Header />
			<div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
				{/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" /> */}

				<div className="absolute inset-0 overflow-hidden">
					<ElegantShape
						delay={0.3}
						width={"w-[400px] sm:w-[600px]"}
						height={"h-[120px] sm:h-[140px]"}
						rotate={12}
						gradient="from-indigo-500/[0.15]"
						className="left-[-10%] md:left-[-5%] top-[15%] md:top-[25%]"
					/>

					<ElegantShape
						delay={0.5}
						width={"w-[400px] sm:w-[500px]"}
						height={"h-[120px]"}
						rotate={-15}
						gradient="from-rose-500/[0.15]"
						className="right-[-30%] md:right-[0%] top-[70%] md:top-[60%]"
					/>

					<ElegantShape
						delay={0.4}
						width={"w-[200px] sm:w-[300px]"}
						height={"h-[80px]"}
						rotate={20}
						gradient="from-violet-500/[0.15]"
						className="left-[5%] md:left-[5%] bottom-[10%] sm:bottom-[10%] md:bottom-[20%]"
					/>

					<ElegantShape
						delay={0.6}
						width={"w-[230px] sm:w-[200px]"}
						height={"h-[60px] sm:h-[60px]"}
						rotate={20}
						gradient="from-amber-500/[0.15]"
						className="right-[20%] sm:right-[40%] md:right-[20%] top-[50%] sm:top-[5%] md:top-[15%]"
					/>

					<ElegantShape
						delay={0.7}
						width={"w-[200px] sm:w-[150px]"}
						height={"h-[120px] sm:h-[40px]"}
						rotate={-25}
						gradient="from-cyan-500/[0.15]"
						className="left-[80%] md:left-[25%] top-[20%] sm:top-[10%]"
					/>
				</div>

				<div className="relative z-10 container mx-auto px-4 md:px-6">
					<div className="max-w-6xl mx-auto text-center">
						<motion.div
							custom={1}
							variants={fadeUpVariants}
							initial="hidden"
							animate="visible"
						>
							<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
									{title1}
								</span>
							</h1>
						</motion.div>

						<motion.div
							custom={2}
							variants={fadeUpVariants}
							initial="hidden"
							animate="visible"
						>
							<p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
								Interact with your documents through a conversational interface.
								Extract key insights, generate summaries, custom outputs and
								analysis improving decision-making.
							</p>
						</motion.div>
						<motion.div
							custom={2}
							variants={fadeUpVariants}
							initial="hidden"
							animate="visible"
						>
							<GetStartedButton />
						</motion.div>
					</div>
				</div>

				{/* <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" /> */}
				{/* <RetroGrid /> */}
			</div>
			<div className="w-full text-center space-y-5 p-5">
				<Badge className="bg-gradient-to-t from-rose-500/[0.15] py-2">
					PROBLEM
				</Badge>
				<h2 className="text-4xl sm:text-6xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-white">
					Manually managing documents is inefficient.
				</h2>
				<div className="container md:max-w-7xl justify-center w-full grid mx-auto grid-cols-1 gap-5 md:grid-cols-3 text-white">
					<div className="space-y-4 text-left">
						<div className="bg-gradient-to-t from-rose-500/[0.15] rounded-full p-3 w-fit">
							<ShieldQuestion className="text-5xl text-red-600" size={30} />
						</div>
						<span className="block font-semibold text-xl">
							Information Chaos
						</span>
						<p className="text-gray-400">
							Businesses struggle to handle large volumes of documents. making
							it difficult to retrieve important Information efficiently
						</p>
					</div>
					<div className="space-y-4 text-left">
						<div className="bg-gradient-to-t from-rose-500/[0.15] rounded-full p-3 w-fit">
							<ZapOff className="text-5xl text-red-600" size={30} />
						</div>
						<span className="block font-semibold text-xl">
							Slow workflow & Decision making
						</span>
						<p className="text-gray-400">
							Document management processes are time-consuming, causing delays
							in decision making and reduce productivity.
						</p>
					</div>
					<div className="space-y-4 text-left">
						<div className="bg-gradient-to-t from-rose-500/[0.15] rounded-full p-3 w-fit">
							<PackageSearch className="text-5xl text-red-600" size={30} />
						</div>
						<span className="block font-semibold text-xl">
							Manual sorting & Retrieval
						</span>
						<p className="text-gray-400">
							Finding the right document takes too much time, reducing overall
							efficiency.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
