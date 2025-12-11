import { FaCheckCircle } from 'react-icons/fa';
import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/common/Card';
import Icon from '../components/ui/Icon';
import { solutions } from '../data/solutions.data';
import './Solutions.css';

const Solutions = () => {
    return (
        <div className="solutions-page">
            <Hero
                title="Nuestras Soluciones"
                subtitle="Tecnología Innovadora"
                description="Desarrollamos soluciones digitales que transforman la manera en que interactúas con servicios públicos y privados en República Dominicana."
                gradient
                decor="diagonal"
            />

            <section className="solutions-detail-section section">
                <div className="container">
                    <SectionTitle
                        subtitle="Catálogo Completo"
                        title="Soluciones diseñadas para ti"
                        gradient
                    />

                    <div className="solutions-detail-grid">
                        {solutions.map((solution) => (
                            <Card key={solution.id} hoverable className="solution-detail-card">
                                <div className="solution-detail-header">
                                    <div className="solution-detail-icon" style={{ background: solution.gradient }}>
                                        <Icon name={solution.icon} size={32} color="white" />
                                    </div>
                                    <div>
                                        <h3 className="solution-detail-title">{solution.title}</h3>
                                        <p className="solution-detail-subtitle">{solution.subtitle}</p>
                                    </div>
                                </div>

                                <p className="solution-detail-description">{solution.description}</p>

                                <div className="solution-detail-features">
                                    <h4>Características principales:</h4>
                                    <ul>
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="feature-check"><FaCheckCircle /></span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
