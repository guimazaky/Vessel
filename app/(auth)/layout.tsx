"use client";

import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main ">
      <section className="center w-full flex flex-col gap-10">
        <div className="flex flex-col center gap-4">
          <h1 className="text-3xl font-bold">Bem-vindo ao Vessel!</h1>
          <p className="text-white/50">Entre com seu Login!</p>
        </div>

        <div className="bg-background  p-8 rounded-lg">{children}</div>
      </section>
    </main>
  );
};
export default Layout;
