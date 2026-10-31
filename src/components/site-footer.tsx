import Image from "next/image";
import Link from "next/link";
import { business, contactHref, isPlaceholder } from "@/content/business";

export function SiteFooter() {
  const phoneHref = contactHref("phone");
  const whatsappHref = contactHref("whatsapp");
  const emailHref = contactHref("email");
  const mapHref = isPlaceholder(business.address)
    ? null
    : `https://maps.google.com/?q=${encodeURIComponent(business.address)}`;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand & Introduction Column */}
        <div className="footer-col footer-brand-col">
          <Link href="/" className="footer-brand" aria-label={`${business.name} home`}>
            <span className="brand-mark">
              <Image
                src={business.logo}
                alt=""
                width={34}
                height={34}
                aria-hidden="true"
              />
            </span>
            <span className="brand-name">{business.shortName}</span>
          </Link>
          <p className="footer-summary">
            Independent, owner-led forklift equipment, sourcing, and routine preventative
            maintenance serving warehouses and industrial facilities across {business.location}.
          </p>
          <div className="footer-pill">
            <span className="footer-pill-dot" />
            <span>Direct owner support · No call centers</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Home Overview</Link>
            </li>
            <li>
              <Link href="/forklifts">Forklift Catalog</Link>
            </li>
            <li>
              <Link href="/services">Services & Maintenance</Link>
            </li>
            <li>
              <Link href="/about">About the Business</Link>
            </li>
            <li>
              <Link href="/inquiry">Equipment Inquiry</Link>
            </li>
          </ul>
        </div>

        {/* Direct Contact Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Direct Contact</h3>
          <div className="footer-contacts">
            <div className="footer-contact-item">
              <span className="contact-label">Telephone</span>
              {phoneHref ? (
                <a href={phoneHref} className="contact-val contact-link">
                  {business.phone}
                </a>
              ) : (
                <span className="contact-val">{business.phone}</span>
              )}
            </div>

            <div className="footer-contact-item">
              <span className="contact-label">WhatsApp</span>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-val contact-link"
                >
                  {business.whatsapp} {!business.isWhatsappConfirmed && "(Provisional)"} ↗
                </a>
              ) : (
                <span className="contact-val">
                  {business.whatsapp} {!business.isWhatsappConfirmed && "(Provisional)"}
                </span>
              )}
            </div>

            <div className="footer-contact-item">
              <span className="contact-label">Email</span>
              {emailHref ? (
                <a href={emailHref} className="contact-val contact-link">
                  {business.email}
                </a>
              ) : (
                <span className="contact-val">{business.email}</span>
              )}
            </div>

            <div className="footer-contact-item">
              <span className="contact-label">Operating Hours</span>
              <span className="contact-val">{business.hours}</span>
            </div>
          </div>
        </div>

        {/* Location & Service Area Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Service Coverage</h3>
          <p className="footer-location-text">
            <strong>Base Location:</strong> {business.location}
          </p>
          <p className="footer-location-text">
            <strong>Service Radius:</strong> {business.serviceArea}
          </p>
          {mapHref && (
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="footer-map-link"
            >
              <span>{business.address}</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <div className="footer-inquiry-box">
            <p>Ready to discuss equipment or book maintenance?</p>
            <Link href="/inquiry" className="button button-footer-cta">
              Send an Inquiry <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copy">
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            This website does not store or process customer inquiry records. Inquiries
            open directly via your messaging app or email client.
          </p>
          <span className="footer-built">
            Built for reliable operations <span className="star-icon">✳</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
