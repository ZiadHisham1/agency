import Image from 'next/image'

type Testimonial = {
  quote: string
  name: string
  role: string
  practice: string
  location: string
  image: string
  rating: 5
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Within 3 months we went from 2–3 online bookings a week to 15–20. The site paid for itself in the first month.',
    name: 'Dr. Sara Ahmed',
    role: 'Lead Dentist',
    practice: 'Nile Dental Clinic',
    location: 'Cairo, Egypt',
    image: '/images/testimonials/sara-ahmed.webp',
    rating: 5,
  },
  {
    quote:
      'They understood our patients, not just our website. Every detail — from the booking flow to the Arabic copy — felt thought through.',
    name: 'Dr. Karim Mansour',
    role: 'Owner',
    practice: 'BrightSmile Dental',
    location: 'Alexandria, Egypt',
    image: '/images/testimonials/karim-mansour.webp',
    rating: 5,
  },
  {
    quote:
      'We rank #1 for "dentist in Giza" now. That alone brings us more new patients each month than any ad we\'ve ever run.',
    name: 'Dr. Layla Hassan',
    role: 'Founder',
    practice: 'Lakeview Family Dentistry',
    location: 'Giza, Egypt',
    image: '/images/testimonials/layla-hassan.webp',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-turquoise-surf-500">
            What dentists say
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-deep-twilight-500 sm:text-4xl"
          >
            Practices that grew with us
          </h2>
          <p className="mt-4 text-lg text-deep-twilight-400">
            Real feedback from real dentists — not marketing fluff.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, role, practice, location, image, rating } = testimonial

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-frosted-blue-800 bg-light-cyan-900/40 p-6 transition-shadow duration-300 hover:shadow-md sm:p-8">
      {/* Stars */}
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-turquoise-surf-500" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-5 flex-1">
        <p className="text-base leading-relaxed text-deep-twilight-500">
          “{quote}”
        </p>
      </blockquote>

      {/* Author */}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-frosted-blue-800 pt-6">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-deep-twilight-500">
            {name}
          </p>
          <p className="text-xs text-deep-twilight-400">
            {role}, {practice}
          </p>
          <p className="text-xs text-deep-twilight-400/80">{location}</p>
        </div>
      </figcaption>
    </figure>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}