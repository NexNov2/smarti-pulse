import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  "Proposta e contrato",
  "Mapeamento do seu processo atual",
  "Customizacao das regras de negocio",
  "Integracao com seu ERP",
  "Treinamento + 1 mes de acompanhamento",
];

const ImplementationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-smarti-gray py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-4">
          Implementacao a partir de 2 semanas
        </h2>
        <p className="text-base md:text-lg text-smarti-gray-text text-center max-w-3xl mx-auto mb-12">
          Nao importa como seu follow-up funciona hoje. Nos mapeamos, customizamos e entregamos a automacao funcionando.
        </p>
        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start justify-between">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full bg-smarti-rose text-white font-bold flex items-center justify-center transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-smarti-blue mt-3 max-w-[140px]">{step}</p>
              </div>
              {i < steps.length - 1 && <div className="h-0.5 bg-smarti-rose/20 flex-1 mt-6 mx-2" />}
            </div>
          ))}
        </div>
        {/* Mobile vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full bg-smarti-rose text-white font-bold flex items-center justify-center shrink-0 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i + 1}
              </div>
              <p className="text-sm font-medium text-smarti-blue">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 text-center mt-6">
          O prazo varia conforme a complexidade das regras de negocio e integracoes. Projetos simples rodam em 2 semanas.
        </p>
      </div>
    </section>
  );
};

export default ImplementationSection;
