import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5541991114950?text=Ol%C3%A1.%20Quero%20falar%20sobre%20a%20automa%C3%A7%C3%A3o%20de%20follow-up.";

const WhatsAppFloat = () => (
  <button
    className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-smarti-whatsapp hover:bg-smarti-whatsapp-hover shadow-lg flex items-center justify-center cursor-pointer transition-colors animate-whatsapp-pulse"
    onClick={() => window.open(WHATSAPP_URL, "_blank")}
    title="Fale pelo WhatsApp"
    aria-label="Fale pelo WhatsApp"
  >
    <WhatsAppIcon className="w-7 h-7 text-white" />
  </button>
);

export default WhatsAppFloat;
