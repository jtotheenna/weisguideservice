import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import FishingInfo from "../components/FishingInfo";

export default function Page() {
  return (
    <main>
      <Hero />

      {/* CTA BAR */}
      <section className="cta-bar">
        {/* ACTION BUTTONS */}
        <div className="cta-secondary">
          <a
            href="https://forecast.weather.gov/MapClick.php?lat=43.79&lon=-91.83"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            Local Weather
          </a>

          <a href="tel:+15076061002" className="btn outline">
            Call
          </a>

          <a href="sms:+15076061002" className="btn outline">
            Text
          </a>
        </div>

        {/* TRUST / INFO LINKS */}
        <div className="cta-links">
          <a href="/certificate.pdf" target="_blank" rel="noopener noreferrer">
            CPR & First Aid Certified
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Peterson+MN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Local Map & Services
          </a>

          <a
            href="https://www.facebook.com/weisguideservice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.yelp.com/biz/weis-guide-service-preston"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yelp
          </a>
        </div>
      </section>

      <FishingInfo />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />

      <footer className="site-footer">
        Built by{" "}
        <a href="https://jennasys.pro" target="_blank" rel="noopener noreferrer">
          Jennasys.pro
        </a>{" "}
        © 2026
      </footer>
    </main>
  );
}