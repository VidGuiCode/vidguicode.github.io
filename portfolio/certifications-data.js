/**
 * Certifications Data
 * Central source of truth for all certifications and badges.
 * No database required - all relationships defined here.
 * 
 * Generic Certification Levels:
 * - Beginner: Entry-level or foundational knowledge (e.g. "Fundamentals", "Foundational")
 * - Intermediate: Role-ready, hands-on experience (e.g. "Associate")
 * - Advanced: Deep or multi-domain expertise (e.g. "Professional", "Expert", "Specialty")
 */

// Certification level definitions with generic ranking
// Higher rank = higher level (used for sorting and "Highest Level" stat)
// Each level also carries i18n keys for its name and description.
const CERT_LEVELS = {
    ADVANCED: {
        rank: 3,
        label: 'Advanced',
        color: '#dc2626',
        description: 'Deep or multi-domain expertise',
        nameKey: 'certifications.level.advanced',
        descriptionKey: 'certifications.level.advanced.desc',
    },
    INTERMEDIATE: {
        rank: 2,
        label: 'Intermediate',
        color: '#2563eb',
        description: 'Role-ready, hands-on experience',
        nameKey: 'certifications.level.intermediate',
        descriptionKey: 'certifications.level.intermediate.desc',
    },
    BEGINNER: {
        rank: 1,
        label: 'Beginner',
        color: '#059669',
        description: 'Entry-level or foundational knowledge',
        nameKey: 'certifications.level.beginner',
        descriptionKey: 'certifications.level.beginner.desc',
    },
};

const CERTIFICATIONS = [
    {
        id: 'azure-az900',
        shortCode: 'badge-Azure-AZ900',
        name: 'Microsoft Certified: Azure Fundamentals',
        nameKey: 'cert.azure.az900.name', // Detail page translation key
        indexTitleKey: 'cert.az900.title', // Compact title for index section
        statusKey: 'cert.az900.status', // Status/subtitle line
        provider: 'Microsoft',
        category: 'Cloud Computing',
        level: CERT_LEVELS.BEGINNER, // Generic level: Beginner / Foundational
        image: 'assets/img/certifications/badge-azure-az900.webp',
        externalUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
        credlyUrl: null, // In progress - not completed yet
        description: 'Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
        descriptionKey: 'cert.azure.az900.description', // Translation key
        skills: ['Cloud Concepts', 'Azure Services', 'Security & Compliance', 'Azure Pricing'],
        skillsKeys: ['cert.azure.az900.skills.cloud', 'cert.azure.az900.skills.services', 'cert.azure.az900.skills.security', 'cert.azure.az900.skills.pricing'], // Translation keys
        relatedProjects: [], // No direct project linkage
        dateEarned: null, // Not completed yet
        expiryDate: null,
        isFree: false, // Not free
        status: 'in-progress', // Status: 'completed' or 'in-progress'
    },
    {
        id: 'microsoft-powerpoint-associate',
        shortCode: 'badge-Microsoft-PowerPoint-Associate',
        name: 'Microsoft Office Specialist: PowerPoint Associate',
        nameKey: 'cert.powerpoint.associate.name', // Detail page translation key
        indexTitleKey: 'cert.ppt.title', // Compact title for index section
        statusKey: 'cert.ppt.status',
        provider: 'Microsoft',
        category: 'Productivity',
        level: CERT_LEVELS.INTERMEDIATE,
        image: 'assets/img/certifications/badge-microsoft-powerpoint-associate.webp',
        externalUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/mos-powerpoint-associate-m365-apps/',
        credlyUrl: 'https://www.credly.com/badges/855f023f-6d1b-450a-bc31-996cb29c9470/public_url',
        description: 'Demonstrates competency in creating, managing, and delivering effective presentations using Microsoft PowerPoint.',
        descriptionKey: 'cert.powerpoint.associate.description', // Translation key
        skills: ['Presentation Design', 'Slide Management', 'Graphics & Media', 'Transitions & Animations'],
        skillsKeys: ['cert.powerpoint.associate.skills.design', 'cert.powerpoint.associate.skills.management', 'cert.powerpoint.associate.skills.graphics', 'cert.powerpoint.associate.skills.transitions'], // Translation keys
        relatedProjects: [], // Add project slugs as needed
        dateEarned: '2025-10-20', // October 20, 2025
        expiryDate: null,
        isFree: false,
        status: 'completed', // Status: 'completed' or 'in-progress'
    },
    {
        id: 'microsoft-word-associate',
        shortCode: 'badge-Microsoft-Word-Associate',
        name: 'Microsoft Office Specialist: Word Associate',
        nameKey: 'cert.word.associate.name', // Detail page translation key
        indexTitleKey: 'cert.word.title',
        statusKey: 'cert.word.status',
        provider: 'Microsoft',
        category: 'Productivity',
        level: CERT_LEVELS.INTERMEDIATE,
        image: 'assets/img/certifications/badge-microsoft-word-associate.webp',
        externalUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/mos-word-associate-m365-apps/',
        credlyUrl: 'https://www.credly.com/badges/8d584202-b65d-4bde-a815-75de44ffe648/public_url',
        description: 'Demonstrates competency in creating and managing professional documents using Microsoft Word.',
        descriptionKey: 'cert.word.associate.description', // Translation key
        skills: ['Document Management', 'Formatting', 'Tables & Lists', 'References & Collaboration'],
        skillsKeys: ['cert.word.associate.skills.management', 'cert.word.associate.skills.formatting', 'cert.word.associate.skills.tables', 'cert.word.associate.skills.references'], // Translation keys
        relatedProjects: [],
        dateEarned: '2025-11-17', // November 17, 2025
        expiryDate: null,
        isFree: false,
        status: 'completed', // Status: 'completed' or 'in-progress'
    },
];

