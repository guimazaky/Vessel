import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      console.log("Persistência de sessão configurada.");
    })
    .catch((error) => {
      console.error("Erro ao definir persistência:", error);
    });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 content-center place-items-center  ">
        <h1 className="w-200 text-center font-lexend text-white text-7xl">
          Managing your money{" "}
          <p className="font-didot bg-linear-to-r from-[#FC4B08]  to-[#2C02C5] bg-clip-text text-transparent leading-[1.75]">
            easily, fast and smart.
          </p>
        </h1>
        <Button
          variant="default"
          className="mt-28 w-36 h-12 text-3xl text-white font-lexend"
          onClick={() => navigate("/loginpage")}
        >
          Start
        </Button>
      </div>

      <Footer className="" />
    </div>
  );
}

export default Home;
