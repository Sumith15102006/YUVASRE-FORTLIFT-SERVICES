/**
 * Central Content Configuration
 * ==============================
 * This file contains all business information, contact details, services,
 * equipment templates, FAQs, and imagery configuration for Nanjappa's forklift business.
 *
 * OWNER INSTRUCTIONS FOR NANJAPPA:
 * 1. Official Business Name: Currently operating under working name "Nanjappa". Replace with registered trade name once confirmed.
 * 2. WhatsApp Confirmation: "+91 96004 13229" is currently marked as provisional. Set `isWhatsappConfirmed: true` once verified.
 * 3. Operating Days: Hours are set to 9:00 AM–6:00 PM; please confirm exact days of operation (e.g. Mon–Sat).
 * 4. Email & Social Channels: Leave bracketed placeholders or update once official accounts are active.
 * 5. Products & Services: The equipment models and service cards below are unconfirmed templates. Confirm or adjust specs before publishing.
 */

export interface ForkliftSpec {
  label: string;
  value: string;
}

export interface ForkliftProduct {
  slug: string;
  name: string;
  category: "3-Wheel Electric" | "4-Wheel Electric" | "Heavy-Duty Electric" | "Warehouse & Stacker";
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  ratedCapacityKg: number;
  liftHeightMm: number;
  powerSource: string;
  turningRadiusMm: number;
  keyFeatures: string[];
  specifications: ForkliftSpec[];
  idealFor: string[];
  availabilityNote: string;
  isConfirmed: boolean;
  confirmationNotice: string;
}

export interface BusinessService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  deliverables: string[];
  image: string;
  imageAlt: string;
  gallery: string[];
  isConfirmed: boolean;
  confirmationNotice: string;
}

export interface BusinessFaq {
  question: string;
  answer: string;
}

export interface BusinessBenefit {
  title: string;
  description: string;
}

export interface BusinessContent {
  name: string;
  officialBusinessName: string;
  isOfficialNameConfirmed: boolean;
  shortName: string;
  ownerName: string;
  ownerRole: string;
  siteUrl: string;
  location: string;
  serviceArea: string;
  phone: string;
  whatsapp: string;
  isWhatsappConfirmed: boolean;
  email: string;
  address: string;
  hours: string;
  heroEyebrow: string;
  heroTitleFirst: string;
  heroTitleSecond: string;
  heroTitleAccent: string;
  heroDescription: string;
  heroImageAlt: string;
  heroImage: string;
  ownerImage: string;
  logo: string;
  ownerStory: {
    heading: string;
    paragraphs: string[];
    commitmentPoints: { title: string; detail: string }[];
  };
  socialLinks: { label: string; url: string }[];
  services: BusinessService[];
  products: ForkliftProduct[];
  benefits: BusinessBenefit[];
  faqs: BusinessFaq[];
}

