import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Floating Vapi chat widget.
 *
 * On small screens, automatically shifts position when any element marked
 * with `data-vapi-avoid` is visible in the viewport — so it never covers
 * primary form CTAs or submit buttons.
 *
 * Default position : bottom-left (mobile) / bottom-right offset (desktop).
 * Avoiding position: top-right under the header (mobile only).
 */
const VapiWidget = () => {
  const [shifted, setShifted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const mql = window.matchMedia("(max-width: 767px)");
    let observer: IntersectionObserver | null = null;
    const visible = new Set<Element>();

    const attach = () => {
      detach();
      if (!mql.matches) {
        setShifted(false);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          });
          setShifted(visible.size > 0);
        },
        { rootMargin: "0px 0px -20% 0px", threshold: 0.1 }
      );

      document.querySelectorAll("[data-vapi-avoid]").forEach((el) => observer!.observe(el));
    };

    const detach = () => {
      observer?.disconnect();
      observer = null;
      visible.clear();
    };

    attach();

    // Re-scan when route content swaps in/out (covers SPA navigation)
    const mutationObs = new MutationObserver(() => {
      if (!observer || !mql.matches) return;
      observer.disconnect();
      visible.clear();
      document.querySelectorAll("[data-vapi-avoid]").forEach((el) => observer!.observe(el));
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    mql.addEventListener("change", attach);

    return () => {
      detach();
      mutationObs.disconnect();
      mql.removeEventListener("change", attach);
    };
  }, []);

  return (
    <div
      className={cn(
        "vapi-widget-wrapper fixed z-30 transition-all duration-300 ease-out",
        // Desktop: always bottom-right offset from FloatingCTA
        "md:bottom-8 md:right-24 md:left-auto md:top-auto",
        // Mobile default: bottom-left
        !shifted && "bottom-4 left-4",
        // Mobile when avoiding: top-right under header
        shifted && "top-20 right-4 left-auto bottom-auto"
      )}
    >
      <vapi-widget
        public-key="7fec7065-5cbf-4ef1-8f9d-6b7248788805"
        assistant-id="2a2b328e-326d-4164-9494-08b731f33539"
        mode="chat"
        size="compact"
        theme="light"
      />
    </div>
  );
};

export default VapiWidget;
