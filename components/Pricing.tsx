"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export function Pricing() {
	const [isMonthly, setIsMonthly] = useState(true);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const switchRef = useRef<HTMLButtonElement>(null);

	const plans = [
		{
			name: "STARTER",
			price: "50",
			yearlyPrice: "40",
			period: "per month",
			features: [
				"Up to 10 projects",
				"Basic analytics",
				"48-hour support response time",
				"Limited API access",
				"Community support",
			],
			description: "Perfect for individuals and small projects",
			buttonText: "Start Free Trial",
			href: "/sign-up",
			isPopular: false,
		},
		{
			name: "PROFESSIONAL",
			price: "99",
			yearlyPrice: "79",
			period: "per month",
			features: [
				"Unlimited projects",
				"Advanced analytics",
				"24-hour support response time",
				"Full API access",
				"Priority support",
				"Team collaboration",
				"Custom integrations",
			],
			description: "Ideal for growing teams and businesses",
			buttonText: "Get Started",
			href: "/sign-up",
			isPopular: true,
		},
		{
			name: "ENTERPRISE",
			price: "299",
			yearlyPrice: "239",
			period: "per month",
			features: [
				"Everything in Professional",
				"Custom solutions",
				"Dedicated account manager",
				"1-hour support response time",
				"SSO Authentication",
				"Advanced security",
				"Custom contracts",
				"SLA agreement",
			],
			description: "For large organizations with specific needs",
			buttonText: "Contact Sales",
			href: "/contact",
			isPopular: false,
		},
	];

	const handleToggle = (checked: boolean) => {
		setIsMonthly(!checked);
		if (checked && switchRef.current) {
			const rect = switchRef.current.getBoundingClientRect();
			const x = rect.left + rect.width / 2;
			const y = rect.top + rect.height / 2;

			confetti({
				particleCount: 50,
				spread: 60,
				origin: {
					x: x / window.innerWidth,
					y: y / window.innerHeight,
				},
				colors: [
					"hsl(var(--primary))",
					"hsl(var(--accent))",
					"hsl(var(--secondary))",
					"hsl(var(--muted))",
				],
				ticks: 200,
				gravity: 1.2,
				decay: 0.94,
				startVelocity: 30,
				shapes: ["circle"],
			});
		}
	};

	return (
		<div className=" mx-auto px-5 py-24 text-white">
			<div className="text-center space-y-4 mb-12">
				<div>
					<Badge className="bg-indigo-500/[0.15]">Pricing</Badge>
				</div>
				<div className="flex gap-2 w-fit mx-auto flex-col text-white">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-3xl md:text-6xl tracking-tighter lg:max-w-2xl text-center font-regular"
					>
						Choose a plan that works for you
					</motion.h2>
				</div>
			</div>

			<div className="flex justify-center mb-10">
				<label className="relative inline-flex items-center cursor-pointer">
					<Label>
						<Switch
							ref={switchRef as typeof switchRef}
							checked={!isMonthly}
							onCheckedChange={handleToggle}
							className={cn("relative", "checked:bg-purple-400")}
						/>
					</Label>
				</label>
				<span className="ml-2 font-semibold">
					Annual billing <span className="text-purple-400">(Save 20%)</span>
				</span>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4 lg:max-w-6xl mx-auto">
				{plans.map((plan, index) => (
					<motion.div
						key={index}
						initial={{ y: 50, opacity: 1 }}
						whileInView={
							isDesktop
								? {
										y: plan.isPopular ? -20 : 0,
										opacity: 1,
										x: index === 2 ? -30 : index === 0 ? 30 : 0,
										scale: index === 0 || index === 2 ? 0.94 : 1.0,
								  }
								: {}
						}
						viewport={{ once: true }}
						transition={{
							duration: 1.6,
							type: "spring",
							stiffness: 100,
							damping: 30,
							delay: 0.4,
							opacity: { duration: 0.5 },
						}}
						className={cn(
							`rounded-2xl border-[1px] p-6 bg-default-background text-center lg:flex lg:flex-col lg:justify-center relative`,
							plan.isPopular ? "border-border border-2" : "border-zinc-700",
							"flex flex-col",
							!plan.isPopular && "mt-5",
							index === 0 || index === 2
								? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
								: "z-10",
							index === 0 && "origin-right",
							index === 2 && "origin-left"
						)}
					>
						{plan.isPopular && (
							<div className="absolute top-0 right-0 bg-white py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
								<Star className="text-default-background h-4 w-4 fill-current" />
								<span className="text-default-background ml-1 font-sans font-semibold">
									Popular
								</span>
							</div>
						)}
						<div className="flex-1 flex flex-col">
							<p className="text-base font-semibold text-zinc-500">
								{plan.name}
							</p>
							<div className="mt-6 flex items-center justify-center gap-x-2">
								<span className="text-5xl font-bold tracking-tight text-white">
									<NumberFlow
										value={
											isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
										}
										format={{
											style: "currency",
											currency: "USD",
											minimumFractionDigits: 0,
											maximumFractionDigits: 0,
										}}
										willChange
										className="font-variant-numeric: tabular-nums"
									/>
								</span>
								{plan.period !== "Next 3 months" && (
									<span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
										/ {plan.period}
									</span>
								)}
							</div>

							<p className="text-xs leading-5 text-muted-foreground">
								{isMonthly ? "billed monthly" : "billed annually"}
							</p>

							<ul className="mt-5 gap-2 flex flex-col">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="flex items-start gap-2">
										<Check className="h-4 w-4 text-white mt-1 flex-shrink-0" />
										<span className="text-left">{feature}</span>
									</li>
								))}
							</ul>

							<hr className="w-full my-4 border-zinc-700" />

							<Link
								href={plan.href}
								className={cn(
									buttonVariants({
										variant: "outline",
										size: "lg",
									}),
									"w-full font-semibold tracking-tight",
									"transition-all duration-300",
									"bg-black border-zinc-700 text-white",
									"hover:bg-white hover:text-black hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black",
									{ "bg-white text-black hover:bg-white": plan.isPopular }
								)}
							>
								{plan.buttonText}
							</Link>
							<p className="mt-6 text-xs leading-5 text-muted-foreground">
								{plan.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
