import Link from "next/link";

const values = [
  {
    title: "Reliability",
    body: "Every commitment we make is one we keep. When we say a load ships, it ships.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    body: "You always know where your freight is and what it costs. No hidden fees, no surprises.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    body: "Our drivers follow strict DOT compliance standards and our trucks are maintained to the highest safety standards.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    body: "We treat every shipper as a long-term partner. Your success on each load is what drives ours.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              About TWC Express LLC
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are a small but driven trucking company with big standards — built on a foundation
              of reliability, professionalism, and a genuine passion for keeping freight moving.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-brand-orange" />

      {/* ── COMPANY STORY ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-5 leading-tight">
                A Carrier Built on Integrity
              </h2>
              <span className="inline-block border border-brand-orange text-brand-orange text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-5">
                Minority-Owned Business
              </span>
              <p className="text-gray-600 leading-relaxed mb-5">
                TWC Express LLC was founded with a simple goal: provide shippers with a carrier
                they can actually trust. We grew out of hands-on experience in the
                trucking industry and a desire to do things the right way — with proper licensing,
                full insurance, and a commitment to treating every load like it matters.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As a registered USDOT carrier, we have built a business focused entirely on
                direct carrier service — working one-on-one with shippers who need dependable
                capacity they can count on.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We operate with full DOT compliance, maintain our vehicles to strict safety
                standards, and provide transparent pricing with no surprise fees. When you partner
                with TWC Express, you get a team that shows up — every time.
              </p>
            </div>

            {/* Highlight sidebar */}
            <div className="space-y-5">
              {[
                {
                  heading: "Licensed & Compliant",
                  body: "TWC Express holds an active USDOT number and MC authority. We operate in full compliance with all federal motor carrier regulations.",
                },
                {
                  heading: "Fully Insured",
                  body: "Every load we move is backed by commercial cargo insurance. We carry the coverage needed to protect your freight from pickup to delivery.",
                },
                {
                  heading: "Direct Carrier Service",
                  body: "We work with both direct shippers and brokers. Whether you found us on a load board or came to us directly, you get a carrier that's personally accountable for every load.",
                },
                {
                  heading: "Owner-Operated Commitment",
                  body: "As an owner-operated business, we have a personal stake in every load. There is no bureaucracy between you and the people making decisions.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="flex gap-4 bg-gray-50 border border-gray-100 rounded-sm p-5"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black text-sm mb-1">{item.heading}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            What Drives Us
          </p>
          <h2 className="section-heading">Our Core Values</h2>
          <p className="section-sub mb-12">
            These are the principles behind every load we move and every relationship we build.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-sm p-8 text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-brand-orange mb-4">{v.icon}</div>
                <h3 className="font-bold text-brand-black text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US — COMPLIANCE STRIP ──────────────────────────────────── */}
      <section className="bg-brand-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { label: "Active USDOT Authority", sub: "Federally registered motor carrier" },
              { label: "Active MC Authority", sub: "MC #1005282 in good standing" },
              { label: "Commercial Cargo Insurance", sub: "Every load, every shipment" },
            ].map((item) => (
              <div key={item.label} className="border border-neutral-700 rounded-sm p-8">
                <div className="w-10 h-10 rounded-full bg-brand-orange mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-1">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-brand-black mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Get in touch for a fast quote or to learn more about how TWC Express can serve your freight needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/services" className="inline-block border-2 border-brand-black text-brand-black font-bold px-8 py-3 rounded-sm hover:bg-brand-black hover:text-white transition-colors duration-200 tracking-wide uppercase text-sm">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
