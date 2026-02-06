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
        description: 'From March 2025 to present: I built this hybrid 3-node cluster using a Raspberry Pi, an old laptop, and an Oracle Cloud VPS. It runs my custom web apps with single sign-on, handles my media automation, and hosts a K3s Kubernetes cluster. I keep adding new features and services as I learn more.',
        descriptionKey: 'projects.homelab.desc',
        category: 'Infrastructure',
        categoryKey: 'projects.category.infrastructure',
        categories: ['Infrastructure', 'Cloud Computing', 'DevOps', 'Full-Stack', 'Security', 'Networking', 'Database', 'Web Development'],
        categoryKeys: ['projects.category.infrastructure', 'projects.category.cloud', 'projects.category.devops', 'projects.category.fullstack', 'projects.category.security', 'projects.category.networking', 'projects.category.database', 'projects.category.webdev'],
        tags: ['Raspberry Pi 5', 'K3s', 'Kubernetes', 'Docker', 'Docker Compose', 'FastAPI', 'Python', 'SvelteKit', 'WireGuard', 'Caddy', 'Traefik', 'Cloudflare', 'Oracle Cloud', 'JWT', 'SQLite', 'Alembic', 'Argon2', 'Portainer', 'Uptime Monitoring', 'Playwright', 'Mistral', 'AI', 'Jellyfin', 'Radarr', 'Sonarr', 'Bazarr', 'ClamAV'],
        icon: 'server-cog',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-03',
        dateStarted: '2025-03',
        link: 'projects/project-homelab.html',
        featured: true
    },
    {
        id: 'pif',
        name: 'Smart Plant Monitoring - Final Project',
        nameKey: 'projects.plant.title',
        description: 'Final project from September 2024 to June 2025: This was my big final project for my Computer Technician diploma. I built a complete IoT system with ESP8266 sensor nodes, a Raspberry Pi hub, a web dashboard to monitor everything, enterprise networking with VLANs, and automated backups. Presented the whole thing and got 59/60.',
        descriptionKey: 'projects.plant.desc',
        category: 'IoT',
        categoryKey: 'projects.category.iot',
        categories: ['IoT', 'School Projects', 'Full-Stack', 'Networking', 'Database', 'Infrastructure'],
        categoryKeys: ['projects.category.iot', 'projects.category.school', 'projects.category.fullstack', 'projects.category.networking', 'projects.category.database', 'projects.category.infrastructure'],
        tags: ['IoT', 'ESP8266', 'Wemos D1 Mini', 'Raspberry Pi 4', 'MariaDB', 'phpMyAdmin', 'Apache', 'PHP', 'SSL', 'Fail2Ban', 'UFW', 'Cisco', 'VLAN', 'NAT', 'RAID1', 'Backup', 'Bash', 'DHT22', 'BH1750', 'SEN0193', 'ULN2803', 'Water Pump', 'Grow LED', 'RGB LED'],
        icon: 'sprout',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-06',
        dateStarted: '2024-09',
        score: '59/60',
        link: 'projects/project-pif.html',
        featured: true
    },
    {
        id: 'cylro',
        name: 'Cylro',
        nameKey: 'projects.cylro.title',
        description: 'From August 2025, in development: Platform for Agencies. I\'m co-founding this agency platform with a partner. One workspace for all your client websites, built in Luxembourg, hosted in Europe. We started researching in June 2025 and have been building steadily since August.',
        descriptionKey: 'projects.cylro.desc',
        category: 'Web Development',
        categoryKey: 'projects.category.webdev',
        categories: ['Web Development', 'Full-Stack', 'Infrastructure', 'Cloud Computing', 'DevOps', 'Database', 'Security'],
        categoryKeys: ['projects.category.webdev', 'projects.category.fullstack', 'projects.category.infrastructure', 'projects.category.cloud', 'projects.category.devops', 'projects.category.database', 'projects.category.security'],
        tags: ['AI', 'CMS', 'Web Dev', 'Vue', 'Nuxt', 'Node.js', 'Express', 'PostgreSQL', 'pgvector', 'Redis', 'Keycloak', 'SSO', 'Mollie', 'Docker', 'K3s', 'S3', 'Object Storage'],
        icon: 'layout',
        iconImage: 'assets/img/projects/cylro/submark.svg',
        status: 'in-development',
        statusKey: 'projects.status.inDevelopment',
        dateStarted: '2025-08',
        link: 'projects/project-cylro.html',
        featured: true
    },
    {
        id: 'gradingdino',
        name: 'GradingDino',
        nameKey: 'projects.gradingdino.title',
        description: 'From October 2025 to November 2025: This was a group project where we built a grade management system with Django. Teachers can create classrooms and manage grades, students can track their progress. We delivered an MVP and I learned some valuable lessons about choosing the right framework for the job.',
        descriptionKey: 'projects.gradingdino.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Web Development', 'Full-Stack', 'Database'],
        categoryKeys: ['projects.category.school', 'projects.category.webdev', 'projects.category.fullstack', 'projects.category.database'],
        tags: ['Django', 'Python', 'PostgreSQL', 'Argon2', 'Docker', 'Docker Compose', 'GitHub', 'Pico.css', 'SSR', 'Team Project'],
        icon: 'graduation-cap',
        iconImage: 'assets/img/projects/gradingdino/dino-icon.webp',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-11',
        dateStarted: '2025-10',
        link: 'projects/project-gradingdino.html',
        featured: true
    },
    {
        id: 'teams-broadcast',
        name: 'Teams Broadcast System',
        nameKey: 'projects.teamsbroadcast.title',
        description: 'From November 2025 to January 2026: I built this school project with Power Platform after a teacher mentioned how much work it was to send messages to 20+ Teams channels manually. It gets old really fast. This tool lets you select all your channels at once, write your message once, and send it everywhere with a single click. It\'s designed for teachers managing hundreds of class channels and anyone else who\'s tired of copy-pasting announcements over and over.',
        descriptionKey: 'projects.teamsbroadcast.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Web Development', 'Cloud Computing', 'Database'],
        categoryKeys: ['projects.category.school', 'projects.category.webdev', 'projects.category.cloud', 'projects.category.database'],
        tags: ['Power Platform', 'Power Apps', 'Power Automate', 'Dataverse', 'Microsoft Teams', 'Low-code', 'Canvas App', 'Teams Connector', 'Microsoft 365', 'State Management', 'Audit Trail'],
        icon: 'radio',
        iconImage: 'assets/img/logos/power-platform-logo.webp',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2026-01',
        dateStarted: '2025-11',
        link: 'projects/project-teams-broadcast.html',
        featured: true
    },
    {
        id: 'whispflow',
        name: 'WhispFlow',
        nameKey: 'projects.whispflow.title',
        description: 'Talent Exhibition project: A desktop app that records meetings, transcribes audio locally with faster-whisper, and generates AI-powered summaries (key points, decisions, action items) via 5 cloud providers. Local-first, privacy-focused, with versioned transcripts and multi-language support.',
        descriptionKey: 'projects.whispflow.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Full-Stack', 'Cloud Computing'],
        categoryKeys: ['projects.category.school', 'projects.category.fullstack', 'projects.category.cloud'],
        tags: ['Electron', 'Node.js', 'Python', 'faster-whisper', 'OpenAI', 'Mistral', 'Anthropic', 'Groq', 'Cohere', 'FFmpeg', 'AI', 'Transcription', 'Speech-to-Text', 'Local-First'],
        icon: 'audio-waveform',
        iconImage: 'assets/img/projects/whispflow/whispflow-submark.webp',
        status: 'in-development',
        statusKey: 'projects.status.inDevelopment',
        dateStarted: '2025-10',
        link: 'projects/project-whispflow.html',
        featured: true
    },
    {
        id: 'rds-documentation',
        name: 'Remote Desktop Services (RDS) Documentation',
        nameKey: 'projects.rds.title',
        description: 'I documented and demonstrated a Windows Server 2022 Remote Desktop Services deployment. It combines AD DS, DNS, RD Web Access, and a session-based collection so students can securely access a shared desktop from external Windows 11 clients.',
        descriptionKey: 'projects.rds.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Infrastructure', 'Networking', 'Cloud Computing', 'Security'],
        categoryKeys: ['projects.category.school', 'projects.category.infrastructure', 'projects.category.networking', 'projects.category.cloud', 'projects.category.security'],
        tags: ['Windows Server 2022', 'RDS', 'Remote Desktop Services', 'Active Directory', 'AD DS', 'DNS', 'RD Web Access', 'Session-based deployment', 'RDS_Students', 'Windows 11', 'Hosts file', 'Self-signed certificate'],
        icon: 'monitor',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-12',
        dateStarted: '2025-11',
        link: 'projects/project-rds-documentation.html',
        featured: false
    },
    {
        id: 'portfolio',
        name: 'Portfolio Website',
        nameKey: 'projects.portfolio.title',
        description: 'Since November 2025: My living portfolio built from scratch with vanilla HTML, CSS, and JavaScript. It combines a server-rack inspired UI with dark/light themes, multi-language i18n (EN/PT/LU/DE/FR), and global fuzzy search across projects and certifications. Content is driven by centralized data files, with responsive layouts, SEO-friendly metadata, and accessibility touches like keyboard navigation and reduced-motion support. Continuously improved as I add new projects and features.',
        descriptionKey: 'projects.portfolio.desc',
        category: 'Web Development',
        categoryKey: 'projects.category.webdev',
        categories: ['Web Development', 'Full-Stack'],
        categoryKeys: ['projects.category.webdev', 'projects.category.fullstack'],
        tags: ['HTML', 'CSS', 'JavaScript', 'Vanilla JS', 'i18n', 'Fuse.js', 'Lucide', 'Responsive Design', 'Dark Mode', 'Search', 'Modals', 'SEO', 'Accessibility', 'Performance'],
        icon: 'code-2',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-11',
        dateStarted: '2025-11',
        link: 'index.html',
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
