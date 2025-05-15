import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TechnicalConceptsSection: React.FC = () => {
  const concepts = [
    {
      question: "What is a Merkle Tree?",
      answer: "A Merkle tree is a tree in which every leaf node is labelled with the cryptographic hash of a data block, and every non-leaf node is labelled with the cryptographic hash of the labels of its child nodes. It allows efficient and secure verification of the contents of large data structures.",
    },
    {
      question: "What are Zero-Knowledge Proofs?",
      answer: "A zero-knowledge proof (ZKP) is a method by which one party (the prover) can prove to another party (the verifier) that they know a value x, without conveying any information apart from the fact that they know the value x. This is crucial for privacy and security in compressed accounts.",
    },
    {
      question: "How is Data Stored and Retrieved?",
      answer: "Compressed data is stored off-chain, often by indexers or specialized storage providers. The on-chain Merkle tree root allows verifiers to confirm the integrity of this off-chain data. Retrieving specific data involves providing a Merkle proof along with the data, which can be verified against the on-chain root.",
    },
    {
      question: "What is State Compression?",
      answer: "State compression on Solana refers to techniques that reduce the amount of data that needs to be stored directly on the blockchain ledger. By using structures like Merkle trees and ZK proofs, only a small representation (like a Merkle root) is stored on-chain, while the bulk of the data resides off-chain but remains verifiable.",
    },
  ];

  return (
    <Card className="bg-transparent border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Technical Concepts</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {concepts.map((concept, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-slate-700">
              <AccordionTrigger className="text-lg text-left hover:text-brandPurple text-foreground data-[state=open]:text-brandPurple">
                {concept.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {concept.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TechnicalConceptsSection;
