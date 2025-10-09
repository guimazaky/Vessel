"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter(); // precisa estar dentro do componente

  useEffect(() => {
    router.replace("/login"); // redireciona assim que entrar
  }, [router]);

  return <div className="main center flex-col gap-8 text-8xl">Vessel</div>;
};
export default Page;
