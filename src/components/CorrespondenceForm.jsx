import { useState } from "react";
import { isMailingListConfigured, submitMailingListSignup } from "../services/mailingList";

const initialStatus = isMailingListConfigured ? "idle" : "unconfigured";

export function CorrespondenceForm() {
  const [status, setStatus] = useState(initialStatus);
  const [message, setMessage] = useState(
    isMailingListConfigured ? "" : "Signup connection pending."
  );

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const website = String(formData.get("website") || "").trim();

    if (website) {
      setStatus("error");
      setMessage("We could not submit that request. Please try again.");
      return;
    }

    setStatus("loading");
    setMessage("Submitting your address…");

    try {
      await submitMailingListSignup({
        email: String(formData.get("email") || "").trim(),
        city: String(formData.get("city") || "").trim(),
        website
      });

      form.reset();
      setStatus("success");
      setMessage("You’re on the list. Correspondence will follow.");

      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "MailingListSignup", {
          source: "homepage"
        });
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not add you to the list. Please try again.");
    }
  }

  const isLoading = status === "loading";
  const isDisabled = status === "unconfigured" || isLoading;

  return (
    <section className="section section-correspondence" aria-labelledby="correspondence-title">
      <div className="correspondence-copy">
        <p className="eyebrow">Mailing list</p>
        <h2 id="correspondence-title">CORRESPONDENCE</h2>
        <p>New releases, Reno shows, and occasional correspondence.</p>
      </div>

      <form
        className="correspondence-form"
        onSubmit={handleSubmit}
        aria-busy={isLoading}
        aria-describedby="correspondence-status correspondence-privacy"
      >
        <div className="correspondence-fields">
          <div className="form-field">
            <label htmlFor="correspondence-email">Email</label>
            <input
              id="correspondence-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-field">
            <label htmlFor="correspondence-city">City <span>(optional)</span></label>
            <input
              id="correspondence-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="form-trap" aria-hidden="true">
          <label htmlFor="correspondence-website">Leave this field empty</label>
          <input
            id="correspondence-website"
            name="website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <button className="cta-button cta-button-primary correspondence-submit" type="submit" disabled={isDisabled}>
          {isLoading ? "Joining…" : "Join the list"}
        </button>

        <p
          id="correspondence-status"
          className={`form-status form-status-${status}`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >{message}</p>

        <p className="form-privacy" id="correspondence-privacy">
          Your email stays out of ad events. <a href="/privacy/">Privacy &amp; ad choices</a>.
        </p>
      </form>
    </section>
  );
}
