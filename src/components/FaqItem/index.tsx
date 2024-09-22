import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

interface FaqItem {
  title: string;
  content: React.ReactNode;
}

interface Props {
  faqs: FaqItem[];
}

export default function (props: Props) {
  return (
    <>
      <Accordion>
        {props.faqs.map((faq) => (
          <AccordionItem key={faq.title}>
            <AccordionItemHeading>
              <AccordionItemButton>{faq.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{faq.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
