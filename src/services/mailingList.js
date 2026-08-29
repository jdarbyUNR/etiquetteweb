const mailingListEndpoint = import.meta.env.VITE_MAILING_LIST_ENDPOINT?.trim();

export const isMailingListConfigured = Boolean(mailingListEndpoint);

export async function submitMailingListSignup({ email, city, website }) {
  if (!mailingListEndpoint) {
    throw new Error("Correspondence signup is not connected yet.");
  }

  const formData = new FormData();
  formData.set("email", email);
  formData.set("city", city);
  formData.set("website", website);
  formData.set("source", "etiquetteband.com");

  const response = await fetch(mailingListEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error("We could not add you to the list. Please try again.");
  }

  const responseType = response.headers.get("content-type") || "";
  if (responseType.includes("application/json")) {
    const result = await response.json();
    if (result.success === false || result.ok === false) {
      throw new Error(result.message || "We could not add you to the list. Please try again.");
    }
  }
}
