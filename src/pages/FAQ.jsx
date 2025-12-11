import { useState } from 'react';
import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FAQItem from '../components/ui/FAQItem';
import { faqData, faqCategories } from '../data/faq.data';
import './FAQ.css';

const FAQ = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredFAQs =
        selectedCategory === 'Todos'
            ? faqData
            : faqData.filter((faq) => faq.category === selectedCategory);

    return (
        <div className="faq-page">
            <Hero
                title="Preguntas Frecuentes"
                subtitle="Centro de Ayuda"
                description="Encuentra respuestas a las preguntas más comunes sobre IDHET SRL y nuestros servicios."
                gradient
                decor="grid"
            />

            <section className="faq-section section">
                <div className="container">
                    <SectionTitle
                        subtitle="Encuentra respuestas"
                        title="Todo lo que necesitas saber"
                        gradient
                    />

                    {/* Category Filter */}
                    <div className="faq-categories">
                        {faqCategories.map((category) => (
                            <button
                                key={category}
                                className={`faq-category-btn ${selectedCategory === category ? 'active' : ''
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="faq-list">
                        {filteredFAQs.map((faq) => (
                            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    {filteredFAQs.length === 0 && (
                        <div className="no-faqs">
                            <p>No se encontraron preguntas en esta categoría.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default FAQ;
