// Importa o componente Botao
import Botao from "./components/botao";

// Exporta o componente padrão da Home
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-24"> {/* CSS interno da div onde estarão os botões */}
      
      <Botao text="Salvar" /> {/* Assim como a condicional definida dentro de components/botao, se o texto é "Salvar", aparece o botão de salvar. Mesmo caso para "Editar" */}
      <Botao text="Editar" />
    </div>
  );
}