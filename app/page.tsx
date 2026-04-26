import Image from "next/image";
import BarraNavegacao from "./components/BarraNavegacao";
import LoginArea from "./components/LoginArea";

export default function Home() {
  return (
 <main style={{ padding: "20px" }}>
      <BarraNavegacao />
      <h1>Bem-vindo ao Sistema</h1>
      <LoginArea />
    </main>
  );
}
