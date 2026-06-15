import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export default function ScrollHint() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const isHome = pathname === "/";

  const [visible, setVisible] = useState(false);
  const [morphed, setMorphed] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    setDismissed(true);
  };

  // 1. Detect hero visibility (IntersectionObserver)
  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !dismissed) {
          setVisible(true);

          // auto-hide after 5 seconds if user does nothing
          if (timeoutRef.current) clearTimeout(timeoutRef.current);

          timeoutRef.current = setTimeout(() => {
            setVisible(false);
          }, 5000);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [isHome, dismissed]);

  // 2. Morph into dot after user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setMorphed(true);
        setVisible(false);
      } else if (!dismissed) {
        setMorphed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!isHome || dismissed) return null;

  return (
    <button
      onClick={scrollDown}
      className={`
        fixed bottom-10 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Apple-style mouse scroll indicator */}
      {!morphed ? (
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/60 tracking-wide">
            Scroll
          </span>

          <div className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-foreground/60 rounded-full animate-bounce" />
          </div>
        </div>
      ) : (
        // Morph state → small dot
        <div className="w-2 h-2 rounded-full bg-foreground/40 transition-all duration-300" />
      )}
    </button>
  );
}