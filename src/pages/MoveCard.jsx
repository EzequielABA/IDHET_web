import { useNavigate } from 'react-router-dom';
import { FaBolt, FaMobileAlt, FaLock, FaCreditCard } from 'react-icons/fa';
import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import FAQItem from '../components/ui/FAQItem';
import Icon from '../components/ui/Icon';
import { metroCardFeatures } from '../data/solutions.data';
import { faqData } from '../data/faq.data';
import './MoveCard.css';

const MoveCard = () => {
    const navigate = useNavigate();
    const moveCardFAQs = faqData.filter(faq => faq.category === 'MoveCard');

    return (
        <div className="movecard-page">
            <Hero
                title="MoveCard: Recarga en 30 Segundos"
                subtitle="La App del Metro"
                description="La única aplicación que te permite recargar tu tarjeta del Metro, Teleférico y OMSA de Santo Domingo completamente online."
                primaryCTA={{
                    text: 'Descargar para iOS',
                    onClick: () => window.open('https://www.figma.com/proto/Reu20JS7oEmNAlRlORnELV/MetroLand-App?node-id=13-15&starting-point-node-id=13%3A15', '_blank')
                }}
                secondaryCTA={{
                    text: 'Descargar para Android',
                    onClick: () => window.open('#', '_blank')
                }}
                gradient
                decor="diagonal"
            />

            <section className="how-it-works-section section">
                <div className="container">
                    <SectionTitle
                        subtitle="¿Cómo funciona?"
                        title="Recarga tu tarjeta en 5 simples pasos"
                        gradient
                    />

                    <div className="steps-grid">
                        {metroCardFeatures.map((step, index) => (
                            <Card key={index} hoverable className="step-card">
                                <div className="step-icon" style={{ background: 'var(--gradient-primary)' }}>
                                    <Icon name={step.icon} size={28} color="white" />
                                </div>
                                <div className="step-number">{step.step}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="benefits-section section bg-gray-100">
                <div className="container">
                    <SectionTitle
                        subtitle="Beneficios"
                        title="¿Por qué usar MoveCard?"
                        gradient
                    />

                    <div className="benefits-list">
                        <Card hoverable className="benefit-item">
                            <div className="benefit-emoji"><FaBolt /></div>
                            <div>
                                <h4>Súper Rápido</h4>
                                <p>Recarga tu tarjeta en menos de 30 segundos, sin filas ni esperas.</p>
                            </div>
                        </Card>

                        <Card hoverable className="benefit-item">
                            <div className="benefit-emoji"><FaMobileAlt /></div>
                            <div>
                                <h4>100% Online</h4>
                                <p>Desde tu celular, donde estés, a cualquier hora del día.</p>
                            </div>
                        </Card>

                        <Card hoverable className="benefit-item">
                            <div className="benefit-emoji"><FaLock /></div>
                            <div>
                                <h4>Seguro y Confiable</h4>
                                <p>Tecnología de encriptación bancaria para proteger tus datos.</p>
                            </div>
                        </Card>

                        <Card hoverable className="benefit-item">
                            <div className="benefit-emoji"><FaCreditCard /></div>
                            <div>
                                <h4>Múltiples Métodos de Pago</h4>
                                <p>Acepta tarjetas de crédito, débito y transferencias bancarias.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="faq-section section">
                <div className="container">
                    <SectionTitle
                        subtitle="Preguntas Frecuentes"
                        title="Dudas sobre MoveCard"
                        gradient
                    />

                    <div className="faq-list">
                        {moveCardFAQs.map((faq) => (
                            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section section bg-gradient">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">¿Listo para empezar?</h2>
                        <p className="cta-description">
                            Descarga MoveCard ahora y olvídate de las filas
                        </p>
                        <div className="cta-buttons">
                            <Button variant="primary" size="large"onClick={() => navigate('https://www.figma.com/proto/Reu20JS7oEmNAlRlORnELV/MetroLand-App?node-id=13-15&starting-point-node-id=13%3A15')}>
                                Descargar Ahora
                            </Button>
                            <Button variant="outlined" size="large" onClick={() => navigate('/contact')}>
                                Contáctanos
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoveCard;
