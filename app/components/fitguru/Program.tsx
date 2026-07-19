import { sengdaraPhoto } from "./sengdara-photos";
import SectionEyebrow from "./SectionEyebrow";

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
            <SectionEyebrow>Are you looking for a mentor?</SectionEyebrow>
            <h2>Coaches</h2>
          </div>
          <p className="body-lg">
            &ldquo;The trainers are incredibly kind — always around to spot you and teach you how to use
            the equipment properly,&rdquo; says one member. Whether you&apos;re brand new to the gym or
            training for a specific goal, our team walks the floor with you instead of leaving you to
            figure it out alone.
          </p>
          <a href="#trainers-gallery" className="btn btn--dark">
            Explore&nbsp;&nbsp;More
          </a>
        </div>
      </div>
    </section>
  );
}
