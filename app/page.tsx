import fs from "node:fs";
import path from "node:path";
import Hero from "./components/fitguru/Hero";
import Stats from "./components/fitguru/Stats";
import WhyChooseUs from "./components/fitguru/WhyChooseUs";
import Program from "./components/fitguru/Program";
import TrainersGallery from "./components/fitguru/TrainersGallery";
import Pricing from "./components/fitguru/Pricing";
import Reviews from "./components/fitguru/Reviews";
import Footer from "./components/fitguru/Footer";
import ScrollReveal from "./components/fitguru/ScrollReveal";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

// Read on the server (this page is a Server Component) and pass the list down,
// so Hero itself can be a Client Component that reacts to language changes.
function getHeroImages() {
  const dir = path.join(process.cwd(), "public", "images", "hero");
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/images/hero/${file}`);
}

export default function Home() {
  const heroImages = getHeroImages();

  return (
    <div className="fitguru-site">
      <ScrollReveal />
      <Hero images={heroImages} />
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
