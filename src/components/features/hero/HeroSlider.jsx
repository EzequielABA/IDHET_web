import { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = ({ slides, autoPlay = true, interval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!autoPlay || slides.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (!slides || slides.length === 0) return null;

    return (
        <div className="hero-slider">
            <div className="hero-slider-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <>
                    <button className="hero-slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
                        ‹
                    </button>
                    <button className="hero-slider-btn next" onClick={nextSlide} aria-label="Next slide">
                        ›
                    </button>

                    <div className="hero-slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default HeroSlider;
