import React, { useState } from 'react';
import Faqkey from './Faqkey';
import "./css/Faq.css";

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      questions: "When can you start?",
      answer: "Right Away!",
      open: false
    },
    {
      questions: "What are my salary expectations?",
      answer: "It will depend on the benefits package and position title, but I'm open to speaking to it further.",
      open: false
    },
    {
      questions: "Are you able to work on-site?",
      answer: "Absolutely, I can work in-office, remotely, or a hybrid variation.",
      open: false
    },
    {
      questions: "What are you looking to get out of this job?",
      answer: (
        <>
          <h4>Learning & making an impact!</h4><br />
          I am looking for a place where I can learn as much as possible on a variety of topics and have an impact at the company I work at.
        </>
      ),
      open: false
    }
    ,
    {
      questions: "How do you take your coffee?",
      answer: "Black, typically an americano ☕️",
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) =>{
      if (i=== index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }



  return (
    <div className='FAQs'>
      <h1 className='Faqtitle'>FAQs</h1>
      {faqs.map((faq, i) => (
        <Faqkey key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
}

export default Faq;
