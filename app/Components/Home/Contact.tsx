"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<section className="contact-section" id="contact">
			<div className="contact-gridline" aria-hidden="true" />
			<div className="contact-inner">
				<div className="contact-intro">
					<p className="contact-kicker"><span>05</span> Start a project</p>
					<h2>Let&apos;s make the<br /><em>next move.</em></h2>
					<p className="contact-description">
						Bring us the brief, the sketch, or simply the question. We&apos;ll help turn it into a clear, coordinated next step.
					</p>
					<div className="contact-details">
						<a href="mailto:hello@draftbim.com">hello@draftbim.com</a>
						<a href="tel:+919999999999">+91 99999 99999</a>
						<span>Odisha, India / Working worldwide</span>
					</div>
				</div>

				<div className="contact-form-wrap">
					<div className="contact-form-header">
						<span>Project enquiry</span>
						<span>Reply within 1-2 days</span>
					</div>
					{submitted ? (
						<div className="contact-success" role="status">
							<span className="contact-success-mark">&#10003;</span>
							<h3>Brief received.</h3>
							<p>We&apos;ll be in touch shortly to understand the project and map the next step.</p>
							<button type="button" onClick={() => setSubmitted(false)}>Send another enquiry <span aria-hidden="true">&#8594;</span></button>
						</div>
					) : (
						<form className="contact-form" onSubmit={handleSubmit}>
							<label>
								<span>Your name</span>
								<input name="name" type="text" placeholder="Full name" required />
							</label>
							<label>
								<span>Email address</span>
								<input name="email" type="email" placeholder="you@company.com" required />
							</label>
							<label>
								<span>What do you need?</span>
								<select name="service" defaultValue="">
									<option value="" disabled>Select a service</option>
									<option>3D BIM Modelling</option>
									<option>Architectural Drawings</option>
									<option>Structural Documentation</option>
									<option>Planning Approvals</option>
								</select>
							</label>
							<label className="contact-message-field">
								<span>Tell us about the project</span>
								<textarea name="message" placeholder="A little about the site, stage, or scope..." rows={4} required />
							</label>
							<button className="contact-submit" type="submit">Send project brief <span aria-hidden="true">&#8594;</span></button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