export const business: BusinessContent = {
  // Working display name and official name placeholder
  name: "Nanjappa",
  officialBusinessName: "[OFFICIAL BUSINESS NAME PENDING OWNER CONFIRMATION]",
  isOfficialNameConfirmed: false,
  shortName: "Nanjappa",
  ownerName: "Nanjappa",
  ownerRole: "Owner & Equipment Operator",

  // Production domain placeholder
  siteUrl: "https://nanjappa-forklifts.example.com",

  // Confirmed geographic footprint in Hosur
  location: "Zuzvadi, Senthil Nagar, Hosur 635-126, India",
  serviceArea: "Hosur",

  // Contact details
  phone: "+91 96004 13229",
  whatsapp: "+91 96004 13229",
  isWhatsappConfirmed: false, // Provisional: flagged for owner confirmation
  email: "[EMAIL ADDRESS]", // Not provided yet; kept as unconfirmed placeholder
  address: "Zuzvadi, Senthil Nagar, Hosur 635-126, India",
  hours: "9:00 AM – 6:00 PM (Days of operation to be confirmed by owner)",

  // Hero section copy tailored to Hosur
  heroEyebrow: "MATERIAL HANDLING EQUIPMENT · HOSUR, TAMIL NADU",
  heroTitleFirst: "The right lift",
  heroTitleSecond: "for your facility in",
  heroTitleAccent: "Hosur.",
  heroDescription:
    "Direct, owner-led material handling support for warehouses, manufacturing units, and logistics yards in Hosur. Speak directly with Nanjappa for equipment availability, maintenance enquiries, or on-site sizing guidance.",
  heroImageAlt: "Technical vector illustration of a modern electric counterbalance forklift in a distribution warehouse",
  heroImage: "/images/forklift-hero.svg",
  ownerImage: "/images/about-owner.svg",
  logo: "/images/business-logo.svg",

  // Owner story & background (direct, personal, owner-operated)
  ownerStory: {
    heading: "Hands-on material handling support directly from Nanjappa in Hosur.",
    paragraphs: [
      "Operating from Zuzvadi, Senthil Nagar, this business provides direct, owner-led forklift and equipment support across Hosur's manufacturing and industrial zones.",
      "Rather than dealing with detached call centers or commissioned sales reps, you speak directly with Nanjappa. From evaluating your facility's aisle clearances and floor surfaces to coordinating preventative maintenance, you receive honest, straightforward operational advice.",
      "Whether you need equipment sourcing, scheduled maintenance, or layout consultation, you work with a dedicated local operator committed to your facility's daily uptime.",
    ],
    commitmentPoints: [
      {
        title: "Direct Owner Accountability",
        detail: "When you call or send a WhatsApp enquiry, you reach Nanjappa directly. No middlemen or tiered support desks.",
      },
      {
        title: "Localized to Hosur",
        detail: "Focused strictly on facilities across Hosur, ensuring prompt communication and practical understanding of local industrial needs.",
      },
      {
        title: "Honest Facility Sizing",
        detail: "We evaluate your aisle dimensions, pallet weights, and door clearances before recommending any equipment.",
      },
    ],
  },

  // Social links (empty until owner confirms)
  socialLinks: [],

  // Services (Templates clearly marked provisional pending owner confirmation)
  services: [
    {
      id: "equipment-sourcing-rental",
      slug: "equipment-sourcing-rental",
      title: "Forklift Sourcing & Equipment Guidance",
      shortDescription:
        "Direct assistance in identifying and sourcing electric and warehouse forklifts suited to your facility's tonnage and aisle widths.",
      fullDescription:
        "Finding the right forklift requires evaluating your facility's floor capacity, door clearance, racking dimensions, and duty cycles. Nanjappa assists local industrial units in Hosur with equipment sizing and sourcing recommendations tailored to your operational floor.",
      image: "/images/service-consultation.svg",
      imageAlt: "Technical diagram of facility layout, turning radius clearance, and equipment sizing",
      gallery: [
        "/images/service-consultation.svg",
        "/images/forklift-hero.svg",
        "/images/forklift-4wheel.svg",
      ],
      highlights: [
        "Aisle width and turning clearance review",
        "Tonnage matching based on pallet load weights",
        "Battery and power configuration guidance",
        "Direct owner coordination across Hosur",
      ],
      deliverables: [
        "On-site operational walkaround in Hosur",
        "Equipment specification comparison for your aisle layout",
        "Clear guidance on mast collapsed height vs. overhead door clearance",
        "Direct handover consultation with facility managers",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional service template — subject to owner confirmation of current offerings.",
    },
    {
      id: "maintenance-servicing",
      slug: "maintenance-servicing",
      title: "Routine Maintenance & Preventative Care",
      shortDescription:
        "Scheduled inspections, hydraulic checks, and battery upkeep to maintain equipment uptime and prevent breakdown delays.",
      fullDescription:
        "Preventative maintenance is essential for keeping material handling equipment reliable. Routine service checks cover hydraulic line pressures, mast roller alignment, chain tension, brake systems, and battery cell health to identify wear before it causes costly operational downtime.",
      image: "/images/service-maintenance.svg",
      imageAlt: "Technical diagram of forklift hydraulic checks, mast tensioning, and servicing checklist",
      gallery: [
        "/images/service-maintenance.svg",
        "/images/forklift-3wheel.svg",
        "/images/about-owner.svg",
      ],
      highlights: [
        "Hydraulic line and cylinder seal inspection",
        "Mast roller, chain tension, and fork inspection",
        "Brake and emergency disconnect functionality verification",
        "Battery cell health and terminal cleaning checks",
      ],
      deliverables: [
        "Comprehensive visual and mechanical safety review",
        "Hydraulic pressure and line leakage assessment",
        "Actionable maintenance notes directly from the operator",
        "Scheduled checkup recommendations for continuous uptime",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional service template — subject to owner confirmation of maintenance packages.",
    },
    {
      id: "facility-sizing-consultation",
      slug: "facility-sizing-consultation",
      title: "Facility Layout & Aisle Sizing Consultation",
      shortDescription:
        "On-site review of warehouse aisles, door clearances, and dock ramps before purchasing or leasing equipment.",
      fullDescription:
        "Avoid costly equipment mismatches. We review your warehouse layout in Hosur to check floor conditions, pallet racking spacing, ramp gradients, and operational traffic flow, providing straightforward recommendations on lift capacity and turning geometry.",
      image: "/images/about-owner.svg",
      imageAlt: "Technical illustration of business owner reviewing facility floor plans and forklift dimensions",
      gallery: [
        "/images/about-owner.svg",
        "/images/service-consultation.svg",
        "/images/forklift-reach.svg",
      ],
      highlights: [
        "Objective, brand-neutral equipment sizing",
        "Indoor warehouse vs. outdoor loading yard suitability",
        "Dock ramp gradient and floor surface clearance checks",
        "Door clearance verification for high-mast equipment",
      ],
      deliverables: [
        "Detailed aisle clearance dimension matrix",
        "Recommended turning radius thresholds for pallet safety",
        "Power source recommendations (AC electric vs. yard equipment)",
        "Written summary of operational recommendations",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional service template — subject to owner confirmation of consultation scope.",
    },
  ],

  // Forklift inventory templates (clearly marked provisional pending owner confirmation)
  products: [
    {
      slug: "15-compact-3wheel-electric",
      name: "1.5T Compact 3-Wheel Electric Forklift",
      category: "3-Wheel Electric",
      shortDescription: "Ultra-maneuverable electric forklift template engineered for narrow aisles and dock loading.",
      fullDescription:
        "Engineered for compact facilities where turning space is at a premium. The dual-motor front drive and rear pivot wheel enable an exceptionally tight 1,480 mm turning radius, making it an effective model template for standard pallet racking, mezzanine floors, and container loading.",
      image: "/images/forklift-3wheel.svg",
      imageAlt: "Original technical vector illustration of a 1.5-ton compact 3-wheel electric counterbalance forklift",
      gallery: [
        "/images/forklift-3wheel.svg",
        "/images/forklift-hero.svg",
        "/images/service-consultation.svg",
      ],
      ratedCapacityKg: 1500,
      liftHeightMm: 4500,
      powerSource: "48V Electric (High-Efficiency AC Drive)",
      turningRadiusMm: 1480,
      availabilityNote: "Provisional template / Inquire with Nanjappa for confirmed availability in Hosur",
      keyFeatures: [
        "Tight turning radius for narrow aisle navigation",
        "High-visibility mast profile for safer fork positioning",
        "Regenerative braking to conserve battery life",
        "Ergonomic operator cockpit with clear digital dashboard",
      ],
      specifications: [
        { label: "Rated Capacity", value: "1,500 kg" },
        { label: "Load Center", value: "500 mm" },
        { label: "Standard Lift Height", value: "4,500 mm (Triplex Mast)" },
        { label: "Turning Radius", value: "1,480 mm" },
        { label: "Battery Voltage", value: "48V / Industrial Deep Cycle" },
        { label: "Drive Motor", value: "Dual AC Drive Motors" },
        { label: "Tyre Configuration", value: "Solid Non-Marking Tyres" },
        { label: "Overhead Guard Height", value: "2,060 mm" },
      ],
      idealFor: [
        "Narrow-aisle logistics warehouses",
        "Retail and parts distribution centers",
        "Container stripping and dock work",
        "Clean-floor indoor manufacturing",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional equipment template — awaiting confirmation from Nanjappa.",
    },
    {
      slug: "20-standard-4wheel-electric",
      name: "2.0T Standard 4-Wheel Electric Forklift",
      category: "4-Wheel Electric",
      shortDescription: "General workhorse template for pallet transport, loading bays, and multi-shift operations.",
      fullDescription:
        "The balanced 4-wheel chassis delivers enhanced stability on ramp gradients, outdoor tarmac, and dock levelers. Built with heavy-duty drive axles and smooth hydraulic proportional controls, this 2,000 kg forklift template handles full-shift material transport with zero local emissions.",
      image: "/images/forklift-4wheel.svg",
      imageAlt: "Original technical vector illustration of a 2.0-ton 4-wheel electric counterbalance forklift",
      gallery: [
        "/images/forklift-4wheel.svg",
        "/images/forklift-hero.svg",
        "/images/service-maintenance.svg",
      ],
      ratedCapacityKg: 2000,
      liftHeightMm: 4800,
      powerSource: "48V High-Capacity AC System",
      turningRadiusMm: 1810,
      availabilityNote: "Provisional template / Inquire with Nanjappa for confirmed availability in Hosur",
      keyFeatures: [
        "4-wheel stability suited for indoor ramps and level yards",
        "Integral side-shifter for precise pallet placement",
        "Automatic speed reduction when turning curves",
        "Weather-resistant electric enclosures",
      ],
      specifications: [
        { label: "Rated Capacity", value: "2,000 kg" },
        { label: "Load Center", value: "500 mm" },
        { label: "Standard Lift Height", value: "4,800 mm" },
        { label: "Turning Radius", value: "1,810 mm" },
        { label: "Battery Voltage", value: "48V / 500Ah Industrial" },
        { label: "Drive Motor", value: "Brushless AC Motor" },
        { label: "Tyre Configuration", value: "Pneumatic or Solid Cushion" },
        { label: "Gradeability (Laden)", value: "Up to 18%" },
      ],
      idealFor: [
        "General manufacturing plants",
        "Automotive components storage in Hosur",
        "Covered dock loading and staging",
        "Dual indoor and yard duty",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional equipment template — awaiting confirmation from Nanjappa.",
    },
    {
      slug: "30-heavy-duty-4wheel-electric",
      name: "3.0T Heavy-Duty 4-Wheel Electric Forklift",
      category: "Heavy-Duty Electric",
      shortDescription: "Robust 3,000 kg lifting capacity template for steel, fabrication parts, and machinery.",
      fullDescription:
        "For loads extending past two tonnes, this reinforced 3.0T machine provides structural rigidity, hydraulic power, and braking authority. With an 80V electrical system and robust mast channels, it delivers diesel-equivalent torque without fumes or fuel storage overhead.",
      image: "/images/forklift-heavy.svg",
      imageAlt: "Original technical vector illustration of a 3.0-ton heavy-duty electric forklift",
      gallery: [
        "/images/forklift-heavy.svg",
        "/images/forklift-4wheel.svg",
        "/images/service-maintenance.svg",
      ],
      ratedCapacityKg: 3000,
      liftHeightMm: 5000,
      powerSource: "80V Heavy-Duty Electric System",
      turningRadiusMm: 2160,
      availabilityNote: "Provisional template / Inquire with Nanjappa for confirmed availability in Hosur",
      keyFeatures: [
        "High-torque 80V system for sustained heavy lifting",
        "Reinforced steer axle and heavy-duty mast beams",
        "Suspension operator seat with weight adjustment",
        "LED safety halos and reverse warning systems",
      ],
      specifications: [
        { label: "Rated Capacity", value: "3,000 kg" },
        { label: "Load Center", value: "500 mm" },
        { label: "Standard Lift Height", value: "5,000 mm" },
        { label: "Turning Radius", value: "2,160 mm" },
        { label: "Battery Voltage", value: "80V High Capacity" },
        { label: "Braking System", value: "Enclosed Oil-Cooled Disc Brakes" },
        { label: "Mast Tilt (Fwd/Back)", value: "6° / 10°" },
        { label: "Tyre Configuration", value: "Solid Industrial Compound" },
      ],
      idealFor: [
        "Fabrication and machining workshops",
        "Heavy engineering units in Hosur",
        "Coil and metal stock warehousing",
        "Intensive continuous manufacturing",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional equipment template — awaiting confirmation from Nanjappa.",
    },
    {
      slug: "16-electric-reach-truck",
      name: "1.6T High-Lift Electric Reach Truck",
      category: "Warehouse & Stacker",
      shortDescription: "Specialized high-density warehouse truck template for reaching 7.5m+ pallet racking.",
      fullDescription:
        "Designed specifically for high-bay pallet racking. The moving mast reaches forward into the racking structure while maintaining a compact wheelbase, allowing warehouse operators to maximize vertical storage without widening corridors.",
      image: "/images/forklift-reach.svg",
      imageAlt: "Original technical vector illustration of an electric warehouse reach truck",
      gallery: [
        "/images/forklift-reach.svg",
        "/images/forklift-3wheel.svg",
        "/images/service-consultation.svg",
      ],
      ratedCapacityKg: 1600,
      liftHeightMm: 7500,
      powerSource: "48V Electric System",
      turningRadiusMm: 1680,
      availabilityNote: "Provisional template / Inquire with Nanjappa for confirmed availability in Hosur",
      keyFeatures: [
        "Extended reach mast with hydraulic tilt and sideshift",
        "Height indicator and lift-height preselection options",
        "360-degree progressive electronic power steering",
        "Overhead roof guard with high-strength safety grid",
      ],
      specifications: [
        { label: "Rated Capacity", value: "1,600 kg" },
        { label: "Load Center", value: "600 mm" },
        { label: "Max Lift Height", value: "7,500 mm" },
        { label: "Turning Radius", value: "1,680 mm" },
        { label: "Aisle Width Required", value: "2,750 mm (EUR pallet)" },
        { label: "Battery Voltage", value: "48V Industrial" },
        { label: "Operator Position", value: "Seated with Panoramic Mast View" },
        { label: "Tyre Configuration", value: "Polyurethane Drive and Load Wheels" },
      ],
      idealFor: [
        "High-density pallet racking warehouses",
        "Cold storage and consumer goods distribution",
        "E-commerce fulfillment centers in Hosur",
        "Operations prioritizing vertical cubic storage",
      ],
      isConfirmed: false,
      confirmationNotice: "Provisional equipment template — awaiting confirmation from Nanjappa.",
    },
  ],

  // Core benefits
  benefits: [
    {
      title: "Direct Contact with Nanjappa",
      description: "You work directly with the business owner on every inquiry, quote, and delivery detail. No sales commissions or call transfers.",
    },
    {
      title: "Locally Based in Hosur",
      description: "Located at Zuzvadi, Senthil Nagar, offering responsive local communication for Hosur manufacturing plants and warehouses.",
    },
    {
      title: "Facility-Matched Guidance",
      description: "We review aisle widths, floor surfaces, and door clearances so you get equipment configured for your exact floor layout.",
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "Where is the business based, and which areas do you cover?",
      answer:
        "The business is based at Zuzvadi, Senthil Nagar, Hosur 635-126, India. Direct support, equipment walkarounds, and services are provided across Hosur.",
    },
    {
      question: "How do I contact Nanjappa for equipment or service enquiries?",
      answer:
        "You can call directly at +91 96004 13229 or initiate a WhatsApp message. Submitting an enquiry through this website prepares a WhatsApp message on your phone or browser with your selected items, ready to send.",
    },
    {
      question: "Can I inspect the forklift before deciding?",
      answer:
        "Yes. We welcome local facility walkarounds and equipment inspections in Hosur. Contact Nanjappa directly to arrange a viewing or discuss current models matching your requirements.",
    },
    {
      question: "How does the enquiry process work on this website?",
      answer:
        "This website is front-end only and does not store or process your personal data on any server. Selecting products or services generates a WhatsApp message directly to +91 96004 13229, allowing you to review and send it directly from your own WhatsApp app.",
    },
    {
      question: "Can you help assess our warehouse aisle clearances?",
      answer:
        "Yes. As part of our equipment consultation, we can review your rack layout, pallet dimensions, and ceiling clearances in Hosur to confirm whether a standard counterbalance or reach truck is required.",
    },
  ],
};

/**
 * Checks whether a given string is an unfilled owner placeholder.
 */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return trimmed.startsWith("[") && trimmed.endsWith("]");
}

/**
 * Normalizes phone/WhatsApp digits for href attributes.
 */
export function cleanDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Returns a valid href for direct contact links, or null if the value is a placeholder.
 */
export function contactHref(kind: "phone" | "whatsapp" | "email"): string | null {
  const value = business[kind];
  if (isPlaceholder(value)) return null;

  if (kind === "email") {
    return `mailto:${encodeURIComponent(value.trim())}`;
  }

  const digits = cleanDigits(value);
  if (!digits) return null;

  if (kind === "phone") {
    return `tel:+${digits}`;
  }

  // WhatsApp click-to-chat format
  return `https://wa.me/${digits}`;
}

/**
 * Builds a direct WhatsApp click-to-chat URL with a prefilled message.
 */
export function buildWhatsAppUrl(messageText: string): string | null {
  const digits = cleanDigits(business.whatsapp);
  if (!digits || isPlaceholder(business.whatsapp)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Builds a Google Maps navigation/search link for the business address.
 */
export function getMapUrl(): string | null {
  if (isPlaceholder(business.address)) return null;
  return `https://maps.google.com/?q=${encodeURIComponent(business.address)}`;
}