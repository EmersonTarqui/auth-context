"use client"
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginArea() {
    const context = useContext(AuthContext);
    const [nomeInput, setNomeInput] = useState("");

     // Se o contexto não existir, retorna null para evitar erros no componente
    if (!context) return null;
    
    const { estaLogado, login, logout, usuario } = context;

    return (
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-sm mx-auto">
            {estaLogado ? (
                <div className="text-center space-y-4">
                    <div className="bg-blue-50 text-blue-700 py-4 px-2 rounded-2xl font-semibold">
                        Sessão ativa para: {usuario?.nome}
                    </div>
                    <button 
                        onClick={logout}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
                    >
                        Encerrar Sessão
                    </button>
                </div>
            ) : (
                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-gray-800 text-center">LOGIN</h2>
                    <input 
                        type="text" 
                        placeholder="Nome do usuário" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-black"
                        value={nomeInput}
                        onChange={(e) => setNomeInput(e.target.value)}
                    />
                    <button 
                        onClick={() => login(nomeInput)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-95"
                    >
                        Entrar no Sistema
                    </button>
                </div>
            )}
        </div>
    );
}