import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="h-[100svh] overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Hero: first landing viewport */}
      <section className="relative h-[100svh] w-full shrink-0 snap-start overflow-hidden">
        {/* Warm orange → dark background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #c8753e 0%, #9e4b2c 22%, #693021 48%, #2b140d 75%, #0d0503 100%)",
          }}
        />

        {/* Soft glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(58% 72% at 50% 65%, rgba(255,200,140,0.62) 0%, rgba(0,0,0,0) 72%)",
          }}
        />

        {/* Portrait — fills the frame on mobile (object-cover), sits contained on larger screens */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/me.png"
            alt="Portrait"
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 h-full w-full
              object-cover object-[center_18%] scale-100
              sm:object-contain sm:object-bottom sm:scale-110
              lg:scale-125
              transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            style={{
              objectPosition: "center bottom",
              transform: "scale(0.95)",
              transformOrigin: "center bottom",
              filter: "saturate(1.05) contrast(1.03)",
            }}
          />
        </div>

        {/* Bottom fade — keeps text legible against the photo */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(15,8,5,0.85) 100%)",
          }}
        />

        {/* Description + CTA — sits just above the big name */}
        <div className="absolute inset-x-0 bottom-[6.5rem] z-10 px-4 sm:bottom-40 sm:px-8 lg:bottom-48">
          <p className="max-w-[15rem] text-sm leading-snug text-white/90 sm:max-w-xs sm:text-base">
            I design and build high converting websites and save your time
            with AI automations.
          </p>

          <button className="mt-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:text-base">
            Start Your Project
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[#2b140d]">
              <svg
                width="11"
                height="11"
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
        </div>

        {/* Big name, bottom-left, overlapping the portrait */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-2 sm:px-8 sm:pb-4">
          <h1
            className="select-none font-black uppercase text-center leading-[0.82] tracking-tight text-white"
            style={{
              fontSize: "clamp(3.5rem, 14vw, 11rem)",
            }}
          >
            Saransh
          </h1>
        </div>
      </section>
    </main>
  );
}
