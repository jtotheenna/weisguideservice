import { siteData } from "./siteData";

export default function Contact() {
  return (
    <section className="section section-soft" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>Reach out to check availability or ask questions.</p>

        <p style={{ marginTop: "16px" }}>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
        </p>
      </div>
    </section>
  );
}
