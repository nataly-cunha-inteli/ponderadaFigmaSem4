import Botao from "./components/botao";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-24">
      <Botao text="Salvar" />
      <Botao text="Editar" />
    </div>
  );
}