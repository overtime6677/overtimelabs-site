"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset();
    } catch (e) {
      setStatus("error");
    }
  }
  return (
    <form onSubmit={onSubmit} className="card grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Name" required className="rounded-xl bg-black/30 px-4 py-3 ring-1 ring-white/10" aria-label="Your name" />
        <input name="email" placeholder="Email" type="email" required className="rounded-xl bg-black/30 px-4 py-3 ring-1 ring-white/10" aria-label="Your email address" />
      </div>
      <input name="company" placeholder="Company" className="rounded-xl bg-black/30 px-4 py-3 ring-1 ring-white/10" aria-label="Your company name" />
      <input name="role" placeholder="Role" className="rounded-xl bg-black/30 px-4 py-3 ring-1 ring-white/10" aria-label="Your role" />
      <select name="interest" className="rounded-xl bg-black/30 px-4 py-3 ring-1 ring-white/10" aria-label="Area of interest">
        <option>API</option><option>ETL</option><option>Integrations</option>
        <option>Automation</option><option>Voice</option><option>Advisory</option>
      </select>
      <textarea name="message" placeholder="What are you trying to build or improve?" rows={5} className="rounded-xl bg-black/30 px-4 py-3 ring-1 ring-white/10" aria-label="Project description"></textarea>
      <input type="text" name="website" className="hidden" aria-hidden="true" tabIndex={-1} />
      <button className="btn" disabled={status==="sending"}>{status==="sending" ? "Sending..." : "Send"}</button>
      {status==="ok" && <p className="text-green-300">Thanks — I’ll reply shortly.</p>}
      {status==="error" && <p className="text-red-300">Something went wrong. Please email hello@overtimelabs.ai</p>}
    </form>
  );
}
