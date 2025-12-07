// Icon component that dynamically renders icons based on icon name from data
import { featureIcons } from '../../utils/icons';

const Icon = ({ name, size = 24, color, style, className }) => {
    const IconComponent = featureIcons[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent
            size={size}
            color={color}
            style={style}
            className={className}
        />
    );
};

export default Icon;
