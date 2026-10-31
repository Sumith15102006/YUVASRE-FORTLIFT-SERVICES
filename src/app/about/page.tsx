import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, contactHref } from "@/content/business";

export const metadata: Metadata = {
  title: "About the Business | Independent Owner-Led Equipment Support",
  description: `Learn about ${business.name}, an independent, owner-led material handling business based in ${business.location}. Direct owner communication and practical equipment matching.`,
  openGraph: {
    title: `About ${business.name} | Forklifts & Maintenance`,
    description: `Independent, owner-led forklift equipment and maintenance in ${business.location}.`,
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export default function AboutPage() {
  const phoneHref = contactHref("phone");
  const whatsappHref = contactHref("whatsapp");

  return (
    <main id="main" className="page-main about-page-main">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-container">
          <p className="section-label">
            <span>01</span> ABOUT US
          </p>
          <h1 className="page-title">
            Independent, Owner-Led <span>Support.</span>
          </h1>
          <p className="page-lead">
            A small, hands-on material handling business serving {business.location}. You deal
            directly with the business owner on every conversation, from initial equipment
            sizing to delivery and maintenance.
          </p>
        </div>
      </section>

      {/* Main Story & Approach Section */}
      <section className="section about-story-section">
        <div className="about-grid">
          {/* Left Column: Visual & Owner Badge */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <Image
                src={business.ownerImage ?? "/images/about-owner.svg"}
                alt={`Business owner ${business.ownerName} providing forklift equipment support in ${business.location}`}
                fill
                priority
                sizes="(max-width: 850px) 100vw, 45vw"
                className="about-story-img"
              />
              <div className="about-stamp">
                <span>LOCAL &</span>
                <strong>DIRECT</strong>
              </div>
            </div>

            <div className="owner-profile-card">
              <span className="profile-label">BUSINESS OPERATOR</span>
              <h3 className="profile-name">{business.ownerName}</h3>
              <p className="profile-role">{business.ownerRole}</p>
              <div className="profile-meta">
                <span>Base: {business.location}</span>
                <span>Area: {business.serviceArea}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story Copy */}
          <div className="about-text-column">
            <p className="section-label">
              <span>OUR PHILOSOPHY</span> STRAIGHTFORWARD ADVICE
            </p>
            <h2 className="story-heading">{business.ownerStory.heading}</h2>

            <div className="story-paragraphs">
              {business.ownerStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Direct Commitments */}
            <div className="commitments-block">
              <h3 className="commitments-title">Our Operational Commitments</h3>
              <div className="commitments-list">
                {business.ownerStory.commitmentPoints.map((pt) => (
                  <div className="commitment-card" key={pt.title}>
                    <div className="commitment-bullet">✳</div>
                    <div>
                      <h4>{pt.title}</h4>
                      <p>{pt.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="about-page-actions">
              <Link href="/inquiry" className="button button-primary">
                <span>Start a Conversation</span>
                <Arrow diagonal />
              </Link>
              <Link href="/forklifts" className="button button-quiet">
                <span>Explore Forklifts</span>
                <Arrow />
              </Link>
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-action"
                >
                  WhatsApp Directly <Arrow diagonal />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Local Footprint Strip */}
      <section className="about-location-strip">
        <div className="location-strip-inner">
          <div className="location-info">
            <span className="loc-label">LOCAL SERVICE AREA</span>
            <h2>Serving operations throughout {business.serviceArea}</h2>
            <p>
              Equipment deliveries, scheduled routine servicing, and on-site facility walkarounds
              are coordinated directly with the owner to match your shift schedule.
            </p>
          </div>

          <div className="location-cta">
            <Link href="/inquiry" className="button button-primary">
              Ask About Sizing & Availability <Arrow />
            </Link>
            {phoneHref && (
              <a href={phoneHref} className="button button-quiet">
                Direct Line: {business.phone}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
