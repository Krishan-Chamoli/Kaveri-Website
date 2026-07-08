import Logo from "../assets/images/image.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#f5f5f7] text-neutral-900 pt-8 pb-6 md:pt-16 md:pb-8 border-t border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16 text-center md:text-left">

          {/* Company Info */}
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                className="w-10 h-10 md:w-12 md:h-12 object-contain mix-blend-multiply"
                alt="Kaveri Logo"
              />
              <div className="leading-tight text-left">
                <p className="font-EireneSansRegular text-lg md:text-xl text-[#bb2929] tracking-wide font-bold">
                  Kaveri Industries
                </p>
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed font-EireneSansRegular">
              Delivering excellence in high-performance packaging machinery. We engineer solutions that empower industries and inspire progress.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-KuraleRegular mb-3 md:mb-6 text-neutral-900 border-b border-[#bb2929] w-fit pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3 font-EireneSansRegular text-sm text-neutral-600">
              <li>
                <Link to="/" className="hover:text-[#bb2929] transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#bb2929] transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/#products" className="hover:text-[#bb2929] transition-colors duration-200">Our Products</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#bb2929] transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-EireneSansRegular mb-3 md:mb-6 text-neutral-900 border-b border-[#bb2929] w-fit pb-1">
              Our Products
            </h3>
            <ul className="space-y-2 md:space-y-3 font-EireneSansRegular text-sm text-neutral-600">
              <li>
                <Link to="/flowrap-machine" className="hover:text-[#bb2929] transition-colors duration-200">
                  Flowrap Machine
                </Link>
              </li>
              <li>
                <Link to="/rotary-machine" className="hover:text-[#bb2929] transition-colors duration-200">
                  Rotary Pick Fill Seal Machine
                </Link>
              </li>
              <li>
                <Link to="/snus-packing-machine" className="hover:text-[#bb2929] transition-colors duration-200">
                  Snus Packaging Machine
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-KuraleRegular mb-3 md:mb-6 text-neutral-900 border-b border-[#bb2929] w-fit pb-1">
              Reach Us
            </h3>
            <div className="space-y-2 md:space-y-4 font-EireneSansRegular text-sm text-neutral-600 flex flex-col items-center md:items-start">
              <div className="flex items-start gap-3 text-left">
                <FaMapMarkerAlt className="text-[#bb2929] mt-1 shrink-0" />
                <p>
                  Khasra No. 42, Harpla Sikri Road, Sikri Industrial Area, Faridabad - 121004, Haryana, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#bb2929] shrink-0" />
                <p>+91 9971114982</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#bb2929] shrink-0" />
                <p>info@kaveriglobal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 md:pt-8 border-t border-neutral-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs md:text-sm font-EireneSansRegular text-center md:text-left">
            © {new Date().getFullYear()} Kaveri Industries. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/kaveriglobalengineering" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#bb2929] hover:text-white hover:border-[#bb2929] transition-all duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="https://www.instagram.com/kaveriglobalengineering" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#bb2929] hover:text-white hover:border-[#bb2929] transition-all duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="https://www.linkedin.com/company/kaveri-global-engineering/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#bb2929] hover:text-white hover:border-[#bb2929] transition-all duration-300">
              <FaLinkedinIn size={14} />
            </a>
            <a href="https://www.youtube.com/@KaveriGlobalEngineering" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#bb2929] hover:text-white hover:border-[#bb2929] transition-all duration-300">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
