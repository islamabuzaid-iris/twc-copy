import Link from "next/link";
import Image from "next/image";

// ─── CONTACT & LEGAL CONFIG ──────────────────────────────────────────────────
const PHONE = "(201) 887-6014";
const EMAIL = "info@twcxpress.com"; // TODO: replace with real email
const ADDRESS_LINE1 = "Paterson, NJ";
const ADDRESS_LINE2 = "Harrisburg, PA";
const DOT_NUMBER = "3215718";
const MC_NUMBER = "1005282";
// ─────────────────────────────────────────────────────────────────────────────

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-gray-400">
      {/* Top stripe */}
      <div className="h-1 bg-brand-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Brand blurb */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="TWC Express LLC"
                width={160}
                height={64}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              TWC Express LLC is a licensed and insured carrier committed to safe,
              on-time delivery across the country. We work with shippers and brokers alike — LTL or FTL, your cargo is our priority.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                {/* Phone icon */}
                <svg className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hover:text-brand-orange transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                {/* Email icon */}
                <svg className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${EMAIL}`} className="hover:text-brand-orange transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                {/* Location icon */}
                <svg className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar — DOT/MC + copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            USDOT #{DOT_NUMBER} &nbsp;|&nbsp; MC #{MC_NUMBER} &nbsp;|&nbsp; Minority-Owned Business
          </p>
          <p>&copy; {year} TWC Express LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
