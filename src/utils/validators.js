// Form Validation Functions

/**
 * Validate email format
 */
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

/**
 * Validate phone number (Dominican format)
 */
export const validatePhone = (phone) => {
    // Accepts formats: 809-555-5555, (809) 555-5555, 8095555555
    const regex = /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return regex.test(phone);
};

/**
 * Validate required field
 */
export const validateRequired = (value) => {
    return value !== null && value !== undefined && value.toString().trim() !== '';
};

/**
 * Validate minimum length
 */
export const validateMinLength = (value, minLength) => {
    return value && value.length >= minLength;
};

/**
 * Validate maximum length
 */
export const validateMaxLength = (value, maxLength) => {
    return value && value.length <= maxLength;
};

/**
 * Validate name (letters, spaces, hyphens only)
 */
export const validateName = (name) => {
    const regex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s-]+$/;
    return regex.test(name);
};

/**
 * Comprehensive form validation
 */
export const validateForm = (formData, rules) => {
    const errors = {};

    Object.keys(rules).forEach((field) => {
        const value = formData[field];
        const fieldRules = rules[field];

        if (fieldRules.required && !validateRequired(value)) {
            errors[field] = fieldRules.requiredMessage || 'Este campo es requerido';
            return;
        }

        if (fieldRules.email && value && !validateEmail(value)) {
            errors[field] = fieldRules.emailMessage || 'Email inválido';
            return;
        }

        if (fieldRules.phone && value && !validatePhone(value)) {
            errors[field] = fieldRules.phoneMessage || 'Teléfono inválido';
            return;
        }

        if (fieldRules.minLength && value && !validateMinLength(value, fieldRules.minLength)) {
            errors[field] = fieldRules.minLengthMessage || `Mínimo ${fieldRules.minLength} caracteres`;
            return;
        }

        if (fieldRules.maxLength && value && !validateMaxLength(value, fieldRules.maxLength)) {
            errors[field] = fieldRules.maxLengthMessage || `Máximo ${fieldRules.maxLength} caracteres`;
            return;
        }

        if (fieldRules.name && value && !validateName(value)) {
            errors[field] = fieldRules.nameMessage || 'Solo letras, espacios y guiones';
            return;
        }

        if (fieldRules.custom && value) {
            const customError = fieldRules.custom(value);
            if (customError) {
                errors[field] = customError;
            }
        }
    });

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/**
 * Contact form validation rules
 */
export const contactFormRules = {
    name: {
        required: true,
        requiredMessage: 'El nombre es requerido',
        name: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        required: true,
        requiredMessage: 'El email es requerido',
        email: true,
    },
    reason: {
        required: true,
        requiredMessage: 'Selecciona un motivo de contacto',
    },
    message: {
        required: true,
        requiredMessage: 'El mensaje es requerido',
        minLength: 10,
        minLengthMessage: 'El mensaje debe tener al menos 10 caracteres',
        maxLength: 500,
        maxLengthMessage: 'El mensaje no puede exceder 500 caracteres',
    },
};
