export const metadata = {
  title: "Fishing Conditions | Weis Guide Service",
};

export default function ConditionsPage() {
  return (
    <main className="conditions-page">
      <section className="conditions-wrap">
        <h1>Fishing Conditions & Resources</h1>

        <p className="intro">
          Fishing conditions vary by season, water levels, and weather.
          These trusted resources help you plan your trip and stay legal.
        </p>

        <div className="conditions-grid">
          <a
            href="https://www.dnr.state.mn.us/lakefind/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="conditions-card"
          >
            <h2>Minnesota DNR Regulations</h2>
            <p>Official seasons, limits, and lake-specific rules.</p>
          </a>

          <a
            href="https://www.solunarforecast.com"
            target="_blank"
            rel="noopener noreferrer"
            className="conditions-card"
          >
            <h2>Solunar Fishing Forecast</h2>
            <p>Moon phases and peak feeding times.</p>
          </a>

          <a
            href="https://waterdata.usgs.gov/mn/nwis/rt"
            target="_blank"
            rel="noopener noreferrer"
            className="conditions-card"
          >
            <h2>River Levels & Flow</h2>
            <p>Live USGS river gauge data for SE Minnesota.</p>
          </a>

          <a
            href="https://www.dnr.state.mn.us/licenses/online-sales.html"
            target="_blank"
            rel="noopener noreferrer"
            className="conditions-card"
          >
            <h2>Buy a Fishing License</h2>
            <p>Purchase or renew your MN fishing license.</p>
          </a>
        </div>

        <p className="note">
          Questions about conditions or planning? Call or text anytime.
        </p>
      </section>
    </main>
  );
}