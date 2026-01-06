// Projects Data - Single Source of Truth

// Centralized Category Definitions
// Add new categories here - they will automatically appear in filters and translations
const PROJECT_CATEGORIES = {
    'Infrastructure': {
        key: 'projects.category.infrastructure',
        icon: 'server-cog',
        order: 1
    },
    'Web Development': {
        key: 'projects.category.webdev',
        icon: 'code-2',
        order: 2
    },
    'IoT': {
        key: 'projects.category.iot',
        icon: 'sprout',
        order: 3
    },
    'School Projects': {
        key: 'projects.category.school',
        icon: 'graduation-cap',
        order: 4
    },
    'Cloud Computing': {
        key: 'projects.category.cloud',
        icon: 'cloud',
        order: 5
    },
    'DevOps': {
        key: 'projects.category.devops',
        icon: 'git-branch',
        order: 6
    },
    'Networking': {
        key: 'projects.category.networking',
        icon: 'network',
        order: 7
    },
    'Full-Stack': {
        key: 'projects.category.fullstack',
        icon: 'layers',
        order: 8
    },
    'Database': {
        key: 'projects.category.database',
        icon: 'database',
        order: 9
    },
    'Security': {
        key: 'projects.category.security',
        icon: 'shield',
        order: 10
    }
};

// Helper function to get all category names
function getAllCategoryNames() {
    return Object.keys(PROJECT_CATEGORIES);
}

// Helper function to validate if a category exists
function isValidCategory(category) {
    return PROJECT_CATEGORIES.hasOwnProperty(category);
}

const PROJECTS = [
    {
        id: 'homelab',
        name: 'Home Lab Personal Cloud',
        nameKey: 'projects.homelab.title',
        description: 'From March 2025 to present: A hybrid 3-node cluster combining Raspberry Pi, laptop, and Oracle Cloud VPS. Powers custom web apps with SSO, media automation, and a K3s cluster. Continuously maintained and expanded.',
        descriptionKey: 'projects.homelab.desc',
        category: 'Infrastructure',
        categoryKey: 'projects.category.infrastructure',
        categories: ['Infrastructure', 'Cloud Computing', 'DevOps'],
        categoryKeys: ['projects.category.infrastructure', 'projects.category.cloud', 'projects.category.devops'],
        tags: ['K3s', 'Docker', 'WireGuard', 'Tailscale', 'Cloudflare'],
        icon: 'server-cog',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-03',
        dateStarted: '2025-03',
        link: 'project-homelab.html',
        featured: true
    },
    {
        id: 'pif',
        name: 'Smart Plant Monitoring - Final Project',
        nameKey: 'projects.plant.title',
        description: 'Final project from September 2024 to June 2025: Full IoT system with ESP8266 nodes, Raspberry Pi hub, web dashboard, enterprise networking, and automated backups. Presented the completed product as part of the Computer Technician diploma.',
        descriptionKey: 'projects.plant.desc',
        category: 'IoT',
        categoryKey: 'projects.category.iot',
        categories: ['IoT', 'School Projects', 'Full-Stack', 'Networking', 'Database', 'Infrastructure'],
        categoryKeys: ['projects.category.iot', 'projects.category.school', 'projects.category.fullstack', 'projects.category.networking', 'projects.category.database', 'projects.category.infrastructure'],
        tags: ['IoT', 'ESP8266', 'Raspberry Pi', 'MariaDB', 'Networking'],
        icon: 'sprout',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-06',
        dateStarted: '2024-09',
        score: '59/60',
        link: 'project-pif.html',
        featured: true
    },
    {
        id: 'cylro',
        name: 'Cylro',
        nameKey: 'projects.cylro.title',
        description: 'From June 2025, in development: A modular, AI-powered CMS and website builder designed to streamline content creation and site management. Built in partnership with a collaborator.',
        descriptionKey: 'projects.cylro.desc',
        category: 'Web Development',
        categoryKey: 'projects.category.webdev',
        categories: ['Web Development', 'Full-Stack', 'Infrastructure', 'Cloud Computing', 'DevOps', 'Database', 'Security'],
        categoryKeys: ['projects.category.webdev', 'projects.category.fullstack', 'projects.category.infrastructure', 'projects.category.cloud', 'projects.category.devops', 'projects.category.database', 'projects.category.security'],
        tags: ['AI', 'CMS', 'Web Dev'],
        icon: 'layout',
        status: 'in-development',
        statusKey: 'projects.status.inDevelopment',
        dateStarted: '2025-06',
        link: null,
        featured: true
    },
    {
        id: 'gradingdino',
        name: 'GradingDino',
        nameKey: 'projects.gradingdino.title',
        description: 'From October 2025 to November 2025: A grade management system built with Django. Teachers create classrooms and manage student grades, while students track their progress. Group project MVP — learned valuable lessons about framework selection.',
        descriptionKey: 'projects.gradingdino.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Web Development', 'Full-Stack', 'Database'],
        categoryKeys: ['projects.category.school', 'projects.category.webdev', 'projects.category.fullstack', 'projects.category.database'],
        tags: ['Django', 'PostgreSQL', 'Docker', 'Team Project'],
        icon: 'graduation-cap',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-11',
        dateStarted: '2025-10',
        link: 'project-gradingdino.html',
        featured: true
    },
    {
        id: 'portfolio',
        name: 'Portfolio Website',
        nameKey: 'projects.portfolio.title',
        description: 'From November 2025 to present: A fully custom portfolio website built from scratch with vanilla HTML, CSS, and JavaScript. Features a unique server rack aesthetic, dynamic content system with centralized data files, multi-language support (EN, PT, LU, DE, FR), comprehensive SEO optimization, accessibility features, and performance enhancements. Includes dedicated pages for projects and certifications with filtering, modals, and responsive design. Continuously maintained and expanded with new features.',
        descriptionKey: 'projects.portfolio.desc',
        category: 'Web Development',
        categoryKey: 'projects.category.webdev',
        categories: ['Web Development', 'Full-Stack'],
        categoryKeys: ['projects.category.webdev', 'projects.category.fullstack'],
        tags: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Accessibility', 'Performance'],
        icon: 'code-2',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-11',
        dateStarted: '2025-11',
        link: null,
        featured: false
    }
];

// Helper Functions
function getAllProjects() {
    return PROJECTS;
}

function getProjectById(id) {
    return PROJECTS.find(p => p.id === id);
}

function getProjectsByCategory(category) {
    if (!category || category === 'all') return PROJECTS;
    return PROJECTS.filter(p => {
        // Check if project has this category in its categories array or single category
        if (p.categories && p.categories.length > 0) {
            return p.categories.includes(category);
        }
        return p.category === category;
    });
}

function getFeaturedProjects() {
    return PROJECTS.filter(p => p.featured);
}

function getCategories() {
    // Return all categories in defined order from PROJECT_CATEGORIES
    // This includes categories even if no projects use them yet
    return getAllCategoryNames().sort((a, b) => {
        const orderA = PROJECT_CATEGORIES[a]?.order || 999;
        const orderB = PROJECT_CATEGORIES[b]?.order || 999;
        return orderA - orderB;
    });
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PROJECTS,
        PROJECT_CATEGORIES,
        getAllProjects,
        getProjectById,
        getProjectsByCategory,
        getFeaturedProjects,
        getCategories,
        getAllCategoryNames,
        isValidCategory
    };
}

