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
        relatedFormations: ['azure-fundamentals-training'], // IDs of related formations/trainings
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
        relatedProjects: ['pif', 'gradingdino'], // Used in PIF and GradingDino projects for documentation
        relatedFormations: [], // IDs of related formations/trainings
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
        relatedProjects: ['pif', 'gradingdino'], // Used in PIF and GradingDino projects for documentation
        relatedFormations: [], // IDs of related formations/trainings
        dateEarned: '2025-11-17', // November 17, 2025
        expiryDate: null,
        isFree: false,
        status: 'completed', // Status: 'completed' or 'in-progress'
    },
];

/**
 * Formations/Trainings Data
 * These are training sessions, courses, or workshops that may or may not lead to certifications.
 * Formations can exist independently or be linked to certifications.
 */
const FORMATIONS = [
    {
        id: 'azure-fundamentals-training',
        name: 'Azure Fundamentals (AZ-900) Training',
        nameKey: 'formation.azure.az900.name',
        provider: 'Microsoft',
        category: 'Cloud Computing',
        description: 'Training course covering Azure Fundamentals concepts as preparation for the AZ-900 certification exam.',
        descriptionKey: 'formation.azure.az900.description',
        dateCompleted: '2025-11-27', // Date when training was completed
        duration: '1 day', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: ['azure-az900'], // Linked to AZ-900 certification
        skills: ['Cloud Concepts', 'Azure Services', 'Security & Compliance', 'Azure Pricing'],
        skillsKeys: ['cert.azure.az900.skills.cloud', 'cert.azure.az900.skills.services', 'cert.azure.az900.skills.security', 'cert.azure.az900.skills.pricing'],
        notes: 'Attended this training as part of my BTS Cloud Computing program at LGK. Preparing for AZ-900 certification.',
        notesKey: 'formation.azure.az900.notes',
    },
    {
        id: 'pl-900-training',
        name: 'Power Platform Fundamentals (PL-900) Training',
        nameKey: 'formation.pl900.name',
        provider: 'Microsoft',
        category: 'Cloud Computing',
        description: 'Full-day training course at Lycée Guillaume Kroll (LGK) as part of BTS Cloud Computing program. Course runs from 9h to 17h where a trainer explains PL-900 concepts and Power Platform fundamentals.',
        descriptionKey: 'formation.pl900.description',
        dateCompleted: '2025-12-05', // Date when training was completed
        duration: '1 day (9h-17h)', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // IDs of related certifications (empty - certification not yet decided)
        skills: ['Power Platform', 'Power Apps', 'Power Automate', 'Power BI'],
        skillsKeys: ['formation.pl900.skills.platform', 'formation.pl900.skills.apps', 'formation.pl900.skills.automate', 'formation.pl900.skills.bi'],
        notes: 'Attended this training as part of my BTS Cloud Computing program at LGK. Learned PL-900 content through instructor-led sessions.',
        notesKey: 'formation.pl900.notes',
    },
    // Add more formations as needed
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
 * Cached for performance - only recomputes if CERTIFICATIONS array changes
 * @returns {array} Array of certification objects sorted by level rank
 */
let _cachedSortedCerts = null;
let _cachedCertsLength = 0;

function getCertificationsSortedByRank() {
    // Cache sorted results (only recompute if array length changed)
    if (!_cachedSortedCerts || CERTIFICATIONS.length !== _cachedCertsLength) {
        _cachedSortedCerts = [...CERTIFICATIONS].sort((a, b) => {
            // Sort by level rank (descending - highest first)
            return b.level.rank - a.level.rank;
        });
        _cachedCertsLength = CERTIFICATIONS.length;
    }
    return _cachedSortedCerts;
}

/**
 * Get formation by ID
 * @param {string} id - Formation ID
 * @returns {object|null} Formation object or null if not found
 */
function getFormationById(id) {
    return FORMATIONS.find(formation => formation.id === id) || null;
}

/**
 * Get all formations
 * @returns {array} Array of all formation objects
 */
function getAllFormations() {
    return FORMATIONS;
}

/**
 * Get formations related to a certification
 * @param {string} certId - Certification ID
 * @returns {array} Array of formation objects
 */
function getFormationsByCertification(certId) {
    return FORMATIONS.filter(formation => 
        formation.relatedCertifications && formation.relatedCertifications.includes(certId)
    );
}

/**
 * Get certifications related to a formation
 * @param {string} formationId - Formation ID
 * @returns {array} Array of certification objects
 */
function getCertificationsByFormation(formationId) {
    const formation = getFormationById(formationId);
    if (!formation || !formation.relatedCertifications) return [];
    return formation.relatedCertifications
        .map(certId => getCertificationById(certId))
        .filter(cert => cert !== null);
}

/**
 * Get all items (certifications + formations) sorted appropriately
 * @returns {array} Combined array with type indicator
 */
function getAllItemsSorted() {
    const certs = CERTIFICATIONS.map(cert => ({ ...cert, type: 'certification' }));
    const forms = FORMATIONS.map(form => ({ ...form, type: 'formation' }));
    
    // Sort certifications by rank, formations by date (newest first)
    const sortedCerts = certs.sort((a, b) => b.level.rank - a.level.rank);
    const sortedForms = forms.sort((a, b) => {
        if (!a.dateCompleted || !b.dateCompleted) return 0;
        return new Date(b.dateCompleted) - new Date(a.dateCompleted);
    });
    
    // Certifications first, then formations
    return [...sortedCerts, ...sortedForms];
}
