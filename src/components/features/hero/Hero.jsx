import Button from '../../common/Button';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import './Hero.css';

const Hero = ({
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
    gradient = true,
    decor = 'default',
    children
}) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className={`hero hero--decor-${decor}`} ref={ref}>
            <div className="hero-gradient-bg"></div>
            <div className="hero-container container">
                <div className={`hero-content ${isVisible ? 'animate-fadeInUp' : ''}`}>
                    {subtitle && <p className="hero-subtitle">{subtitle.replace('IDHET', 'IDHET SRL')}</p>}
                    <h1 className={`hero-title ${gradient ? 'gradient-text' : ''}`}>
                        {title}
                    </h1>
                    {description && <p className="hero-description">{description}</p>}

                    {(primaryCTA || secondaryCTA) && (
                        <div className="hero-cta">
                            {primaryCTA && (
                                <Button
                                    variant="primary"
                                    size="large"
                                    onClick={primaryCTA.onClick}
                                >
                                    {primaryCTA.text}
                                </Button>
                            )}
                            {secondaryCTA && (
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={secondaryCTA.onClick}
                                >
                                    {secondaryCTA.text}
                                </Button>
                            )}
                        </div>
                    )}

                    {children}
                </div>
            </div>
        </section>
    );
};

export default Hero;
