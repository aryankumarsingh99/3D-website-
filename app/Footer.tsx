import Link from "next/link";
import Image from "next/image";
const footerLinks = [
	{ label: "Home", href: "/#top" },
	{ label: "Services", href: "/#services" },
	{ label: "About Us", href: "/#about" },
	{ label: "Projects", href: "/floor-plan" },
	{ label: "Contact", href: "/#contact" },
];

const serviceLinks = [
	{ label: "3D BIM Modelling", href: "/#services" },
	{ label: "Architectural Drawings", href: "/#services" },
	{ label: "Structural Documentation", href: "/#services" },
	{ label: "Planning Approvals", href: "/#building-study" },
];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="site-footer-gridline" aria-hidden="true" />
			<div className="site-footer-inner">
				<div className="site-footer-brand">
					<Link className="ml-[4.2vw] text-[30px] font-bold tracking-[-0.08em] max-[700px]:text-[27px]" href="/#top" aria-label="DraftBIM Services home">
						<Image src="/logo.png" alt="Draft BIM logo" width={60} height={60} className="rounded-full" />
					</Link>
					<p>Digital building models and coordinated documentation for clearer construction.</p>
				</div>

				<nav className="site-footer-nav" aria-label="Footer navigation">
					<span className="site-footer-label">Navigate</span>
					{footerLinks.map((link) => (
						<Link key={link.label} href={link.href}>{link.label}</Link>
					))}
				</nav>

				<nav className="site-footer-nav" aria-label="Services navigation">
					<span className="site-footer-label">Capabilities</span>
					{serviceLinks.map((link) => (
						<Link key={link.label} href={link.href}>{link.label}</Link>
					))}
				</nav>

				<div className="site-footer-contact">
					<span className="site-footer-label">Contact</span>
					<a href="mailto:Draftbim@gmail.com">Draftbim@gmail.com</a>
					<a href="tel:+918328992742">+91 83289 92742</a>
					<p>Er. Vijay Kumar Achary</p>
					<p>Founder Draft BIM.</p>
					<p>Associate Member India-Reg No (AM3119915)</p>
					<p>Director Of Town Planning - DTP EMP No. RTP/DTP(C.ER)-632/2024</p>
					<p>Koraput, Odisha, India</p>
					<div className="site-footer-socials" aria-label="Social links">
						<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
						<a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
					</div>
				</div>
			</div>
			<div className="site-footer-bottom">
				<span>DraftBIM Services / 2026</span>
				<span>Available for selected projects</span>
				<Link href="/#top" className="site-footer-top">Back to top <span aria-hidden="true">&#8593;</span></Link>
			</div>
		</footer>
	);
}
