import { ReactElement } from "react";
import { ArrowDownNarrowWide, PenLine } from "lucide-react";

interface BotaoProps {
  text: 'Salvar' | 'Editar';
}

export default function Botao({ text }: BotaoProps) {
  const icon: ReactElement =
    text === "Salvar" ? (
      <ArrowDownNarrowWide className="w-4 h-4" />
    ) : (
      <PenLine className="w-4 h-4" />
    );

  return (
    <button
      className="flex min-w-[101px] max-w-[180px] w-full px-4 py-3 justify-center items-center gap-2 self-stretch 
                 rounded border border-[#CE3813] bg-[#CE6A51] text-white hover:bg-[#CE3813] transition-colors"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}