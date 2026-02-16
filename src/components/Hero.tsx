export default function Hero() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] px-6 pt-32 flex items-center justify-center">
      <section className="max-w-3xl text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-[var(--font-heading)]">
            Nkechi Echeta
          </h1>
          <div className="h-[2px] w-20 bg-[#C6A75E] mx-auto mt-4" />
        </div>

        <p className="text-lg md:text-xl text-[#BDBDBD] mb-6">
          Software Developer focused on building secure and scalable cloud-driven systems.
        </p>

        <p className="text-base md:text-lg text-[#BDBDBD] leading-relaxed mb-10">
          I design and develop modern applications across front-end, backend and cloud environments with strong attention to architecture, maintainability, and long-term performance.
        </p>

        <div className="flex justify-center gap-4">
          <button className="border border-[#C6A75E] px-6 py-3 rounded-md hover:bg-[#C6A75E] hover:text-black transition">
            View Projects
          </button>

          <button className="border border-[#333] px-6 py-3 rounded-md hover:border-[#C6A75E] transition">
            Download Resume
          </button>
        </div>
      </section>
    </main>
  );
}
