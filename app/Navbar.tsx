"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
	{ label: "Home", href: "/#top", key: "home" },
	{ label: "Services", href: "/#services", key: "services" },
	{ label: "About Us", href: "/#about", key: "about" },
	{ label: "Projects", href: "/floor-plan", key: "projects" },
	{ label: "Contact", href: "/#contact", key: "contact" },
] as const;

export default function Navbar() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeRoute, setActiveRoute] = useState("home");
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setHasScrolled(window.scrollY > 24);

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const updateActiveRoute = () => {
			if (pathname === "/floor-plan") {
				setActiveRoute("projects");
				return;
			}

			const section = window.location.hash.slice(1);
			setActiveRoute(navItems.some((item) => item.key === section) ? section : "home");
		};

		updateActiveRoute();
		window.addEventListener("hashchange", updateActiveRoute);
		return () => window.removeEventListener("hashchange", updateActiveRoute);
	}, [pathname]);

	return (
		<header className={`fixed inset-x-0 top-0 z-20 flex items-center justify-between px-[4.5vw] py-7 text-[#204C72] transition-colors duration-300 max-[700px]:py-4 ${hasScrolled ? "bg-[#204C72]" : "bg-transparent"}`}>
			<Link className="ml-[4.2vw] text-[30px] font-bold tracking-[-0.08em] max-[700px]:text-[27px]" href="/#top" aria-label="DraftBIM Services home">
				<Image src="/logo.png" alt="Draft BIM logo" width={60} height={60} className="rounded-full" />
			</Link>
			<button className="hidden max-[700px]:block max-[700px]:ml-auto cursor-pointer border-0 bg-transparent p-2" type="button" aria-expanded={isMenuOpen} aria-controls="primary-navigation" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((value) => !value)}>
				<span className={`block h-px w-6 ${hasScrolled ? "bg-white" : "bg-[#204C72]"} transition-transform duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
				<span className={`mt-1.5 block h-px w-6 ${hasScrolled ? "bg-white" : "bg-[#204C72]"} transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
				<span className={`mt-1.5 block h-px w-6 ${hasScrolled ? "bg-white" : "bg-[#204C72]"} transition-transform duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
			</button>
			<nav id="primary-navigation" className={`${isMenuOpen ? "flex" : "hidden"} absolute left-1/2 -translate-x-1/2 items-center gap-4 text-[13px] uppercase tracking-[0.14em] max-[700px]:left-auto max-[700px]:right-[4.5vw] max-[700px]:top-full max-[700px]:w-max max-[700px]:translate-x-0 max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-1 max-[700px]:border max-[700px]:border-[#40545b] max-[700px]:bg-[#17232b] max-[700px]:p-2 max-[700px]:text-[10px] min-[701px]:flex`}>
				{navItems.map((item) => {
					const isActive = activeRoute === item.key;

					return (
						<Link
							key={item.key}
							className={`group relative px-5 py-3 ${hasScrolled ? "text-white" : "text-[#204C72]"} transition-colors max-[700px]:px-3 max-[700px]:py-2 ${hasScrolled ? "hover:text-[#e3e7e9]" : "hover:text-[#204C72]"}`}
							href={item.href}
							aria-current={isActive ? "page" : undefined}
							onClick={() => {
								setActiveRoute(item.key);
								setIsMenuOpen(false);
							}}
						>
							{item.label}
							{!isActive && (
								<span
									className={`absolute bottom-1 left-5 right-5 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 max-[700px]:left-3 max-[700px]:right-3 ${hasScrolled ? "bg-[#173d46]" : "bg-[#e08f62]"}`}
								/>
							)}
							{isActive && (
								<motion.span
									layoutId="active-route-underline"
									className={`absolute bottom-1 left-5 right-5 h-0.5 max-[700px]:left-3 max-[700px]:right-3 ${hasScrolled ? "bg-[#173d46]" : "bg-[#204C72]"}`}
									transition={{ type: "spring", stiffness: 500, damping: 32 }}
								/>
							)}
						</Link>
					);
				})}
			</nav>
			<p className={`ml-auto hidden text-[10px] uppercase tracking-[0.18em] md:block ${hasScrolled ? "text-[#f9f7f5]" : "text-[#204C72]"}`}>
				BIM services / Architecture + Construction
			</p>
		</header>
	);
}
