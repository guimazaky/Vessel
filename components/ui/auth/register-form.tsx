"use client";

import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import React, { useState } from "react";
import { signUp } from "@/lib/actions/auth-actions";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

interface FormProps extends React.ComponentProps<"div"> {
  session: Session | null;
}

export function RegisterForm({ className, session, ...props }: FormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await signUp(email, password, name);
      if (!result.user) {
        setError("Erro ao criar conta");
      } else {
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    }
  };

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2 center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Vessel!</h1>
        <h1 className="text-white/80 ">Crie sua conta!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="nome">Seu nome</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2  w-4 h-4" />
                <Input
                  id="nome"
                  name="name"
                  type="text"
                  placeholder="Nome"
                  className="pl-10 "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2  w-4 h-4" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  className="  pl-10 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="senha">Senha</Label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2  -translate-y-1/2 w-4 h-4" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  className=" pl-10 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2  hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-center text-sm">
              Já tem uma conta?
              <a
                href="/login"
                className="underline underline-offset-4 text-blue-600"
              >
                Fazer login!
              </a>
            </div>
            <Button
              type="submit"
              className="w-full  text-blue-200 cursor-pointer bg-blue-600 hover:bg-white/50"
            >
              Criar conta
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
