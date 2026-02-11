import smartiLogo from "@/assets/smarti-logo-branca.webp";
import CTAButton from "./CTAButton";

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-smarti-dark/90 backdrop-blur-md h-16">
    <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
      <img src={smartiLogo} alt="Smarti Supply" className="h-8" />
      <CTAButton text="Falar pelo WhatsApp" tracking="header" size="small" />
    </div>
  </header>
);

export default Header;
