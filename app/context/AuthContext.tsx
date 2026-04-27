"use client"
import { createContext, useState, ReactNode } from "react";

interface Usuario { nome: string; }

interface AuthContextProps {
    usuario: Usuario | null; 
    estaLogado: boolean;
    login: (nome: string) => void; 
    logout: () => void;
}

// criacao do context que vai receber as props da interface AuthContextProps, começa undefined por segurança
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    // estaLogado so vira true se for diferente de null
    const estaLogado = usuario !== null;

    function login(nome: string) {
        nome.trim() ? setUsuario({ nome: nome.trim() }) : alert("Digite um nome!");
    }

    const logout = () => setUsuario(null);

    return (
        <AuthContext.Provider value={{ usuario, estaLogado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}