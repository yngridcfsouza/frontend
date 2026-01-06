import { createContext, useContext, useEffect, useState } from "react";

import type { AuthContextData, LoginResponse } from "@/types/auth";
/* import { api } from "@/services/api"; */

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const STORAGE_TOKEN_KEY = "@quintec:token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoginResponse["user"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = !!user;

  async function signIn(email: string, password: string) {
    /* if (email === "" || password === "") {
      throw new Error("Email e senha são obrigatórios");
    }

    try {
      const response = await api.post<LoginResponse>("/auth/login", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("@quintec:token", token);
      setUser(user);
    } catch (error) {
      throw new Error("Erro ao fazer login");
    } */

    if (email === "henrique@quintec.com.br" && password === "Quintec@2026") {
      const fakeResponse = {
        token: "fake-token",
        user: {
          id: "1",
          name: "Henrique Quintela",
          email,
        },
      };

      localStorage.setItem(STORAGE_TOKEN_KEY, fakeResponse.token);
      setUser(fakeResponse.user);
      return;
    }

    throw new Error("Invalid credentials");
  }

  function signOut() {
    localStorage.removeItem(STORAGE_TOKEN_KEY);
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_TOKEN_KEY);
    if (token) {
      setUser({
        id: "1",
        name: "Henrique Quintela",
        email: "henrique@quintec.com.br",
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
