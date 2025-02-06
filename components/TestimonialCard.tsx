import { cn } from "@/lib/utils";
import Image from "next/image";

export interface TestimonialAuthor {
	name: string;
	handle: string;
	avatar: string;
}

export interface TestimonialCardProps {
	author: TestimonialAuthor;
	text: string;
	href?: string;
	className?: string;
}

export function TestimonialCard({
	author,
	text,
	href,
	className,
}: TestimonialCardProps) {
	const Card = href ? "a" : "div";

	return (
		<Card
			{...(href ? { href } : {})}
			className={cn(
				"flex flex-col rounded-lg ",
				"bg-gradient-to-b from-purple-400/50 to-gray-900/10",
				"p-4 text-start sm:p-6",
				"hover:from-purple-400/60 hover:to-gray-950/20",
				"max-w-[320px] sm:max-w-[320px]",
				"transition-colors duration-300",
				className
			)}
		>
			<div className="flex items-center gap-3 text-white">
				<Image
					src={"/" + author.avatar}
					width={50}
					height={50}
					className="h-12 w-12"
					alt={author.name}
				/>
				<div className="flex flex-col items-start">
					<h3 className="text-md font-semibold leading-none">{author.name}</h3>
					<p className="text-sm text-gray-400">{author.handle}</p>
				</div>
			</div>
			<p className="sm:text-md mt-4 text-sm text-white/70">{text}</p>
		</Card>
	);
}
