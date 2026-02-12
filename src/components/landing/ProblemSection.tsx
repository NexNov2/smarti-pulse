import { FileSpreadsheet, Clock, EyeOff, Factory } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const cards = [
  { icon: FileSpreadsheet, title: "Cobrar fornecedor é trabalho braçal", desc: "Seu comprador extrai dados do ERP, monta e-mails, liga, manda mensagem e ainda precisa registrar tudo de volta. Todo dia. Para dezenas de fornecedores." },
  { icon: Clock, title: "Atrasos só aparecem quando já é tarde", desc: "Sem acompanhamento preventivo, o atraso do fornecedor só é descoberto quando a produção já foi impactada ou a linha parou." },
  { icon: EyeOff, title: "Visibilidade zero do status real", desc: "Ninguém na empresa sabe o status atualizado dos pedidos sem abrir planilha, ligar para alguém ou esperar o relatório de sexta." },
  { icon: Factory, title: "Produção para e a culpa cai em compras", desc: "Quando o material não chega, a diretoria cobra o time de compras. Mas o problema real é um processo que não dá condição de antecipar riscos." },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-smarti-gray py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-base text-gray-600 italic max-w-3xl mx-auto text-center mb-1">
          "61% dos executivos globais de supply chain relatam que problemas operacionais e de recebimento de materiais afetam diretamente suas empresas."
        </p>
        <p className="text-xs text-gray-400 text-center mb-8">Fonte: PwC Digital Trends in Supply Chain Survey</p>
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-10">
          Se o follow-up da sua empresa depende de ação humana, essas dores são suas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-smarti-rose/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-smarti-rose" />
                </div>
                <h3 className="text-xl font-semibold text-smarti-blue mb-2">{card.title}</h3>
                <p className="text-base text-gray-600">{card.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <CTAButton text="Resolver isso agora" tracking="problema" />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
