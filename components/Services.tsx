export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "80px 20px",
        background: "#ffffff"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>Trip Pricing</h2>

        <p style={{ marginBottom: "36px", color: "#555" }}>
          All trips are tailored to river conditions, season, and angler experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px"
          }}
        >
          {/* Drift Boat — Full Day */}
          <div
            style={{
              padding: "28px",
              borderRadius: "18px",
              background: "#f6f7f8",
              textAlign: "left"
            }}
          >
            <h3>Drift Boat — Full Day</h3>
            <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>$600</p>
            <p>1–2 anglers</p>
            <p>
              Guided float trips on local rivers, including the South Branch of the Root River.
            </p>
          </div>

          {/* Drift Boat — Half Day */}
          <div
            style={{
              padding: "28px",
              borderRadius: "18px",
              background: "#f6f7f8",
              textAlign: "left"
            }}
          >
            <h3>Drift Boat — Half Day</h3>
            <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>$500</p>
            <p>1–2 anglers</p>
            <p>
              Shorter float option ideal for limited schedules or evening trips.
            </p>
          </div>

          {/* Walk & Wade — Full Day */}
          <div
            style={{
              padding: "28px",
              borderRadius: "18px",
              background: "#f6f7f8",
              textAlign: "left"
            }}
          >
            <h3>Walk & Wade — Full Day</h3>
            <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>$550</p>
            <p>1–2 anglers</p>
            <p>
              Full-day walk-and-wade trips on spring creeks and smaller rivers.
            </p>
          </div>

          {/* Walk & Wade — Half Day */}
          <div
            style={{
              padding: "28px",
              borderRadius: "18px",
              background: "#f6f7f8",
              textAlign: "left"
            }}
          >
            <h3>Walk & Wade — Half Day</h3>
            <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>$400</p>
            <p>1–2 anglers</p>
            <p>
              Half-day option focused on technique, reading water, and seasonal hatches.
            </p>
          </div>
        </div>

        <p style={{ marginTop: "28px", fontSize: "0.9rem", color: "#555" }}>
          A deposit is required to hold your date. Trips are limited and book quickly during peak season.
        </p>

        {/* CTA BUTTON */}
        <div style={{ marginTop: "36px" }}>
          <a
            href="https://venmo.com/weisguideservice"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              borderRadius: "999px",
              background: "#1f2a24",
              color: "#ffffff",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem"
            }}
          >
            Request a Booking — Deposit Required
          </a>
        </div>

        {/* VENMO QR */}
        <div
          style={{
            marginTop: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "#666" }}>
            Scan to submit your deposit
          </p>

          <img
            src="/venmo-qr.png"
            alt="Venmo QR Code"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "16px",
              border: "1px solid #e0e0e0"
            }}
          />

          <a
            href="https://venmo.com/weisguideservice"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.9rem",
              color: "#1f2a24",
              textDecoration: "underline",
              fontWeight: 500
            }}
          >
            Venmo: @weisguideservice
          </a>
        </div>

        {/* CANCELLATION POLICY */}
        <div
          style={{
            marginTop: "64px",
            textAlign: "left",
            color: "#555",
            fontSize: "0.9rem",
            lineHeight: 1.6
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>Cancellation Policy</h3>

          <p>
            A valid credit card is required to book a trip, and a deposit is required at the time of booking.
            Cancellations within 24 hours of the trip date or no-shows will result in a charge of 100% of the
            trip’s total cost.
          </p>

          <p>
            Cancellations made within 5 days of the trip date will forfeit the deposit. Deposits may be credited
            toward a future trip at the guide’s discretion.
          </p>

          <p>
            Cancellations due to special circumstances will be considered on a case-by-case basis, and fees
            may be waived when appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}