import { Plug, RefreshCw, Mail, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  { icon: Plug, title: "Agnóstico ao ERP", desc: "Se adapta ao seu processo atual. Sem necessidade de trocar seu software de compras, ERP ou alterar fluxos internos." },
  { icon: RefreshCw, title: "Integração bidirecional com o ERP", desc: "Os dados fornecidos pelos fornecedores são propagados automaticamente para o ERP e sistemas como MRP, estoque mínimo, WMS e dashboards." },
  { icon: Mail, title: "Comunicação 100% automatizada", desc: "E-mails de follow-up com templates configuráveis, disparados conforme suas regras de negócio. O comprador só atua por exceção." },
  { icon: Users, title: "Onboarding completo com acompanhamento", desc: "Mapeamento do seu processo, customização de regras, integração técnica, treinamento da equipe e 1 mês de acompanhamento após go-live." },
];

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-smarti-gray py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-10">
          Por que o Smarti Supply
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
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
      </div>
    </section>
  );
};

export default DifferentialsSection;
