"use clint";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";
import { ClassValue } from "clsx";
import Marquee from "react-fast-marquee";

const Testimonials = ({ className }: { className?: ClassValue }) => {
	const testimonials = [
		{
			author: {
				name: "Emma Thompson",
				handle: "@emmaai",
				avatar:
					"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
			},
			text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
			href: "https://twitter.com/emmaai",
		},
		{
			author: {
				name: "David Park",
				handle: "@davidtech",
				avatar:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
			},
			text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
			href: "https://twitter.com/davidtech",
		},
		{
			author: {
				name: "Sofia Rodriguez",
				handle: "@sofiaml",
				avatar:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
			},
			text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
		},
	];

	return (
		<section className="py-24 container mx-auto space-y-4 lg:max-w-7xl">
			<Badge className="bg-indigo-500/[0.15] w-fit mx-auto block text-center">
				Testimonial Highlight
			</Badge>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				viewport={{ once: true }}
				className="text-4xl py-5 sm:text-6xl md:text-5xl text-center font-bold mb-6 md:mb-8 tracking-tight text-white"
			>
				What our customers are saying
			</motion.h2>

			<div
				className={cn(
					"bg-default-background w-full text-foreground ",
					className
				)}
			>
				<Marquee
					autoFill
					gradient
					gradientColor="#030303"
					speed={70}
					className=" flex w-full flex-col items-center justify-center "
				>
					<div className="group relative flex  p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
						<div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row">
							{[...Array(4)].map((_, setIndex) =>
								testimonials.map((testimonial, i) => (
									<TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
								))
							)}
						</div>
						{/* <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-default-background sm:block" />
						// <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-default-background sm:block" /> */}
					</div>
				</Marquee>
			</div>
		</section>
	);
};

export default Testimonials;
