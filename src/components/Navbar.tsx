export default function Navbar() {
  return (
    <div className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <nav className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-2">
          <a
            href="#home"
            className="hidden sm:inline px-4 py-2 text-sm font-semibold tracking-wide text-white/90 rounded-full hover:bg-white/10 transition"
          >
            Nkechi
          </a>

          <a
            href="#about"
            className="px-4 py-2 text-sm text-neutral-300 rounded-full hover:bg-white/10 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 py-2 text-sm text-neutral-300 rounded-full hover:bg-white/10 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm text-neutral-300 rounded-full hover:bg-white/10 hover:text-white transition"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-medium hover:bg-yellow-300 transition"
          >
            Work With Me
          </a>
        </div>
      </nav>
    </div>
  );
}
