import Hero from '../../components/features/hero/Hero';
import '../legal/PrivacyPolicy.css';

const TermsConditions = () => {
    return (
        <div className="legal-page">
            <Hero
                title="Términos y Condiciones"
                subtitle="Legal"
                description="Última actualización: Diciembre 2024"
            />

            <section className="legal-content section">
                <div className="container">
                    <div className="legal-text">
                        <h2>1. Aceptación de Términos</h2>
                        <p>
                            Al acceder y utilizar los servicios de IDHET SRL, aceptas estar sujeto a estos términos
                            y condiciones.
                        </p>

                        <h2>2. Uso de Servicios</h2>
                        <p>Nuestros servicios están destinados a:</p>
                        <ul>
                            <li>Usuarios mayores de 18 años</li>
                            <li>Residentes en República Dominicana</li>
                            <li>Uso personal y no comercial (a menos que se acuerde lo contrario)</li>
                        </ul>

                        <h2>3. Cuenta de Usuario</h2>
                        <p>
                            Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
                            Notifícanos inmediatamente sobre cualquier uso no autorizado.
                        </p>

                        <h2>4. Transacciones</h2>
                        <p>
                            Todas las transacciones realizadas a través de nuestros servicios son finales.
                            Los reembolsos se manejan caso por caso según nuestra política de reembolsos.
                        </p>

                        <h2>5. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido, marcas y materiales en nuestros servicios son propiedad de IDHET SRL
                            o sus licenciantes.
                        </p>

                        <h2>6. Limitación de Responsabilidad</h2>
                        <p>
                            IDHET SRL no será responsable por daños indirectos, incidentales o consecuentes
                            derivados del uso de nuestros servicios.
                        </p>

                        <h2>7. Modificaciones</h2>
                        <p>
                            Nos reservamos el derecho de modificar estos términos en cualquier momento.
                            Los cambios entrarán en vigencia inmediatamente después de su publicación.
                        </p>

                        <h2>8. Contacto</h2>
                        <p>
                            Para preguntas sobre estos términos, contáctanos en:{' '}
                            <a href="mailto:legal@idhet.com">legal@idhet.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
