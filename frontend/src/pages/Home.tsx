
import { Link, useNavigate } from "react-router-dom"; // Import Link
import { motion } from "framer-motion"; // Import Framer Motion
import heroimg from '../assets/hero-img-right-7ea0ada3b78734948d89e7668d766323.png';
import Navbar from "@/components/Navbar";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillDiscord } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import googleimg from '../assets/google-symbol.png';


const Home = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-0 min-h-screen bg-black text-white flex flex-col items-center justify-center py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">

            <h1 
              className="text-4xl md:text-6xl font-bold mb-4 z-0"
            >
              One live stream. <br />
              <span className="text-purple-600">30+ destinations.</span>
            </h1>
            

            <motion.p 
              className="text-lg md:text-xl mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Multistream & reach your audience, wherever they are.
            </motion.p>


            <div className="w-full mx-auto max-w-sm p-6 rounded-lg shadow-lg md:mx-0">
              <motion.button
                className="w-full bg-white text-gray-800 py-2 px-4 rounded mb-4 flex items-center justify-start"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img className="w-5 h-5 mr-4" src={googleimg} alt="googleimg" />
                
                Continue with Google
              </motion.button>
              
              <motion.button
                className="w-full bg-white text-gray-800 py-2 px-4 rounded mb-4 flex items-center justify-start"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-4"
                />
                Continue with Facebook
              </motion.button>
              
              <div className="text-center text-gray-400 mb-4">
                Or sign up with email:
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 bg-white text-gray-800 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 bg-white text-gray-800 rounded"
              />
              <motion.button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={()=>navigate('/signup')}
              >
                Sign Up for Free
              </motion.button>
            </div>

            <div className="mt-6 ml-6 text-center md:text-left">
              <Link to="/plans" className="text-blue-400 underline">
                See Our Plans
              </Link>
            </div>


            <footer className="mt-8 text-gray-500 text-sm text-center md:text-left">
              <p>
                By signing up, you agree to the Terms of Service.
              </p>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 underline">
                  Log In
                </Link>
              </p>
            </footer>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <img src={heroimg} alt="Hero" />
            </div>
          </div>
        </div>


        <div className="flex flex-wrap justify-evenly items-center w-full mt-6 text-center text-gray-500">
          <p className="my-2">© 2024 Restream, Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 my-2">
            <Link to="/careers" className="hover:underline">Careers</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/help-center" className="hover:underline">Help Center</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/developers" className="hover:underline">Developers</Link>
            <Link to="/referral" className="hover:underline">Referral Program</Link>
            <Link to="/media-kit" className="hover:underline">Media Kit</Link>
          </div>
          <div className="flex justify-evenly items-center gap-3 my-2">
            <AiFillTwitterCircle className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
            <AiFillDiscord className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
            <FaFacebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
            <FaInstagramSquare className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
