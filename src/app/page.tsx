import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { LogoMarquee } from "@/components/motion/LogoMarquee";
import { MagneticLink } from "@/components/motion/MagneticLink";

// ─── PARTNER LOGOS ────────────────────────────────────────────────────────────
const partnerLogos = [
  { src: "/axle-logo.png", alt: "Axle" },
  { src: "/enruio_logo.jpeg", alt: "Enruio", large: true },
  { src: "/globaltranz-seeklogo.png", alt: "GlobalTranz" },
  { src: "/king_of_freight_logo.jpeg", alt: "King of Freight" },
  { src: "/Screenshot_24-6-2026_161137_drttransportation.com.jpeg", alt: "DRT Transportation" },
];

// ─── WHY CHOOSE US CARDS ─────────────────────────────────────────────────────
const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    body: "We understand that time is money in freight. Our drivers and dispatch team work around the clock to make sure every load arrives on schedule.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Fully Insured",
    body: "All loads are covered under our commercial cargo and liability insurance policies. Ship with confidence knowing your freight is fully protected.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Nationwide Coverage",
    body: "From local runs to long-haul lanes, TWC Express operates across the continental United States. Wherever your freight needs to go, we can get it there.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Dispatch",
    body: "Our dispatch team is available day and night to coordinate pickups, track loads, and handle anything that comes up on the road — no surprises.",
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "48", label: "States Covered" },
  { value: "24/7", label: "Dispatch Available" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "0", label: "Compromises on Safety" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-black overflow-hidden">
        {/* Hero background photo */}
        <ParallaxImage src="/twc trucks.png" alt="TWC Express trucks staged for freight pickup" />
        {/* Layered gradient so text stays readable while keeping depth */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="grain-overlay" aria-hidden="true" />
        {/* Decorative orange accent bar */}
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-orange" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <RevealGroup className="max-w-3xl" mode="mount">
            <RevealItem className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block bg-brand-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                Licensed Freight Carrier
              </span>
              <span className="inline-block border border-brand-orange/60 bg-white/5 backdrop-blur-sm text-brand-orange text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                Minority-Owned Business
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tightest mb-6 text-balance">
                Reliable Freight,{" "}
                <span className="text-brand-orange">Delivered On Time.</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                TWC Express LLC is a licensed carrier serving shippers and brokers with dependable
                LTL and FTL freight across the country. We move your cargo safely — every load, every time.
              </p>
            </RevealItem>
            <RevealItem className="flex flex-col sm:flex-row gap-4">
              <MagneticLink href="/contact" className="btn-primary text-center">
                Request a Quote
              </MagneticLink>
              <MagneticLink href="/services" className="btn-outline text-center">
                Our Services
              </MagneticLink>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-orange overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
          aria-hidden="true"
        />
        <RevealGroup className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <RevealItem key={s.label} className={i > 0 ? "md:border-l md:border-white/20 md:pl-6" : ""}>
                <p className="text-2xl md:text-3xl font-display font-bold text-white">
                  <AnimatedNumber value={s.value} />
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-900 mt-1">{s.label}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── TRUSTED BY ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-14">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">
          Companies We&apos;ve Worked With
        </p>
        <LogoMarquee logos={partnerLogos} />
      </section>

      {/* ── INTRO / ABOUT SNIPPET ─────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal x={-24} y={0}>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                Who We Are
              </p>
              <h2 className="section-heading">
                A Carrier You Can Count On
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                TWC Express LLC is a fully licensed and insured carrier serving both shippers
                and brokers. Whether it's LTL or FTL, we have the capacity and experience
                to handle your freight — from regional runs to long-haul loads across the country.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We pride ourselves on transparent communication, competitive rates, and a no-excuses
                commitment to getting your cargo where it needs to go, on time and in perfect condition.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </Reveal>

            {/* Decorative feature list */}
            <RevealGroup className="bg-gray-50 rounded-sm p-8 space-y-5 shadow-card">
              {[
                "Minority-Owned Business",
                "Licensed USDOT Motor Carrier",
                "Commercial Cargo Insurance on Every Load",
                "Real-Time Load Tracking & Updates",
                "Dedicated Account Management",
                "Flexible Pickup & Delivery Windows",
              ].map((item) => (
                <RevealItem key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            Why TWC Express
          </p>
          <h2 className="section-heading">Built for Reliability</h2>
          <p className="section-sub mb-14">
            We combine the personal attention of a small carrier with the professionalism
            and reliability of a large operation — serving shippers and brokers on every load.
          </p>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <RevealItem key={r.title}>
                <SpotlightCard className="group bg-white rounded-sm p-8 text-left shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 rounded-sm bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {r.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-black mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-black py-20 overflow-hidden">
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-brand-orange/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="grain-overlay" aria-hidden="true" />
        <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Move Your Freight?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Contact our team today for a fast, competitive quote on your next load.
          </p>
          <MagneticLink href="/contact" className="btn-primary">
            Get a Free Quote
          </MagneticLink>
        </Reveal>
      </section>
    </>
  );
}
