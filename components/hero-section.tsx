"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback } from "react";

export default function HeroSection() {
	const { t, language } = useLanguage();

	// Imagini pentru proiecte
	const projectImagesTop = [
		"/images/projects/Project 1.webp",
		"/images/projects/Mobile 1.webp",
		"/images/projects/Project 2.webp",
		"/images/projects/Mobile 2.webp",
		"/images/projects/Project 3.webp",
		"/images/projects/Mobile 3.webp",
		"/images/projects/Project 4.webp",
		"/images/projects/Mobile 4.webp",
		"/images/projects/Project 1.webp",
		"/images/projects/Mobile 1.webp",
	];

	const projectImagesBottom = [
		"/images/projects/Project 1.webp",
		"/images/projects/Mobile 1.webp",
		"/images/projects/Project 2.webp",
		"/images/projects/Mobile 2.webp",
		"/images/projects/Project 3.webp",
		"/images/projects/Mobile 3.webp",
		"/images/projects/Project 4.webp",
		"/images/projects/Mobile 4.webp",
		"/images/projects/Project 1.webp",
		"/images/projects/Mobile 1.webp",
	];

	const scrollToServices = useCallback(() => {
		const servicesSection = document.getElementById("services");
		if (servicesSection) {
			servicesSection.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<section className="flex-col justify-center pt-0">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center mb-4"
				>
					<h1 className="mt-12 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
						{language === "ro"
							? "Transformăm Ideile tale în Software"
							: "Transforming Your Ideas into Software"}
					</h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
							{language === "ro"
								? "Să creăm împreună Următoarea ta soluție Software"
								: "Let's build your Next Software solution together"}
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.14 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Button
							asChild
							size="lg"
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-5 text-base"
						>
							<Link href="/contact" prefetch={false}>
								{t("hero.cta")}
							</Link>
						</Button>

						<Button
							variant="outline"
							size="lg"
							onClick={scrollToServices}
							className="border-gray-600 text-white hover:bg-gray-800 px-6 py-5 text-base "
						>
							{t("hero.secondary")}
						</Button>
					</motion.div>
				</motion.div>

				{/* Project Showcase Slider */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.8 }}
					className="mt-0"
				>
					{/* 
<DualSlider
  imagesTop={projectImagesTop}
  imagesBottom={projectImagesBottom}
/> 
*/}
				</motion.div>
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="animate-bounce"
				>
					<Button
						variant="ghost"
						size="icon"
						onClick={scrollToServices}
						className="rounded-full border border-gray-700 bg-black/30 text-white hover:bg-gray-800"
						aria-label="Scroll to services"
					>
						<ChevronDown size={24} />
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
