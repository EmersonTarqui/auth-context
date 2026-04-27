import BarraNavegacao from "./components/BarraNavegacao";
import LoginArea from "./components/LoginArea";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-12">
      <div className="w-full max-w-xl">
        <BarraNavegacao />
      </div>
      
      <div className="w-full">
        <LoginArea />
      </div>
    </main>
  );
}