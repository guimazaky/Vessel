import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 content-center place-items-center  ">
        <h1 className="w-200 text-center font-didot text-white text-7xl">
          Managing your money easily, fast and smart.
        </h1>
        <Button
          variant="default"
          className="mt-28 w-36 h-12 text-3xl text-white "
        >
          Start
        </Button>
      </div>

      <Footer className="" />
    </div>
  );
}

export default Home;
