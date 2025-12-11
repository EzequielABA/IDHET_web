import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/common/Card';
import Icon from '../components/ui/Icon';
import './Services.css';

const services = [
    {
        id: 'custom-dev',
        title: 'Desarrollo Personalizado',
        description: 'Soluciones digitales a medida para empresas e instituciones.',
        icon: 'lightbulb',
        gradient: 'linear-gradient(135deg, rgba(116,27,242), rgba(35,80,217))'
    },
    {
        id: 'payments',
        title: 'Pagos Electrónicos',
        description: 'Plataformas de pago seguras, rápidas y escalables.',
        icon: 'card',
        gradient: 'linear-gradient(135deg, rgba(35,80,217), rgba(167,221,242))'
    },
    {
        id: 'mobility',
        title: 'Movilidad Urbana',
        description: 'Tecnología para mejorar la experiencia de transporte.',
        icon: 'mobile',
        gradient: 'linear-gradient(135deg, rgba(167,221,242), rgba(189,242,232))'
    },
    {
        id: 'security',
        title: 'Seguridad y Cumplimiento',
        description: 'Encriptación, cumplimiento y protección de datos.',
        icon: 'shield',
        gradient: 'linear-gradient(135deg, rgba(116,27,242), rgba(189,242,232))'
    },
];

const Services = () => {
    return (
        <div className="services-page">
            <Hero
                title="Servicios"
                subtitle="Lo que ofrecemos"
                description="Ayudamos a transformar procesos con tecnología: desarrollo a medida, pagos electrónicos, movilidad urbana y seguridad."
                gradient
                decor="grid"
            />

            <section className="services-section section">
                <div className="container">
                    <SectionTitle subtitle="Portafolio" title="Nuestros Servicios" gradient />

                    <div className="services-grid">
                        {services.map((svc) => (
                            <Card key={svc.id} hoverable className="service-card">
                                <div className="service-icon" style={{ background: svc.gradient }}>
                                    <Icon name={svc.icon} size={32} color="white" />
                                </div>
                                <h3 className="service-title">{svc.title}</h3>
                                <p className="service-description">{svc.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

