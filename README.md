# Nanjappa — Forklift Business Website

A complete, polished, responsive, multi-page website engineered for **Nanjappa's forklift business** based in **Zuzvadi, Senthil Nagar, Hosur 635-126, India**. Built with Next.js App Router (React 19, TypeScript), modern CSS, and Tailwind CSS v4.

---

## Business Configuration Summary

- **Working Brand & Owner Name**: Nanjappa (official trade name to be confirmed by owner)
- **Base Location**: Zuzvadi, Senthil Nagar, Hosur 635-126, India
- **Service Area**: Hosur (strictly focused on local manufacturing, warehouse, and logistics facilities)
- **Direct Phone**: `+91 96004 13229` (active `tel:+919600413229`)
- **Direct WhatsApp**: `+91 96004 13229` (provisional pending owner confirmation; opens `https://wa.me/919600413229`)
- **Operating Hours**: 9:00 AM – 6:00 PM (days of operation to be confirmed by owner)
- **Email & Social Channels**: Currently unconfirmed placeholders; safely hidden from public links until provided

---

## Website Structure & Routes

This site is front-end only and requires no database, backend API, or CMS. All business and product content is strictly centralized in [`src/content/business.ts`](src/content/business.ts).

### Implemented Routes

- **`/` (Home Overview)**: High-impact hero section with custom vector illustration, Hosur service area trust strip, featured electric forklifts, confirmed owner services, introduction to Nanjappa, interactive FAQs accordion, and direct multi-item WhatsApp inquiry form.
- **`/forklifts` (Catalog)**: Equipment catalog with category filter tabs (3-Wheel Electric, 4-Wheel Electric, Heavy-Duty Electric, Warehouse & Stacker), technical specification matrices, availability notes, and direct links to detail and inquiry pages.
- **`/forklifts/[slug]` (Product Detail)**: Dynamic detail page statically prerendered with Next.js `generateStaticParams`. Features large visual illustrations, thumbnail photo gallery strip, operational overview, standard operator features, suitable application tags, engineering specification tables, and direct WhatsApp prefilled inquiry action.
- **`/services` (Services Overview)**: Services overview showing core owner-delivered offerings (Forklift Sourcing & Equipment Guidance, Routine Maintenance & Preventative Care, Facility Layout & Aisle Sizing Consultation) with bulleted deliverables and direct booking links.
- **`/services/[slug]` (Service Detail)**: Dedicated detail pages for each service offering with full scope of work, key deliverables, technical view diagrams, direct WhatsApp prefill link, and alternative services grid.
- **`/inquiry` (Dedicated Inquiry)**: Interactive inquiry form supporting multi-item selection (select one or more forklift models and services simultaneously), client-side validation, direct "Call Now" shortcut to `+91 96004 13229`, and automatic WhatsApp message drafting.
- **`/about` (About the Business)**: Authentic, owner-led narrative highlighting direct communication with Nanjappa, hands-on facility matching in Hosur, and personal accountability without fabricated claims or team sizes.
- **`/_not-found` (404 Page)**: Clean not-found page with shortcuts back to the catalog, services, and inquiry form.
- **`/sitemap.xml`**: Dynamically generated SEO sitemap covering all static pages, all forklift product slugs, and all service slugs.

---

## Local Development & Build Commands

Requirements: Node.js 20.9+ and npm.

```bash
# Install dependencies
npm install

# Run the local development server (Turbopack)
npm run dev

# Run static TypeScript type check
npm run typecheck

# Run ESLint validation
npm run lint

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

Once running, view the site locally at [http://localhost:3000](http://localhost:3000).

---

## Multi-Item WhatsApp Inquiry Behavior

1. **Item Preselection**: Visiting from a forklift detail page (`/forklifts/[slug]`) or service detail page (`/services/[slug]`) automatically preselects that item in the form.
2. **Multi-Item Selection**: Visitors can toggle multiple forklift models and services using interactive chip checkboxes.
3. **Validation**: Required fields (`name`, `phone`, and `message`) are validated in the browser before message drafting.
4. **WhatsApp URL Generation**: On submit, the form generates a formatted WhatsApp click-to-chat URL:
   `https://wa.me/919600413229?text=...`
5. **No Data Storage**: The site transparently informs visitors that clicking the button launches their WhatsApp application and that no customer records or phone numbers are saved to an external database.
6. **Direct Call Shortcut**: For visitors who prefer immediate telephone contact, a prominent "Call Now: +91 96004 13229" button is provided.

---

## Image Sources & Licensing

All image assets are tracked in [`image-sources.md`](image-sources.md):
- Original vector illustrations were purpose-crafted for Nanjappa's forklift business.
- No proprietary brand graphics, brochures, or photos from Hyundai or other manufacturers are used.
- To replace any illustration with authentic photography of Nanjappa or equipment in Hosur, place image files in `public/images/` and update the corresponding path in `src/content/business.ts`.

---

## Owner Checklist for Nanjappa Before Publishing

Complete this checklist before taking the site live:

- [ ] **Official Business Name**: Replace working display name `"Nanjappa"` with the registered business name in `src/content/business.ts`, and set `isOfficialNameConfirmed: true`.
- [ ] **WhatsApp Confirmation**: Confirm that `+91 96004 13229` is active on WhatsApp Business, and set `isWhatsappConfirmed: true` in `src/content/business.ts`.
- [ ] **Operating Days**: Confirm active days of operation within the 9:00 AM – 6:00 PM schedule (e.g. `Mon–Sat 9:00 AM – 6:00 PM`).
- [ ] **Exact Address & Postal Spelling**: Confirm street address `Zuzvadi, Senthil Nagar, Hosur 635-126, India`.
- [ ] **Email & Social Links**: Provide official email address to replace `[EMAIL ADDRESS]`. Add any official LinkedIn, Facebook, or YouTube profiles to `socialLinks: []`.
- [ ] **Service Area**: Confirm if coverage should remain strictly `Hosur` or be expanded to specific surrounding industrial parks.
- [ ] **Actual Services & Scope**: Review the 3 service templates in `business.services` and set `isConfirmed: true` for services offered.
- [ ] **Equipment Models & Specifications**: Review the 4 forklift templates in `business.products` (tonnage, lift height, turning radius). Add or remove models matching actual inventory, and set `isConfirmed: true`.
- [ ] **Owner & Equipment Photography**: Replace SVG illustrations with genuine photographs of Nanjappa, the Hosur workshop, and actual machines.
- [ ] **Production Domain**: Set `siteUrl` in `src/content/business.ts` to your custom domain, and update `Sitemap` in `public/robots.txt`.

---

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, click **Add New → Project** and import the repository.
3. Keep the default build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Deploy. No database, serverless backend, or secret environment variables are required.
5. In the Vercel Project Settings, attach your production custom domain and update `siteUrl` in `src/content/business.ts`.
