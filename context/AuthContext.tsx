"use client";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
  UserCredential,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface IAuthContextValue {
  currentUser: FirebaseUser | null;
  userDataObj: {};
  setUserDataObj: React.Dispatch<React.SetStateAction<{}>>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  loading: boolean;
}

const AuthContext = createContext<IAuthContextValue | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userDataObj, setUserDataObj] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(true);

  // AUTH handlers
  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setUserDataObj({});
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: IAuthContextValue = {
    currentUser,
    userDataObj,
    setUserDataObj,
    signUp,
    logout,
    login,
    loading,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}
