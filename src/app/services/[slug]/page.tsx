import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business, buildWhatsAppUrl, contactHref } from "@/content/business";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return business.services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const service = business.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Forklift Services in Hosur`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${business.name}`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = business.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const phoneHref = contactHref("phone");
  const whatsappPreFilled = buildWhatsAppUrl(
    `Hello Nanjappa, I would like to enquire about your service: ${service.title} in Hosur.`
  );
  const otherServices = business.services.filter((s) => s.slug !== service.slug);

  return (
    <main id="main" className="page-main service-detail-main">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <div className="breadcrumb-container">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/services">Services</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current" aria-current="page">
            {service.title}
          </span>
        </div>
      </nav>

      {/* Main Detail Header / Hero Grid */}
      <section className="service-detail-hero">
        <div className="detail-container">
          {/* Left: Technical Visual & Gallery */}
          <div className="detail-visual-col">
            <div className="detail-image-box">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 850px) 100vw, 50vw"
                className="detail-main-img"
              />
              <span className="detail-category-badge">OWNER-DELIVERED</span>
            </div>

            {/* Provisional Service Notice */}
            <div className="provisional-notice-banner">
              <span className="status-dot-sm" />
              <span>
                {service.isConfirmed
                  ? "Confirmed Service"
                  : "Provisional Service Template — Subject to Nanjappa's confirmation"}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {service.gallery && service.gallery.length > 1 && (
              <div className="detail-gallery-strip" aria-label="Service technical views">
                <span className="gallery-label">Technical Diagrams:</span>
                <div className="gallery-thumbs">
                  {service.gallery.map((imgUrl, idx) => (
                    <div className="gallery-thumb-item" key={idx}>
                      <Image
                        src={imgUrl}
                        alt={`${service.title} reference diagram ${idx + 1}`}
                        fill
                        sizes="90px"
                        className="thumb-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Info, Highlights, Deliverables, & Direct Enquiry */}
          <div className="detail-info-col">
            <p className="section-label">
              <span>SERVICE OFFERING</span> HOSUR INDUSTRIAL SUPPORT
            </p>
            <h1 className="detail-title">{service.title}</h1>
            <p className="detail-lead">{service.shortDescription}</p>

            <div className="detail-desc-block">
              <h2 className="sub-heading">Service Scope &amp; Overview</h2>
              <p>{service.fullDescription}</p>
            </div>

            {/* Key Deliverables */}
            <div className="detail-features-block">
              <h2 className="sub-heading">Key Scope Deliverables</h2>
              <ul className="detail-features-list">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <span className="bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="detail-features-block">
              <h2 className="sub-heading">What’s Included</h2>
              <ul className="detail-features-list">
                {service.highlights.map((h) => (
                  <li key={h}>
                    <span className="bullet">✳</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky Action Card */}
            <div className="detail-inquiry-box">
              <div className="inquiry-box-header">
                <h3>Need this service in Hosur?</h3>
                <p>
                  Contact Nanjappa directly to discuss your facility timeline, floor layout, or
                  urgent maintenance requirements.
                </p>
              </div>

              <div className="inquiry-box-actions">
                <Link
                  href={`/inquiry?service=${encodeURIComponent(service.title)}`}
                  className="button button-primary detail-inquire-btn"
                >
                  <span>Enquire on Website Form</span>
                  <Arrow diagonal />
                </Link>

                {whatsappPreFilled && (
                  <a
                    href={whatsappPreFilled}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-quiet"
                  >
                    <span>WhatsApp Nanjappa</span>
                    <Arrow diagonal />
                  </a>
                )}

                {phoneHref && (
                  <a href={phoneHref} className="button button-quiet">
                    <span>Call: {business.phone}</span>
                  </a>
                )}
              </div>

              <p className="inquiry-subtext">
                Base Location: {business.location} · Service Area: {business.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Services Section */}
      {otherServices.length > 0 && (
        <section className="section related-products-section">
          <div className="related-header">
            <div>
              <p className="section-label">
                <span>OTHER SERVICES</span> COMPLETE SUPPORT
              </p>
              <h2>Additional Equipment Services</h2>
            </div>
            <Link href="/services" className="button button-outline-sm">
              All Services <Arrow />
            </Link>
          </div>

          <div className="related-grid">
            {otherServices.map((rel) => (
              <article className="related-card" key={rel.slug}>
                <Link
                  href={`/services/${rel.slug}`}
                  className="related-image-wrap"
                  aria-label={`View ${rel.title}`}
                >
                  <Image
                    src={rel.image}
                    alt={rel.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="related-img"
                  />
                  <span className="related-badge">SERVICE</span>
                </Link>
                <div className="related-body">
                  <h3 className="related-title">
                    <Link href={`/services/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="related-desc">{rel.shortDescription}</p>
                  <Link href={`/services/${rel.slug}`} className="related-link">
                    View Service Details <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
