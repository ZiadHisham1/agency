// lib/queries.ts
import { client } from "./sanity";

export interface Stat {
  _id: string;
  value: number;
  suffix?: string;
  label: string;
}

// lib/queries.ts
export interface HeroSlide {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;

  // Media — one of these will be set based on mediaType
  mediaType?: "image" | "youtube" | "file";
  image?: string;              // resolved CDN URL (when mediaType = image)
  imageAlt?: string;
  youtubeId?: string;          // YouTube ID (when mediaType = youtube)
  videoUrl?: string;           // resolved file URL (when mediaType = file)
  videoPoster?: string;        // resolved poster URL (when mediaType = file)

  ctaLabel?: string;
  ctaHref?: string;
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return client.fetch(
    `*[_type == "heroSlide"] | order(order asc, _createdAt asc){
      _id, title, subtitle, description,
      mediaType,
      "image": image.asset->url,
      "imageAlt": image.alt,
      youtubeId,
      "videoUrl": videoFile.asset->url,
      "videoPoster": videoPoster.asset->url,
      ctaLabel, ctaHref
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export interface YoutubeVideo {
  _id: string;
  title: string;
  description?: string;
  youtubeId: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export async function getStats(): Promise<Stat[]> {
  return client.fetch(
    `*[_type == "stat"] | order(order asc){
      _id, value, suffix, label
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getVideo(): Promise<YoutubeVideo | null> {
  const result = await client.fetch(
    `*[_type == "youtubeVideo"][0]{
      _id, title, description, youtubeId, ctaLabel, ctaHref
    }`,
    {},
    { next: { revalidate: 60 } }
  );
  return result || null;
}

// lib/queries.ts
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;        // resolved CDN URL
  imageAlt?: string;
  href?: string;
}

export async function getTeam(): Promise<TeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc){
      _id, name, role, href,
      "image": image.asset->url,
      "imageAlt": image.alt
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// lib/queries.ts
export interface Work {
  _id: string;
  title: string;
  subtitle: string;
  url: string;
  image: string;      // resolved CDN URL
  imageAlt?: string;
}

export async function getWorks(): Promise<Work[]> {
  return client.fetch(
    `*[_type == "work"] | order(order asc){
      _id, title, subtitle, url,
      "image": image.asset->url,
      "imageAlt": image.alt
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// lib/queries.ts
export interface Testimonial {
  _id: string;
  company: string;
  companyLogo?: string;   // resolved CDN URL, optional
  quoteTitle: string;
  quoteBody: string;
  avatar?: string;         // resolved CDN URL, optional
  authorName: string;
  authorRole: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc){
      _id, company, quoteTitle, quoteBody, authorName, authorRole,
      "companyLogo": companyLogo.asset->url,
      "avatar": avatar.asset->url
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// lib/queries.ts
export interface AboutStat {
  value: string;
  label: string;
}

export interface About {
  _id: string;
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  intro?: string;
  bodyLeft?: string;
  bodyRight?: string;
  image?: string;      // resolved CDN URL
  imageAlt?: string;
  stats?: AboutStat[];
  ctaLabel?: string;
  ctaHref?: string;
}

export async function getAbout(): Promise<About | null> {
  const result = await client.fetch(
    `*[_type == "about" && _id == "about"][0]{
      _id, eyebrow, heading, headingAccent, intro,
      bodyLeft, bodyRight,
      "image": image.asset->url,
      "imageAlt": image.alt,
      stats[]{ value, label },
      ctaLabel, ctaHref
    }`,
    {},
    { next: { revalidate: 60 } }
  );
  return result || null;
}

// lib/queries.ts
export interface Faq {
  _id: string;
  question: string;
  answer: string;
  category?: string;
}

export async function getFaqs(): Promise<Faq[]> {
  return client.fetch(
    `*[_type == "faq"] | order(order asc){
      _id, question, answer, category
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// lib/queries.ts
export interface ServiceFeature {
  title: string;
  description?: string;
}

// lib/queries.ts
export interface Service {
  _id: string;
  title: string;
  slug: string;
  eyebrow?: string;
  tagline?: string;

  // Hero media
  heroMediaType?: "image" | "youtube" | "file";
  heroImage?: string;
  heroImageAlt?: string;
  heroYoutubeId?: string;
  heroVideoUrl?: string;       // resolved URL for uploaded file
  heroVideoPoster?: string;    // resolved URL for poster image

  intro?: string;
  body?: any[];
  features?: ServiceFeature[];
  pricingHint?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export async function getServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc){
      _id, title, eyebrow, tagline,
      "slug": slug.current,
      heroMediaType,
      "heroImage": heroImage.asset->url,
      "heroImageAlt": heroImage.alt,
      heroYoutubeId,
      "heroVideoUrl": heroVideoFile.asset->url,
      "heroVideoPoster": heroVideoPoster.asset->url,
      intro, pricingHint, ctaLabel, ctaHref,
      features[]{ title, description }
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const result = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      _id, title, eyebrow, tagline,
      "slug": slug.current,
      heroMediaType,
      "heroImage": heroImage.asset->url,
      "heroImageAlt": heroImage.alt,
      heroYoutubeId,
      "heroVideoUrl": heroVideoFile.asset->url,
      "heroVideoPoster": heroVideoPoster.asset->url,
      intro, body,
      features[]{ title, description },
      pricingHint, ctaLabel, ctaHref
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
  return result || null;
}