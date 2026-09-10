"use client";

const services = [
  {
    number: "01",
    title: "Architectural Planning & Master Plans",
    description: "Comprehensive architectural planning and master plan development tailored to your vision and site requirements.",
    detail: "Planning / Master Plans",
    visual: "linear-gradient(135deg, rgba(121,198,208,.48), transparent 42%), linear-gradient(90deg, transparent 49%, rgba(32,76,114,.72) 50%, transparent 51%), linear-gradient(25deg, transparent 42%, rgba(216,224,220,.38) 43%, rgba(216,224,220,.38) 44%, transparent 45%)",
  },
  {
    number: "02",
    title: "Structural Design (RCC & PEB)",
    description: "Robust structural engineering solutions for reinforced cement concrete and pre-engineered building systems.",
    detail: "RCC / PEB",
    visual: "linear-gradient(90deg, transparent 19%, rgba(216,243,240,.42) 20%, rgba(216,243,240,.42) 21%, transparent 22%, transparent 49%, rgba(32,76,114,.7) 50%, transparent 51%), linear-gradient(0deg, transparent 29%, rgba(121,198,208,.35) 30%, rgba(121,198,208,.35) 31%, transparent 32%), rgba(32,76,114,.12)",
  },
  {
    number: "03",
    title: "Interior Design (2D & 3D)",
    description: "Creative interior design services with detailed 2D layouts and immersive 3D visualisations to bring spaces to life.",
    detail: "2D / 3D Visualisation",
    visual: "linear-gradient(45deg, transparent 48%, rgba(32,76,114,.75) 49%, rgba(32,76,114,.75) 51%, transparent 52%), repeating-linear-gradient(90deg, rgba(216,224,220,.23) 0 1px, transparent 1px 24px), rgba(32,76,114,.15)",
  },
  {
    number: "04",
    title: "Municipal Building Plan Approval",
    description: "End-to-end assistance with municipal building plan approvals through Sujog and ePBASR portals.",
    detail: "Sujog / ePBASR",
    visual: "radial-gradient(circle at 72% 28%, rgba(32,76,114,.75) 0 3px, transparent 4px), radial-gradient(circle at 29% 72%, rgba(121,198,208,.72) 0 4px, transparent 5px), linear-gradient(135deg, transparent 48%, rgba(216,243,240,.4) 49%, rgba(216,243,240,.4) 50%, transparent 51%), rgba(32,76,114,.14)",
  },
  {
    number: "05",
    title: "Technical Consultancy & Site Guidance",
    description: "Expert technical consultancy and on-site guidance to ensure quality construction aligned with design intent.",
    detail: "Consultancy / Site Support",
    visual: "linear-gradient(160deg, rgba(32,76,114,.65), transparent 38%), radial-gradient(circle at 65% 60%, rgba(121,198,208,.45) 0 6px, transparent 7px), repeating-linear-gradient(0deg, rgba(216,224,220,.18) 0 1px, transparent 1px 20px), rgba(32,76,114,.12)",
  },
] as const;

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-stage">
        <div className="services-intro">
          <p className="services-kicker"><span>03</span> What we deliver</p>
          <h2>At Draft BIM,<br /><em>we provide</em></h2>
          <p className="services-description">
            From architectural planning to technical consultancy, we deliver end-to-end engineering solutions for your dream projects.
          </p>
          <a className="services-link" href="#contact">
            <span>Start a conversation</span>
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>


        <div className="service-column">
          {services.slice(0, 3).map((service) => (
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
          {services.slice(3).map((service) => (
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
