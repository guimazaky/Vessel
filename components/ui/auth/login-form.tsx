"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import React, { useState } from "react";
import { signIn } from "@/lib/actions/auth-actions";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

interface FormProps extends React.ComponentProps<"div"> {
  session: Session | null;
}

export function LoginForm({ className, session, ...props }: FormProps) {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await signIn(email, password);
      if (!result.user) {
        setError("Email ou senha inválidos!");
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
      <div className="center flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Bem-vindo ao Vessel!</h1>
        <h1 className="text-white/80 ">Entre com seu Login!</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <div className="flex center">
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

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
              <Label htmlFor="password">Senha</Label>
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
              Não tem uma conta?{" "}
              <a
                href="/register"
                className="underline underline-offset-4 text-blue-600"
              >
                Criar conta
              </a>
            </div>
            <Button
              type="submit"
              className="w-full text-blue-200 cursor-pointer bg-blue-600 hover:bg-white/50"
            >
              Continuar
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
