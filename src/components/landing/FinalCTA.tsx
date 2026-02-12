import CTAButton from "./CTAButton";

const FinalCTA = () => (
  <section className="bg-smarti-dark py-20 md:py-28">
    <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Sua operação de compras pode funcionar no piloto automático
      </h2>
      <p className="text-lg text-white/80 mt-4">
        Converse com um especialista e veja como o Smarti Supply se encaixa no seu processo. Sem compromisso.
      </p>
      <div className="mt-8">
        <CTAButton text="Falar com especialista agora" tracking="cta-final" />
      </div>
      <p className="text-sm text-white/50 mt-3">Resposta em até 2 horas em horário comercial</p>
      <p className="text-sm text-white/40 mt-2">
        Prefere e-mail? Escreva para{" "}
        <a href="mailto:contato@smarti.io" className="underline hover:text-white/60">contato@smarti.io</a>
      </p>
    </div>
  </section>
);

export default FinalCTA;
