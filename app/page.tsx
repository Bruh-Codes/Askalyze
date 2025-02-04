"use client";
import React from "react";
import { Hero } from "./components/Hero";
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
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { HowITworks } from "./components/HowItWorks";
import { motion } from "framer-motion";

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
			<div className="container lg:w-10/12 mx-auto w-full p-5">
				<div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
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
					<div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
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
									<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
								)}
								{index >= 4 && (
									<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
								)}
								<div className="mb-4 relative z-10 px-10 text-neutral-400">
									{icon}
								</div>
								<div className="text-lg font-bold mb-2 relative z-10 px-10">
									<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center" />
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
			</div>

			{/* Target Audience */}
			<div className="container lg:w-10/12 mx-auto w-full p-5">
				<div className="flex gap-4 py-20 flex-col items-start">
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
		</div>
	);
};

export default Page;
