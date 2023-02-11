import React, { createContext, useState, useEffect } from "react";
import { auth } from "@/firebase";
import { User } from "@firebase/auth";

export const AuthContext = createContext<{ user: User | null }>({ user: null });

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
