import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import richaLogo from "../assets/images/kaveriLogo.png";
import brochurePDF from "/Kaveri-Industries-Brochure.pdf";
import product1Image from "../assets/images/heroSection/flowrap-packing-machine.jpg";
import product2Image from "../assets/Flowrap/rottary-Machine.png";
import product3Image from "../assets/images/heroSection/Snus-Packaging-Machine.jpg";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isOverHero, setIsOverHero] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Only check hero state on home page
    if (location.pathname !== "/") {
      setIsOverHero(false);
      return;
    }

    const heroEl = document.getElementById("hero-section");
    if (!heroEl) return;

    const updateState = () => {
      const rect = heroEl.getBoundingClientRect();
      const heroTop = window.scrollY + rect.top;
      const heroBottom = heroTop + rect.height;
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const currentScroll = window.scrollY;
      // Stay in "over hero" state until navbar fully clears the hero
      setIsOverHero(currentScroll + navHeight < heroBottom);
      // Hide nav when scrolling up, show when scrolling down
      const scrollingDown = currentScroll > lastScrollY.current;
      // Always show near top to avoid jitter
      const nearTop = currentScroll < 10;
      // Show while scrolling up (or near top), hide while scrolling down. Also keep visible if mobile menu is open.
      setIsNavVisible(!scrollingDown || nearTop || isMobileMenuOpen);
      lastScrollY.current = currentScroll;
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [location.pathname, isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    {
      label: "About Us",
      href: "/about-us",
      isRoute: true,
    },
    {
      label: "Our Products",
      href: "/products",
      isRoute: true,
      dropdown: [
        {
          label: "Flowrap Machine",
          href: "/flowrap-machine",
          isRoute: true,
          image: product1Image,
          description: "Flowrap packaging solutions",
        },
        {
          label: "Rotary Pick Fill Seal Machine",
          href: "/rotary-machine",
          isRoute: true,
          image: product2Image, // Replace with product2Image
          description: "Advanced rotary packaging technology",
        },
        {
          label: "Snus Packaging Machine",
          href: "/snus-packing-machine",
          isRoute: true,
          image: product3Image,
          description: "Efficient snus packaging solutions",
        },
        {
          label: "All Products",
          href: "/products",
          isRoute: true,
          image: "https://via.placeholder.com/300x200", // Replace with allProductsImage
          description: "Browse our complete product catalog",
        },
      ],
    },
    // { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  const handleNavClick = (href, isRoute = false) => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    setActiveDropdown(null);
    // If it's a route, navigation will be handled by Link component
    // If it's an anchor link, smooth scroll to section
    if (!isRoute && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 border-b ${
        isOverHero
          ? "bg-white backdrop-blur-lg border-black/40 text-white"
          : "bg-white shadow-md border-neutral-200 text-neutral-900"
      } ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={richaLogo}
                alt="Richa Industries Limited"
                className="h-12 sm:h-16 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation items */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href, true)}
                    className={`font-NueueMontreal text-sm sm:text-base font-light relative inline-block transition-colors duration-200 ${
                      isOverHero
                        ? "text-black hover:text-[]"
                        : "text-neutral-900 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                        isOverHero ? "bg-white/80" : "bg-blue-600"
                      }`}
                    ></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, false);
                    }}
                    className={`font-NueueMontreal text-sm sm:text-base font-light relative inline-block transition-colors duration-200 ${
                      isOverHero
                        ? "text-black hover:text-[]"
                        : "text-neutral-900 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                        isOverHero ? "bg-white/80" : "bg-blue-600"
                      }`}
                    ></span>
                  </a>
                )}

                {/* Dropdown Menu - Desktop */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] transition-all duration-300 transform ${activeDropdown === index ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
                  >
                    <div className="bg-neutral-50 backdrop-blur-md rounded-lg shadow-xl border border-neutral-200 overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 p-6">
                        {item.dropdown
                          .slice(0, -1)
                          .map((dropdownItem, dropdownIndex) =>
                            dropdownItem.isRoute ? (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.href}
                                onClick={() =>
                                  handleNavClick(dropdownItem.href, true)
                                }
                                className="group/item flex gap-4 p-4 rounded-lg hover:bg-neutral-200 transition-all duration-200"
                              >
                                {dropdownItem.image && (
                                  <img
                                    src={dropdownItem.image}
                                    alt={dropdownItem.label}
                                    className="w-40 h-32 object-cover rounded-md flex-shrink-0"
                                  />
                                )}
                                <div className="flex flex-col justify-center">
                                  <h3 className="text-base font-NueueMontreal font-medium text-neutral-900 group-hover/item:text-blue-600 transition-colors mb-2">
                                    {dropdownItem.label}
                                  </h3>
                                  {dropdownItem.description && (
                                    <p className="text-sm font-NueueMontreal font-light text-neutral-600 leading-relaxed">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ) : (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavClick(dropdownItem.href, false);
                                }}
                                className="group/item flex gap-4 p-4 rounded-lg hover:bg-neutral-200 transition-all duration-200"
                              >
                                {dropdownItem.image && (
                                  <img
                                    src={dropdownItem.image}
                                    alt={dropdownItem.label}
                                    className="w-40 h-32 object-cover rounded-md flex-shrink-0"
                                  />
                                )}
                                <div className="flex flex-col justify-center">
                                  <h3 className="text-base font-NueueMontreal font-medium text-neutral-900 group-hover/item:text-blue-600 transition-colors mb-2">
                                    {dropdownItem.label}
                                  </h3>
                                  {dropdownItem.description && (
                                    <p className="text-sm font-NueueMontreal font-light text-neutral-600 leading-relaxed">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ),
                          )}
                      </div>
                      {/* See All Products Footer */}
                      {item.dropdown[item.dropdown.length - 1] &&
                        (item.dropdown[item.dropdown.length - 1].isRoute ? (
                          <Link
                            to={item.dropdown[item.dropdown.length - 1].href}
                            onClick={() =>
                              handleNavClick(
                                item.dropdown[item.dropdown.length - 1].href,
                                true,
                              )
                            }
                            className="block border-t border-neutral-200 bg-neutral-100 hover:bg-neutral-200 transition-all duration-200"
                          >
                            <div className="px-6 py-4 text-center">
                              <span className="font-NueueMontreal text-base font-medium text-neutral-900 hover:text-blue-600 transition-colors">
                                {item.dropdown[item.dropdown.length - 1].label}{" "}
                                →
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <a
                            href={item.dropdown[item.dropdown.length - 1].href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(
                                item.dropdown[item.dropdown.length - 1].href,
                                false,
                              );
                            }}
                            className="block border-t border-neutral-200 bg-neutral-100 hover:bg-neutral-200 transition-all duration-200"
                          >
                            <div className="px-6 py-4 text-center">
                              <span className="font-NueueMontreal text-base font-medium text-neutral-900 hover:text-blue-600 transition-colors">
                                {item.dropdown[item.dropdown.length - 1].label}{" "}
                                →
                              </span>
                            </div>
                          </a>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Brochure Button - Desktop */}
          <a
            href={brochurePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium font-NueueMontreal bg-red-600 text-white hover:bg-red-700 transition-all duration-200 shadow-sm"
          >
            COMPANY BROCHURE
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${isOverHero ? "text-black" : "text-neutral-900"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between font-NueueMontreal text-base font-light text-white/90 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                  >
                    <span>{item.label}</span>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobileDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Mobile Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMobileDropdown === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) =>
                        dropdownItem.isRoute ? (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            onClick={() =>
                              handleNavClick(dropdownItem.href, true)
                            }
                            className="flex gap-3 items-center font-NueueMontreal text-sm font-light text-white/70 hover:text-white transition-colors duration-200 py-3 border-b border-white/5 last:border-b-0"
                          >
                            {dropdownItem.image && (
                              <img
                                src={dropdownItem.image}
                                alt={dropdownItem.label}
                                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                              />
                            )}
                            <div>
                              <div className="font-medium">
                                {dropdownItem.label}
                              </div>
                              {dropdownItem.description && (
                                <div className="text-xs text-white/50 mt-1">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ) : (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(dropdownItem.href, false);
                            }}
                            className="flex gap-3 items-center font-NueueMontreal text-sm font-light text-white/70 hover:text-white transition-colors duration-200 py-3 border-b border-white/5 last:border-b-0"
                          >
                            {dropdownItem.image && (
                              <img
                                src={dropdownItem.image}
                                alt={dropdownItem.label}
                                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                              />
                            )}
                            <div>
                              <div className="font-medium">
                                {dropdownItem.label}
                              </div>
                              {dropdownItem.description && (
                                <div className="text-xs text-white/50 mt-1">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </div>
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </>
              ) : item.isRoute ? (
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(item.href, true)}
                  className="block font-NueueMontreal text-base font-light text-white/90 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, false);
                  }}
                  className="block font-NueueMontreal text-base font-light text-white/90 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          {/* Brochure Button - Mobile */}
          <a
            href={brochurePDF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center font-NueueMontreal text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 py-3 rounded-full mt-4"
          >
            COMPANY BROCHURE
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
