// components/ui/faq-section.tsx
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const FAQ = () => {
	const items = [
		{
			question: "What makes your platform unique?",
			answer:
				"Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
		},
		{
			question: "How does the pricing structure work?",
			answer:
				"We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
		},
		{
			question: "What kind of support do you offer?",
			answer:
				"We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
		},
	];
	return (
		<section className={cn("py-24 w-full")}>
			<div className="container mx-auto space-y-5 text-white">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-3xl md:text-6xl mx-auto tracking-tighter lg:max-w-2xl text-center font-regular"
				>
					Frequently Asked Questions
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-sm w-fit mx-auto text-muted-foreground"
				>
					Everything you need to know about our platform
				</motion.p>

				{/* FAQ Items */}
				<div className="max-w-2xl mx-auto space-y-2">
					{items.map((item, index) => (
						<FaqItem
							key={index}
							question={item.question}
							answer={item.answer}
							index={index}
						/>
					))}
				</div>

				{/* Contact Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center"
				>
					<div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
						<Mail className="h-4 w-4" />
					</div>
					<p className="text-sm font-medium text-white mb-1">
						Still have questions?
					</p>
					<p className="text-xs text-zinc-400 mb-4">
						{`We're here to help you`}
					</p>

					<Link
						href={""}
						className={cn(
							buttonVariants({
								variant: "outline",
								size: "lg",
							}),
							"w-full font-semibold tracking-tight",
							"transition-all duration-300",
							"hover:bg-white hover:text-black hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black",
							"bg-white text-black hover:bg-white"
						)}
					>
						Contact Support
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

// Internal FaqItem component
const FaqItem = React.forwardRef<
	HTMLDivElement,
	{
		question: string;
		answer: string;
		index: number;
	}
>((props, ref) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const { question, answer, index } = props;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2, delay: index * 0.1 }}
			className={cn(
				"group rounded-lg",
				"transition-all duration-200 ease-in-out",
				"border border-zinc-900",
				isOpen ? "bg-default-background" : "hover:bg-zinc-900"
			)}
		>
			<Button
				variant="ghost"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent"
			>
				<h3
					className={cn(
						"text-base font-medium transition-colors duration-200 text-left",
						"text-white/70",
						isOpen && "text-white"
					)}
				>
					{question}
				</h3>
				<motion.div
					animate={{
						rotate: isOpen ? 180 : 0,
						scale: isOpen ? 1.1 : 1,
					}}
					transition={{ duration: 0.2 }}
					className={cn(
						"p-0.5 rounded-full flex-shrink-0",
						"transition-colors duration-200",
						isOpen ? "text-white" : "text-zinc-500"
					)}
				>
					<ChevronDown className="h-4 w-4" />
				</motion.div>
			</Button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: { duration: 0.2, ease: "easeIn" },
						}}
					>
						<div className="px-6 pb-4 pt-2">
							<motion.p
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -10, opacity: 0 }}
								className="text-sm text-zinc-400 leading-relaxed"
							>
								{answer}
							</motion.p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
});
FaqItem.displayName = "FaqItem";

export { FAQ };
