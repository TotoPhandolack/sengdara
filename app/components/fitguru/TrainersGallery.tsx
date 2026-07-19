import { sengdaraPhoto } from "./sengdara-photos";

// No dedicated trainer-portrait photos were available on the Google Business
// Profile, so this section reuses the confirmed real facility shots instead
// of stock placeholders. Swap in real trainer photos here once you have them.
export default function TrainersGallery() {
  return (
    <section id="trainers-gallery" className="section trainers">
      <div className="container trainers__inner">
        <div className="section-heading">
          <h2>Meet Our Trainers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </div>

        <div className="trainers__grid">
          <div className="trainers__row">
            <img className="w-narrow" src={sengdaraPhoto("memberCableMachine", 440, 576)} alt="Sengdara Fitness member training" loading="lazy" />
            <img className="w-wide" src={sengdaraPhoto("interiorTwoLevel", 1150, 576)} alt="Sengdara Fitness equipment floor" loading="lazy" />
            <img className="w-narrow" src={sengdaraPhoto("boxingArea", 440, 576)} alt="Sengdara Fitness boxing area" loading="lazy" />
          </div>
          <div className="trainers__row">
            <img className="w-wide" src={sengdaraPhoto("elevatedTrack", 794, 576)} alt="Sengdara Fitness elevated running track" loading="lazy" />
            <img className="w-narrow" src={sengdaraPhoto("cardioFloor", 440, 576)} alt="Sengdara Fitness cardio floor" loading="lazy" />
            <img className="w-wide" src={sengdaraPhoto("exteriorNight", 794, 576)} alt="Sengdara Fitness building exterior" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
