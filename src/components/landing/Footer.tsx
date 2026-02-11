import smartiLogo from "@/assets/smarti-logo-branca.webp";

const Footer = () => (
  <footer className="bg-smarti-dark border-t border-white/10 py-8">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={smartiLogo} alt="Smarti" className="h-7" />
        <span className="text-sm text-white/40">Smarti — Inteligencia em Tecnologia</span>
        <span className="text-sm text-white/40">&copy; 2025 Smarti. Todos os direitos reservados.</span>
      </div>
      <p className="text-xs text-white/30 text-center mt-4">Solucao propria · 8 anos de mercado</p>
    </div>
  </footer>
);

export default Footer;
