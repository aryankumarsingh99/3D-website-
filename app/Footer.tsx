import Link from "next/link";

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
					<Link className="site-footer-logo" href="/#top" aria-label="DraftBIM Services home">
						DraftBIM<span>.</span>
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
					<span className="site-footer-label">Start a conversation</span>
					<a href="mailto:hello@draftbim.com">hello@draftbim.com</a>
					<a href="tel:+919999999999">+91 99999 99999</a>
					<span>Odisha, India</span>
					<span>Architecture + Construction</span>
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
