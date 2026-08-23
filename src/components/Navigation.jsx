import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      path: "#home",
    },
    {
      label: "About",
      path: "#about",
    },
    {
      label: "Skills",
      path: "#skills",
    },
    {
      label: "Projects",
      path: "#projects",
    },
    {
      label: "Contact",
      path: "#contact",
    },
  ];

  const handleNavigation = (path) => {
    setOpen(false);

    const section = document.querySelector(path);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-5 sm:pt-8">
      {/* Desktop */}
      <div
        className="hidden items-center gap-8 rounded-full px-8 py-4 backdrop-blur-md sm:flex"
        style={{
          background: "rgba(20, 12, 8, 0.45)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavigation(link.path)}
            className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile */}
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
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.path)}
              className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
