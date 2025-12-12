import { useNavigate } from 'react-router-dom';
import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Icon from '../components/ui/Icon';
import { quimiCraftLevels, quimiCraftFeatures } from '../data/solutions.data';
import './QuimiCraft.css';

const QuimiCraft = () => {
    const navigate = useNavigate();

    return (
        <div className="quimicraft-page">
            <Hero
                title="QuimiCraft: Ciencias Naturales Interactivas"
                subtitle="Plataforma Educativa"
                description="Una plataforma interactiva para facilitar el aprendizaje de las Ciencias Naturales en estudiantes del segundo ciclo de secundaria, mediante actividades didácticas, visuales y accesibles."
                gradient
                decor="blobs"
            />

            <section className="features-section section">
                <div className="container">
                    <SectionTitle subtitle="¿Qué ofrece?" title="Características principales" gradient />
                    <div className="features-grid">
                        {quimiCraftFeatures.map((feat, index) => (
                            <Card key={index} hoverable className="feature-card">
                                <div className="feature-icon" style={{ background: feat.gradient }}>
                                    <Icon name={feat.icon} size={32} color="white" />
                                </div>
                                <h3 className="feature-title">{feat.title}</h3>
                                <p className="feature-description">{feat.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="levels-section section bg-gray">
                <div className="container">
                    <SectionTitle subtitle="Juego tipo trivia" title="5 niveles de Química" gradient />
                    <div className="levels-grid">
                        {quimiCraftLevels.map((lvl, index) => (
                            <Card key={index} hoverable className="level-card">
                                <div className="level-badge">{index + 1}</div>
                                <div className="level-icon" style={{ background: 'var(--gradient-primary)' }}>
                                    <Icon name={lvl.icon} size={28} color="white" />
                                </div>
                                <h3 className="level-title">{lvl.title}</h3>
                                <p className="level-description">{lvl.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">¿Listo para jugar y aprender?</h2>
                        <p className="cta-description">Explora QuimiCraft y fortalece tu aprendizaje en Química con dinámicas intuitivas y visuales.</p>
                        <div className="cta-buttons">
                            <Button variant="primary" size="large" onClick={() => navigate('https://www.figma.com/proto/U8jR3nF1mTtbqNfSh7eKox/Quimicraft?node-id=65-413&p=f&t=mZPOoAsuuzkM6Ox2-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=65%3A413&show-proto-sidebar=1')}>Solicitar Demo</Button>
                            <Button variant="outlined" size="large" onClick={() => navigate('/services')}>Ver Servicios</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuimiCraft;

