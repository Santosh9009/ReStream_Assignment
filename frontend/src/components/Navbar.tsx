import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for mobile products dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav className="sticky bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Restream
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="md:block hidden">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white dark text-base font-medium">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-7 rounded-lg shadow-lg">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/products/studio" className="text-black">
                        Studio
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/chat" className="text-black">
                        Chat
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/multistreaming" className="text-black">
                        Multistreaming
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/video-stream" className="text-black">
                        Video & Stream
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>

            <div className="hidden md:flex space-x-6 font-medium">
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/customers" className="text-gray-300 hover:text-white">
                Customers
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white">
                Pricing
              </Link>
            </div>
          </div>

          {/* Desktop Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white">
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-trasparent border border-white-3  text-white px-4 py-2 rounded hover:scale-105 duration-200 ease-linear font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden h-auto"
        >
          <div className="space-y-2 py-4">
            <button
              onClick={toggleProductsMenu}
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              Products {isProductsOpen ? "▲" : "▼"}
            </button>

            {/* Animate the dropdown */}
            <motion.div
              initial={false}
              animate={isProductsOpen ? "open" : "closed"}
              variants={dropdownVariants}
              className="pl-4 overflow-hidden"
            >
              <Link
                to="/products/studio"
                className="block text-gray-300 hover:text-white"
              >
                Studio
              </Link>
              <Link
                to="/products/chat"
                className="block text-gray-300 hover:text-white"
              >
                Chat
              </Link>
              <Link
                to="/products/multistreaming"
                className="block text-gray-300 hover:text-white"
              >
                Multistreaming
              </Link>
              <Link
                to="/products/video-stream"
                className="block text-gray-300 hover:text-white"
              >
                Video & Stream
              </Link>
            </motion.div>

            <Link to="/about" className="block text-gray-300 hover:text-white">
              About
            </Link>
            <Link
              to="/customers"
              className="block text-gray-300 hover:text-white"
            >
              Customers
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
            <Link to="/login" className="block text-gray-300 hover:text-white">
              Log In
            </Link>
            <Link
              to="/signup"
              className="block bg-trasparent border border-white-2  text-white px-4 py-2 rounded mt-3"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
