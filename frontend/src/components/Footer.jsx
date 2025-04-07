import { Gamepad2, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">FLASH CHALLENGE</span>
              </div>
              <p className="text-indigo-300 max-w-xs">
                Challenge your memory and focus as you follow the Flash
                Challenge's vibrant sequence. How far can you go without making
                a mistake?
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-indigo-300">
                  <li>
                    <NavLink
                      to={"/about"}
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/careers"}
                      className="hover:text-white transition-colors"
                    >
                      Careers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/news"}
                      className="hover:text-white transition-colors"
                    >
                      News
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-indigo-300">
                  <li>
                    <NavLink
                      to={"/help"}
                      className="hover:text-white transition-colors"
                    >
                      Help Center
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/community"}
                      className="hover:text-white transition-colors"
                    >
                      Community
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-indigo-300">
                  <li>
                    <NavLink
                      to={"/privacy"}
                      className="hover:text-white transition-colors"
                    >
                      Privacy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/terms"}
                      className="hover:text-white transition-colors"
                    >
                      Terms
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/cookies"}
                      className="hover:text-white transition-colors"
                    >
                      Cookies
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-400 mb-4 md:mb-0">
              © 2025 FLASH CHALLENGE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to={'https://x.com/ManishNailwal_'}
                className="text-indigo-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to={'https://www.linkedin.com/in/manish-nailwal/'}
                className="text-indigo-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                to={"https://www.instagram.com/manishnailwal_/"}
                className="text-indigo-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to={"https://github.com/Manish-Nailwal/Flash-Challenge"}
                className="text-indigo-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
