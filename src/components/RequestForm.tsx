"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/workwithhussnainahmad@gmail.com";

export function RequestForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("_honey")) return;
    setState("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      if (!response.ok) throw new Error("Request could not be sent");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <p className="eyebrow">Request received</p>
        <h3>Thank you. We’ll be in touch.</h3>
        <p>Your institution details have been sent to the Nisaab360 team.</p>
        <button type="button" onClick={() => setState("idle")}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New Nisaab360 institution access request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <label className="honey-field" aria-hidden="true">
        Leave this field empty
        <input name="_honey" tabIndex={-1} autoComplete="off" />
      </label>

      <fieldset className="plan-fieldset">
        <legend>Choose a plan *</legend>
        <div className="plan-options">
          <label className="plan-option">
            <input type="radio" name="Selected plan" value="Basic — Rs. 3,500/month + Rs. 5,000 setup" required />
            <span className="plan-card">
              <span><b>Basic</b><small>Up to 300 students</small></span>
              <strong>Rs. 3,500<small>/ month</small></strong>
              <i>Rs. 5,000 setup</i>
            </span>
          </label>
          <label className="plan-option">
            <input type="radio" name="Selected plan" value="Standard — Rs. 6,500/month + Rs. 8,000 setup" defaultChecked required />
            <span className="plan-card featured-plan">
              <em>Recommended</em>
              <span><b>Standard</b><small>301–800 students</small></span>
              <strong>Rs. 6,500<small>/ month</small></strong>
              <i>Rs. 8,000 setup</i>
            </span>
          </label>
          <label className="plan-option">
            <input type="radio" name="Selected plan" value="Premium — Rs. 11,000/month + Rs. 12,000 setup" required />
            <span className="plan-card">
              <span><b>Premium</b><small>801–1,500 students</small></span>
              <strong>Rs. 11,000<small>/ month</small></strong>
              <i>Rs. 12,000 setup</i>
            </span>
          </label>
          <label className="plan-option">
            <input type="radio" name="Selected plan" value="Enterprise — Custom pricing" required />
            <span className="plan-card">
              <span><b>Enterprise</b><small>1,500+ · Multi-campus</small></span>
              <strong>Custom</strong>
              <i>Talk to our team</i>
            </span>
          </label>
        </div>
      </fieldset>

      <div className="form-grid">
        <label>
          <span>Institution name *</span>
          <input name="Institution" type="text" placeholder="e.g. The Learning School" required maxLength={120} />
        </label>
        <label>
          <span>Your name *</span>
          <input name="Contact person" type="text" placeholder="Full name" required maxLength={80} autoComplete="name" />
        </label>
        <label>
          <span>Work email *</span>
          <input name="email" type="email" placeholder="you@school.edu.pk" required maxLength={160} autoComplete="email" />
        </label>
        <label>
          <span>Phone / WhatsApp *</span>
          <input name="Phone" type="tel" placeholder="+92 300 0000000" required maxLength={24} autoComplete="tel" />
        </label>
        <label>
          <span>City *</span>
          <input name="City" type="text" placeholder="Your city" required maxLength={80} autoComplete="address-level2" />
        </label>
        <label>
          <span>Government registration ID (optional)</span>
          <input name="Government registration ID" type="text" placeholder="If your institution is registered" maxLength={80} />
        </label>
        <label>
          <span>Number of students</span>
          <select name="Students" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Up to 300</option>
            <option>301–800</option>
            <option>801–1,500</option>
            <option>More than 1,500</option>
          </select>
        </label>
        <label className="address-field">
          <span>Institution address *</span>
          <textarea
            name="Institution address"
            placeholder="Street, area, city, province and postal code"
            rows={3}
            required
            maxLength={300}
            autoComplete="street-address"
          />
        </label>
      </div>

      <label>
        <span>What would you like to improve?</span>
        <textarea name="Message" placeholder="Tell us about your institution and the areas you want to manage with Nisaab360." rows={4} maxLength={1200} />
      </label>

      {state === "error" && (
        <p className="form-error" role="alert">We couldn’t send your request. Please check your connection and try again.</p>
      )}

      <div className="form-footer">
        <p>By submitting, you agree that your details may be used to contact you about Nisaab360.</p>
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Request institution access"}
          {state !== "sending" && <span aria-hidden="true">→</span>}
        </button>
      </div>
    </form>
  );
}
