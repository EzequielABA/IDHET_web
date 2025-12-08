import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaLock, FaClock, FaStar, FaCheckCircle, FaCreditCard } from 'react-icons/fa';
import Hero from '../components/features/hero/Hero';
import Card from '../components/common/Card';
import SectionTitle from '../components/ui/SectionTitle';
import FAQItem from '../components/ui/FAQItem';
import Button from '../components/common/Button';
import Icon from '../components/ui/Icon';
import Carousel from '../components/ui/Carousel';
import { solutions } from '../data/solutions.data';
import { benefits } from '../data/benefits.data';
import { testimonials } from '../data/testimonials.data';
import { faqData } from '../data/faq.data';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [refAbout, isVisibleAbout] = useIntersectionObserver();
    const [refSolutions, isVisibleSolutions] = useIntersectionObserver();
    const [refMetroCard, isVisibleMetroCard] = useIntersectionObserver();
    const [refBenefits, isVisibleBenefits] = useIntersectionObserver();
    const [refTestimonials, isVisibleTestimonials] = useIntersectionObserver();

    const featuredFAQs = faqData.slice(0, 5);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <Hero
                title="Innovación Digital para República Dominicana"
                subtitle="IDHET"
                description="Desarrollamos soluciones digitales que simplifican la vida cotidiana, con enfoque especial en movilidad urbana y pagos electrónicos."
                primaryCTA={{
                    text: 'Conoce MetroCard',
                    onClick: () => navigate('/metrocard')
                }}
                secondaryCTA={{
                    text: 'Nuestras Soluciones',
                    onClick: () => navigate('/solutions')
                }}
                gradient
            />

            {/* About Section */}
            <section className="about-section section" ref={refAbout}>
                <div className="container">
                    <div className={`about-content ${isVisibleAbout ? 'animate-fadeInUp' : ''}`}>
                        <SectionTitle
                            subtitle="¿Quiénes somos?"
                            title="Empresa tecnológica dominicana"
                            gradient
                        />
                        <div className="about-text">
                            <p>
                                IDHET es una empresa tecnológica dominicana creada para desarrollar soluciones digitales
                                que simplifiquen la vida cotidiana de la población, con enfoque especial en movilidad
                                urbana y pagos electrónicos.
                            </p>
                            <p>
                                Nuestro primer y actual producto estrella, <strong>MetroCard</strong>, es la única aplicación
                                que permite recargar la tarjeta del Metro y Teleférico de Santo Domingo completamente online,
                                en menos de 30 segundos y desde cualquier lugar.
                            </p>
                        </div>
                        <Button variant="outlined" onClick={() => navigate('/about')}>
                            Conocer más sobre nosotros
                        </Button>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="solutions-section section bg-gray-100" ref={refSolutions}>
                <div className="container">
                    <SectionTitle
                        subtitle="Nuestras Soluciones"
                        title="Tecnología que transforma vidas"
                        gradient
                    />
                    <div className={`solutions-grid ${isVisibleSolutions ? 'animate-fadeInUp' : ''}`}>
                        {solutions.map((solution, index) => (
                            <Card
                                key={solution.id}
                                hoverable
                                className={`solution-card delay-${(index % 3) + 1}00`}
                            >
                                <div className="solution-icon" style={{ background: solution.gradient }}>
                                    <Icon name={solution.icon} size={32} color="white" />
                                </div>
                                <h3 className="solution-title">{solution.title}</h3>
                                <p className="solution-subtitle">{solution.subtitle}</p>
                                <p className="solution-description">{solution.description}</p>
                                <ul className="solution-features">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx}><FaCheckCircle /> {feature}</li>
                                    ))}
                                </ul>
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={() => navigate(solution.link)}
                                >
                                    Conocer más →
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* MetroCard Highlight */}
            <section className="metrocard-section section" ref={refMetroCard}>
                <div className="container">
                    <div className={`metrocard-content ${isVisibleMetroCard ? 'animate-fadeInUp' : ''}`}>
                        <div className="metrocard-text">
                            <SectionTitle
                                subtitle="Producto Estrella"
                                title="MetroCard: Recarga tu metro en 30 segundos"
                                align="left"
                                gradient
                            />
                            <p className="metrocard-description">
                                La única aplicación que te permite recargar tu tarjeta del Metro y Teleférico
                                de Santo Domingo completamente online. Rápido, seguro y disponible 24/7.
                            </p>
                            <ul className="metrocard-benefits">
                                <li><FaCreditCard /> Recarga en menos de 30 segundos</li>
                                <li><FaMobileAlt /> 100% online desde tu celular</li>
                                <li><FaLock /> Seguro y confiable</li>
                                <li><FaClock /> Disponible 24/7</li>
                            </ul>
                            <div className="metrocard-cta">
                                <Button variant="primary" size="large" onClick={() => navigate('/metrocard')}>
                                    Conocer MetroCard
                                </Button>
                            </div>
                        </div>
                        <div className="metrocard-visual">
                            <div className="metrocard-mockup">
                                <img src="/assets/images/metrocard-mockup.png" alt="MetroCard App" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section section bg-gray-100" ref={refBenefits}>
                <div className="container">
                    <SectionTitle
                        subtitle="¿Por qué IDHET?"
                        title="Beneficios que nos distinguen"
                        gradient
                    />
                    <div className={`benefits-grid ${isVisibleBenefits ? 'animate-fadeInUp' : ''}`}>
                        {benefits.map((benefit, index) => (
                            <Card
                                key={benefit.id}
                                variant="glass"
                                hoverable
                                className={`benefit-card delay-${(index % 3) + 1}00`}
                            >
                                <div className="benefit-icon" style={{ background: benefit.gradient }}>
                                    <Icon name={benefit.icon} size={32} color="white" />
                                </div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section" ref={refTestimonials}>
                <div className="container">
                    <SectionTitle
                        subtitle="Testimonios"
                        title="Lo que dicen nuestros usuarios"
                        gradient
                    />
                    <div className={`testimonials-carousel ${isVisibleTestimonials ? 'animate-fadeInUp' : ''}`}>
                        <Carousel
                            autoPlay={true}
                            interval={4000}
                            showArrows={true}
                            showDots={true}
                            pauseOnHover={true}
                        >
                            {testimonials.map((testimonial) => (
                                <Card
                                    key={testimonial.id}
                                    hoverable
                                    className="testimonial-card-carousel"
                                >
                                    <div className="testimonial-content">
                                        <div className="testimonial-avatar" style={{ background: testimonial.gradient }}>
                                            <Icon name={testimonial.avatar} size={48} color="white" />
                                        </div>
                                        <p className="testimonial-text">"{testimonial.content}"</p>
                                        <div className="testimonial-author">
                                            <strong>{testimonial.name}</strong>
                                            <span>{testimonial.role}</span>
                                        </div>
                                        <div className="testimonial-rating">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <FaStar key={i} color="#FFD700" size={20} />
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="faq-preview-section section bg-gray-100">
                <div className="container">
                    <SectionTitle
                        subtitle="Preguntas Frecuentes"
                        title="¿Tienes alguna duda?"
                        gradient
                    />
                    <div className="faq-list">
                        {featuredFAQs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                    <div className="faq-cta">
                        <Button variant="outlined" onClick={() => navigate('/faq')}>
                            Ver todas las preguntas
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="contact-cta-section section">
                <div className="container">
                    <div className="contact-cta-content">
                        <h2 className="contact-cta-title gradient-text">
                            ¿Listo para transformar tu negocio?
                        </h2>
                        <p className="contact-cta-description">
                            Contáctanos para conocer cómo nuestras soluciones pueden ayudarte
                        </p>
                        <Button variant="primary" size="large" onClick={() => navigate('/contact')}>
                            Contáctanos Ahora
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
