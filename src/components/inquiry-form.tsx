"use client";

import { FormEvent, useState } from "react";
import { cleanDigits, isPlaceholder } from "@/content/business";

interface InquiryFormProps {
  initialProduct?: string;
  initialService?: string;
  availableProducts: string[];
  availableServices: string[];
  whatsapp: string;
  phone: string;
  isWhatsappConfirmed?: boolean;
}

export function InquiryForm({
  initialProduct = "",
  initialService = "",
  availableProducts,
  availableServices,
  whatsapp,
  phone,
  isWhatsappConfirmed = false,
}: InquiryFormProps) {
  const digits = cleanDigits(whatsapp);
  const hasWhatsapp = !isPlaceholder(whatsapp) && digits.length > 0;
  const phoneDigits = cleanDigits(phone);
  const hasPhone = !isPlaceholder(phone) && phoneDigits.length > 0;

  // Initial selection from URL params
  const initialSelected = [
    ...(initialProduct ? [initialProduct] : []),
    ...(initialService ? [initialService] : []),
  ];

  const [selectedItems, setSelectedItems] = useState<string[]>(initialSelected);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleItem(item: string) {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phoneInput = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const selectedSummary =
      selectedItems.length > 0
        ? selectedItems.map((item) => `• ${item}`).join("\n")
        : "• General Inquiry / Custom Sizing";

    const lines = [
      "Hello Nanjappa, I would like to make an enquiry regarding forklift equipment and services in Hosur.",
      `Name: ${name}`,
      `Contact Phone: ${phoneInput}`,
      `Selected Equipment / Service(s):\n${selectedSummary}`,
      `Message / Operational Requirements:\n${message}`,
    ];

    const messageText = lines.join("\n\n");
    setIsSubmitting(true);

    if (hasWhatsapp) {
      const waUrl = `https://wa.me/${digits}?text=${encodeURIComponent(messageText)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setStatusMessage(
        "WhatsApp click-to-chat has opened in a new tab with your pre-filled enquiry. Please review and click 'Send' in WhatsApp to deliver your message directly to Nanjappa."
      );
    } else {
      setStatusMessage(
        `Direct WhatsApp is currently pending owner verification. Please call Nanjappa directly at ${phone} to discuss your requirements.`
      );
    }

    setIsSubmitting(false);
  }

  return (
    <div className="inquiry-card">
      <div className="inquiry-header">
        <span className="inquiry-badge">DIRECT WHATSAPP ENQUIRY</span>
        <h2 className="inquiry-title">Enquire Directly with Nanjappa</h2>
        <p className="inquiry-subtitle">
          Select one or more equipment models or services below. Submitting prepares your message
          and opens WhatsApp directly to <strong>{whatsapp}</strong>. No enquiry data is stored on
          this website.
        </p>

        {/* Quick Call Action Shortcut */}
        {hasPhone && (
          <div className="quick-call-strip">
            <span>Need an immediate answer?</span>
            <a href={`tel:+${phoneDigits}`} className="call-now-button">
              <span aria-hidden="true">📞</span> Call Now: {phone}
            </a>
          </div>
        )}

        {!isWhatsappConfirmed && (
          <div className="provisional-flag-badge">
            <span className="status-dot-sm" />
            <span>WhatsApp number ({whatsapp}) is provisional pending owner confirmation.</span>
          </div>
        )}
      </div>

      <form className="inquiry-form" onSubmit={handleSubmit} noValidate={false}>
        {/* Contact Name & Phone */}
        <div className="form-row form-row-2">
          <div className="form-field">
            <label htmlFor="inquiry-name" className="field-label">
              Your Name <span className="req">*</span>
            </label>
            <input
              id="inquiry-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Ramesh Kumar"
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="inquiry-phone" className="field-label">
              Your Phone Number <span className="req">*</span>
            </label>
            <input
              id="inquiry-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              className="form-input"
            />
          </div>
        </div>

        {/* Multi-Item Selection: Equipment Models */}
        <fieldset className="form-field multi-select-fieldset">
          <legend className="field-label">
            Select Forklift Equipment of Interest (Select all that apply)
          </legend>
          <div className="items-checkbox-grid">
            {availableProducts.map((p) => {
              const isChecked = selectedItems.includes(p);
              return (
                <label
                  key={p}
                  className={`item-chip-label ${isChecked ? "is-checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    value={p}
                    checked={isChecked}
                    onChange={() => toggleItem(p)}
                    className="item-checkbox"
                  />
                  <span className="chip-indicator">{isChecked ? "✓" : "+"}</span>
                  <span className="chip-text">{p}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Multi-Item Selection: Services */}
        <fieldset className="form-field multi-select-fieldset">
          <legend className="field-label">
            Select Services of Interest (Select all that apply)
          </legend>
          <div className="items-checkbox-grid">
            {availableServices.map((s) => {
              const isChecked = selectedItems.includes(s);
              return (
                <label
                  key={s}
                  className={`item-chip-label ${isChecked ? "is-checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    value={s}
                    checked={isChecked}
                    onChange={() => toggleItem(s)}
                    className="item-checkbox"
                  />
                  <span className="chip-indicator">{isChecked ? "✓" : "+"}</span>
                  <span className="chip-text">{s}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Summary of Selected Items */}
        <div className="selected-items-summary" aria-live="polite">
          <span className="summary-label">Currently selected ({selectedItems.length}):</span>
          {selectedItems.length > 0 ? (
            <div className="summary-tags">
              {selectedItems.map((item) => (
                <span key={item} className="summary-tag">
                  {item}
                  <button
                    type="button"
                    onClick={() => toggleItem(item)}
                    aria-label={`Remove ${item}`}
                    className="tag-remove-btn"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          ) : (
            <span className="summary-empty">No specific item selected (general inquiry)</span>
          )}
        </div>

        {/* Message / Facility Details */}
        <div className="form-field">
          <label htmlFor="inquiry-message" className="field-label">
            Facility Details or Operational Questions <span className="req">*</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={4}
            required
            placeholder="Describe your requirements in Hosur: required lift tonnage, aisle dimensions, indoor vs. outdoor surface, or routine maintenance schedule..."
            className="form-textarea"
          />
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-primary form-submit-btn"
        >
          <span>
            {isSubmitting
              ? "Preparing WhatsApp message..."
              : `Send Enquiry via WhatsApp (${whatsapp})`}
          </span>
          <span className="btn-arrow" aria-hidden="true">
            ↗
          </span>
        </button>

        {/* Notice of Transparency */}
        <p className="form-transparency-note">
          <strong>Important Note:</strong> Clicking the button above launches your WhatsApp
          application with your pre-filled enquiry to <strong>{whatsapp}</strong>. You must press
          &quot;Send&quot; inside WhatsApp to deliver the message. This website does not store, transmit to an
          external server, or record your contact information.
        </p>

        {/* Live Feedback Alert */}
        {statusMessage && (
          <div className="form-status-alert" role="status" aria-live="polite">
            <p>{statusMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}