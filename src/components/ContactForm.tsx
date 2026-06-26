"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    /*
      FORM SUBMISSION PLACEHOLDER
      ─────────────────────────────────────────────────────────────────────────
      This form currently simulates a successful send. To wire it up for real:

      Option A — Formspree (easiest, free tier available):
        1. Sign up at formspree.io
        2. Create a form and copy your endpoint, e.g.:
           https://formspree.io/f/YOUR_FORM_ID
        3. Replace the fetch URL below with your Formspree endpoint.
        4. Remove the fake delay.

      Option B — Resend / SendGrid / Nodemailer via Next.js API route:
        1. Create src/app/api/contact/route.ts
        2. Accept the POST body and send an email using your provider's SDK.
        3. Change the fetch URL to "/api/contact".
      ─────────────────────────────────────────────────────────────────────────
    */
    try {
      // Fake network delay — remove once you wire up a real endpoint
      await new Promise((res) => setTimeout(res, 1200));

      // Example real fetch (uncomment and fill in your endpoint):
      // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   body: data,
      //   headers: { Accept: "application/json" },
      // });
      // if (!res.ok) throw new Error("Submission failed");

      void data; // remove this line when using real fetch
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-100 rounded-sm p-8 space-y-5 shadow-sm"
      noValidate
    >
      {/* Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="name">
          Full Name <span className="text-brand-orange">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Smith"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="email">
          Email Address <span className="text-brand-orange">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          className={inputClass}
        />
      </div>

      {/* Service type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="service">
          Service Needed
        </label>
        <select id="service" name="service" className={inputClass + " bg-white"}>
          <option value="">Select a service...</option>
          <option value="ltl">LTL Shipment</option>
          <option value="ftl">FTL Shipment</option>
          <option value="expedited">Expedited Freight</option>
          <option value="dedicated">Dedicated / Contract Lanes</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5" htmlFor="message">
          Message <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your freight — origin, destination, commodity, weight, timeline, etc."
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {/* Success message */}
      {state === "success" && (
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-sm p-4 text-sm">
          <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>
            <strong>Message sent!</strong> We&apos;ll be in touch shortly. For urgent loads, please call us directly.
          </p>
        </div>
      )}

      {/* Error message */}
      {state === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-sm p-4 text-sm">
          <svg className="w-5 h-5 shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  );
}
