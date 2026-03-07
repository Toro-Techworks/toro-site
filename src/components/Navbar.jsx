import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const location = useLocation();
  const navigate = useNavigate();
  const navContainerRef = useRef(null);
  const linkRefs = useRef({});

  /* ---------------- SCROLL EFFECT ---------------- */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark";

    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* ---------------- NAV ITEMS ---------------- */

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  /* ---------------- PILL POSITION ---------------- */

  const updatePill = useCallback(() => {

    const el = linkRefs.current[location.pathname];
    const container = navContainerRef.current;

    if (!el || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const left = elRect.left - containerRect.left;
    const width = elRect.width;

    setPillStyle((prev) => {
      if (prev.left === left && prev.width === width) return prev;
      return { left, width };
    });

  }, [location.pathname]);

  useLayoutEffect(() => {
    let rafA = 0;
    let rafB = 0;

    rafA = requestAnimationFrame(() => {
      rafB = requestAnimationFrame(() => {
        updatePill();
      });
    });

    return () => {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
    };

  }, [location.pathname, isDark, updatePill]);

  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    let rafA = 0;
    let rafB = 0;

    const recalcAfterPaint = () => {
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
      rafA = requestAnimationFrame(() => {
        rafB = requestAnimationFrame(() => {
          updatePill();
        });
      });
    };

    const observer = new ResizeObserver(() => {
      recalcAfterPaint();
    });

    observer.observe(container);
    recalcAfterPaint();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafA);
      cancelAnimationFrame(rafB);
    };
  }, [updatePill]);

  /* ---------------- THEME TOGGLE ---------------- */

  const toggleTheme = () => {

    setIsDark((prev) => {

      const newTheme = !prev;

      if (newTheme) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }

      return newTheme;

    });

  };

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (

    <motion.nav
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 py-3 border-b border-gray-200/30"
          : "bg-transparent py-5"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between">

          {/* ---------------- LOGO ---------------- */}

          <Link to="/" className="flex items-center space-x-3">

            <div className="w-10 h-10 flex items-center justify-center">

              <div
                className="w-10 h-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--primary-green), var(--accent-green))",
                  WebkitMaskImage: "url(/Toro-logo.png)",
                  maskImage: "url(/Toro-logo.png)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />

            </div>

            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              Toro Tech
            </span>

          </Link>

          {/* ---------------- NAV ITEMS ---------------- */}

          <div
            ref={navContainerRef}
            className="hidden md:flex items-center space-x-2 relative"
          >

            <motion.div
              className="absolute h-10 rounded-xl bg-primary-600 z-0"
              style={{ top: 0, left: pillStyle.left, width: pillStyle.width }}
              transition={{ duration: 0 }}
              initial={false}
            />

            {navItems.map((item) => {

              const isActive = location.pathname === item.path;

              return (

                <button
                  type="button"
                  key={item.name}
                  ref={(el) => (linkRefs.current[item.path] = el)}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative z-10 px-4 py-2 rounded-xl font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  }`}
                >

                  {item.name}

                </button>

              );

            })}

          </div>

          {/* ---------------- THEME TOGGLE ---------------- */}

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <motion.svg
                className="absolute w-4 h-4 text-amber-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                animate={{
                  opacity: isDark ? 1 : 0,
                  rotate: isDark ? 0 : -90,
                  scale: isDark ? 1 : 0.75,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm0-18a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm9 9a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1-1 1H0a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm16.95 6.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM3.636 3.636a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 4.343 5.757l-.707-.707a1 1 0 0 1 0-1.414Zm15.314-1.414a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 16.829 2.93l.707-.707a1 1 0 0 1 1.414 0ZM5.05 18.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z" />
              </motion.svg>
              <motion.svg
                className="absolute w-5 h-5 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                animate={{
                  opacity: isDark ? 0 : 1,
                  rotate: isDark ? 90 : 0,
                  scale: isDark ? 0.75 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <path d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 1 0 21.752 15.002Z" />
              </motion.svg>
            </button>

            <motion.span
              key={isDark ? "batman" : "bruce"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-w-[130px] text-sm text-gray-500 dark:text-gray-400"
            >
              {isDark ? "The Night Begins" : "Lights On"}
            </motion.span>
          </div>

          {/* ---------------- MOBILE MENU ---------------- */}

          <div className="md:hidden flex flex-col items-end gap-2">

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
            >

              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />

              </svg>

            </button>

            <div className="flex items-center gap-2 self-end">
              <motion.span
                key={isDark ? "batman-mobile" : "bruce-mobile"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="min-w-[110px] text-xs text-gray-500 dark:text-gray-400 text-right"
              >
                {isDark ? "The Night Begins" : "Lights On"}
              </motion.span>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <motion.svg
                  className="absolute w-3.5 h-3.5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  animate={{
                    opacity: isDark ? 1 : 0,
                    rotate: isDark ? 0 : -90,
                    scale: isDark ? 1 : 0.75,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm0-18a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm9 9a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1-1 1H0a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm16.95 6.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM3.636 3.636a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 4.343 5.757l-.707-.707a1 1 0 0 1 0-1.414Zm15.314-1.414a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 16.829 2.93l.707-.707a1 1 0 0 1 1.414 0ZM5.05 18.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z" />
                </motion.svg>
                <motion.svg
                  className="absolute w-4 h-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  animate={{
                    opacity: isDark ? 0 : 1,
                    rotate: isDark ? 90 : 0,
                    scale: isDark ? 0.75 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 1 0 21.752 15.002Z" />
                </motion.svg>
              </button>
            </div>

          </div>

        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-primary-600 text-white"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

    </motion.nav>

  );

};

export default Navbar;