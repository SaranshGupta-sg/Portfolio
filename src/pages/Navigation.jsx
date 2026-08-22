import { useState } from "react";

/**
 * Navigation
 * Floating pill navbar — dark translucent glass background,
 * centered at the top, matches the reem.dev-style reference.
 *
 * Usage:
 *   import Navigation from "./Navigation";
 *   <Navigation /> // drop it inside the hero <section>, before the text
 */
export default function Navigation({
  links = ["Home", "Projects", "Skills", "Process", "Contact"],
  ctaLabel = "Let's Talk",
  onCtaClick,
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-20 flex justify-center px-4 pt-5 sm:pt-8">
      {/* Desktop / tablet pill */}
      <div
        className="hidden items-center gap-8 rounded-full px-8 py-4 backdrop-blur-md sm:flex"
        style={{
          background: "rgba(20, 12, 8, 0.45)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {links.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            {label}
          </a>
        ))}

        {ctaLabel && (
          <button
            onClick={onCtaClick}
            className="ml-2 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            {ctaLabel}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#2b140d]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Mobile compact pill + toggle */}
      <div className="flex w-full items-center justify-between sm:hidden">
        <div
          className="rounded-full px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md"
          style={{
            background: "rgba(20, 12, 8, 0.45)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          Saransh
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-full p-3 text-white backdrop-blur-md"
          style={{
            background: "rgba(20, 12, 8, 0.45)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {open ? (
              <path
                d="M3 3L13 13M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 4H14M2 8H14M2 12H14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute left-4 right-4 top-16 flex flex-col gap-1 rounded-2xl p-3 backdrop-blur-md sm:hidden"
          style={{
            background: "rgba(20, 12, 8, 0.85)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              {label}
            </a>
          ))}
          {ctaLabel && (
            <button
              onClick={() => {
                setOpen(false);
                onCtaClick?.();
              }}
              className="mt-1 rounded-xl bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
