import { useState } from "react";
import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-4">
          Veja a plataforma em ação
        </h2>
        <div
          className={`relative aspect-video rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {showVideo ? (
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/AkBvYWc7unQ?autoplay=1&rel=0"
              title="Smarti Supply — Demonstração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute inset-0 bg-smarti-blue flex items-center justify-center cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition">
                <Play className="w-8 h-8 text-smarti-rose ml-1" />
              </div>
              <span className="absolute bottom-4 left-4 text-white/60 text-sm">Smarti Supply — Demonstração</span>
            </div>
          )}
        </div>
        <p className="text-base text-gray-600 text-center mt-4">
          Demonstração rápida do Smarti Supply. Veja como a automação funciona na prática.
        </p>
        <div className="text-center mt-8">
          <CTAButton text="Falar com especialista" tracking="video" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
