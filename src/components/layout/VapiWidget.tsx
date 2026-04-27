import { useEffect, useState } from "react";
import { Bot, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating Vapi chat widget.
 *
 * On small screens:
 *  - Auto-shifts position when any element with `data-vapi-avoid` is in view
 *    (so it never covers primary form CTAs or submit buttons).
 *  - One-tap minimize button collapses the widget into a small bubble so the
 *    appointment form stays fully visible. Tap the bubble to restore.
 *
 * Default position : bottom-left (mobile) / bottom-right offset (desktop).
 * Avoiding position: top-right under the header (mobile only).
 */
const VapiWidget = () => {
  const [shifted, setShifted] = useState(false);
  const [minimized, setMinimized] = useState(false);

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
        // Desktop: always bottom-right offset from FloatingCTA, never minimized
        "md:bottom-8 md:right-24 md:left-auto md:top-auto",
        // Mobile default: bottom-left
        !shifted && "bottom-4 left-4",
        // Mobile when avoiding: top-right under header
        shifted && "top-20 right-4 left-auto bottom-auto"
      )}
    >
      {/* Minimized bubble — mobile only */}
      {minimized && (
        <button
          type="button"
          onClick={() => setMinimized(false)}
          aria-label="Open chat assistant"
          className="md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-background transition-transform active:scale-95"
        >
          <Bot className="h-5 w-5" />
        </button>
      )}

      {/* Full widget + minimize control */}
      <div className={cn("relative", minimized && "hidden md:block")}>
        <button
          type="button"
          onClick={() => setMinimized(true)}
          aria-label="Minimize chat assistant"
          className="md:hidden absolute -top-2 -right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background shadow-md ring-2 ring-background transition-transform active:scale-95"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <vapi-widget
          public-key="7fec7065-5cbf-4ef1-8f9d-6b7248788805"
          assistant-id="2a2b328e-326d-4164-9494-08b731f33539"
          mode="chat"
          size="compact"
          theme="light"
        />
      </div>
    </div>
  );
};

export default VapiWidget;
