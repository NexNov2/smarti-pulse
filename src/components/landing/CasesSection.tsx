import { AlertTriangle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cases = [
  {
    label: "Grande industria de papel e celulose",
    before: "Follow-up 100% manual, com planilhas extraidas do SAP e e-mails avulsos para cada fornecedor. Transtornos constantes na comunicacao.",
    after: "Follow-ups automaticos, fornecedores respondendo direto na plataforma, status dos pedidos alinhados em tempo real com menos esforco.",
  },
  {
    label: "Grande industria farmaceutica",
    before: "Dados extraidos manualmente do SAP, acompanhamento por planilha Excel e sem medicao de performance dos fornecedores.",
    after: "Sistema integrado ao SAP com comunicacao em tempo real, medicao do nivel de servico dos fornecedores e visibilidade total para supply chain.",
  },
];

const CasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-10">
          Quem ja transformou o follow-up
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`bg-smarti-gray rounded-2xl p-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-sm font-semibold text-smarti-rose uppercase tracking-wide">{c.label}</span>
              <div className="mt-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-red-500 uppercase">Antes</span>
                  <p className="text-base text-smarti-gray-text mt-1">{c.before}</p>
                </div>
              </div>
              <div className="my-4 border-t border-gray-200" />
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-green-500 uppercase">Depois</span>
                  <p className="text-base text-smarti-gray-text mt-1">{c.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border-l-4 border-smarti-rose rounded-r-xl p-6 mt-10 max-w-3xl mx-auto">
          <p className="text-lg text-smarti-blue italic">
            "O processo que antes dependia de um comprador dedicado o dia inteiro agora roda sozinho. A gente so atua quando tem excecao."
          </p>
          <p className="text-sm text-gray-400 mt-2">Gestor de Supply Chain, grande industria</p>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
