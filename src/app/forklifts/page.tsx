import type { Metadata } from "next";
import Link from "next/link";
import { business, contactHref } from "@/content/business";
import { ForkliftCatalog } from "@/components/forklift-catalog";

export const metadata: Metadata = {
  title: "Electric Forklifts Catalog & Equipment Lineup",
  description: `Browse electric forklifts, 3-wheel narrow aisle models, 4-wheel warehouse counterbalance trucks, and reach trucks available from ${business.name} in ${business.location}.`,
  openGraph: {
    title: `Forklift Equipment Catalog | ${business.name}`,
    description: `Electric counterbalance and warehouse forklifts configured for facilities in ${business.location}.`,
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export default function ForkliftsPage() {
  const phoneHref = contactHref("phone");

  return (
    <main id="main" className="page-main">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-container">
          <p className="section-label">
            <span>01</span> EQUIPMENT LINEUP
          </p>
          <h1 className="page-title">
            Dependable Electric <span>Forklifts.</span>
          </h1>
          <p className="page-lead">
            Explore our range of clean-running electric counterbalance forklifts and warehouse
            reach trucks. Every machine is evaluated for floor safety, maneuverability, and
            shift stamina.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="section catalog-section">
        <ForkliftCatalog products={business.products} />
      </section>

      {/* Sizing Assistance Banner */}
      <section className="catalog-help-banner">
        <div className="catalog-help-container">
          <div className="catalog-help-text">
            <h2>Unsure about capacity or turning clearance?</h2>
            <p>
              Different pallet sizes, racking heights, and dock gradients require specific mast
              and chassis geometry. Talk directly with {business.ownerName} to verify aisle
              clearances before selecting your equipment.
            </p>
          </div>
          <div className="catalog-help-actions">
            <Link href="/inquiry" className="button button-primary">
              Ask for Sizing Advice <Arrow diagonal />
            </Link>
            {phoneHref && (
              <a href={phoneHref} className="button button-quiet">
                Direct Call: {business.phone}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
