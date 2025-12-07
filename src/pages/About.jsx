import { FaBullseye, FaRocket } from 'react-icons/fa';
import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/common/Card';
import { companyValues } from '../data/benefits.data';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Hero
                title="Sobre IDHET"
                subtitle="Nuestra Historia"
                description="Somos una empresa tecnológica dominicana comprometida con simplificar la vida cotidiana a través de soluciones digitales innovadoras."
                gradient
            />

            <section className="about-story-section section">
                <div className="container">
                    <SectionTitle
                        subtitle="¿Quiénes Somos?"
                        title="Innovación Dominicana al Servicio de Todos"
                        gradient
                    />

                    <div className="about-content-box">
                        <p className="about-lead">
                            IDHET nace de la necesidad de transformar la manera en que los dominicanos acceden
                            a servicios esenciales del día a día.
                        </p>
                        <p>
                            Somos una empresa tecnológica dominicana creada para desarrollar soluciones digitales
                            que simplifiquen la vida cotidiana de la población, con un enfoque especial en movilidad
                            urbana y pagos electrónicos.
                        </p>
                        <p>
                            Nuestro primer gran logro, <strong>MetroCard</strong>, revolucionó la forma en que los
                            usuarios del Metro y Teleférico de Santo Domingo recargan sus tarjetas. Hoy, somos la
                            única plataforma que permite hacer este proceso completamente online, en menos de 30
                            segundos y desde cualquier lugar.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mission-vision-section section bg-gray-100">
                <div className="container">
                    <div className="mission-vision-grid">
                        <Card hoverable className="mission-card">
                            <div className="mv-icon"><FaBullseye /></div>
                            <h3>Nuestra Misión</h3>
                            <p>
                                Desarrollar soluciones tecnológicas innovadoras que democraticen el acceso a servicios
                                digitales en República Dominicana, mejorando la calidad de vida de todos los ciudadanos.
                            </p>
                        </Card>

                        <Card hoverable className="vision-card">
                            <div className="mv-icon"><FaRocket /></div>
                            <h3>Nuestra Visión</h3>
                            <p>
                                Ser la empresa líder en soluciones digitales en el Caribe, reconocida por nuestra
                                innovación, confiabilidad y compromiso con la excelencia en cada proyecto.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="values-section section">
                <div className="container">
                    <SectionTitle
                        subtitle="Nuestros Valores"
                        title="Principios que nos guían"
                        gradient
                    />

                    <div className="values-grid">
                        {companyValues.map((item, index) => (
                            <Card key={index} hoverable className="value-card">
                                <h4 className="value-title">{item.value}</h4>
                                <p className="value-description">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
