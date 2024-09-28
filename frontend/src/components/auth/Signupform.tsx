import { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast"; 
import { AuthContext } from "@/contexts/AuthContext";
import { Circle } from "lucide-react";

const SignUpForm = () => {
  const authContext = useContext(AuthContext); 
  const { currentUser } = authContext || { currentUser: null };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard"); 
    }
  }, []);
  
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: new Date(),
      });

      toast({
        title: 'Success',
        description: "Account created successfully!",
        duration: 3000,
      });

      navigate("/dashboard");
    } catch (err) {
      console.log("Failed to create an account. Please try again."+err);
    
      toast({
        title: 'Sign Up Failed',
        description: "There was an error creating your account. Please try again.",
        duration: 3000,
        variant: 'destructive',
      });
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white rounded-lg shadow-lg w-96 p-8 transition-transform transform hover:scale-105">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-center text-gray-700">Sign Up</h2>
        {error && <p className="mb-4 text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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
            className="flex justify-center items-center w-full py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 "
          >
             {!loading?<span>Signup</span>:<Circle className="animate-spin"/>}
          </button>
        </form>
        <div className="mt-6 text-center">
          Already have an account?{" "}
          <Link className="text-blue-600 font-semibold underline" to={"/login"}>
           Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
