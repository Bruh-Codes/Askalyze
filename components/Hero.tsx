"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import GetStartedButton from "./GetStartedButton";
// import RetroGrid from "./RetroGrid";

import { Waves } from "./InterractiveWaves";

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
			<div className=" relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden ">
				<div className="absolute inset-0 overflow-hidden">
					<Waves
						lineColor={"rgba(192, 132, 252, 0.3)"}
						backgroundColor="transparent"
						waveSpeedX={0.02}
						waveSpeedY={0.01}
						waveAmpX={40}
						waveAmpY={20}
						friction={0.9}
						tension={0.01}
						maxCursorMove={120}
						xGap={12}
						yGap={36}
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
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-purple-400">
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
							<p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
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
		</>
	);
}
