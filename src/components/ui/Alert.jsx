import './Alert.css';

const Alert = ({
    type = 'info',
    title,
    message,
    onClose,
    children
}) => {
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    return (
        <div className={`alert alert-${type}`} role="alert">
            <div className="alert-icon">{icons[type]}</div>
            <div className="alert-content">
                {title && <div className="alert-title">{title}</div>}
                {message && <div className="alert-message">{message}</div>}
                {children}
            </div>
            {onClose && (
                <button className="alert-close" onClick={onClose} aria-label="Close">
                    ✕
                </button>
            )}
        </div>
    );
};

export default Alert;
