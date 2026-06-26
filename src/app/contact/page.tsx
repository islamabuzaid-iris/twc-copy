import ContactForm from "@/components/ContactForm";

// ─── CONTACT CONFIG ───────────────────────────────────────────────────────────
const PHONE = "(201) 887-6014";
const EMAIL = "dispatch@twcexpressllc.com"; // TODO: replace with real email
const ADDRESS_LINE1 = "City, State ZIP";    // TODO: replace with street address
const ADDRESS_LINE2 = "";                   // TODO: add second address line if needed
// ─────────────────────────────────────────────────────────────────────────────

const contactDetails = [
  {
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\D/g, "")}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: ADDRESS_LINE1 + (ADDRESS_LINE2 ? `, ${ADDRESS_LINE2}` : ""),
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Dispatch Hours",
    value: "24 / 7 — Always Available",
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Contact TWC Express
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ready to move freight? Have questions about our services? Reach out — our team
              responds fast and our dispatch is available around the clock.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-brand-orange" />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left — Contact info */}
            <div>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                Our Information
              </p>
              <h2 className="text-3xl font-extrabold text-brand-black mb-6">
                Reach Us Directly
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Whether you're a shipper looking to book a load or a carrier wanting to partner
                with us, we'd love to hear from you. Fill out the form and we'll get back to you
                within the hour during business hours — or call us directly any time.
              </p>

              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-brand-orange flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-black font-semibold hover:text-brand-orange transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-brand-black font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick info box */}
              <div className="mt-12 bg-gray-50 border border-gray-100 rounded-sm p-6">
                <h3 className="font-bold text-brand-black mb-2">Quick Quote?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For the fastest response, call us directly. Have your origin, destination,
                  freight type, and weight ready and we can give you a rate on the spot.
                </p>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="mt-4 btn-primary inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right — Contact form (client component) */}
            <div>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                Send a Message
              </p>
              <h2 className="text-3xl font-extrabold text-brand-black mb-6">
                Request a Quote
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
