import React from "react";
import { Button } from "@/components/ui/button";

function LoginRegisterForm() {
  return (
    <div className="w-240 h-136 bg-transparent border-1 border-white/50 rounded-2xl flex ">
      <div className="text-white font-inter flex flex-col w-120 items-center justify-center gap-8">
        <h1 className="text-4xl font-lexend ">Login</h1>

        <input
          type="text"
          placeholder="Email"
          className="border-b-1 border-white/50 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="border-b-1 border-white/50 outline-none"
        />
        <Button>Submit</Button>
        <Button variant="google" className="w-20">
          <img src="public/google.png" alt="" className="h-5" />
        </Button>
      </div>
      <div className="flex flex-col justify-center flex-1 h-136 w-120 bg-transparent border-1 border-white/50 rounded-2xl items-center font-lexend gap-12">
        <h1 className="text-white text-4xl ">New account?</h1>
        <Button className="">Register</Button>
      </div>
    </div>
  );
}

export default LoginRegisterForm;
