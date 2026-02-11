import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5541991114950?text=Ol%C3%A1.%20Quero%20falar%20sobre%20a%20automa%C3%A7%C3%A3o%20de%20follow-up.";

interface CTAButtonProps {
  text: string;
  tracking: string;
  size?: "default" | "small";
  className?: string;
}

const CTAButton = ({ text, tracking, size = "default", className = "" }: CTAButtonProps) => {
  const base = size === "small"
    ? "bg-smarti-rose hover:bg-smarti-rose-hover text-white text-sm font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
    : "bg-smarti-rose hover:bg-smarti-rose-hover text-white font-bold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 transition-colors shadow-lg";

  return (
    <button
      className={`${base} ${className}`}
      data-tracking={`cta-${tracking}`}
      onClick={() => window.open(WHATSAPP_URL, "_blank")}
    >
      <WhatsAppIcon className={size === "small" ? "w-4 h-4" : "w-5 h-5"} />
      {text}
    </button>
  );
};

export default CTAButton;
