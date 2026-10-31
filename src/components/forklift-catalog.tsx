"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ForkliftProduct } from "@/content/business";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

interface ForkliftCatalogProps {
  products: ForkliftProduct[];
}

export function ForkliftCatalog({ products }: ForkliftCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  if (products.length === 0) {
    return (
      <div className="empty-catalog-box">
        <span className="card-index">CATALOG / 00</span>
        <h2>Custom Sourced Equipment</h2>
        <p>
          Our inventory rotates based on client requirements. Tell us your facility&apos;s
          dimensions, weight limits, and operational hours—we will source and configure a vetted
          electric forklift tailored to your operation.
        </p>
        <Link href="/inquiry" className="button button-primary">
          Inquire About Sourcing a Forklift <Arrow />
        </Link>
      </div>
    );
  }

  return (
    <div className="catalog-wrapper">
      {/* Category Filter Tabs */}
      <div className="category-tabs" role="tablist" aria-label="Forklift Categories">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              className={`category-tab-btn ${isSelected ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
              <span className="tab-count">
                (
                {cat === "All"
                  ? products.length
                  : products.filter((p) => p.category === cat).length}
                )
              </span>
            </button>
          );
        })}
      </div>

      {/* Catalog Grid */}
      <div className="catalog-grid">
        {filteredProducts.map((product, idx) => (
          <article className="catalog-card" key={product.slug}>
            <Link
              href={`/forklifts/${product.slug}`}
              className="catalog-card-media"
              aria-label={`View detailed specifications for ${product.name}`}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="catalog-img"
              />
              <span className="catalog-category-tag">{product.category}</span>
            </Link>

            <div className="catalog-card-content">
              <div className="catalog-card-meta">
                <span className="meta-cap">
                  CAPACITY: {product.ratedCapacityKg.toLocaleString()} KG
                </span>
                <span className="meta-num">{String(idx + 1).padStart(2, "0")}</span>
              </div>

              <h2 className="catalog-card-title">
                <Link href={`/forklifts/${product.slug}`}>{product.name}</Link>
              </h2>

              <p className="catalog-card-desc">{product.shortDescription}</p>

              {/* Spec Highlights Matrix */}
              <div className="catalog-specs-table">
                <div className="spec-row">
                  <span className="spec-label">Lift Height:</span>
                  <span className="spec-val">{product.liftHeightMm} mm</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Turning Radius:</span>
                  <span className="spec-val">{product.turningRadiusMm} mm</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Power Source:</span>
                  <span className="spec-val">
                    {product.powerSource.split("(")[0].trim()}
                  </span>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="catalog-avail-note">
                <span className="status-dot-sm" />
                <span>{product.availabilityNote}</span>
              </div>

              {/* Card Actions */}
              <div className="catalog-card-actions">
                <Link
                  href={`/forklifts/${product.slug}`}
                  className="button button-quiet catalog-btn"
                >
                  View Full Specs <Arrow />
                </Link>
                <Link
                  href={`/inquiry?product=${encodeURIComponent(product.name)}`}
                  className="button button-primary catalog-btn"
                >
                  Inquire Now <Arrow diagonal />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
