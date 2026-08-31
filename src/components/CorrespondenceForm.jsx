import { useEffect, useRef, useState } from "react";
import { correspondenceForm } from "../content/mailingList";

function addFieldLabel(input, text, optional = false) {
  const field = input.closest(".emailoctopus-form-row");
  if (!field || field.querySelector(".etiquette-form-label")) {
    return;
  }

  const label = document.createElement("label");
  label.className = "etiquette-form-label";
  label.htmlFor = input.id;
  label.append(document.createTextNode(text));

  if (optional) {
    const optionalText = document.createElement("span");
    optionalText.textContent = " (optional)";
    label.append(optionalText);
  }

  field.insertBefore(label, input);
}

function enhanceProviderForm(mount) {
  const providerForm = mount.querySelector(".emailoctopus-form");
  if (!providerForm || providerForm.dataset.etiquetteReady === "true") {
    return null;
  }

  providerForm.dataset.etiquetteReady = "true";
  providerForm.setAttribute(
    "aria-describedby",
    "correspondence-provider-error correspondence-provider-success correspondence-privacy"
  );

  const emailInput = providerForm.querySelector('input[type="email"]');
  if (emailInput) {
    emailInput.id = "correspondence-email";
    emailInput.autocomplete = "email";
    emailInput.inputMode = "email";
    addFieldLabel(emailInput, "Email");
  }

  const cityInput = providerForm.querySelector('input[type="text"]:not([tabindex="-1"])');
  if (cityInput) {
    cityInput.id = "correspondence-city";
    cityInput.autocomplete = "address-level2";
    addFieldLabel(cityInput, "City", true);
  }

  const submitInput = providerForm.querySelector('input[type="submit"]');
  if (submitInput) {
    submitInput.value = "Join the list";
    submitInput.classList.add("cta-button", "cta-button-primary", "correspondence-submit");
  }

  const successMessage = mount.querySelector(".emailoctopus-success-message");
  if (successMessage) {
    successMessage.id = "correspondence-provider-success";
    successMessage.setAttribute("role", "status");
    successMessage.setAttribute("aria-live", "polite");
    successMessage.tabIndex = -1;
  }

  const errorMessage = mount.querySelector(".emailoctopus-error-message");
  if (errorMessage) {
    errorMessage.id = "correspondence-provider-error";
    errorMessage.setAttribute("role", "alert");
    errorMessage.setAttribute("aria-live", "assertive");
  }

  function handleSubmit() {
    providerForm.setAttribute("aria-busy", "true");
    if (submitInput) {
      submitInput.value = "Joining…";
    }
  }

  providerForm.addEventListener("submit", handleSubmit, true);

  const errorObserver = errorMessage
    ? new MutationObserver(() => {
      if (!errorMessage.textContent.trim()) {
        return;
      }

      providerForm.removeAttribute("aria-busy");
      if (submitInput) {
        submitInput.value = "Join the list";
      }
    })
    : null;

  errorObserver?.observe(errorMessage, {
    childList: true,
    characterData: true,
    subtree: true
  });

  return () => {
    providerForm.removeEventListener("submit", handleSubmit, true);
    errorObserver?.disconnect();
  };
}

export function CorrespondenceForm() {
  const mountRef = useRef(null);
  const scriptRequestedRef = useRef(false);
  const conversionTrackedRef = useRef(false);
  const [loadStatus, setLoadStatus] = useState("loading");

  useEffect(() => {
    if (scriptRequestedRef.current || !mountRef.current) {
      return;
    }

    scriptRequestedRef.current = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = correspondenceForm.scriptUrl;
    script.dataset.form = correspondenceForm.formId;
    script.addEventListener("error", () => setLoadStatus("error"), { once: true });
    mountRef.current.appendChild(script);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    let providerCleanup = null;

    function wireProviderForm() {
      if (providerCleanup) {
        return;
      }

      providerCleanup = enhanceProviderForm(mount);
      if (providerCleanup) {
        setLoadStatus("ready");
      }
    }

    function handleProviderSuccess(event) {
      if (event.detail?.form_id !== correspondenceForm.formId) {
        return;
      }

      mount.querySelector(".emailoctopus-form")?.removeAttribute("aria-busy");

      window.setTimeout(() => {
        const successMessage = mount.querySelector(".emailoctopus-success-message");
        if (successMessage) {
          successMessage.textContent = "You’re on the list. Correspondence will follow.";
          successMessage.focus();
        }
      }, 0);

      if (!conversionTrackedRef.current && typeof window.fbq === "function") {
        conversionTrackedRef.current = true;
        window.fbq("trackCustom", "MailingListSignup", {
          source: "homepage"
        });
      }
    }

    const mountObserver = new MutationObserver(wireProviderForm);
    mountObserver.observe(mount, { childList: true, subtree: true });
    document.addEventListener(correspondenceForm.successEvent, handleProviderSuccess);
    wireProviderForm();

    return () => {
      mountObserver.disconnect();
      providerCleanup?.();
      document.removeEventListener(correspondenceForm.successEvent, handleProviderSuccess);
    };
  }, []);

  return (
    <section className="section section-correspondence" aria-label="Mailing list signup">
      <div className="correspondence-copy">
        <p className="eyebrow">Mailing list</p>
        <p>New releases, Reno shows, and occasional correspondence.</p>
      </div>

      <div className="correspondence-form">
        <div className="correspondence-provider" ref={mountRef} />
        <p
          className={`form-status form-status-${loadStatus}`}
          role={loadStatus === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {loadStatus === "loading" && "Loading signup…"}
          {loadStatus === "error" && "Signup could not be loaded. Please refresh and try again."}
        </p>

        <p className="form-privacy" id="correspondence-privacy">
          Your email stays out of ad events. <a href="/privacy/">Privacy &amp; ad choices</a>. Protected by reCAPTCHA; Google’s <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms</a> apply.
        </p>
      </div>
    </section>
  );
}
