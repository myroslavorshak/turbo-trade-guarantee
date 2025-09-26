import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the instant trade-in offer?",
    answer: "Our instant offers are based on current market data and vehicle condition estimates. The final offer may vary slightly after physical inspection, but we guarantee our online quote for vehicles that match the described condition."
  },
  {
    question: "What happens if I don't use my 7-day offer?",
    answer: "No worries! The offer simply expires and there's no obligation. You can request a new quote anytime. We understand shopping for a vehicle is a big decision."
  },
  {
    question: "How does the Equity Protection Promise work exactly?",
    answer: "If we retail your traded vehicle within 7 days for more than we paid you, we'll send you a credit for the difference (up to $300 cap). This is issued as a post-sale goodwill adjustment, not part of the original transaction."
  },
  {
    question: "What documents do I need for the trade-in?",
    answer: "You'll need the vehicle title (or loan information), valid ID, current registration, and any service records. If you have a loan, we'll handle the payoff directly with your lender."
  },
  {
    question: "Can I trade a vehicle that's not paid off?",
    answer: "Absolutely! We handle payoffs daily. If you owe more than the trade value, the difference can often be rolled into your new vehicle financing. If you have equity, that goes toward your new purchase."
  },
  {
    question: "Is the sales tax savings calculation accurate?",
    answer: "The calculator provides estimates based on current Illinois tax rates. Your actual savings depend on your final purchase price, trade value, and county of registration. Some fees and taxes may still apply."
  },
  {
    question: "What makes a vehicle 'Bundle Eligible'?",
    answer: "Bundle eligible vehicles qualify for our best trade-in offers and special financing terms. These are typically newer, well-maintained vehicles that meet our partnership criteria with financial institutions."
  },
  {
    question: "How long does the trade-in process take?",
    answer: "Once you arrive with your vehicle and paperwork, the inspection and paperwork typically take 15-20 minutes. If you're also purchasing a vehicle, the entire process usually takes 45-60 minutes."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our Trade-Up Turbo program
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-card border-0 px-6"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <div className="bg-gradient-card rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our trade specialists are here to help you every step of the way
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:555-123-4567" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Call (555) 123-4567
                </a>
                <a 
                  href="mailto:trades@dealership.com" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Email Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};