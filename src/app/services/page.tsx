import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, contactHref } from "@/content/business";

export const metadata: Metadata = {
  title: "Material Handling Services & Forklift Maintenance",
  description: `Owner-delivered forklift sourcing, preventative maintenance, and facility layout consultation in ${business.location}. Speak directly with the owner for equipment support.`,
  openGraph: {
    title: `Forklift Services & Maintenance | ${business.name}`,
    description: `Equipment sourcing, preventative maintenance, and facility consultation in ${business.location}.`,
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export default function ServicesPage() {
  const phoneHref = contactHref("phone");

  return (
    <main id="main" className="page-main">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-container">
          <p className="section-label">
            <span>01</span> WHAT WE OFFER
          </p>
          <h1 className="page-title">
            Direct, Owner-Led <span>Services.</span>
          </h1>
          <p className="page-lead">
            Personal equipment support for operations in {business.serviceArea} ({business.location}).
            No tiered customer support desks or outsourced service contracts—every service is delivered
            or overseen directly by {business.ownerName}.
          </p>
        </div>
      </section>

      {/* Services List / Cards */}
      <section className="section services-page-section">
        <div className="services-cards-grid">
          {business.services.length > 0 ? (
            business.services.map((service, index) => (
              <article className="service-card" key={service.id}>
                {service.image && (
                  <div className="service-card-media">
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="service-card-img"
                    />
                  </div>
                )}
                <div className="service-card-header">
                  <span className="service-card-idx">0{index + 1}</span>
                  <span className="service-card-tag">OWNER-DELIVERED</span>
                </div>

                <h2 className="service-card-title">
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </h2>
                <p className="service-card-lead">{service.shortDescription}</p>
                <p className="service-card-body">{service.fullDescription}</p>

                <div className="service-card-highlights">
                  <h3 className="highlights-heading">What’s Included:</h3>
                  <ul className="highlights-list">
                    {service.highlights.map((item) => (
                      <li key={item}>
                        <span className="check-bullet" aria-hidden="true">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-action">
                  <Link
                    href={`/services/${service.slug}`}
                    className="button button-quiet"
                  >
                    <span>Full Details & Scope</span>
                    <Arrow />
                  </Link>
                  <Link
                    href={`/inquiry?service=${encodeURIComponent(service.title)}`}
                    className="button button-primary"
                  >
                    <span>Enquire Now</span>
                    <Arrow diagonal />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state-box">
              <span className="empty-mark">SERVICES / 00</span>
              <h2>Customized Facility Support</h2>
              <p>
                Services are scheduled directly with the owner based on your equipment and
                facility location. Contact us directly to discuss your requirements.
              </p>
              <Link href="/inquiry" className="button button-primary">
                Contact the Owner Directly <Arrow />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Philosophy / How We Work Section */}
      <section className="services-philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-left">
            <p className="section-label">
              <span>02</span> OUR SERVICE PHILOSOPHY
            </p>
            <h2>
              Straightforward answers.
              <br />
              <span>Zero sales pressure.</span>
            </h2>
            <p>
              Many material handling dealerships prioritize new machine quotas and high-volume
              parts replacements. Our approach is built on long-term relationships with local
              warehouses and workshops.
            </p>
          </div>

          <div className="philosophy-right">
            <div className="philosophy-point">
              <h3>On-Site Facility Inspections</h3>
              <p>
                We physically walk your aisles, measure door thresholds, check turning spaces, and
                evaluate floor gradients before recommending any machine or maintenance schedule.
              </p>
            </div>

            <div className="philosophy-point">
              <h3>Preventative Sizing & Safety</h3>
              <p>
                Ensuring your operators have the right lift height and capacity headroom prevents
                structural strain on hydraulic components, cutting unplanned downtime.
              </p>
            </div>

            <div className="philosophy-point">
              <h3>Single Point of Accountability</h3>
              <p>
                When you need updates on equipment sourcing or maintenance timelines, you speak
                directly with {business.ownerName}, the business owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="services-cta-strip">
        <div className="services-cta-content">
          <h2>Ready to schedule maintenance or discuss a forklift?</h2>
          <p>
            Contact {business.ownerName} directly to walk through your requirements or book an
            on-site inspection.
          </p>
          <div className="cta-strip-actions">
            <Link href="/inquiry" className="button button-primary">
              Book a Facility Consultation <Arrow diagonal />
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
