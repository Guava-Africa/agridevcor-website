import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function FAQ({
  items,
  eyebrow = "FAQ",
  title = "Common questions",
  description,
  className,
}: FAQProps) {
  return (
    <ScrollReveal className={cn("max-w-3xl mx-auto", className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className="mb-10"
      />
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-2xl border border-border/60 bg-card px-6 shadow-soft data-[state=open]:shadow-elegant transition-shadow duration-300"
          >
            <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  );
}
