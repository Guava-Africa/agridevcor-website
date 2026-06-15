import { ChevronDown, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);
  const [hiddenByFooter, setHiddenByFooter] = useState(false);
  const [hasScroll, setHasScroll] = useState(true);
  const [isHalfway, setIsHalfway] = useState(false);
  const [idle, setIdle] = useState(false);
  const [fastScroll, setFastScroll] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const lastScrollY = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // scroll down / top actions
  const scrollDown = () => {
    if (typeof window === "undefined") return;

    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    if (typeof window === "undefined") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // detect scrollable page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScroll = () => {
      const canScroll =
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight;

      setHasScroll(canScroll);
    };

    checkScroll();

    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // mouse tracking
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // scroll intelligence engine
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const rawProgress =
        height > 0 ? currentScroll / height : 0;

      setProgress((prev) => prev + (rawProgress - prev) * 0.12);

      setIsHalfway(rawProgress > 0.5);

      const footer = document.getElementById("footer");

      if (footer) {
        const rect = footer.getBoundingClientRect();

        setHiddenByFooter(
          rect.top < window.innerHeight * 0.85
        );
      }

      const velocity = Math.abs(
        currentScroll - lastScrollY.current
      );

      setFastScroll(velocity > 40);
      lastScrollY.current = currentScroll;

      setIdle(false);

      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }

      idleTimer.current = setTimeout(() => {
        setIdle(true);
      }, 1500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
    };
  }, []);

  if (!hasScroll || hiddenByFooter) {
    return null;
  }

  // SSR-safe magnetic hover effect
  let transformX = 0;
  let transformY = 0;

  if (typeof window !== "undefined") {
    const dx = mouse.x - window.innerWidth / 2;
    const dy = mouse.y - window.innerHeight;

    transformX = dx * 0.02;
    transformY = dy * 0.02;
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-transparent">
        <div
          className="h-full bg-foreground/60 transition-all duration-200 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Main Control */}
      <button
        onClick={isHalfway ? scrollTop : scrollDown}
        className={`
          fixed bottom-10 left-1/2 z-[9999]
          -translate-x-1/2
          flex flex-col items-center gap-1
          transition-all duration-500 ease-out
          ${idle ? "opacity-20 scale-95" : "opacity-100 scale-100"}
          ${fastScroll ? "opacity-0 scale-90" : ""}
        `}
        style={{
          transform: `translateX(-50%) translate(${transformX}px, ${transformY}px)`,
        }}
      >
        <div className="relative flex flex-col items-center">
          <div
            className={`
              transition-all duration-500
              ${
                isHalfway
                  ? "opacity-0 scale-75"
                  : "opacity-100 scale-100"
              }
            `}
          >
            <ChevronDown
              size={44}
              className="animate-bounce text-foreground/80"
            />
          </div>

          <div
            className={`
              absolute top-0 left-0
              transition-all duration-500
              ${
                isHalfway
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }
            `}
          >
            <ArrowUp
              size={38}
              className="text-foreground/80"
            />
          </div>
        </div>

        <span className="text-xs tracking-wide text-foreground/60">
          {isHalfway ? "Back to top" : "Scroll"}
        </span>
      </button>
    </>
  );
}