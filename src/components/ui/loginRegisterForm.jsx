import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function LoginRegisterForm() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="relative w-240 h-136 overflow-hidden border border-white/50 rounded-2xl shadow-lg bg-transparent font-inter">
      <div className="w-full h-full flex">
        <div className="w-1/2 flex flex-col items-center justify-center gap-6 text-white px-4">
          <h2 className="text-3xl font-lexend">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
          />
          <input
            type="password"
            placeholder="Password"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
          />
          <Button className="mt-2 w-20">Login</Button>
          <Button variant="google" className="w-20">
            <img src="/google.png" alt="Google" className="h-5" />
          </Button>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center gap-4 text-white px-4">
          <h2 className="text-3xl font-lexend">Register</h2>
          <input
            type="text"
            placeholder="Name"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
          />
          <input
            type="email"
            placeholder="Email"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
          />
          <input
            type="password"
            placeholder="Password"
            className=" border-b border-white/50 bg-transparent outline-none px-2 py-1"
          />
          <Button className="mt-2 w-20">Register</Button>
          <Button variant="google" className="w-20">
            <img src="/google.png" alt="Google" className="h-5" />
          </Button>
        </div>
      </div>

      <div
        className={`absolute top-0 w-1/2 h-full bg-radial-[at_50%_50%]  from-[#15015f] to-black backdrop-blur-md border-l border-white/20 transition-all duration-500 ease-in-out z-10 flex flex-col items-center justify-center gap-8 ${
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
