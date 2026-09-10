const principles = [
  ["01", "Precision", "Every drawing carries the same intent from concept to site."],
  ["02", "Coordination", "Architecture, structure, and services stay in conversation."],
  ["03", "Momentum", "Clear information helps teams make decisions earlier."],
] as const;

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-gridline" aria-hidden="true" />
      <div className="about-inner">
        <div className="about-visual" aria-label="Abstract coordinated building drawing" role="img">
          <div className="about-visual-header">
            <span>Draft BIM / Method</span>
            <span>Drawing 01 / 03</span>
          </div>
          <div className="about-drawing">
            <div className="about-drawing-frame" />
            <div className="about-drawing-core" />
            <div className="about-drawing-line about-drawing-line-one" />
            <div className="about-drawing-line about-drawing-line-two" />
            <div className="about-drawing-line about-drawing-line-three" />
            <span className="about-drawing-label about-drawing-label-one">Structure</span>
            <span className="about-drawing-label about-drawing-label-two">Clarity</span>
          </div>
          <div className="about-visual-footer">
            <span>Scale 1:100</span>
            <span>Odisha / India</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="about-kicker"><span>02</span> About</p>
          <h2>Draft<br /><em>BIM</em></h2>
          <p className="about-lead">
            At Draft BIM, our mission is to provide exceptional design consultancy. We focus on making architectural dreams a reality for every homeowner. Trust us for your design needs.
          </p>
          <div className="about-principles">
            {principles.map(([number, title, description]) => (
              <div className="about-principle" key={number}>
                <span className="about-principle-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="about-link" href="#contact">
            <span>Work with us</span>
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
