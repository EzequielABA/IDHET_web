import { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer, isOpen: initialIsOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
            <button className="faq-question" onClick={toggle} aria-expanded={isOpen}>
                <span className="faq-question-text">{question}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="faq-answer-wrapper">
                <div className="faq-answer">{answer}</div>
            </div>
        </div>
    );
};

export default FAQItem;
