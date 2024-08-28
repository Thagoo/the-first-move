import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import Image from "next/image";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does The First Move offer?",
    answer:
      "At The First Move, we offer a comprehensive range of event planning services including modern event planning, proposal planning, wedding planning, personal shopping and birthday celebrations. Our team is dedicated to crafting personalized experiences that reflect your vision and style. We manage all aspects of your event from concept to execution, ensuring every detail is handled with expertise and creativity",
    value: "item-2",
  },
  {
    question: "Can The First Move handle both small and large events?",
    answer:
      "Yes, we can handle events of all sizes. Whether you’re planning an intimate proposal or a large-scale wedding or birthday celebration, our experienced team has the expertise to manage every detail. We approach each event with the same level of dedication and attention to ensure a successful and memorable experience.",
    value: "item-3",
  },
  {
    question: "What is included in your wedding planning services?",
    answer:
      "Our wedding planning services encompass every aspect of your special day. This includes venue selection, theme development, decor, catering, entertainment, and vendor coordination. We also provide day-of management to ensure everything runs smoothly, allowing you to focus on enjoying your celebration.",
    value: "item-4",
  },
  {
    question: "How do you ensure my proposal is unique and special?",
    answer:
      "We take a personalized approach to proposal planning. Our team works closely with you to understand your love story and preferences, designing a proposal that is both memorable and reflective of your relationship. Whether you envision a grand gesture or an intimate moment, we craft an experience that will be unforgettable.",
    value: "item-5",
  },
  {
    question: "What sets The First Move apart from other event planners?",
    answer:
      "What sets us apart is our blend of modern event planning expertise with a commitment to creating unique and memorable experiences. Our team brings fresh, innovative ideas to every event, ensuring that each detail aligns with your vision. We focus on personalized service, attention to detail, and a seamless execution to make your event truly special.",
    value: "item-6",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking as early as possible to secure your desired date and allow ample time for planning. For weddings and larger events, contacting us 6-12 months in advance is ideal. For proposals and smaller events, 3-6 months is typically sufficient. However, we do our best to accommodate last-minute requests when possible.",
    value: "item-7",
  },
  {
    question: "What are your payment and cancellation policies?",
    answer:
      "We offer clear payment and cancellation policies to ensure a smooth planning experience. Details regarding payment schedules, deposits, and cancellation terms will be provided during your initial consultation. Our goal is to provide transparent and flexible policies that accommodate your needs.",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-10">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-medium">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Divider />
    </section>
  );
};
