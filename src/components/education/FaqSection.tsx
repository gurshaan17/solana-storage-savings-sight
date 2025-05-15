import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Is compressed data as secure as regular accounts?",
      answer: "Yes, when implemented correctly. The security relies on the strength of the cryptographic hashes (e.g., in Merkle trees) and zero-knowledge proofs. The on-chain data (Merkle root) acts as an anchor of trust.",
    },
    {
      question: "Can I convert existing accounts to compressed accounts?",
      answer: "Direct conversion is typically not straightforward. It usually involves migrating data from standard accounts to a new compressed state structure. This might mean reading data from old accounts and writing it into the new compressed format.",
    },
    {
      question: "Are there any downsides to using compression?",
      answer: "There can be increased complexity in development and data retrieval, as it involves off-chain components and proof generation/verification. Latency for accessing data might be slightly higher compared to directly on-chain data, depending on the off-chain storage solution.",
    },
    {
      question: "How do I implement compression in my application?",
      answer: "Solana provides tools and standards for state compression, such as Bubblegum for compressed NFTs. Developers typically interact with programs that manage these compressed state trees. It's important to understand the underlying mechanics and choose appropriate off-chain data providers.",
    },
  ];

  return (
    <Card className="bg-inputDark border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-slate-700">
              <AccordionTrigger className="text-lg text-left hover:text-brandPurple text-foreground data-[state=open]:text-brandPurple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FaqSection;
