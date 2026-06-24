export const site = {
  name: "Awadh Dudh Dairy",
  tagline: "Pure & Fresh Since Day One",
  // Raw digits with country code for tel: / wa.me links
  phoneRaw: "915151798362",
  // Human-friendly display format
  phoneDisplay: "+91 51517 98362",
  address:
    "Amrapali Yojana, Awas Vikas, in front of Trinity International Public School (TIPS E-5), India",
  whatsappMessage: "Hello Awadh Dudh Dairy, I would like to place an order.",
}

export const telHref = `tel:+${site.phoneRaw}`
export const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address,
)}`
export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address,
)}&output=embed`
