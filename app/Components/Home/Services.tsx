const services = [
  {
    number: "01",
    title: "3D BIM modelling",
    description: "Coordinated digital models that make every decision visible before construction begins.",
    detail: "Revit / IFC",
    visual: "linear-gradient(135deg, rgba(121,198,208,.48), transparent 42%), linear-gradient(90deg, transparent 49%, rgba(224,143,98,.72) 50%, transparent 51%), linear-gradient(25deg, transparent 42%, rgba(216,224,220,.38) 43%, rgba(216,224,220,.38) 44%, transparent 45%)",
  },
  {
    number: "02",
    title: "Architectural drawings",
    description: "Clear plans, elevations, and details prepared for design development and approvals.",
    detail: "Plans / Sections",
    visual: "linear-gradient(90deg, transparent 19%, rgba(216,243,240,.42) 20%, rgba(216,243,240,.42) 21%, transparent 22%, transparent 49%, rgba(224,143,98,.7) 50%, transparent 51%), linear-gradient(0deg, transparent 29%, rgba(121,198,208,.35) 30%, rgba(121,198,208,.35) 31%, transparent 32%), rgba(64,84,91,.32)",
  },
  {
    number: "03",
    title: "Structural documentation",
    description: "Construction-ready structural information aligned with the architectural intent.",
    detail: "Schedules / Details",
    visual: "linear-gradient(45deg, transparent 48%, rgba(224,143,98,.75) 49%, rgba(224,143,98,.75) 51%, transparent 52%), repeating-linear-gradient(90deg, rgba(216,224,220,.23) 0 1px, transparent 1px 24px), rgba(64,84,91,.3)",
  },
  {
    number: "04",
    title: "MEP coordination",
    description: "Clash-aware coordination that keeps services integrated, accessible, and buildable.",
    detail: "Systems / Coordination",
    visual: "radial-gradient(circle at 72% 28%, rgba(224,143,98,.75) 0 3px, transparent 4px), radial-gradient(circle at 29% 72%, rgba(121,198,208,.72) 0 4px, transparent 5px), linear-gradient(135deg, transparent 48%, rgba(216,243,240,.4) 49%, rgba(216,243,240,.4) 50%, transparent 51%), rgba(64,84,91,.34)",
  },
] as const;

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-stage">
        <div className="services-intro">
          <p className="services-kicker"><span>03</span> What we deliver</p>
          <h2>Clarity at<br /><em>every scale.</em></h2>
          <p className="services-description">
            From the first line of a concept to the final coordinated detail, our models keep teams aligned and projects moving.
          </p>
          <a className="services-link" href="#contact">
            <span>Start a conversation</span>
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>

        <div className="service-column">
          {services.slice(0, 2).map((service) => (
            <article className="service-row" key={service.number}>
              <div className="service-slab" style={{ background: service.visual }} aria-hidden="true" />
              <div className="service-copy">
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-detail">{service.detail}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="service-column service-column-right">
          {services.slice(2).map((service) => (
            <article className="service-row" key={service.number}>
              <div className="service-slab" style={{ background: service.visual }} aria-hidden="true" />
              <div className="service-copy">
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-detail">{service.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
