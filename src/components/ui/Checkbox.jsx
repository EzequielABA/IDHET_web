import './Checkbox.css';

const Checkbox = ({
    label,
    checked,
    onChange,
    name,
    error,
    className = '',
    ...props
}) => {
    return (
        <div className={`checkbox-wrapper ${className}`}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    className="checkbox-input"
                    {...props}
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">{label}</span>
            </label>
            {error && <span className="checkbox-error">{error}</span>}
        </div>
    );
};

export default Checkbox;
