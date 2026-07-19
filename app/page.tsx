import Hero from "./components/fitguru/Hero";
import Stats from "./components/fitguru/Stats";
import WhyChooseUs from "./components/fitguru/WhyChooseUs";
import Program from "./components/fitguru/Program";
import TrainersGallery from "./components/fitguru/TrainersGallery";
import Pricing from "./components/fitguru/Pricing";
import Reviews from "./components/fitguru/Reviews";
import Footer from "./components/fitguru/Footer";
import ScrollReveal from "./components/fitguru/ScrollReveal";

export default function Home() {
  return (
    <div className="fitguru-site">
      <ScrollReveal />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Program />
      <TrainersGallery />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
