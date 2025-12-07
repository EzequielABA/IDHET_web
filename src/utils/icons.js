// Icon mapping utility for the IDHET project
// Centralized icon management using react-icons
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLightbulb,
    FaRocket,
    FaBolt,
    FaMobileAlt,
    FaLock,
    FaCreditCard,
    FaBullseye,
    FaUserTie,
    FaCheckCircle,
    FaTimes,
    FaInfoCircle,
    FaExclamationTriangle,
    FaBars,
    FaTachometerAlt,
    FaShieldAlt,
    FaClock,
    FaChartLine,
} from 'react-icons/fa';

import {
    IoMdCloudDone,
    IoMdSpeedometer,
} from 'react-icons/io';

import {
    MdSecurity,
    MdDashboard,
    MdAccessTime,
} from 'react-icons/md';

import {
    HiSparkles,
    HiLightningBolt,
} from 'react-icons/hi';

// Export organized icon sets
export const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    facebook: FaFacebook,
};

export const contactIcons = {
    email: FaEnvelope,
    phone: FaPhone,
    location: FaMapMarkerAlt,
};

export const featureIcons = {
    lightbulb: FaLightbulb,
    rocket: FaRocket,
    bolt: FaBolt,
    mobile: FaMobileAlt,
    lock: FaLock,
    card: FaCreditCard,
    target: FaBullseye,
    speed: FaTachometerAlt,
    shield: FaShieldAlt,
    clock: FaClock,
    chart: FaChartLine,
    sparkles: HiSparkles,
    lightning: HiLightningBolt,
    dashboard: MdDashboard,
    security: MdSecurity,
    cloudDone: IoMdCloudDone,
    speedometer: IoMdSpeedometer,
    accessTime: MdAccessTime,
};

export const uiIcons = {
    check: FaCheckCircle,
    close: FaTimes,
    info: FaInfoCircle,
    warning: FaExclamationTriangle,
    menu: FaBars,
    userTie: FaUserTie,
};

// Helper function to get icon component
export const getIcon = (category, name) => {
    const iconSets = {
        social: socialIcons,
        contact: contactIcons,
        feature: featureIcons,
        ui: uiIcons,
    };

    return iconSets[category]?.[name] || null;
};

export default {
    social: socialIcons,
    contact: contactIcons,
    feature: featureIcons,
    ui: uiIcons,
    getIcon,
};
