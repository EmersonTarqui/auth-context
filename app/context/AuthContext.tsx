"use client"
import { createContext, useState, ReactNode } from "react";

interface Usuario {
    nome: string;
}

interface AuthContextProps {
    usuario: Usuario | null; 
    estaLogado: boolean;
    login: (nome: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    // Se o estado 'usuario' não for null, ele está logado
    const estaLogado = usuario !== null;

    function login(nome: string) {
        setUsuario({ nome: nome });
    }

    function logout() {
        setUsuario(null);
    }

    return (
        <AuthContext.Provider value={{ usuario, estaLogado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}