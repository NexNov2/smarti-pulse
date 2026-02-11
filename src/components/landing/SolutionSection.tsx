import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const steps = [
  { title: "Conecta ao seu ERP", desc: "Integracao via API, CSV ou planilha. Compativel com SAP, Oracle, Totvs e sistemas legados. Sem trocar seu software atual." },
  { title: "Identifica pedidos em aberto", desc: "O sistema importa seus pedidos, aplica suas regras de negocio e organiza automaticamente o que precisa de acompanhamento." },
  { title: "Dispara follow-ups automaticos", desc: "E-mails personalizados sao enviados aos fornecedores com os pedidos pendentes, prazos e observacoes. Sem nenhuma acao manual." },
  {
    title: "Fornecedor responde direto na plataforma",
    desc: "O fornecedor acessa um portal simples (sem instalar nada) e confirma pedidos, negocia prazos, reporta problemas ou envia nota fiscal.",
    highlight: "O portal do fornecedor e o diferencial que elimina o vai-e-vem de e-mails. Seu fornecedor responde em cliques. Voce ve a resposta instantaneamente.",
  },
  { title: "Voce acompanha tudo em tempo real", desc: "Dashboard gerencial com status de todos os pedidos, alertas de atraso, historico de interacoes e relatorios prontos." },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-4">
          O Smarti Supply cobra seus fornecedores automaticamente e te da controle total dos pedidos
        </h2>
        <p className="text-base md:text-lg text-smarti-gray-text text-center max-w-3xl mx-auto mb-12">
          Uma plataforma que se conecta ao seu ERP, dispara follow-ups automaticos e centraliza as respostas dos fornecedores em um unico painel.
        </p>
        <div className="relative max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex gap-4 mb-8 last:mb-0 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-smarti-rose text-white font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-smarti-rose/20 mt-2" />}
              </div>
              <div className="pb-4">
                <h3 className="text-xl font-semibold text-smarti-blue mb-1">{step.title}</h3>
                <p className="text-base text-smarti-gray-text">{step.desc}</p>
                {step.highlight && (
                  <div className="bg-smarti-rose/5 border border-smarti-rose/20 rounded-xl p-6 mt-4">
                    <p className="text-base text-smarti-blue font-medium">{step.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton text="Quero ver como funciona" tracking="solucao" />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
