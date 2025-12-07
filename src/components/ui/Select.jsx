import './Select.css';

const Select = ({
    label,
    error,
    options = [],
    className = '',
    ...props
}) => {
    return (
        <div className={`select-wrapper ${className}`}>
            {label && <label className="select-label">{label}</label>}
            <select
                className={`select ${error ? 'select-error' : ''}`}
                {...props}
            >
                <option value="">Selecciona una opción</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <span className="select-error-message">{error}</span>}
        </div>
    );
};

export default Select;
