"use client"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BarraNavegacao() {
    const context = useContext(AuthContext);
    if (!context) return null;

    const { usuario, estaLogado } = context;

    return (
        <nav>
            <span>Olá, {estaLogado ? usuario?.nome : "Visitante"}</span>
        </nav>
    );
}