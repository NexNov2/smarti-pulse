import { Factory, Zap, Truck } from "lucide-react";
import CTAButton from "./CTAButton";

const DashboardVisual = () => (
  <div className="hidden md:block">
    <div className="bg-white rounded-2xl shadow-2xl p-6 rotate-2 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="text-xs text-smarti-gray-text ml-2">Smarti Supply Dashboard</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-smarti-blue w-20">Pedido #142</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full w-full" /></div>
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Confirmado</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-smarti-blue w-20">Pedido #143</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2.5"><div className="bg-yellow-400 h-2.5 rounded-full w-3/4" /></div>
          <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">Aguardando</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-smarti-blue w-20">Pedido #144</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2.5"><div className="bg-red-400 h-2.5 rounded-full w-1/3" /></div>
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Atrasado</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="bg-smarti-gray rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-smarti-blue">87%</div>
          <div className="text-[10px] text-smarti-gray-text">On-time</div>
        </div>
        <div className="bg-smarti-gray rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-smarti-rose">3</div>
          <div className="text-[10px] text-smarti-gray-text">Alertas</div>
        </div>
        <div className="bg-smarti-gray rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-smarti-blue">142</div>
          <div className="text-[10px] text-smarti-gray-text">Pedidos</div>
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-24">
    <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div>
        <span className="inline-block bg-smarti-rose/10 text-smarti-rose text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Automação para Supply Chain
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-smarti-blue leading-tight mb-4">
          Automatize o follow-up de pedidos e elimine atrasos na operação
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Quanto tempo seu time perde toda semana cobrando fornecedores por e-mail e planilha? O Smarti Supply faz isso automaticamente, integrado ao seu ERP, com visibilidade em tempo real.
        </p>
        <CTAButton text="Falar com especialista agora" tracking="hero" />
        <div className="flex items-center gap-2 mt-6 text-sm text-gray-600 flex-wrap">
          <Factory className="w-4 h-4 text-gray-600" />
          <span>Papel e celulose</span>
          <span className="text-gray-300">·</span>
          <span>Farmacêutico</span>
          <span className="text-gray-300">·</span>
          <Zap className="w-4 h-4 text-gray-600" />
          <span>Energia</span>
          <span className="text-gray-300">·</span>
          <Truck className="w-4 h-4 text-gray-600" />
          <span>Logística</span>
        </div>
        <div className="hidden md:flex gap-4 mt-3 text-xs text-gray-400 font-medium flex-wrap">
          <span>Solução própria</span>
          <span>·</span>
          <span>8 anos de mercado</span>
          <span>·</span>
          <span>Integração com SAP, Oracle e Totvs</span>
        </div>
      </div>
      <DashboardVisual />
    </div>
  </section>
);

export default HeroSection;
