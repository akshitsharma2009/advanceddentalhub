declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/akshitsharmayt-2/new-meeting",
    });
  }
};
