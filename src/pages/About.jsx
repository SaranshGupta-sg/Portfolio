export default function About() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0d0503] px-6 py-20 sm:px-12 lg:px-24">
      

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#e2793f]">
          About Me
        </p>

        {/* Statement heading — reference style: bold, moderate size, key words highlighted */}
        <h1
          className="mb-14 font-black leading-[1.05] tracking-tight text-[#cfc6b8]"
          style={{ fontSize: "clamp(1.75rem, 4.2vw, 3.25rem)" }}
        >
          I'm a{" "}
          <span className="text-[#e2793f]">full-stack developer</span>{" "}
          with a strong focus on{" "}
          <span className="text-[#e2793f]">building high-converting</span>,
          impactful digital experiences.
        </h1>

        {/* Opening line — punchy, editorial */}
        <p className="mb-12 max-w-3xl text-2xl font-light leading-relaxed text-white/90 sm:text-3xl">
          I don't just write code — I{" "}
          <span className="font-semibold text-[#f4a15c]">
            build things I'd be proud to ship
          </span>
          , learn everything the hard way, and let curiosity do the rest.
        </p>

        

        {/* Signature-style closing */}
        <p className="mt-16 text-sm uppercase tracking-[0.3em] text-white/40">
          Still building. Always learning.
        </p>
      </div>
    </section>
  );
}
