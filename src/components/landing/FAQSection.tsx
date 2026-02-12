import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso trocar meu ERP ou sistema de compras?", a: "Não. O Smarti Supply é agnóstico e se integra ao seu sistema atual via API, CSV ou planilha. Funciona com SAP, Oracle, Totvs e sistemas legados." },
  { q: "Meu fornecedor precisa instalar algum software?", a: "Não. O fornecedor acessa um portal web simples pelo link do e-mail. Sem cadastro complexo, sem instalação." },
  { q: "Funciona com SAP?", a: "Sim. Temos integração nativa e cases rodando com SAP. Também integramos com Oracle, Totvs e ERPs legados." },
];

const FAQSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-3xl mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-smarti-blue text-center mb-10">
        Dúvidas comuns
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-lg font-semibold text-smarti-blue hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
