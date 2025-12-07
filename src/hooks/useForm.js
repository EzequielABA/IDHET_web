// Custom Hook: Form Management
import { useState } from 'react';

export const useForm = (initialValues = {}, validationRules = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
    };

    const validate = () => {
        const newErrors = {};

        Object.keys(validationRules).forEach((field) => {
            const rules = validationRules[field];
            const value = values[field];

            if (rules.required && !value) {
                newErrors[field] = rules.requiredMessage || 'Este campo es requerido';
            } else if (rules.email && value && !isValidEmail(value)) {
                newErrors[field] = rules.emailMessage || 'Email inválido';
            } else if (rules.minLength && value && value.length < rules.minLength) {
                newErrors[field] = rules.minLengthMessage || `Mínimo ${rules.minLength} caracteres`;
            } else if (rules.maxLength && value && value.length > rules.maxLength) {
                newErrors[field] = rules.maxLengthMessage || `Máximo ${rules.maxLength} caracteres`;
            } else if (rules.custom) {
                const customError = rules.custom(value, values);
                if (customError) {
                    newErrors[field] = customError;
                }
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (onSubmit) => {
        return async (e) => {
            if (e) e.preventDefault();

            const isValid = validate();
            if (!isValid) return;

            setIsSubmitting(true);
            try {
                await onSubmit(values);
            } catch (error) {
                console.error('Form submission error:', error);
            } finally {
                setIsSubmitting(false);
            }
        };
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
        setValues,
        setErrors,
    };
};

// Helper function for email validation
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export default useForm;
