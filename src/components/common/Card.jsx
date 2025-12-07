import './Card.css';

const Card = ({
    children,
    variant = 'default',
    gradient,
    hoverable = true,
    className = '',
    onClick,
    ...props
}) => {
    const classes = [
        'card',
        `card-${variant}`,
        hoverable && 'card-hoverable',
        className,
    ].filter(Boolean).join(' ');

    const style = gradient ? { background: gradient } : {};

    return (
        <div
            className={classes}
            style={style}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
