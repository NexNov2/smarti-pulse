const ImpactBar = () => (
  <section className="py-10 md:py-12" style={{ background: "linear-gradient(135deg, #E8306E 0%, #1B2A4A 100%)" }}>
    <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
      <div className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
        De 2 dias → 30 min
      </div>
      <p className="text-base md:text-lg text-white/90 max-w-xl">
        A consolidação de dados de follow-up que levava 2 dias por semana com ação humana passa a ser processada em 30 minutos, sem intervenção manual.
      </p>
    </div>
  </section>
);

export default ImpactBar;
