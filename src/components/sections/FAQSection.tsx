import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O material é físico ou digital?",
    answer: "O material é 100% digital. Você recebe acesso imediato após a compra e pode baixar todos os arquivos em PDF para imprimir em casa ou em uma gráfica.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! Você tem acesso vitalício ao material e pode imprimir quantas vezes precisar, para quantas crianças quiser.",
  },
  {
    question: "Serve para casa e igreja?",
    answer: "Sim. O kit foi pensado para uso em casa com a família, mas também é muito utilizado em igrejas, EBD, ministério infantil e escolas cristãs.",
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem garantia incondicional de 30 dias. Se não ficar satisfeito por qualquer motivo, basta solicitar o reembolso e devolvemos 100% do valor.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-4 bg-secondary/30"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
