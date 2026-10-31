"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ whatsapp, email, products }: { whatsapp: string; email: string; products: string[] }) {
  const [feedback, setFeedback] = useState("");
  const [method, setMethod] = useState<"whatsapp" | "email">(whatsapp ? "whatsapp" : "email");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Hello, I’d like to make a forklift enquiry.`, `Name: ${name}`, `Phone: ${phone}`, product && `Product of interest: ${product}`, `Message: ${message}`].filter(Boolean).join("\n");
    setSubmitting(true);
    if (method === "whatsapp" && whatsapp) {
      window.open(`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      setFeedback("Your message is ready in WhatsApp. Please send it there to complete your enquiry.");
    } else if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("Forklift enquiry")}&body=${encodeURIComponent(body)}`;
      setFeedback("Your message is ready in your email app. Please send it there to complete your enquiry.");
    } else {
      setFeedback("Contact options haven’t been configured yet. Please call the business once a phone number is added.");
    }
    setSubmitting(false);
  }

  return <>
    <div className="form-heading"><span>ENQUIRY FORM</span><p>{whatsapp || email ? `Opens ${method === "whatsapp" && whatsapp ? "WhatsApp" : "your email app"} with a ready-to-send message.` : "Add a WhatsApp or email contact to enable this form."}</p></div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Your name<input name="name" autoComplete="name" placeholder="e.g. Alex Morgan" required /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Include your country code" required /></label>
      <label>Product of interest<select name="product" defaultValue=""><option value="">Choose a forklift (optional)</option>{products.map((product) => <option value={product} key={product}>{product}</option>)}<option value="Other / not sure">Other / not sure</option></select></label>
      <label>How can we help?<textarea name="message" rows={3} placeholder="Tell us a little about what you need…" required /></label>
      {(whatsapp || email) && <fieldset className="contact-method"><legend>Continue with</legend>{whatsapp && <label><input type="radio" name="method" value="whatsapp" checked={method === "whatsapp"} onChange={() => setMethod("whatsapp")} /> WhatsApp</label>}{email && <label><input type="radio" name="method" value="email" checked={method === "email"} onChange={() => setMethod("email")} /> Email</label>}</fieldset>}
      <button className="button button-primary form-submit" type="submit" disabled={submitting}>{submitting ? "Preparing your message…" : "Prepare enquiry"}<span aria-hidden="true">↗</span></button>
      <p className="form-note">{whatsapp || email ? `This opens ${method === "whatsapp" && whatsapp ? "WhatsApp" : "your email app"}. Your enquiry is not sent or saved on this website.` : "Your enquiry is not sent or saved on this website."}</p>
      <p className="form-feedback" aria-live="polite" role="status">{feedback}</p>
    </form>
  </>;
}
