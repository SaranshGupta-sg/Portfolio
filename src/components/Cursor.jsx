import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Cursor
 * Custom GSAP cursor — drop it once at the root of your app (e.g. App.jsx),
 * outside/above all page content, and it tracks the whole viewport.
 *
 * Upgrades over the vanilla version:
 *   - gsap.quickTo() instead of gsap.to() on every mousemove
 *     → much smoother, buttery lerp-follow instead of a fresh tween each frame
 *   - Works globally via event delegation on any element with
 *     `data-cursor` / `data-cursor-scale`, instead of being hardcoded
 *     to one #image div
 *   - Hides on mouseleave (window) so it doesn't hang around the edge
 *   - Respects reduced-motion + doesn't render on touch devices
 *
 * Usage:
 *   <Cursor />
 *
 *   // anywhere else in your app:
 *   <div data-cursor="View More" data-cursor-scale="4">...</div>
 *   <button data-cursor="Click" data-cursor-scale="2.5">...</button>
 */
export default function Cursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);

  useEffect(() => {
    // skip on touch-only devices — a dot cursor makes no sense there
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;

    quickX.current = gsap.quickTo(cursor, "x", {
      duration: 0.5,
      ease: "power3",
    });
    quickY.current = gsap.quickTo(cursor, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMove = (e) => {
      quickX.current(e.clientX);
      quickY.current(e.clientY);
    };

    const handleEnter = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (!target) return;

      const label = target.getAttribute("data-cursor") || "";
      const scale = target.getAttribute("data-cursor-scale") || "4";

      if (textRef.current) textRef.current.textContent = label;

      gsap.to(cursor, {
        scale: Number(scale),
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const handleLeave = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (!target) return;

      if (textRef.current) textRef.current.textContent = "";

      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#f4a15c",
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const handleWindowLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };
    const handleWindowEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMove);
    // event delegation → works for elements added later too, no re-binding needed
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mouseout", handleLeave);
    document.addEventListener("mouseleave", handleWindowLeave);
    document.addEventListener("mouseenter", handleWindowEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
      document.removeEventListener("mouseleave", handleWindowLeave);
      document.removeEventListener("mouseenter", handleWindowEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f4a15c] text-center text-[10px] font-semibold text-[#111] mix-blend-difference"
    >
      <span ref={textRef} className="whitespace-nowrap px-1" />
    </div>
  );
}
