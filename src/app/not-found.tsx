import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-main" id="main">
      <div className="not-found-card">
        <p className="section-label">
          <span>404</span> PAGE NOT FOUND
        </p>
        <h1 className="not-found-title">
          Looks like this lift
          <br />
          took a <span>detour.</span>
        </h1>
        <p className="not-found-lead">
          The page or forklift model you are looking for is not located here. Head back to the
          homepage or explore the sections below to keep moving.
        </p>

        <div className="not-found-actions">
          <Link className="button button-primary" href="/">
            Back to Homepage <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button-quiet" href="/forklifts">
            Browse Forklift Catalog <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="not-found-links">
          <span>Helpful shortcuts:</span>
          <div className="shortcuts-grid">
            <Link href="/services">Forklift Services & Maintenance</Link>
            <Link href="/about">About the Business</Link>
            <Link href="/inquiry">Equipment Inquiry Form</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
