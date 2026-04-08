"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center"
      }}
    >
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)"
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
          padding: "0 28px",
          margin: "0 auto",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.75rem, 6vw, 4rem)",
            marginBottom: "14px"
          }}
        >
          Weis Guide Service
        </h1>

        <p style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
          Guided fishing trips with experience you can trust
        </p>

        <p style={{ opacity: 0.9, fontSize: "1rem", marginBottom: "28px" }}>
          Peterson, Minnesota
        </p>

        {/* GLASS CTA BUTTON */}
        <a
          href="tel:+15076061002"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 36px",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255, 255, 255, 0.35)",
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "background 0.2s ease, border-color 0.2s ease",
            marginBottom: "28px"
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.25)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.55)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)";
          }}
        >
          Book a Trip
        </a>

        {/* LOGO */}
        <img
          src="/logo2.png"
          alt="Weis Guide Service logo"
          style={{
            width: "140px",
            height: "auto",
            opacity: 0.95
          }}
        />
      </div>
    </section>
  );
}