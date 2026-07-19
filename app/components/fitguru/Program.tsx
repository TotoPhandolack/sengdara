export default function Program() {
  return (
    <section id="program" className="section program">
      <div className="container program__inner">
        <div className="program__photos">
          <img
            className="program__photo-tall"
            src="https://picsum.photos/seed/fitguru-coach1/350/615"
            alt="Coach portrait"
            loading="lazy"
          />
          <img
            className="program__photo-square"
            src="https://picsum.photos/seed/fitguru-coach2/615/615"
            alt="Coach in action"
            loading="lazy"
          />
        </div>
        <div className="program__text">
          <div>
            <p className="eyebrow">Are you looking for a Mentor?</p>
            <h2>Coaches</h2>
          </div>
          <p className="body-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et. Lorem ipsum dolor sit ...
          </p>
          <a href="#trainers-gallery" className="btn btn--dark">
            Explore&nbsp;&nbsp;More
          </a>
        </div>
      </div>
    </section>
  );
}
