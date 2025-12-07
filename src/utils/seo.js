// SEO Utility Functions

/**
 * Update document title
 */
export const updateTitle = (title) => {
    document.title = title;
};

/**
 * Update meta tag
 */
export const updateMetaTag = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
};

/**
 * Update Open Graph meta tag
 */
export const updateOGTag = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
};

/**
 * Set page SEO
 */
export const setPageSEO = ({ title, description, keywords, image, url }) => {
    // Update title
    if (title) {
        updateTitle(title);
    }

    // Update meta description
    if (description) {
        updateMetaTag('description', description);
    }

    // Update keywords
    if (keywords) {
        updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    if (title) {
        updateOGTag('og:title', title);
    }
    if (description) {
        updateOGTag('og:description', description);
    }
    if (image) {
        updateOGTag('og:image', image);
    }
    if (url) {
        updateOGTag('og:url', url);
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    if (title) {
        updateMetaTag('twitter:title', title);
    }
    if (description) {
        updateMetaTag('twitter:description', description);
    }
    if (image) {
        updateMetaTag('twitter:image', image);
    }
};
