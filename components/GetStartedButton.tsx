import * as React from "react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const GetStartedButton = ({ className }: { className?: ClassValue }) => {
	return (
		<button
			type="button"
			className="relative inline-block overflow-hidden rounded-full p-[1.5px]"
		>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
			<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
				<a
					className={cn(
						"inline-flex rounded-full text-center text-white group items-center w-full justify-center  bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent hover:bg-gradient-to-tr hover:via-purple-400/40 hover:to-transparent hover:from-zinc-300/10 transition-all sm:w-auto py-3 px-7 text-lg",
						className
					)}
				>
					Get Started Now
				</a>
			</div>
		</button>
	);
};

export default GetStartedButton;
