import { forwardRef } from 'react';
import './Div.css';

const Div = forwardRef(({ children, className = '', section = false, container = false, bg = 'none', dynamic = false, ...props }, ref) => {
    const classes = [
        section && 'section',
        container && 'container',
        bg === 'white' && 'bg-white',
        bg === 'gray' && 'bg-gray',
        bg === 'light-blue' && 'bg-light-blue',
        dynamic && 'div-dynamic',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={classes} {...props}>
            {children}
        </div>
    );
});

export default Div;
