import { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({
    children,
    autoPlay = true,
    interval = 5000,
    showArrows = true,
    showDots = true,
    pauseOnHover = true,
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const timerRef = useRef(null);

    const items = Array.isArray(children) ? children : [children];
    const totalItems = items.length;

    const goToSlide = useCallback((index) => {
        setCurrentIndex((index + totalItems) % totalItems);
    }, [totalItems]);

    const goToNext = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    const goToPrevious = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay && !isHovered && totalItems > 1) {
            timerRef.current = setInterval(goToNext, interval);
            return () => clearInterval(timerRef.current);
        }
    }, [autoPlay, isHovered, interval, goToNext, totalItems]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    if (totalItems === 0) return null;

    return (
        <div
            className={`carousel ${className}`}
            onMouseEnter={() => pauseOnHover && setIsHovered(true)}
            onMouseLeave={() => pauseOnHover && setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {showArrows && totalItems > 1 && (
                    <>
                        <button
                            className="carousel-arrow carousel-arrow-left"
                            onClick={goToPrevious}
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="carousel-arrow carousel-arrow-right"
                            onClick={goToNext}
                            aria-label="Next slide"
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}
            </div>

            {showDots && totalItems > 1 && (
                <div className="carousel-dots">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
