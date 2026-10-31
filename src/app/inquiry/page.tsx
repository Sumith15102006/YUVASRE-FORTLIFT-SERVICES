import type { Metadata } from "next";
import { business, contactHref, isPlaceholder } from "@/content/business";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Direct Equipment & Service Inquiry",
  description: `Send an equipment inquiry or maintenance request directly to ${business.ownerName} at ${business.name}. Fast, direct response with no data storage on this website.`,
  openGraph: {
    title: `Inquire About Forklifts & Maintenance | ${business.name}`,
    description: `Contact the owner directly to ask about electric forklifts, specifications, or facility consultation in ${business.location}.`,
  },
};

interface InquiryPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function InquiryPage({ searchParams }: InquiryPageProps) {
  const resolvedParams = await searchParams;
  const initialProduct =
    typeof resolvedParams.product === "string" ? resolvedParams.product : "";
  const initialService =
    typeof resolvedParams.service === "string" ? resolvedParams.service : "";

  const phoneHref = contactHref("phone");
  const whatsappHref = contactHref("whatsapp");
  const emailHref = contactHref("email");
  const mapHref = isPlaceholder(business.address)
    ? null
    : `https://maps.google.com/?q=${encodeURIComponent(business.address)}`;

  const availableProducts = business.products.map((p) => p.name);
  const availableServices = business.services.map((s) => s.title);

  return (
    <main id="main" className="page-main inquiry-page-main">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-container">
          <p className="section-label">
            <span>01</span> GET IN TOUCH
          </p>
          <h1 className="page-title">
            Direct Equipment <span>Inquiry.</span>
          </h1>
          <p className="page-lead">
            Whether you need a specific forklift model, have questions about battery charging
            and floor clearances, or need preventative maintenance, your message goes straight
            to the business owner.
          </p>
        </div>
      </section>

      {/* Inquiry Form & Direct Sidebar Section */}
      <section className="section inquiry-page-section">
        <div className="inquiry-grid-layout">
          {/* Main Form Area */}
          <div className="inquiry-form-column">
            <InquiryForm
              initialProduct={initialProduct}
              initialService={initialService}
              availableProducts={availableProducts}
              availableServices={availableServices}
              whatsapp={business.whatsapp}
              phone={business.phone}
              isWhatsappConfirmed={business.isWhatsappConfirmed}
            />
          </div>

          {/* Direct Contact Sidebar */}
          <aside className="inquiry-sidebar" aria-label="Direct owner contacts">
            <div className="sidebar-card">
              <span className="sidebar-badge">DIRECT CONTACT</span>
              <h2 className="sidebar-title">Contact Channels</h2>
              <p className="sidebar-desc">
                Prefer to talk directly? Reach {business.ownerName} via any of the confirmed
                channels below.
              </p>

              <div className="sidebar-contact-list">
                <div className="sidebar-item">
                  <span className="item-label">Telephone</span>
                  {phoneHref ? (
                    <a href={phoneHref} className="item-val item-link">
                      {business.phone}
                    </a>
                  ) : (
                    <span className="item-val">{business.phone}</span>
                  )}
                </div>

                <div className="sidebar-item">
                  <span className="item-label">WhatsApp Click-to-Chat</span>
                  {whatsappHref ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="item-val item-link"
                    >
                      {business.whatsapp} ↗
                    </a>
                  ) : (
                    <span className="item-val">{business.whatsapp}</span>
                  )}
                </div>

                <div className="sidebar-item">
                  <span className="item-label">Email Address</span>
                  {emailHref ? (
                    <a href={emailHref} className="item-val item-link">
                      {business.email}
                    </a>
                  ) : (
                    <span className="item-val">{business.email}</span>
                  )}
                </div>

                <div className="sidebar-item">
                  <span className="item-label">Workshop / Facility Address</span>
                  {mapHref ? (
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noreferrer"
                      className="item-val item-link"
                    >
                      {business.address} ↗
                    </a>
                  ) : (
                    <span className="item-val">{business.address}</span>
                  )}
                </div>

                <div className="sidebar-item">
                  <span className="item-label">Operational Hours</span>
                  <span className="item-val">{business.hours}</span>
                </div>
              </div>

              <div className="sidebar-privacy-box">
                <h4>Privacy & Delivery Notice</h4>
                <p>
                  Submitting the inquiry form opens WhatsApp or drafts an email on your device.
                  No personal data, telephone numbers, or inquiry contents are sent to or stored
                  on a web server.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
