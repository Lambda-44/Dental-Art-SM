import { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/useReveal";

// Elfsight Google Reviews widget — configured entirely on elfsight.com
// (which Google Place it pulls from, how many reviews, styling, etc.).
// This app ID is specific to this clinic's widget instance.
const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_WIDGET_CLASS = "elfsight-app-6f973b88-7616-4390-8b1d-77c415ba7023";

function useElfsightPlatformScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    // Intentionally not removed on unmount: Elfsight's platform script is
    // meant to stay loaded for the lifetime of the page.
  }, []);
}

export default function GoogleReviews() {
  useElfsightPlatformScript();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28 bg-[color:var(--color-sand)]">
      <div className="container-page">
        <div ref={ref} className={visible ? "fade-up" : "opacity-0"}>
          <SectionHeading
            eyebrow="Google Reviews"
            title="Šta naši pacijenti kažu"
            subtitle="Naši pacijenti o iskustvu u ordinaciji"
            align="center"
          />
        </div>

        <div className="mt-12">
          <div className={ELFSIGHT_WIDGET_CLASS} data-elfsight-app-lazy="" />
        </div>
      </div>
    </section>
  );
}
