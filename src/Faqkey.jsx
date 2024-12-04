import React from 'react';

function Faqkey({ faq, index, toggleFAQ }) {
  return (
    <div
      className={`FaqBody ${faq.open ? 'open' : ''}`} 
      onClick={() => toggleFAQ(index)}
      role="button"
      aria-expanded={faq.open}
    >
      <h3 className="faq-question">{faq.questions}</h3>
      {faq.open && <p className="answers">{faq.answer}</p>}
    </div>
  );
}

export default Faqkey;
