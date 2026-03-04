export default function Reviews() {
  return (
    <section className="dark">
      <div className="container">
        <h2 style={{ marginBottom: 24 }}>Reviews</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <Review
            text="Outstanding guide with deep local knowledge. We had a fantastic day on the river and learned a ton."
            author="★★★★★ Yelp Reviewer"
          />

          <Review
            text="Professional, patient, and clearly passionate about fishing. Highly recommend for beginners and experienced anglers alike."
            author="★★★★★ Yelp Reviewer"
          />

          <Review
            text="One of the best guided trips I've ever booked. Great communication and a relaxed, enjoyable experience."
            author="★★★★★ Yelp Reviewer"
          />
        </div>

        <p style={{ marginTop: 24 }}>
          <a
            href="https://www.yelp.com/biz/weis-guide-service-preston"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9ca3af" }}
          >
            View more reviews on Yelp →
          </a>
        </p>
      </div>
    </section>
  );
}

function Review({ text, author }: { text: string; author: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        padding: 24,
        borderRadius: 16,
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: 12 }}>
        “{text}”
      </p>
      <strong style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        {author}
      </strong>
    </div>
  );
}
