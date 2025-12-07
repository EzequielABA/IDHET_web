import './SectionTitle.css';

const SectionTitle = ({
    title,
    subtitle,
    gradient = false,
    align = 'center',
    className = ''
}) => {
    return (
        <div className={`section-title ${className}`} style={{ textAlign: align }}>
            {subtitle && (
                <p className="section-subtitle">{subtitle}</p>
            )}
            <h2 className={`section-heading ${gradient ? 'gradient-text' : ''}`}>
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
