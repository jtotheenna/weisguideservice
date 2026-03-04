"use client";

import { useState } from "react";

export default function FishingInfo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="fishing-info">
      <button
        className="fishing-toggle"
        onClick={() => setOpen(!open)}
      >
        Fishing Seasons, Limits & Licenses
      </button>

      {open && (
        <div className="fishing-panel">
          <p>
            All guided trips follow Minnesota Department of Natural Resources
            regulations. Seasons, limits, and methods vary by species and time
            of year.
          </p>

          <ul>
            <li>
              <strong>Trout Season:</strong> Catch-and-release and harvest
              seasons vary by stream and date.
            </li>
            <li>
              <strong>Limits:</strong> Daily and possession limits are enforced
              per MN DNR regulations.
            </li>
            <li>
              <strong>Licenses:</strong> A valid Minnesota fishing license is
              required for all anglers age 16 and over.
            </li>
          </ul>

          <p>
            Licenses can be purchased online or locally in Minnesota
            at sporting goods stores or authorized vendors.
          </p>

          <div className="fishing-links">
            <a
              href="https://www.dnr.state.mn.us/fishing/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Minnesota DNR Fishing Regulations
            </a>

            <a
              href="https://www.dnr.state.mn.us/licenses/online-sales.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy a Minnesota Fishing License
            </a>
          </div>

          <p className="fishing-note">
            Regulations are subject to change. Your guide will confirm current
            rules prior to each trip.
          </p>
        </div>
      )}
    </section>
  );
}