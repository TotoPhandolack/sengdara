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
            <img className="w-narrow" src="https://picsum.photos/seed/fitguru-trainer1/440/576" alt="Trainer" loading="lazy" />
            <img className="w-wide" src="https://picsum.photos/seed/fitguru-trainer2/1150/576" alt="Trainer" loading="lazy" />
            <img className="w-narrow" src="https://picsum.photos/seed/fitguru-trainer3/440/576" alt="Trainer" loading="lazy" />
          </div>
          <div className="trainers__row">
            <img className="w-wide" src="https://picsum.photos/seed/fitguru-trainer4/794/576" alt="Trainer" loading="lazy" />
            <img className="w-narrow" src="https://picsum.photos/seed/fitguru-trainer5/440/576" alt="Trainer" loading="lazy" />
            <img className="w-wide" src="https://picsum.photos/seed/fitguru-trainer6/794/576" alt="Trainer" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
