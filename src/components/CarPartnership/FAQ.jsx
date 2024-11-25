import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    const faq = [
        {
            heading:"What if anything happens to my car during transit?",
            description:"In the unlikely event of damage, we have insurance coverage to handle repairs and will work with you to resolve any issues promptly",
        },
        {
            heading:"Can I track my car while it’s being transported?",
            description:"Yes, you can track your car in real-time through our app, giving you peace of mind during the transport process.",
        },
        {
            heading:"How can I contact customer support?",
            description:"You can reach our customer support team via phone, email, or through our app, and we’re available to assist you 24/7.",
        },
        {
            heading:"How does Brokies keep my car safe?",
            description:"We prioritize vehicle security by using enclosed transport methods and secure loading practices.",
        },
        {
            heading:"Who will be driving my car?",
            description:"Your vehicle will be handled by professional drivers who are trained and experienced in safe vehicle transport.",
        },
    ]
      const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
    {/* FAQ */}
    <div className='flex-row justify-center items-center mx-auto max-w-6xl '>
            <h1 className='text-2xl md:text-3xl font-bold text-center p-2'>FAQ</h1>
        {faq.map((item, index) => (
          <div key={index} className='m-2 shadow-md'>
            <Accordion key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
            >
                <AccordionSummary className='' expandIcon={<ExpandMoreIcon />}>
                <h1 className='text-lg md:text-xl font-medium '>{item.heading}</h1>
                </AccordionSummary>
                <AccordionDetails>
                <h1 className='text-lg'>{item.description}</h1>
                </AccordionDetails>
            </Accordion>
          </div>
        ))}
        </div>
        </>
    
  )
}

export default FAQ;


