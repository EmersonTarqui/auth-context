"use client"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BarraNavegacao() {
    const context = useContext(AuthContext);
    // Se o contexto não existir, retorna null para evitar erros no componente
    if (!context) return null;

    const { usuario, estaLogado } = context;

    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-sm border-b border-gray-100 rounded-xl">
            <span className="font-bold text-blue-600 tracking-tight">Auth_APP</span>
            
            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600">
                {/* Se logado, mostra o nome (? condicional só acessa o nome se não for um valor nulo); se não Visitante */}
                    Olá, {estaLogado ? <b>{usuario?.nome}</b> : "Visitante"}
                </span>
                
                {/* status: verde se logado, se não cinza */}
                <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${estaLogado ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
            </div>
        </nav>
    );
}