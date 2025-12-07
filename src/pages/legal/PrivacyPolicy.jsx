import Hero from '../../components/features/hero/Hero';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <Hero
                title="Política de Privacidad"
                subtitle="Legal"
                description="Última actualización: Diciembre 2024"
            />

            <section className="legal-content section">
                <div className="container">
                    <div className="legal-text">
                        <h2>1. Introducción</h2>
                        <p>
                            En IDHET, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política
                            describe cómo recopilamos, usamos y protegemos tu información personal.
                        </p>

                        <h2>2. Información que Recopilamos</h2>
                        <p>Recopilamos los siguientes tipos de información:</p>
                        <ul>
                            <li>Información de contacto (nombre, email, teléfono)</li>
                            <li>Información de transacciones y pagos</li>
                            <li>Datos de uso de la aplicación</li>
                            <li>Información del dispositivo</li>
                        </ul>

                        <h2>3. Uso de la Información</h2>
                        <p>Utilizamos tu información para:</p>
                        <ul>
                            <li>Procesar tus transacciones</li>
                            <li>Mejorar nuestros servicios</li>
                            <li>Enviar notificaciones importantes</li>
                            <li>Cumplir con requisitos legales</li>
                        </ul>

                        <h2>4. Protección de Datos</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos
                            personales contra acceso no autorizado, pérdida o alteración.
                        </p>

                        <h2>5. Compartición de Información</h2>
                        <p>
                            No compartimos tu información personal con terceros excepto cuando sea necesario para
                            prestar nuestros servicios o cuando la ley lo requiera.
                        </p>

                        <h2>6. Tus Derechos</h2>
                        <p>Tienes derecho a:</p>
                        <ul>
                            <li>Acceder a tu información personal</li>
                            <li>Solicitar correcciones</li>
                            <li>Eliminar tu cuenta</li>
                            <li>Oponerte al procesamiento de datos</li>
                        </ul>

                        <h2>7. Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta política, contáctanos en:{' '}
                            <a href="mailto:privacidad@idhet.com">privacidad@idhet.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
