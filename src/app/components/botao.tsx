import { ReactElement } from "react"; // Import ReactElement do react, para utilização dos ícones
import { ArrowDownNarrowWide, PenLine } from "lucide-react"; // Importa os ícones do lucide-react, que são os ícones de salvar e editar

// Define a interface BotaoProps, que define as propriedades do componente Botao
interface BotaoProps {
  text: 'Salvar' | 'Editar';
}

// Define o componente Botao, que recebe as propriedades BotaoProps
export default function Botao({ text }: BotaoProps) {
  // Condicional para definir qual ícone será exibido com base no texto passado como propriedade
  const icon: ReactElement =
    text === "Salvar" ? (
      <ArrowDownNarrowWide className="w-4 h-4" />
    ) : (
      <PenLine className="w-4 h-4" />
    );

  return (
    // Retorna o botão com as classes CSS definidas, o ícone e o texto
    <button
      className="flex min-w-[101px] max-w-[180px] w-full px-4 py-3 justify-center items-center gap-2 self-stretch 
                 rounded border border-[#CE3813] bg-[#CE6A51] text-white hover:bg-[#CE3813] transition-colors"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}