import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import Hero from '../components/features/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import Select from '../components/ui/Select';
import Button from '../components/common/Button';
import useForm from '../hooks/useForm';
import { CONTACT_REASONS } from '../utils/constants';
import './Contact.css';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle');

    const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
        {
            name: '',
            email: '',
            reason: '',
            message: '',
        },
        {
            name: {
                required: true,
                requiredMessage: 'El nombre es requerido',
            },
            email: {
                required: true,
                requiredMessage: 'El email es requerido',
                email: true,
            },
            reason: {
                required: true,
                requiredMessage: 'Selecciona un motivo',
            },
            message: {
                required: true,
                requiredMessage: 'El mensaje es requerido',
                minLength: 10,
                minLengthMessage: 'El mensaje debe tener al menos 10 caracteres',
            },
        }
    );

    const onSubmit = async (formData) => {
        console.log('Form submitted:', formData);
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 3000);
    };

    return (
        <div className="contact-page">
            <Hero
                title="Contáctanos"
                subtitle="Estamos aquí para ayudarte"
                description="¿Tienes  alguna pregunta o quieres conocer más sobre nuestros servicios? Escríbenos y te responderemos pronto."
                gradient
            />

            <section className="contact-form-section section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <SectionTitle
                                subtitle="Información"
                                title="Múltiples formas de contactarnos"
                                align="left"
                            />
                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>contacto@idhet.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><FaPhone /></div>
                                    <div>
                                        <h4>Teléfono</h4>
                                        <p>+1 (809) 555-0100</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <h4>Ubicación</h4>
                                        <p>Santo Domingo, República Dominicana</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><FaClock /></div>
                                    <div>
                                        <h4>Horario</h4>
                                        <p>Lun - Vie: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                                <Input
                                    label="Nombre Completo *"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.name}
                                    placeholder="Tu nombre"
                                />

                                <Input
                                    label="Email *"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email}
                                    placeholder="tu@email.com"
                                />

                                <Select
                                    label="Motivo de Contacto *"
                                    name="reason"
                                    value={values.reason}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.reason}
                                    options={CONTACT_REASONS}
                                />

                                <TextArea
                                    label="Mensaje *"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.message}
                                    placeholder="Cuéntanos cómo podemos ayudarte..."
                                    rows={6}
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    fullWidth
                                >
                                    Enviar Mensaje
                                </Button>

                                {formStatus === 'success' && (
                                    <div className="form-success">
                                        <FaCheckCircle /> ¡Mensaje enviado! Te contactaremos pronto.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
