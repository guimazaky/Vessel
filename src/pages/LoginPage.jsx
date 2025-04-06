import React from "react";
import CleanNavbar from "../components/ui/cleanNavbar";
import Footer from "@/components/ui/footer";
import LoginRegisterForm from "@/components/ui/loginRegisterForm";

function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CleanNavbar />

      <div className="flex-1 content-center place-items-center ">
        <LoginRegisterForm />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
