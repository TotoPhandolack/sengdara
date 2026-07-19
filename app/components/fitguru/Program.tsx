import { sengdaraPhoto } from "./sengdara-photos";

export default function Program() {
  return (
    <section id="program" className="section program">
      <div className="container program__inner">
        <div className="program__photos">
          <img
            className="program__photo-tall"
            src={sengdaraPhoto("elevatedTrack", 400, 615)}
            alt="Sengdara Fitness elevated running track"
            loading="lazy"
          />
          <img
            className="program__photo-square"
            src={sengdaraPhoto("cardioFloor", 615, 615)}
            alt="Sengdara Fitness cardio floor"
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
