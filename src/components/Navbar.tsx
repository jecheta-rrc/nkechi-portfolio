export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0E0E0E]/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <span className="font-semibold text-lg">
          Nkechi Echeta
        </span>

        {/* Navigation Links */}
        <div className="space-x-8 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
