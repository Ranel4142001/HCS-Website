/**
 * Landing feature view model types.
 * These describe the shape of data used by landing page components.
 */

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface TestimonialItem {
  id: string;
  initials: string;
  name: string;
  role: string;
  quote: string;
  fullReview: string;
  stars: number;
  videoUrl?: string;     // URL to video file (MP4/WebM) or embed URL (YouTube/Vimeo)
  videoPoster?: string;  // Poster image for video thumbnail
}

export interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  tag?: string;
  icon: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  subtext?: string;
}

export interface AlliancePartner {
  icon: string;
  title: string;
  description: string;
}
