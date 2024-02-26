import  { FC, useState } from 'react';
import { StyledAccordion, AccordionItem, AccordionHeader, AccordionContent } from "./styled";

interface AccordionProps {
    items: { question: string; answer: string }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const getAccordionIcon = (index: number) => {
        return activeIndex === index ? '-' : '+';
    };

    return (
        <StyledAccordion>
            {items.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader onClick={() => toggleAccordion(index)}>
                        <span>{item.question}</span>
                        <span>{getAccordionIcon(index)}</span>
                    </AccordionHeader>
                    {activeIndex === index && (
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    )}
                </AccordionItem>
            ))}
        </StyledAccordion>
    );
};

export default Accordion;