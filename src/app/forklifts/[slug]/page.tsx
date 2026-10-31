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

interface ProductDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return business.products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const product = business.products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Forklift Not Found",
    };
  }

  return {
    title: `${product.name} | Forklift Specifications`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${business.name}`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = business.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const phoneHref = contactHref("phone");
  const otherProducts = business.products.filter((p) => p.slug !== product.slug);

  return (
    <main id="main" className="page-main product-detail-main">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <div className="breadcrumb-container">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/forklifts">Forklifts</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current" aria-current="page">
            {product.name}
          </span>
        </div>
      </nav>

      {/* Main Detail Header / Hero Grid */}
      <section className="product-detail-hero">
        <div className="detail-container">
          {/* Left: Large Photo / Technical Illustration */}
          <div className="detail-visual-col">
            <div className="detail-image-box">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 850px) 100vw, 50vw"
                className="detail-main-img"
              />
              <span className="detail-category-badge">{product.category}</span>
            </div>

            <div className="detail-availability-banner">
              <span className="status-dot" aria-hidden="true" />
              <span>{product.availabilityNote}</span>
            </div>

            {/* Provisional Model Notice */}
            <div className="provisional-notice-banner">
              <span className="status-dot-sm" />
              <span>
                {product.isConfirmed
                  ? "Confirmed Inventory"
                  : product.confirmationNotice}
              </span>
            </div>

            {/* Photo Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="detail-gallery-strip" aria-label="Equipment views gallery">
                <span className="gallery-label">Equipment Views &amp; Diagrams:</span>
                <div className="gallery-thumbs">
                  {product.gallery.map((imgUrl, idx) => (
                    <div className="gallery-thumb-item" key={idx}>
                      <Image
                        src={imgUrl}
                        alt={`${product.name} view ${idx + 1}`}
                        fill
                        sizes="90px"
                        className="thumb-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Sizing Box */}
            <div className="detail-quick-specs">
              <div className="quick-spec-item">
                <span className="label">Rated Capacity</span>
                <span className="value">{product.ratedCapacityKg.toLocaleString()} kg</span>
              </div>
              <div className="quick-spec-item">
                <span className="label">Lift Height</span>
                <span className="value">{product.liftHeightMm.toLocaleString()} mm</span>
              </div>
              <div className="quick-spec-item">
                <span className="label">Turning Radius</span>
                <span className="value">{product.turningRadiusMm.toLocaleString()} mm</span>
              </div>
              <div className="quick-spec-item">
                <span className="label">Power System</span>
                <span className="value">{product.powerSource.split("(")[0]}</span>
              </div>
            </div>
          </div>

          {/* Right: Info, Specifications, & Inquiry Box */}
          <div className="detail-info-col">
            <p className="section-label">
              <span>MODEL DETAILS</span> {product.category.toUpperCase()}
            </p>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-lead">{product.shortDescription}</p>

            <div className="detail-desc-block">
              <h2 className="sub-heading">Operational Overview</h2>
              <p>{product.fullDescription}</p>
            </div>

            {/* Key Features */}
            <div className="detail-features-block">
              <h2 className="sub-heading">Standard Features & Operator Controls</h2>
              <ul className="detail-features-list">
                {product.keyFeatures.map((feat) => (
                  <li key={feat}>
                    <span className="bullet">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Applications */}
            <div className="detail-apps-block">
              <h2 className="sub-heading">Best Suited For</h2>
              <div className="apps-tag-list">
                {product.idealFor.map((app) => (
                  <span className="app-tag" key={app}>
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky/Prominent Action Card */}
            <div className="detail-inquiry-box">
              <div className="inquiry-box-header">
                <h3>Interested in this model?</h3>
                <p>
                  Contact {business.ownerName} directly to verify current lead time, discuss
                  mast collapsed heights, or request a written quote.
                </p>
              </div>

              <div className="inquiry-box-actions">
                <Link
                  href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                  className="button button-primary detail-inquire-btn"
                >
                  <span>Inquire About This Model</span>
                  <Arrow diagonal />
                </Link>

                {buildWhatsAppUrl(
                  `Hello Nanjappa, I would like to inquire about the ${product.name} in Hosur.`
                ) && (
                  <a
                    href={buildWhatsAppUrl(
                      `Hello Nanjappa, I would like to inquire about the ${product.name} in Hosur.`
                    )!}
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
            </div>
          </div>
        </div>
      </section>

      {/* Full Technical Specifications Table */}
      <section className="section detail-specs-section">
        <div className="specs-section-container">
          <div className="specs-section-header">
            <p className="section-label">
              <span>SPECIFICATIONS</span> TECHNICAL BREAKDOWN
            </p>
            <h2>Verified Engineering Specifications</h2>
            <p>
              Specifications reflect standard equipment configurations. Mast heights, fork
              lengths, and tyre compounds can be customized to match your facility requirements.
            </p>
          </div>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Confirmed Specification</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label}>
                    <td className="spec-label-cell">{spec.label}</td>
                    <td className="spec-val-cell">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Other Models in Lineup */}
      {otherProducts.length > 0 && (
        <section className="section related-products-section">
          <div className="related-header">
            <div>
              <p className="section-label">
                <span>OTHER EQUIPMENT</span> EXPLORE MORE
              </p>
              <h2>Alternative Forklifts</h2>
            </div>
            <Link href="/forklifts" className="button button-outline-sm">
              All Forklifts <Arrow />
            </Link>
          </div>

          <div className="related-grid">
            {otherProducts.slice(0, 3).map((rel) => (
              <article className="related-card" key={rel.slug}>
                <Link
                  href={`/forklifts/${rel.slug}`}
                  className="related-image-wrap"
                  aria-label={`View ${rel.name}`}
                >
                  <Image
                    src={rel.image}
                    alt={rel.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="related-img"
                  />
                  <span className="related-badge">{rel.category}</span>
                </Link>
                <div className="related-body">
                  <span className="related-cap">
                    CAPACITY: {rel.ratedCapacityKg.toLocaleString()} KG
                  </span>
                  <h3 className="related-title">
                    <Link href={`/forklifts/${rel.slug}`}>{rel.name}</Link>
                  </h3>
                  <Link href={`/forklifts/${rel.slug}`} className="related-link">
                    View Specifications <Arrow />
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

