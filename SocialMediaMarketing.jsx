// Filename: SocialMediaMarketingSite.jsx
import React, { useRef } from "react";

const services = [
  {
    name: "Basic",
    icon: (
      <svg
        className="w-12 h-12 text-accent mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    description:
      "Essential social media content: 4 reels/videos + 4 posters monthly.",
    price: "$299 / month",
  },
  {
    name: "Standard",
    icon: (
      <svg
        className="w-12 h-12 text-accent mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
      </svg>
    ),
    description:
      "Balanced package: 8 reels/videos + 8 posters + 1 campaign monthly.",
    price: "$549 / month",
  },
  {
    name: "Premium",
    icon: (
      <svg
        className="w-12 h-12 text-accent mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ),
    description:
      "Full growth: 12 reels/videos + 12 posters + 2 campaigns + analytics.",
    price: "$899 / month",
  },
];

const portfolioItems = [
  { id: 1, type: "poster", alt: "Sample Poster 1" },
  { id: 2, type: "video", alt: "Sample Video 1" },
  { id: 3, type: "poster", alt: "Sample Poster 2" },
  { id: 4, type: "video", alt: "Sample Video 2" },
  { id: 5, type: "poster", alt: "Sample Poster 3" },
  { id: 6, type: "video", alt: "Sample Video 3" },
];

const testimonials = [
  {
    id: 1,
    name: "Emma R.",
    business: "Cafe Aroma",
    text: "The reels and posters boosted our Instagram engagement by 40%! Highly recommend.",
  },
  {
    id: 2,
    name: "Liam T.",
    business: "FitZone Gym",
    text: "Professional, creative, and reliable. Our social media presence has never looked better.",
  },
  {
    id: 3,
    name: "Sophia M.",
    business: "Bistro Bella",
    text: "The campaigns brought in new customers and increased our online visibility significantly.",
  },
];

export default function SocialMediaMarketingSite() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* Custom scrollbar for portfolio grid */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #b8860b; /* Gold accent */
          border-radius: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black">
        {/* Hero Section */}
        <section
          className="relative flex flex-col justify-center items-center text-center px-6 py-32 sm:py-40 bg-gradient-to-br from-black via-gray-900 to-black"
          aria-label="Hero section"
        >
          {/* Background gradient with subtle overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"
          />
          <h1 className="relative text-4xl sm:text-5xl font-extrabold max-w-3xl leading-tight">
            Grow Your Café, Restaurant, or Gym Online
          </h1>
          <p className="relative mt-4 max-w-xl text-lg sm:text-xl text-gray-300">
            I create engaging videos, reels, and posters to help local
            businesses shine on social media.
          </p>
          <button
            onClick={scrollToContact}
            className="relative mt-8 px-8 py-3 bg-accent rounded-full font-semibold text-black hover:bg-accent-dark transition-colors focus:outline-none focus:ring-4 focus:ring-accent/60"
            style={{ backgroundColor: "#b8860b" }} // Gold accent
            aria-label="Book a Free Trial"
          >
            Book a Free Trial
          </button>
        </section>

        {/* Services Section */}
        <section
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-labelledby="services-heading"
        >
          <h2
            id="services-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            Packages
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {services.map(({ name, icon, description, price }) => (
              <article
                key={name}
                className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                tabIndex={0}
                aria-label={`${name} package`}
              >
                {icon}
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{description}</p>
                <p className="text-accent font-bold text-lg">{price}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          className="py-20 px-6 max-w-7xl mx-auto"
          aria-labelledby="portfolio-heading"
        >
          <h2
            id="portfolio-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            Portfolio
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-xl mx-auto">
            Sample posters and video thumbnails. Real projects coming soon.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {portfolioItems.map(({ id, type, alt }) => (
              <div
                key={id}
                className="relative rounded-xl overflow-hidden shadow-lg bg-gray-800 aspect-[4/3] flex items-center justify-center"
                aria-label={alt}
              >
                {type === "poster" ? (
                  <div className="w-full h-full bg-gradient-to-tr from-accent/70 to-accent/30 flex items-center justify-center text-black font-bold text-lg rounded-xl select-none">
                    Poster Placeholder
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-accent/70 to-accent/30 flex flex-col items-center justify-center text-black font-bold text-lg rounded-xl select-none relative">
                    <svg
                      className="w-12 h-12 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Video Placeholder
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="py-20 px-6 max-w-5xl mx-auto bg-gray-900 rounded-3xl shadow-xl"
          aria-labelledby="testimonials-heading"
        >
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold text-center mb-8"
          >
            What Clients Say
          </h2>
          <p className="text-center text-accent font-semibold mb-12">
            Currently offering FREE work for 2 businesses this month.
          </p>
          <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
            {testimonials.map(({ id, name, business, text }) => (
              <blockquote
                key={id}
                className="bg-black rounded-xl p-6 shadow-md flex flex-col justify-between"
                tabIndex={0}
              >
                <p className="text-gray-300 mb-4">&ldquo;{text}&rdquo;</p>
                <footer className="text-sm text-gray-400 font-semibold">
                  — {name}, <span className="italic">{business}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="py-20 px-6 max-w-3xl mx-auto"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-center mb-8"
          >
            Get in Touch
          </h2>
          <form
            className="bg-gray-900 rounded-3xl p-8 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for reaching out! I will get back to you shortly."
              );
              e.target.reset();
            }}
            noValidate
            aria-label="Contact form"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-1"
                >
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-semibold mb-1"
                >
                  Business <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your café, restaurant, or gym"
                  autoComplete="organization"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-1"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                  placeholder="Tell me about your business and goals"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-accent text-black font-semibold rounded-full py-3 hover:bg-accent-dark transition-colors focus:outline-none focus:ring-4 focus:ring-accent/60"
              style={{ backgroundColor: "#b8860b" }}
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="mt-12 flex justify-center space-x-8 text-accent">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent-dark transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-accent-dark transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12a11.94 11.94 0 001.48 6.52L0 24l5.48-1.48A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.52 16.5a7.5 7.5 0 01-4.04-1.18l-.29-.18-3.07.83.82-3.01-.19-.3a7.5 7.5 0 1110.27 10.27 7.44 7.44 0 01-3.5.58zm4.3-5.3c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12s-.58.75-.71.9-.26.18-.49.06a6.6 6.6 0 01-1.94-1.2 7.3 7.3 0 01-1.35-1.67c-.14-.24 0-.37.1-.49.1-.1.23-.26.35-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.12-.51-1.23-.7-1.68-.18-.44-.36-.38-.51-.39-.13 0-.28 0-.43 0-.15 0-.39.06-.59.28s-.77.75-.77 1.83.79 2.12.9 2.27c.12.15 1.56 2.38 3.78 3.34a13.3 13.3 0 001.7.68c.71.23 1.36.2 1.87.12.57-.1 1.75-.71 2-1.4.25-.7.25-1.3.18-1.4-.06-.1-.21-.15-.44-.27z" />
              </svg>
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="hover:text-accent-dark transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M