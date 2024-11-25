import React from 'react';
import { Accordion, AccordionItem } from 'react-accordion';

export default function Faq() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <Accordion>
        <AccordionItem title="How do I book a bike rental?">
          To book a bike rental, follow these simple steps:
          <ol>
            <li>Go to our website or mobile app.</li>
            <li>Browse the available bikes and choose the one you like.</li>
            <li>Select your rental duration and location.</li>
            <li>Review the bike details, price, and benefits.</li>
            <li>Click the 'Book Now' button to proceed.</li>
            <li>Fill in your details and confirm the booking.</li>
            <li>Receive a confirmation and enjoy your ride!</li>
          </ol>
        </AccordionItem>
        <AccordionItem title="What are the payment options?">
          We offer various payment options, including credit/debit cards, digital wallets, and cash payments at our rental locations. You can choose the payment method that suits you best.
        </AccordionItem>
        <AccordionItem title="Is there a security deposit required?">
          Yes, we may require a security deposit, which will be refunded upon returning the bike in good condition. The deposit amount varies depending on the bike model and location.
        </AccordionItem>
        <AccordionItem title="Do you offer long-term rentals?">
          Yes, we offer long-term rental options, and we provide discounted rates for extended rental periods. Please contact our customer support for more details.
        </AccordionItem>
      </Accordion>
    </div>
  );
};


