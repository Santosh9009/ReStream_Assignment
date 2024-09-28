import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { AuthContext } from "@/contexts/AuthContext";
import { Circle } from "lucide-react";

const LoginForm = () => {
  const authContext = useContext(AuthContext); 
  const { currentUser } = authContext || { currentUser: null };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard"); 
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Success',
        description: "Logged In successfully",
        duration: 3000,
      });
      navigate("/dashboard");
    } catch (err) {
      console.log("Failed to log in. Please check your credentials."+err);
      toast({
        title: 'Login Failed',
        description: "Please check your credentials.",
        duration: 3000,
        variant: 'destructive'
      });
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="flex justify-center items-center w-full py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 text-center"
          >
             {!loading?<span>Login</span>:<Circle className="animate-spin"/>}
          </button>
        </form>
        <div className="mt-6 text-center">
          Don't have an account?{" "}
          <Link className="text-blue-600 font-semibold underline" to={"/signup"}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
