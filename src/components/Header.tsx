import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const HEADER_SCROLL_THRESHOLD = 10;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes for header and text
  const headerClass = [
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    scrolled
      ? "bg-white/90 shadow-lg border-b border-gray-200 backdrop-blur-md"
      : "bg-transparent border-b border-transparent"
  ].join(' ');

  const navLinkBase =
    "transition-colors duration-200 font-semibold tracking-wide px-2 py-1 rounded";
  const navLinkClass = (active: boolean) =>
    [
      navLinkBase,
      scrolled || active
        ? "text-gray-900 hover:text-blue-600"
        : "text-white hover:text-blue-200"
    ].join(' ');

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 sm:gap-2 group">
          <span
            className={[
              "font-extrabold text-xl sm:text-2xl tracking-tight transition-colors duration-300",
              scrolled ? "text-blue-700" : "text-white"
            ].join(' ')}
          >
            CoolBreeze
          </span>
          <span
            className={[
              "font-semibold text-lg sm:text-xl transition-colors duration-300",
              scrolled ? "text-amber-600" : "text-amber-300"
            ].join(' ')}
          >
            AC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass(false)}>
            Home
          </Link>
          <Link to="/gallery" className={navLinkClass(false)}>
            Gallery
          </Link>
          <Link to="/about" className={navLinkClass(false)}>
            About
          </Link>
          <Link to="/contact" className={navLinkClass(false)}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
            className={scrolled ? "text-gray-900" : "text-white"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={[
        "md:hidden absolute top-full left-0 w-full transition-all duration-300 transform",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none",
        scrolled
          ? "bg-white border-b border-gray-200 shadow-lg"
          : "bg-black/90 backdrop-blur-sm"
      ].join(' ')}>
        <nav className="container mx-auto px-4 py-4 flex flex-col">
          <Link
            to="/"
            className={`${scrolled ? "text-gray-900" : "text-white"} py-3 text-base font-medium border-b border-gray-200/20`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className={`${scrolled ? "text-gray-900" : "text-white"} py-3 text-base font-medium border-b border-gray-200/20`}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className={`${scrolled ? "text-gray-900" : "text-white"} py-3 text-base font-medium border-b border-gray-200/20`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${scrolled ? "text-gray-900" : "text-white"} py-3 text-base font-medium`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;