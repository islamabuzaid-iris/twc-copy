import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { ScrollImagePanel } from "@/components/motion/ScrollImagePanel";

const carrierFeatures = [
  "Expedited & standard delivery options",
  "LTL and FTL shipments",
  "Commercial cargo insurance on every load",
  "Real-time tracking & driver communication",
  "Flexible scheduling — same day, next day, dedicated",
  "Owner-operator direct carrier runs",
];

const shipperFeatures = [
  "Available to direct shippers and freight brokers",
  "LTL and FTL shipments covered",
  "Consistent pricing with no surprise fees",
  "Pickup & delivery coordination handled for you",
  "Regular and recurring lane support",
  "Transparent load status updates throughout",
];

const additionalServices = [
  {
    title: "Last-Mile Delivery",
    body: "We specialize in the final leg of the supply chain — getting product from a regional hub or warehouse to its end destination accurately and on time.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Expedited Freight",
    body: "When time-sensitive freight can't wait, our dedicated expedite service gets your load picked up and moving within hours.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Cross-Country Hauls",
    body: "Our drivers cover long-haul lanes across all 48 contiguous states, with reliable ETAs and consistent communication every step of the way.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-black py-20 overflow-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        <div
          className="absolute -top-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-brand-orange/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <RevealGroup className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" mode="mount">
          <div className="max-w-2xl">
            <RevealItem>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                What We Do
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight text-balance">
                Freight &amp; Logistics Services
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-gray-400 text-lg leading-relaxed">
                TWC Express LLC is a licensed carrier serving both shippers and brokers with
                dependable LTL and FTL freight — professional service from pickup to delivery.
              </p>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      {/* ── ORANGE RULE ───────────────────────────────────────────────────────── */}
      <div className="h-1 bg-brand-orange" />

      {/* ── SERVICE BLOCK 1: BOX TRUCK CARRIER ───────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <Reveal x={-24} y={0}>
              <span className="inline-block bg-brand-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4 rounded-sm">
                Service 01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 leading-tight tracking-tight">
                Direct Carrier &amp; Owner-Operator
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a licensed USDOT carrier, TWC Express hauls your freight directly with our
                own trucks to haul your freight directly. Whether you're a shipper or a broker,
                you get a reliable, professional driver and a well-maintained truck — on time, every time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our trucks are ideal for retail deliveries, warehouse transfers, trade show
                freight, e-commerce fulfillment, and a wide range of commercial shipments.
              </p>

              <ul className="space-y-3 mb-8">
                {carrierFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary">
                Book a Carrier Run
              </Link>
            </Reveal>

            {/* Visual card */}
            <Reveal x={24} y={0} delay={0.1} className="bg-gray-50 rounded-sm p-10 flex flex-col items-center text-center shadow-card">
              <div className="text-brand-orange mb-6">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">Direct Carrier Service</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Point-to-point delivery with no hand-offs. Your freight stays on one truck,
                driven by our professional team, from pickup to drop-off.
              </p>
              <RevealGroup className="mt-8 grid grid-cols-2 gap-4 w-full">
                {[
                  {
                    label: "LTL & FTL",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    ),
                  },
                  {
                    label: "Same-Day Available",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                    ),
                  },
                  {
                    label: "Cargo Insurance",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    ),
                  },
                  {
                    label: "48-State Coverage",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ),
                  },
                ].map((item) => (
                  <RevealItem key={item.label} className="bg-white rounded-sm p-4 text-center shadow-card">
                    <svg className="w-6 h-6 mx-auto mb-2 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                    <p className="text-xs font-semibold text-gray-600">{item.label}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────────────────── */}
      <div className="bg-gray-100 h-px max-w-7xl mx-auto" />

      {/* ── SERVICE BLOCK 2: DIRECT SHIPPER PARTNERSHIPS ─────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual card */}
            <Reveal x={-24} y={0} className="relative bg-brand-black rounded-sm p-10 flex flex-col items-center text-center shadow-card ring-1 ring-white/10 order-2 md:order-1 overflow-hidden">
              <div className="grain-overlay" aria-hidden="true" />
              <div className="text-brand-orange mb-6">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Serving Shippers & Brokers</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We're available on load boards and work directly with shippers — LTL or FTL,
                we have the capacity and reliability to get it done.
              </p>
              <RevealGroup className="mt-8 grid grid-cols-2 gap-4 w-full">
                {[
                  { label: "Load Types", value: "LTL & FTL" },
                  { label: "Lane Coverage", value: "Nationwide" },
                  { label: "Pricing", value: "Transparent" },
                  { label: "Communication", value: "24/7" },
                ].map((item) => (
                  <RevealItem key={item.label} className="bg-white/5 ring-1 ring-white/10 rounded-sm p-4">
                    <p className="text-brand-orange font-bold text-sm">{item.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.label}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>

            {/* Text */}
            <Reveal x={24} y={0} delay={0.1} className="order-1 md:order-2">
              <span className="inline-block bg-brand-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4 rounded-sm">
                Service 02
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 leading-tight tracking-tight">
                Carrier Services for Shippers &amp; Brokers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TWC Express works with both direct shippers and freight brokers. If you found us
                on a load board or want to work with us directly, we're ready. We handle LTL and
                FTL shipments and keep communication clear from booking to delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need a one-time load covered or consistent capacity on a lane, we
                bring the reliability and professionalism that shippers and brokers count on.
              </p>

              <ul className="space-y-3 mb-8">
                {shipperFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary">
                Get a Rate
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EQUIPPED FOR EVERY LOAD ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
              Equipped For Every Load
            </p>
            <h2 className="section-heading">The Right Equipment, Every Time</h2>
            <p className="section-sub mx-auto">
              From liftgate deliveries to hands-on warehouse loading, our trucks and crews
              come ready for whatever the job requires.
            </p>
          </Reveal>
          <div className="space-y-6">
            <ScrollImagePanel
              src="/liftgate services.jpg"
              alt="TWC Express box truck with hydraulic liftgate deployed for ground-level delivery"
              eyebrow="Equipment"
              title="Liftgate-Equipped Trucks"
              body="Every truck comes ready with a hydraulic liftgate for loads that need ground-level pickup or delivery — no loading dock required."
              align="left"
              imageClassName="contrast-110 saturate-[1.15] brightness-95"
            />
            <ScrollImagePanel
              src="/loading.jpg"
              alt="Warehouse crew loading palletized freight with a pallet jack"
              eyebrow="Handling"
              title="Careful, Professional Loading"
              body="From pallet jacks to hand-stacking, freight is loaded and secured the right way, every time — protecting your cargo from pickup to delivery."
              align="right"
            />
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SERVICES ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            More Ways We Help
          </p>
          <h2 className="section-heading">Additional Capabilities</h2>
          <p className="section-sub mb-12">
            From last-mile to long-haul, TWC Express has the flexibility to handle a wide range
            of freight scenarios — all as your direct carrier.
          </p>
          <RevealGroup className="grid sm:grid-cols-3 gap-8">
            {additionalServices.map((s, i) => (
              <RevealItem key={s.title} className={i === 1 ? "sm:mt-6" : ""}>
                <SpotlightCard className="group bg-white rounded-sm p-8 text-left shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 rounded-sm bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-brand-black text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-orange py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
          aria-hidden="true"
        />
        <Reveal className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-balance">
            Ready to Move Your Freight?
          </h2>
          <p className="text-amber-900 font-medium mb-8">
            Contact us for a fast quote — you'll deal directly with our team, not a call center.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-black font-bold px-8 py-3 rounded-sm hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 tracking-wide uppercase text-sm"
          >
            Get a Quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}
