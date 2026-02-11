import { Zap, Shield, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  { icon: Zap, title: "Real time", desc: "Retorno dos dados dos pedidos direto no ERP via integracao. Sem espera entre a resposta do fornecedor e a atualizacao no sistema." },
  { icon: Shield, title: "100% de rastreabilidade", desc: "Historico completo de cada interacao: confirmacoes, antecipacoes, postergacoes, negociacoes e entregas parciais." },
  { icon: TrendingDown, title: "Reducao expressiva de atrasos", desc: "Com follow-up preventivo e automatico, atrasos sao identificados e tratados antes de impactar a producao." },
];

const ResultsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-smarti-gray py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-10">
          Resultados reais de quem ja automatizou
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-lg mx-auto mb-8">
          <div className="text-7xl md:text-8xl font-bold text-smarti-rose">0%</div>
          <div className="text-xl font-semibold text-smarti-blue mt-2">de retrabalho e erros humanos</div>
          <p className="text-base text-smarti-gray-text mt-2">Processos validados por regras e calculos automaticos eliminam inconsistencias desde a entrada dos dados.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 text-center shadow-sm transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-smarti-rose/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-smarti-rose" />
                </div>
                <h3 className="text-xl font-semibold text-smarti-blue mb-2">{card.title}</h3>
                <p className="text-base text-smarti-gray-text">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
