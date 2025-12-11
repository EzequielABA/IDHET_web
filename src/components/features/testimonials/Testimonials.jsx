import { useEffect, useState } from 'react';
import SectionTitle from '../../ui/SectionTitle';
import Icon from '../../ui/Icon';
import { testimonials } from '../../../data/testimonials.data';
import './Testimonials.css';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const count = testimonials.length;

    const next = () => setIndex((i) => (i + 1) % count);
    const prev = () => setIndex((i) => (i - 1 + count) % count);
    const goTo = (i) => setIndex(i);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
        return () => clearInterval(id);
    }, [count]);

    return (
        <section className="testimonials section bg-gray">
            <div className="testimonials-bg"></div>
            <div className="container testimonials-container">
                <SectionTitle subtitle="Testimonios" title="Lo que dicen nuestros usuarios" />
                <div className="testimonials-slider">
                    <div className="testimonials-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {testimonials.map((t) => (
                            <div key={t.id} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="testimonial-avatar" style={{ background: t.gradient }}>
                                            <Icon name={t.avatar} size={32} color="white" />
                                        </div>
                                        <div className="testimonial-author">
                                            <span className="testimonial-name">{t.name}</span>
                                            <span className="testimonial-role">{t.role}</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">"{t.content}"</div>
                                    <div className="testimonial-rating">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="testimonials-controls">
                    <button className="testimonials-arrow" onClick={prev} aria-label="Anterior">◀</button>
                    <div className="testimonials-dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonials-dot ${i === index ? 'active' : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Ir al slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button className="testimonials-arrow" onClick={next} aria-label="Siguiente">▶</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
