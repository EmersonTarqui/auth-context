"use client"
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginArea() {
    const context = useContext(AuthContext);
    const [nomeInput, setNomeInput] = useState("");

    if (!context) return null;

    const { estaLogado, login, logout } = context;

    return (
        <div style={{ marginTop: "20px" }}>
            {estaLogado ? (
                <div>
                    <p>Você está conectado!</p>
                    <button onClick={logout}>Sair</button>
                </div>
            ) : (
                <div>
                    <input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        value={nomeInput}
                        onChange={(e) => setNomeInput(e.target.value)}
                    />
                    <button onClick={() => login(nomeInput)}>Entrar</button>
                </div>
            )}
        </div>
    );
}