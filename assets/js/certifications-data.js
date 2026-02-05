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
        credlyUrl: 'https://www.credly.com/badges/241c91cc-eda3-4440-a17f-94f741d7d22d/public_url',
        description: 'Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
        descriptionKey: 'cert.azure.az900.description', // Translation key
        skills: ['Cloud Concepts', 'Azure Services', 'Security & Compliance', 'Azure Pricing'],
        skillsKeys: ['cert.azure.az900.skills.cloud', 'cert.azure.az900.skills.services', 'cert.azure.az900.skills.security', 'cert.azure.az900.skills.pricing'], // Translation keys
        relatedProjects: [], // No direct project linkage
        relatedFormations: ['azure-fundamentals-training'], // IDs of related formations/trainings
        dateEarned: '2026-01-26', // January 26, 2026
        expiryDate: null,
        isFree: false, // Not free
        status: 'completed', // Status: 'completed' or 'in-progress'
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
    {
        id: 'microsoft-word-expert',
        shortCode: 'badge-Microsoft-Word-Expert',
        name: 'Microsoft Office Specialist: Word Expert',
        nameKey: 'cert.word.expert.name', // Detail page translation key
        indexTitleKey: 'cert.word.expert.title', // Compact title for index section
        statusKey: 'cert.word.expert.status',
        provider: 'Microsoft',
        category: 'Productivity',
        level: CERT_LEVELS.ADVANCED, // Expert level is Advanced
        image: 'assets/img/certifications/badge-microsoft-word-expert.webp',
        externalUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/mos-word-expert-m365-apps/',
        credlyUrl: 'https://www.credly.com/badges/0ca263bf-4549-4f54-aa46-2a4144528ef5/public_url',
        description: 'Demonstrates advanced expertise in creating and managing complex documents using Microsoft Word, including advanced formatting, custom document elements, macros, and automation.',
        descriptionKey: 'cert.word.expert.description', // Translation key
        skills: ['Advanced Formatting', 'Custom Document Elements', 'Macros & Automation', 'Advanced Word Features'],
        skillsKeys: ['cert.word.expert.skills.formatting', 'cert.word.expert.skills.elements', 'cert.word.expert.skills.macros', 'cert.word.expert.skills.features'], // Translation keys
        relatedProjects: ['pif', 'gradingdino'], // Used in PIF and GradingDino projects for documentation
        relatedFormations: [], // IDs of related formations/trainings
        dateEarned: '2026-01-19', // January 19, 2026
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
        provider: 'Deep',
        category: 'Cloud Computing',
        description: 'Attended a full-day training course (9h-17h) covering Azure Fundamentals concepts as preparation for the AZ-900 certification exam. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.',
        descriptionKey: 'formation.azure.az900.description',
        dateCompleted: '2025-11-27', // Date when training was completed
        duration: '1 day', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: ['azure-az900'], // Linked to AZ-900 certification
        skills: ['Cloud Concepts', 'Azure Services', 'Security & Compliance', 'Azure Pricing'],
        skillsKeys: ['cert.azure.az900.skills.cloud', 'cert.azure.az900.skills.services', 'cert.azure.az900.skills.security', 'cert.azure.az900.skills.pricing'],
        logo: 'assets/img/logos/azure-logo.webp', // Azure logo (certification issuer)
    },
    {
        id: 'pl-900-training',
        name: 'Power Platform Fundamentals (PL-900) Training',
        nameKey: 'formation.pl900.name',
        provider: 'Deep',
        category: 'Cloud Computing',
        description: 'Attended a full-day training course (9h-17h) covering PL-900 concepts and Power Platform fundamentals. Hosted by Deep (POST Luxembourg Group) and conducted by a trainer from their team, as part of my BTS Cloud Computing program at LGK.',
        descriptionKey: 'formation.pl900.description',
        dateCompleted: '2025-12-05', // Date when training was completed
        duration: '1 day (9h-17h)', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // IDs of related certifications (empty - certification not yet decided)
        skills: ['Power Platform', 'Power Apps', 'Power Automate', 'Power BI'],
        skillsKeys: ['formation.pl900.skills.platform', 'formation.pl900.skills.apps', 'formation.pl900.skills.automate', 'formation.pl900.skills.bi'],
        logo: 'assets/img/logos/power-platform-logo.webp', // Power Platform logo (certification issuer)
    },
    {
        id: 'sustainable-cloud-workshop',
        name: 'Sustainable Cloud Workshop',
        nameKey: 'formation.sustainablecloud.name',
        provider: 'Arηs Group',
        category: 'Cloud Computing',
        description: 'Attended a 3-hour presentation/workshop on Sustainable Cloud, focusing on environmental impact and sustainable practices in cloud computing. Hosted by Arηs Group and conducted by a representative from their team, as part of my BTS Cloud Computing program at LGK.',
        descriptionKey: 'formation.sustainablecloud.description',
        dateCompleted: '2026-01-06', // January 6, 2026
        duration: '3 hours', // Duration of training (rounded from 2h45)
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // No related certification
        skills: ['Sustainable Cloud', 'Environmental Impact', 'Cloud Best Practices', 'Green IT'],
        skillsKeys: ['formation.sustainablecloud.skills.sustainable', 'formation.sustainablecloud.skills.environmental', 'formation.sustainablecloud.skills.practices', 'formation.sustainablecloud.skills.greenit'],
        logo: 'assets/img/logos/arns-group-logo-white.webp', // Arηs Group logo - white version for dark mode
        logoLight: null, // No light version available - will need dark version or CSS filter
        logoDark: 'assets/img/logos/arns-group-logo-white.webp', // White logo for dark backgrounds
    },
    {
        id: 'luxconnect-datacenter-visit',
        name: 'LuxConnect Data Center Visit',
        nameKey: 'formation.luxconnect.name',
        provider: 'LuxConnect',
        category: 'Infrastructure',
        description: 'Visited the Tier IV LuxConnect data center in Bettembourg with my Cloud Computing class (both 1st and 2nd year students), organized by the 2nd year students through LGK. What stood out most was the incredible level of organization—everything is color-coded and labeled, from power lines to cooling systems. The redundancy is impressive: dual power paths, UPS systems, generators that kick in within seconds, and the facility can run autonomously for days. Efficiency metrics are excellent (PUE ~1.5, WUE ~0.2), and they even reuse waste heat. It\'s no surprise they\'ve maintained zero SLA downtime since 2009 with this level of structure and redundancy.',
        descriptionKey: 'formation.luxconnect.description',
        descriptionImages: [
            {
                src: 'assets/img/trainings/luxconnect/badgeLuxconnect.webp',
                alt: 'LuxConnect Visitor Badge'
            },
            {
                src: 'assets/img/trainings/luxconnect/classGroupPictureLuxconnect.webp',
                alt: 'LuxConnect Data Center Visit - Class Group Photo'
            }
        ],
        dateCompleted: '2026-01-09', // January 9, 2026
        duration: '4 hours', // Duration of visit
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'LuxConnect, Bettembourg', // Location/context
        relatedCertifications: [], // No related certification
        skills: ['Tier IV Data Center', 'Infrastructure Redundancy', 'Power Systems', 'Cooling Efficiency', 'Data Center Operations'],
        skillsKeys: ['formation.luxconnect.skills.tier4', 'formation.luxconnect.skills.redundancy', 'formation.luxconnect.skills.power', 'formation.luxconnect.skills.cooling', 'formation.luxconnect.skills.operations'],
        logo: 'assets/img/logos/luxconnect-icon.webp', // LuxConnect logo
    },
    {
        id: 'restena-phishing-training',
        name: 'Phishing',
        nameKey: 'formation.restena.phishing.name',
        provider: 'Fondation Restena',
        category: 'Security',
        description: 'Attended a 3-hour presentation/workshop on Phishing, focusing on various phishing methods, prevention techniques, and social engineering. Hosted by Fondation Restena and conducted by a representative from their team, as part of my BTS Cloud Computing program at LGK.',
        descriptionKey: 'formation.restena.phishing.description',
        dateCompleted: '2025-12-16', // December 16, 2025
        duration: '3 hours', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // No related certification
        skills: ['Phishing Methods', 'Social Engineering', 'Security Awareness', 'Prevention Techniques'],
        skillsKeys: ['formation.restena.phishing.skills.methods', 'formation.restena.phishing.skills.social', 'formation.restena.phishing.skills.awareness', 'formation.restena.phishing.skills.prevention'],
        logo: 'assets/img/logos/restena-logo.webp', // Restena logo
    },
    {
        id: 'blockchain-introduction-training-part1',
        name: 'Blockchain Introduction (Part 1 of 3)',
        nameKey: 'formation.blockchain.intro.part1.name',
        provider: 'The Blockchain Academy',
        category: 'Blockchain',
        description: 'A proper introduction to blockchain: what it is, how it works, and why it matters. We set up Metamask, got to know the Sepolia testnet and faucets, and were asked to mine some Sepolia ETH at home; we then shared our Ethereum public addresses with the presenter for the next steps. The Blockchain Academy at Lycée Guillaume Kroll (LGK), BTS Cloud Computing.',
        descriptionKey: 'formation.blockchain.intro.part1.description',
        dateCompleted: '2026-01-20', // January 20, 2026
        duration: '3 hours (Part 1 of 3)', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // No related certification
        skills: ['Blockchain Fundamentals', 'Distributed Ledger Technology', 'Cryptocurrency Concepts', 'Blockchain Applications'],
        skillsKeys: ['formation.blockchain.intro.skills.fundamentals', 'formation.blockchain.intro.skills.dlt', 'formation.blockchain.intro.skills.crypto', 'formation.blockchain.intro.skills.applications'],
        logo: 'assets/img/logos/blockchain-academy-logo.webp', // The Blockchain Academy logo
    },
    {
        id: 'blockchain-introduction-training-part2',
        name: 'Blockchain Introduction (Part 2 of 3)',
        nameKey: 'formation.blockchain.intro.part2.name',
        provider: 'The Blockchain Academy',
        category: 'Blockchain',
        description: 'The presenter explained mining and had planned to distribute NFTs, but with many of us not having mined yet, that was pushed to Part 3. We still went through how to mine, the ethics around it, and more theory so the course could continue. The Blockchain Academy at Lycée Guillaume Kroll (LGK), BTS Cloud Computing.',
        descriptionKey: 'formation.blockchain.intro.part2.description',
        dateCompleted: '2026-01-27', // January 27, 2026
        duration: '3 hours (Part 2 of 3)', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // No related certification
        skills: ['Blockchain Fundamentals', 'Distributed Ledger Technology', 'Cryptocurrency Concepts', 'Blockchain Applications'],
        skillsKeys: ['formation.blockchain.intro.skills.fundamentals', 'formation.blockchain.intro.skills.dlt', 'formation.blockchain.intro.skills.crypto', 'formation.blockchain.intro.skills.applications'],
        logo: 'assets/img/logos/blockchain-academy-logo.webp', // The Blockchain Academy logo
    },
    {
        id: 'blockchain-introduction-training-part3',
        name: 'Blockchain Introduction (Part 3 of 3)',
        nameKey: 'formation.blockchain.intro.part3.name',
        provider: 'The Blockchain Academy',
        category: 'Blockchain',
        description: 'Everyone received their NFT; we sold it to the person next to us to experience a real peer-to-peer trade. He showed how to create an NFT, used IPFS to explain where they live and how the tech works, and demonstrated a Metamask-based voting app where NFT holders could vote. The Blockchain Academy at Lycée Guillaume Kroll (LGK), BTS Cloud Computing.',
        descriptionKey: 'formation.blockchain.intro.part3.description',
        dateCompleted: '2026-02-03', // February 3, 2026
        duration: '3 hours (Part 3 of 3)', // Duration of training
        format: 'In-person', // Format: 'In-person', 'Online', 'Hybrid'
        location: 'Lycée Guillaume Kroll (LGK)', // Location/context
        relatedCertifications: [], // No related certification
        skills: ['Blockchain Fundamentals', 'Distributed Ledger Technology', 'Cryptocurrency Concepts', 'Blockchain Applications'],
        skillsKeys: ['formation.blockchain.intro.skills.fundamentals', 'formation.blockchain.intro.skills.dlt', 'formation.blockchain.intro.skills.crypto', 'formation.blockchain.intro.skills.applications'],
        logo: 'assets/img/logos/blockchain-academy-logo.webp', // The Blockchain Academy logo
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
 * Get all unique categories (from both certifications and formations)
 * @returns {array} Array of unique category names
 */
function getAllCategories() {
    const certCategories = CERTIFICATIONS.map(cert => cert.category);
    const formCategories = FORMATIONS.map(form => form.category);
    return [...new Set([...certCategories, ...formCategories])];
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
 * Get all formations sorted by date (newest first)
 * Filters out future trainings (dateCompleted is in the future)
 * @returns {array} Array of formation objects sorted by dateCompleted (newest first)
 */
function getFormationsSortedByDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
    
    return [...FORMATIONS]
        .filter(formation => {
            // Only include formations that have been completed (date is in the past or today)
            if (!formation.dateCompleted) return false;
            const completedDate = new Date(formation.dateCompleted);
            completedDate.setHours(0, 0, 0, 0);
            return completedDate <= today;
        })
        .sort((a, b) => {
            if (!a.dateCompleted || !b.dateCompleted) return 0;
            return new Date(b.dateCompleted) - new Date(a.dateCompleted); // Newest first
        });
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
 * Filters out future trainings (dateCompleted is in the future)
 * @returns {array} Combined array with type indicator
 */
function getAllItemsSorted() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
    
    const certs = CERTIFICATIONS.map(cert => ({ ...cert, type: 'certification' }));
    
    // Filter out future formations
    const forms = FORMATIONS
        .filter(formation => {
            // Only include formations that have been completed (date is in the past or today)
            if (!formation.dateCompleted) return false;
            const completedDate = new Date(formation.dateCompleted);
            completedDate.setHours(0, 0, 0, 0);
            return completedDate <= today;
        })
        .map(form => ({ ...form, type: 'formation' }));
    
    // Sort certifications by rank, formations by date (newest first)
    const sortedCerts = certs.sort((a, b) => b.level.rank - a.level.rank);
    const sortedForms = forms.sort((a, b) => {
        if (!a.dateCompleted || !b.dateCompleted) return 0;
        return new Date(b.dateCompleted) - new Date(a.dateCompleted);
    });
    
    // Certifications first, then formations
    return [...sortedCerts, ...sortedForms];
}
