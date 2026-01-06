import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { loginSchema, type LoginSchema } from "@/schemas/loginSchema";
import { useAuth } from "@/contexts/AuthContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const { toast } = useToast();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    try {
      await signIn(data.email, data.password);

      toast({
        title: "Login realizado com sucesso",
      });

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex min-h-[700px] items-center justify-center">
      <Card className="w-full max-w-lg min-h-fit p-2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Entre com seu e-mail e senha
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-1">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>
          <Link to="/" className="text-sm text-muted-foreground block text-center mt-4">
            <span className="underline block text-center">Não tem uma conta? Clique aqui para nos contatar!</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
