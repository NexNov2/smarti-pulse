import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-4">
          Veja a plataforma em acao
        </h2>
        <div
          className={`relative aspect-video bg-smarti-blue rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto cursor-pointer group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          onClick={() => window.open("https://youtu.be/AkBvYWc7unQ", "_blank")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition">
              <Play className="w-8 h-8 text-smarti-rose ml-1" />
            </div>
          </div>
          <span className="absolute bottom-4 left-4 text-white/60 text-sm">Smarti Supply — Demonstracao</span>
        </div>
        <p className="text-base text-smarti-gray-text text-center mt-4">
          Demonstracao rapida do Smarti Supply. Veja como a automacao funciona na pratica.
        </p>
        <div className="text-center mt-8">
          <CTAButton text="Falar com especialista" tracking="video" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
