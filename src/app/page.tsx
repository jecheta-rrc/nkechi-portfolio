export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0E0E0E] px-6">
      <section className="max-w-3xl text-center">

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-[var(--font-heading)] mb-4">
          Nkechi Echeta
        </h1>

        {/* Title */}
        <p className="text-lg md:text-xl text-[#BDBDBD] mb-6">
          Software Developer designing secure and scalable systems.
        </p>

        {/* Short introduction */}
        <p className="text-base md:text-lg text-[#BDBDBD] leading-relaxed mb-10">
          I design and develop modern applications across frontend,
          backend, and cloud environments with a strong focus on
          structure, clarity, and long-term scalability.
        </p>

        {/* Buttons */}
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
