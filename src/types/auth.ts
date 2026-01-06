export type User = {
  id: string;
  name: string;
  email: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type AuthContextData = {
  user: LoginResponse["user"] | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};
