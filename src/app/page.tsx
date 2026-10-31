import Image from "next/image";
import Link from "next/link";
import { business, contactHref, isPlaceholder } from "@/content/business";
import { InquiryForm } from "@/components/inquiry-form";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export default function Home() {
  const phoneHref = contactHref("phone");
  const whatsappHref = contactHref("whatsapp");
  const emailHref = contactHref("email");
  const mapHref = isPlaceholder(business.address)
    ? null
    : `https://maps.google.com/?q=${encodeURIComponent(business.address)}`;

  const availableProducts = business.products.map((p) => p.name);
  const availableServices = business.services.map((s) => s.title);

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <SectionLabel number="01">{business.heroEyebrow}</SectionLabel>
          <h1 id="hero-title">
            {business.heroTitleFirst}
            <br />
            {business.heroTitleSecond} <span>{business.heroTitleAccent}</span>
          </h1>
          <p className="hero-description">{business.heroDescription}</p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/forklifts">
              Explore Forklifts <Arrow />
            </Link>
            <Link className="button button-quiet" href="/inquiry">
              Request a Quote <Arrow diagonal />
            </Link>
            {whatsappHref && (
              <a
                className="text-action"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp the Owner <Arrow diagonal />
              </a>
            )}
          </div>

          <div className="hero-note">
            <span className="note-rule" />
            <span>Direct owner support · Practical equipment for real facilities</span>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src={business.heroImage}
            alt={business.heroImageAlt}
            fill
            priority
            sizes="(max-width: 850px) 100vw, 52vw"
            className="hero-image"
          />
          <div className="visual-stamp">
            <span>
              LOAD
              <br />
              READY
            </span>
            <span className="stamp-icon" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="visual-caption">
            <span>01 — DEPENDABLE ELECTRIC LIFTS</span>
            <span>{business.location}</span>
          </div>
        </div>

        <a
          className="hero-scroll"
          href="#inventory-preview"
          aria-label="Scroll to featured equipment"
        >
          <span className="scroll-line" /> SCROLL TO EXPLORE
        </a>
      </section>

      {/* Trust & Service Area Strip */}
      <section className="trust-strip" aria-label="Business service coverage">
        <span className="trust-heading">YOUR LOCAL EQUIPMENT CONTACT</span>
        <span className="trust-separator" aria-hidden="true" />
        <span className="trust-location">
          {business.serviceArea}
        </span>
        <div className="trust-actions">
          {phoneHref ? (
            <a href={phoneHref} className="trust-phone-link">
              Call {business.phone}
            </a>
          ) : null}
          <Link href="/inquiry" className="trust-link">
            Talk through your requirements <Arrow diagonal />
          </Link>
        </div>
      </section>

      {/* Featured Forklifts Section */}
      <section className="section inventory-section" id="inventory-preview">
        <div className="section-heading">
          <div>
            <SectionLabel number="02">THE LINEUP</SectionLabel>
            <h2>
              Featured <span>Forklifts.</span>
            </h2>
          </div>
          <div className="section-heading-right">
            <p>
              Browse dependable electric models designed for tight warehouse corridors, dock
              loading, and heavy multi-shift applications.
            </p>
            <Link href="/forklifts" className="button button-outline-sm">
              View Complete Catalog <Arrow />
            </Link>
          </div>
        </div>

        {business.products.length > 0 ? (
          <div className="product-grid">
            {business.products.slice(0, 3).map((product, idx) => (
              <article className="product-card" key={product.slug}>
                <Link
                  href={`/forklifts/${product.slug}`}
                  className="product-image-wrap"
                  aria-label={`View details for ${product.name}`}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="product-image"
                  />
                  <span className="product-badge">{product.category}</span>
                </Link>

                <div className="product-card-body">
                  <div className="product-meta">
                    <span>CAPACITY: {product.ratedCapacityKg.toLocaleString()} KG</span>
                    <span className="product-index">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="product-title">
                    <Link href={`/forklifts/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="product-card-desc">{product.shortDescription}</p>

                  <ul className="spec-list" aria-label="Key specifications">
                    <li>Lift: {product.liftHeightMm} mm</li>
                    <li>Radius: {product.turningRadiusMm} mm</li>
                    <li>{product.powerSource.split("(")[0].trim()}</li>
                  </ul>

                  <div className="product-card-footer">
                    <Link
                      href={`/forklifts/${product.slug}`}
                      className="product-detail-link"
                    >
                      Specifications <Arrow />
                    </Link>
                    <Link
                      href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                      className="product-inquire-link"
                    >
                      Inquire <Arrow diagonal />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-products">
            <div className="empty-product-art">
              <Image
                src={business.heroImage}
                alt="Illustration placeholder for forklift inventory"
                fill
                sizes="(max-width: 720px) 100vw, 45vw"
              />
            </div>
            <div className="empty-product-copy">
              <span className="card-index">INVENTORY / 00</span>
              <h3>
                Equipment tailored to
                <br />
                your operation.
              </h3>
              <p>
                Inventory availability turns over regularly. Tell us your required tonnage,
                aisle widths, and lift heights—we will source the right match directly.
              </p>
              <Link href="/inquiry" className="button button-primary">
                Inquire About Equipment <Arrow />
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Confirmed Services Section */}
      <section className="section services-section" id="services-preview">
        <div className="services-intro">
          <SectionLabel number="03">WHAT WE DO</SectionLabel>
          <h2>
            Built around
            <br />
            your <span>facility.</span>
          </h2>
          <p>
            From verifying aisle clearances and battery duty cycles to routine preventative
            maintenance, get hands-on support directly from the business owner.
          </p>
          <div className="services-intro-actions">
            <Link href="/services" className="button button-quiet">
              All Services & Details <Arrow />
            </Link>
            <Link href="/inquiry" className="text-action">
              Discuss Your Facility <Arrow diagonal />
            </Link>
          </div>
        </div>

        <div className="services-list">
          {business.services.length > 0 ? (
            business.services.map((service, index) => (
              <article className="service-row" key={service.id}>
                <span className="service-number">0{index + 1}</span>
                <div className="service-content">
                  <h3>
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.shortDescription}</p>
                  <ul className="service-mini-highlights">
                    {service.highlights.slice(0, 2).map((h) => (
                      <li key={h}>✓ {h}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-row-actions">
                  <Link
                    href={`/services/${service.slug}`}
                    className="service-details-link"
                    aria-label={`View details for ${service.title}`}
                  >
                    Details <Arrow />
                  </Link>
                  <Link
                    href={`/inquiry?service=${encodeURIComponent(service.title)}`}
                    className="service-action-link"
                    aria-label={`Ask about ${service.title}`}
                  >
                    <span className="service-ask-text">Enquire</span>
                    <Arrow diagonal />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="service-empty">
              <span className="service-empty-mark">+</span>
              <div>
                <h3>Tell us what you need.</h3>
                <p>
                  Contact us to discuss equipment sourcing, fleet sizing, or preventative
                  maintenance for your forklifts.
                </p>
              </div>
              <Link href="/inquiry" aria-label="Go to contact inquiry form">
                ↗
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Owner Introduction / About Preview */}
      <section className="about-section" id="about-preview">
        <div className="about-art">
          <Image
            src={business.heroImage}
            alt="Forklift in an organized industrial workspace"
            fill
            sizes="(max-width: 850px) 100vw, 48vw"
          />
        </div>
        <div className="about-copy">
          <SectionLabel number="04">AN INDEPENDENT PARTNER</SectionLabel>
          <h2>
            Work moves
            <br />
            better <span>together.</span>
          </h2>
          <p>{business.ownerStory.paragraphs[0]}</p>
          <p>{business.ownerStory.paragraphs[1]}</p>

          <div className="about-meta-grid">
            <div className="about-detail">
              <span>OPERATOR & CONTACT</span>
              <strong>{business.ownerName}</strong>
            </div>
            <div className="about-detail">
              <span>LOCATION BASE</span>
              <strong>{business.location}</strong>
            </div>
          </div>

          <div className="about-actions">
            <Link href="/about" className="button button-outline">
              Read Our Full Story <Arrow diagonal />
            </Link>
            <Link href="/inquiry" className="button button-primary">
              Get in Touch <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      {business.benefits.length > 0 && (
        <section className="benefits-section">
          <div className="section">
            <div className="section-heading">
              <div>
                <SectionLabel number="05">PRACTICAL DIFFERENCE</SectionLabel>
                <h2>
                  Why work <span>with us.</span>
                </h2>
              </div>
              <p>
                Small, independent, and attentive. When you need equipment support, you get
                straightforward answers from someone who knows the machines.
              </p>
            </div>
            <div className="benefit-grid">
              {business.benefits.map((benefit, i) => (
                <article className="benefit" key={benefit.title}>
                  <span className="benefit-number">0{i + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="section faq-section" id="faqs">
        <div className="faq-heading">
          <SectionLabel number="06">GOOD TO KNOW</SectionLabel>
          <h2>
            Frequently <span>Asked.</span>
          </h2>
          <p>
            Have a question about turning radius, battery charging, or facility clearance?
            We are just a message away.
          </p>
          <Link href="/inquiry" className="text-action">
            Ask the Owner Directly <Arrow diagonal />
          </Link>
        </div>

        <div className="faq-list">
          {business.faqs.length > 0 ? (
            business.faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span className="faq-index">0{index + 1}</span>
                  <span className="faq-title">{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))
          ) : (
            <div className="faq-empty">
              <span className="faq-index">Q / A</span>
              <p>
                Ask us directly about equipment specifications, lead times, or services.
              </p>
              <Link href="/inquiry">
                Send a question <Arrow diagonal />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Direct Contact & Inquiry Form Section */}
      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <SectionLabel number="07">START YOUR INQUIRY</SectionLabel>
          <h2>
            Make room
            <br />
            for <span>what’s next.</span>
          </h2>
          <p>
            Tell us about your facility or the forklift model you are considering. You will
            receive a direct, personal response from the owner.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>CALL</span>
              {phoneHref ? (
                <a href={phoneHref} className="contact-link">
                  <strong>{business.phone}</strong>
                </a>
              ) : (
                <strong>{business.phone}</strong>
              )}
            </div>

            <div className="contact-item">
              <span>WHATSAPP</span>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <strong>{business.whatsapp} ↗</strong>
                </a>
              ) : (
                <strong>{business.whatsapp}</strong>
              )}
            </div>

            <div className="contact-item">
              <span>EMAIL</span>
              {emailHref ? (
                <a href={emailHref} className="contact-link">
                  <strong>{business.email}</strong>
                </a>
              ) : (
                <strong>{business.email}</strong>
              )}
            </div>

            <div className="contact-item">
              <span>BASE LOCATION</span>
              <strong>
                {mapHref ? (
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    {business.address} ↗
                  </a>
                ) : (
                  business.address
                )}
              </strong>
            </div>

            <div className="contact-item contact-item-wide">
              <span>OPERATING HOURS</span>
              <strong>{business.hours}</strong>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <InquiryForm
            availableProducts={availableProducts}
            availableServices={availableServices}
            whatsapp={business.whatsapp}
            phone={business.phone}
            isWhatsappConfirmed={business.isWhatsappConfirmed}
          />
        </div>
      </section>
    </main>
  );
}
