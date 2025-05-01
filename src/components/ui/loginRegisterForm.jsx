import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginRegisterForm() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      setError("");
      await createUserWithEmailAndPassword(auth, email, password);
      const userId = auth.currentUser.uid; // Pega o ID do usuário logado
      navigate(`/user_results/${userId}`); // Navega para a página do usuário
    } catch (err) {
      setError(err.message);
    }
  };

  const login = async () => {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      const userId = auth.currentUser.uid; // Pega o ID do usuário logado
      navigate(`/user_results/${userId}`); // Navega para a página do usuário
    } catch (err) {
      setError(err.message);
    }
  };

  const singInWithGoogle = async () => {
    try {
      setError("");
      await signInWithPopup(auth, googleProvider);
      const userId = auth.currentUser.uid; // Pega o ID do usuário logado
      navigate(`/user_results/${userId}`); // Navega para a página do usuário
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative w-240 h-136 overflow-hidden border border-white/50 rounded-2xl shadow-lg bg-transparent font-inter">
      <div className="w-full h-full flex">
        <div className="w-1/2 flex flex-col items-center justify-center gap-6 text-white px-4">
          <h2 className="text-3xl font-lexend">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-2 w-20" onClick={login}>
            Login
          </Button>
          {error && (
            <p className="text-red-400 text-sm mt-2 text-center max-w-[80%]">
              {error}
            </p>
          )}
          <Button variant="google" className="w-20">
            <img
              src="/google.png"
              alt="Google"
              className="h-5"
              onClick={singInWithGoogle}
            />
          </Button>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center gap-4 text-white px-4">
          <h2 className="text-3xl font-lexend">Register</h2>

          <input
            type="email"
            placeholder="Email"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-2 w-20" onClick={signIn}>
            Register
          </Button>
          {error && (
            <p className="text-red-400 text-sm mt-2 text-center max-w-[80%]">
              {error}
            </p>
          )}
          <Button variant="google" className="w-20" onClick={singInWithGoogle}>
            <img src="/google.png" alt="Google" className="h-5" />
          </Button>
        </div>
      </div>

      <div
        className={`absolute top-0 w-1/2 h-full bg-radial-[at_50%_0%] from-[#15015f] to-black to-120% backdrop-blur-md border-l border-white/20 rounded-4xl transition-all duration-500 ease-in-out z-10 flex flex-col items-center justify-center gap-8 ${
          isRegistering ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <h2 className="text-white text-2xl font-lexend">
          {isRegistering ? "New here?" : "Already have an account?"}
        </h2>
        <Button
          onClick={() => setIsRegistering((prev) => !prev)}
          className="w-32"
        >
          {isRegistering ? "Register" : "Login"}
        </Button>
      </div>
    </div>
  );
}

export default LoginRegisterForm;
