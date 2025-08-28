"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (res?.error) {
      console.log("Email ou senha inválidos.");
    } else {
      window.location.href = "/"; // redireciona manualmente
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Vessel</span>
            </a>
            <h1 className="text-3xl font-bold">Bem-vindo ao Vessel!</h1>
            <div className="text-center text-sm">
              Não tem uma conta?{" "}
              <a href="/register" className="underline underline-offset-4">
                Criar conta
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Seu email"
                className="focus-visible:border-white focus-visible:ring-white/50"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Sua senha"
                className="focus-visible:border-white focus-visible:ring-white/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full text-blue-200 cursor-pointer"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="text-white text-center text-xs text-balance">
        Ao clicar em continuar, você concorda com nossos{" "}
        <a href="#">Termos de Serviço</a> e{" "}
        <a href="#">Política de Privacidade</a>.
      </div>
    </div>
  );
}
