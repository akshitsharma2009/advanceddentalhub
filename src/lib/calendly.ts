declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const calendlyScriptUrl = "https://assets.calendly.com/assets/external/widget.js";

const loadCalendly = (): Promise<NonNullable<Window["Calendly"]>> => {
  if (window.Calendly) return Promise.resolve(window.Calendly);

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${calendlyScriptUrl}"]`);
    const script = existingScript ?? document.createElement("script");

    const handleLoad = () => {
      if (window.Calendly) resolve(window.Calendly);
      else reject(new Error("Calendly did not load"));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", () => reject(new Error("Calendly failed to load")), { once: true });

    if (!existingScript) {
      script.src = calendlyScriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }
  });
};

export const initializeCalendlyInline = async (url: string, parentElement: HTMLElement) => {
  const calendly = await loadCalendly();
  if (!parentElement.isConnected) return;
  parentElement.replaceChildren();
  calendly.initInlineWidget({ url, parentElement });
};

export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/akshitsharmayt-2/new-meeting",
    });
  }
};
