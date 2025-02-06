"use client";
import React from "react";
import {
	HandCoins,
	Cloud,
	DollarSign,
	Spline,
	Activity,
	CircleHelp,
	Split,
	SquareTerminal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { HowITworks } from "../components/HowItWorks";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Badge } from "@/components/ui/badge";
import { PackageSearch, ShieldQuestion, ZapOff } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Page = () => {
	const features = [
		{
			title: "AI-Powered Analysis",
			description:
				"Advanced AI algorithms analyze your documents for deep insights.",
			icon: <SquareTerminal />,
		},
		{
			title: "Easy Integration",
			description: "Seamlessly connect with Google Docs, Office, and more.",
			icon: <Spline />,
		},
		{
			title: "Flexible Pricing",
			description:
				"Choose the plan that fits your needs, from startups to enterprises.",
			icon: <DollarSign />,
		},
		{
			title: "Secure Cloud Storage",
			description: "Your documents are safe and accessible anytime, anywhere.",
			icon: <Cloud />,
		},
		{
			title: "Multi-format Support",
			description: "Upload and analyze any type of document or file format.",
			icon: <Split />,
		},
		{
			title: "24/7 Support",
			description:
				"Our team is always available to assist you with any questions.",
			icon: <CircleHelp />,
		},
		{
			title: "Custom Outputs",
			description: "Generate actionable recommendations and custom reports.",
			icon: <HandCoins />,
		},
		{
			title: "Continuous Improvement",
			description:
				"We're constantly updating our AI to provide better results.",
			icon: <Activity />,
		},
	];
	return (
		<div className="bg-default-background">
			<Hero />
			<motion.div
				className="w-full text-center space-y-5 p-5 py-24"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<Badge className="bg-gradient-to-t from-rose-500/[0.15] py-2">
					Problem
				</Badge>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-4xl sm:text-6xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-white"
				>
					Manually managing documents is inefficient.
				</motion.h2>
				<div className="container md:max-w-7xl justify-center w-full grid mx-auto grid-cols-1 gap-5 md:grid-cols-3 text-white">
					<motion.div
						className="space-y-4 text-left"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
					>
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
					</motion.div>
					<motion.div
						className="space-y-4 text-left"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
					>
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
					</motion.div>
					<motion.div
						className="space-y-4 text-left"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
					>
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
					</motion.div>
				</div>
			</motion.div>
			<div className="container lg:w-10/12 mx-auto w-full p-5 flex gap-4 py-24 lg:pt-40 flex-col items-start">
				<div>
					<Badge className="bg-indigo-500/[0.15]">Features</Badge>
				</div>
				<div className="flex gap-2 flex-col text-white">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular"
					>
						AI-Powered Document Management
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-400"
					>
						Streamline your document workflow with advanced AI analysis and
						insights.
					</motion.p>
				</div>
				<div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 mx-auto">
					{features.map(({ title, description, icon }, index) => (
						<motion.div
							key={title}
							className={cn(
								"flex flex-col lg:border-r w-full py-10 relative group/feature border-neutral-800",
								(index === 0 || index === 4) &&
									"lg:border-l border-neutral-800",
								index < 4 && "lg:border-b border-neutral-800"
							)}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							viewport={{ once: true }}
						>
							{index < 4 && (
								<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t to-purple-400/50 from-gray-950/20 pointer-events-none" />
							)}
							{index >= 4 && (
								<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-400/50 to-gray-950/20 pointer-events-none" />
							)}
							<div className="mb-4 relative z-10 px-10 text-neutral-400">
								{icon}
							</div>
							<div className="text-lg font-bold mb-2 relative z-10 px-10">
								<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-purple-600 transition-all duration-200 origin-center" />
								<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
									{title}
								</span>
							</div>
							<p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
								{description}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Target Audience */}
			<div className="container lg:w-10/12 mx-auto w-full p-5">
				<div className="flex gap-4 pt-0  py-24 flex-col items-start">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<Badge>Audience</Badge>
					</motion.div>
					<div className="flex gap-2 flex-col text-white">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular"
						>
							Who benefits from our platform?
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-400"
						>
							{/* Designed for professionals, built for the future. */}
							Our platform transforms the way Businesses and professionals
							handle documents,ensuring efficiency, security, and AI-driven
							insights
						</motion.p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 pt-12 items-start lg:grid-cols-3 gap-5">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 w-full items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>Enterprise and Corporations</p>
								<p className="text-muted-foreground text-sm">
									Seamless integration with Google Drive, Microsoft 365, and
									other tools for smooth document analysis.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>Financial Institutions & Banks</p>
								<p className="text-muted-foreground text-sm">
									Automate compliance checks,risk assessment, document
									processing and more with AI-powered insights
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>Legal & Compliance Teams</p>
								<p className="text-muted-foreground text-sm">
									Reduce legal risks with AI-powered contract analysis,
									automated compliance tracking and more.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 w-full items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>Startups & Firms</p>
								<p className="text-muted-foreground text-sm">
									Designed to support rapid business growth with advanced AI.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>Government & Public Sector</p>
								<p className="text-muted-foreground text-sm">
									Automate document processing,records management, compliance
									with Government regulations and more.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>Educational Institutions</p>
								<p className="text-muted-foreground text-sm">
									Grading automation and assessment, digital document management
									for students and many more features
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							viewport={{ once: true }}
							className="flex flex-row gap-6 items-start"
						>
							<Check className="w-4 h-4 mt-2 shrink-0 text-white" />
							<div className="flex flex-col gap-1 text-white">
								<p>More</p>
								<p className="text-muted-foreground text-sm">
									We serve diverse industries beyond these listed ones. Our
									platform adapts to any organization seeking efficient document
									analysis an AI-powered insights.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			<HowITworks />
			<Testimonials />
			<Pricing />
			<FAQ />
			<section className="text-white space-y-5 py-24 bg-purple-950/50">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-lg max-w-xl mx-auto text-center lg:max-w-xl leading-relaxed tracking-tight text-purple-400"
				>
					Ready to get started?
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-3xl md:text-5xl text-center tracking-tighter lg:max-w-xl mx-auto font-regular"
				>
					Start your free trial today.
				</motion.p>
				<button
					type="button"
					className="relative mx-auto w-fit block overflow-hidden rounded-full p-[1.5px]"
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
			</section>
			<Footer />
		</div>
	);
};

export default Page;