// Project name translations for modal display
const PROJECT_NAMES = {
    'homelab': {
        key: 'project.homelab.name',
        fallback: 'SyntraLab Personal Cloud'
    },
    'gradingdino': {
        key: 'project.gradingdino.name',
        fallback: 'GradingDino'
    },
    'pif': {
        key: 'project.pif.name',
        fallback: 'PIF - Personal Information Form'
    }
};

/**
 * Get certification by ID
 * @param {string} id - Certification ID
 * @returns {object|null} Certification object or null if not found
 */
function getCertificationById(id) {
    return CERTIFICATIONS.find(cert => cert.id === id) || null;
}

/**
 * Get certification by short code (used in tech stacks)
 * @param {string} shortCode - Short code like 'badge-Azure-AZ900'
 * @returns {object|null} Certification object or null if not found
 */
function getCertificationByShortCode(shortCode) {
    return CERTIFICATIONS.find(cert => cert.shortCode === shortCode) || null;
}

/**
 * Get all certifications by category
 * @param {string} category - Category name
 * @returns {array} Array of certification objects
 */
function getCertificationsByCategory(category) {
    return CERTIFICATIONS.filter(cert => cert.category === category);
}

/**
 * Get all certifications by provider
 * @param {string} provider - Provider name
 * @returns {array} Array of certification objects
 */
function getCertificationsByProvider(provider) {
    return CERTIFICATIONS.filter(cert => cert.provider === provider);
}

/**
 * Get all unique categories
 * @returns {array} Array of unique category names
 */
function getAllCategories() {
    return [...new Set(CERTIFICATIONS.map(cert => cert.category))];
}

/**
 * Get all unique providers
 * @returns {array} Array of unique provider names
 */
function getAllProviders() {
    return [...new Set(CERTIFICATIONS.map(cert => cert.provider))];
}

/**
 * Get certifications related to a project
 * @param {string} projectSlug - Project slug/ID
 * @returns {array} Array of certification objects
 */
function getCertificationsByProject(projectSlug) {
    return CERTIFICATIONS.filter(cert => 
        cert.relatedProjects.includes(projectSlug)
    );
}

/**
 * Get all certifications sorted by rank (highest first)
 * @returns {array} Array of certification objects sorted by level rank
 */
function getCertificationsSortedByRank() {
    return [...CERTIFICATIONS].sort((a, b) => {
        // Sort by level rank (descending - highest first)
        return b.level.rank - a.level.rank;
    });
}
