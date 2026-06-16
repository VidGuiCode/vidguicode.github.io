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
    'AI & Automation': {
        key: 'projects.category.ai',
        icon: 'bot',
        order: 3
    },
    'IoT': {
        key: 'projects.category.iot',
        icon: 'sprout',
        order: 4
    },
    'School Projects': {
        key: 'projects.category.school',
        icon: 'graduation-cap',
        order: 5
    },
    'Cloud Computing': {
        key: 'projects.category.cloud',
        icon: 'cloud',
        order: 6
    },
    'DevOps': {
        key: 'projects.category.devops',
        icon: 'git-branch',
        order: 7
    },
    'Networking': {
        key: 'projects.category.networking',
        icon: 'network',
        order: 8
    },
    'Full-Stack': {
        key: 'projects.category.fullstack',
        icon: 'layers',
        order: 9
    },
    'Database': {
        key: 'projects.category.database',
        icon: 'database',
        order: 10
    },
    'Security': {
        key: 'projects.category.security',
        icon: 'shield',
        order: 11
    },
    'Open Source': {
        key: 'projects.category.opensource',
        icon: 'github',
        order: 12
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
        description: 'From March 2025 to today: I built this four-node homelab platform around a cloud edge gateway, an ARM home server, an x86 offload node, and a dedicated ZFS NAS. It runs my custom apps, agent workflows, media services, and K3s behind a self-operated WireGuard edge.',
        descriptionKey: 'projects.homelab.desc',
        category: 'Infrastructure',
        categoryKey: 'projects.category.infrastructure',
        categories: ['Infrastructure', 'Cloud Computing', 'DevOps', 'Full-Stack', 'Security', 'Networking', 'Database', 'Web Development'],
        categoryKeys: ['projects.category.infrastructure', 'projects.category.cloud', 'projects.category.devops', 'projects.category.fullstack', 'projects.category.security', 'projects.category.networking', 'projects.category.database', 'projects.category.webdev'],
        tags: ['Raspberry Pi 5', 'K3s', 'Kubernetes', 'Docker', 'Docker Compose', 'FastAPI', 'Python', 'SvelteKit', 'WireGuard', 'Caddy', 'Traefik', 'Oracle Cloud', 'JWT', 'TOTP', 'SQLite', 'Alembic', 'Portainer', 'Playwright', 'Mistral', 'AI Agents', 'TrueNAS', 'ZFS', 'MinIO', 'Jellyfin', 'Immich', 'Nextcloud', 'Navidrome'],
        icon: 'server-cog',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2025-03',
        dateStarted: '2025-03',
        link: 'projects/project-homelab.html',
        featured: true,
        priority: 1
    },
    {
        id: 'cylro',
        name: 'Cylro',
        nameKey: 'projects.cylro.title',
        description: 'From August 2025, in development: Cylro is a website operations platform for EU teams. I\'m co-founding it with a partner to help agencies, freelancers, developers, and businesses manage many websites from one secure Space with scoped access, immutable publishing, EU-managed infrastructure, and permission-aware AI assistance.',
        descriptionKey: 'projects.cylro.desc',
        category: 'Web Development',
        categoryKey: 'projects.category.webdev',
        categories: ['Web Development', 'Full-Stack', 'Infrastructure', 'Cloud Computing', 'DevOps', 'Database', 'Security'],
        categoryKeys: ['projects.category.webdev', 'projects.category.fullstack', 'projects.category.infrastructure', 'projects.category.cloud', 'projects.category.devops', 'projects.category.database', 'projects.category.security'],
        tags: ['AI', 'Website Operations', 'CMS', 'Multi-tenant SaaS', 'Scoped Access', 'Immutable Publishing', 'GDPR', 'EU Infrastructure', 'Vue', 'Nuxt', 'Node.js', 'Express', 'PostgreSQL', 'pgvector', 'Redis', 'Keycloak', 'SSO', 'Mistral', 'Mollie', 'Infomaniak', 'Hetzner', 'Docker', 'K3s', 'S3', 'Object Storage'],
        icon: 'layout',
        iconImage: 'assets/img/projects/cylro/submark.svg',
        status: 'in-development',
        statusKey: 'projects.status.inDevelopment',
        dateStarted: '2025-08',
        link: 'projects/project-cylro.html',
        featured: true,
        priority: 2
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
        featured: true,
        priority: 3
    },
    {
        id: 'ai-hermes-agent',
        name: 'Hermes AI Agent',
        nameKey: 'projects.hermes.title',
        description: 'From May 2026 to today: my personal AI agent running on its own VPS, connected to my self-hosted Synapse/Matrix server, ntfy push notifications, Groq voice transcription, Piper TTS replies, transport lookups, email and calendar workflows, scoped homelab endpoints, a personal git server, and a markdown wiki knowledge base.',
        descriptionKey: 'projects.hermes.desc',
        category: 'AI & Automation',
        categoryKey: 'projects.category.ai',
        categories: ['AI & Automation', 'Infrastructure', 'DevOps', 'Networking'],
        categoryKeys: ['projects.category.ai', 'projects.category.infrastructure', 'projects.category.devops', 'projects.category.networking'],
        tags: ['Hermes Agent', 'AI Agents', 'Self-hosted', 'VPS', 'Synapse', 'Matrix', 'ntfy', 'Groq', 'Piper TTS', 'Voice Notes', 'Mobiliteit.lu', 'Docker', 'Git Server', 'Email', 'Calendar', 'Homelab APIs', 'Markdown Wiki', 'Model Routing', 'Image Generation'],
        icon: 'bot',
        iconImage: 'assets/img/projects/hermes/hermes.webp',
        status: 'in-development',
        statusKey: 'projects.status.inDevelopment',
        dateStarted: '2026-05',
        link: 'projects/project-ai-hermes-agent.html',
        featured: false
    },
    {
        id: 'whispflow',
        name: 'WhispFlow',
        nameKey: 'projects.whispflow.title',
        description: 'Talent Exhibition project: A desktop app that records meetings, transcribes audio locally with faster-whisper, and generates AI-powered summaries (key points, decisions, action items) via 3 cloud providers. Local-first, privacy-focused, with versioned transcripts and multi-language support.',
        descriptionKey: 'projects.whispflow.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Full-Stack', 'Cloud Computing'],
        categoryKeys: ['projects.category.school', 'projects.category.fullstack', 'projects.category.cloud'],
        tags: ['Electron', 'Node.js', 'Python', 'faster-whisper', 'OpenAI', 'Mistral', 'Anthropic', 'FFmpeg', 'AI', 'Transcription', 'Speech-to-Text', 'Local-First'],
        icon: 'audio-waveform',
        iconImage: 'assets/img/projects/whispflow/whispflow-submark.webp',
        status: 'in-development',
        statusKey: 'projects.status.inDevelopment',
        dateStarted: '2025-10',
        link: 'projects/project-whispflow.html',
        featured: true,
        priority: 4
    },
    {
        id: 'az-where',
        name: 'az-where',
        nameKey: 'projects.azwhere.title',
        description: 'An open-source unofficial Azure availability discovery CLI. It checks where VM SKUs can actually deploy by combining Azure Policy, SKU availability, subscription restrictions, and live quota, and now also supports generic resource availability checks, VM pricing estimates, scripted output modes, and update checks.',
        descriptionKey: 'projects.azwhere.desc',
        category: 'Cloud Computing',
        categoryKey: 'projects.category.cloud',
        categories: ['Cloud Computing', 'DevOps', 'Open Source'],
        categoryKeys: ['projects.category.cloud', 'projects.category.devops', 'projects.category.opensource'],
        tags: ['TypeScript', 'Node.js', 'CLI', 'Azure', 'Azure CLI', 'ARM REST', 'Regions', 'VM SKUs', 'Quota', 'Azure Policy', 'Resource Availability', 'Pricing', 'CI', 'Terraform', 'AI Agents', 'Open Source', 'Commander.js', 'Vitest'],
        icon: 'map-pin',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2026-04',
        dateStarted: '2026-04',
        githubUrl: 'https://github.com/VidGuiCode/az-where',
        relatedProjectIds: ['plane-cli', 'solidtime-cli', 'dolibarr-cli'],
        featured: false
    },
    {
        id: 'plane-cli',
        name: 'plane-cli',
        nameKey: 'projects.planecli.title',
        description: 'An open-source unofficial CLI for Plane.so that I built because nothing like it existed. It lets you manage workspaces, projects, issues, cycles, and modules straight from the terminal. Designed so AI agents can interact with Plane through simple shell commands — no MCP server, no exposed API keys, fewer tokens wasted. I use it daily with my self-hosted Plane instance.',
        descriptionKey: 'projects.planecli.desc',
        category: 'DevOps',
        categoryKey: 'projects.category.devops',
        categories: ['DevOps', 'Open Source'],
        categoryKeys: ['projects.category.devops', 'projects.category.opensource'],
        tags: ['TypeScript', 'Node.js', 'CLI', 'Plane', 'REST API', 'AI Agents', 'Open Source', 'Automation', 'Vitest', 'Bun'],
        icon: 'square-kanban',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateStarted: '2026-03',
        githubUrl: 'https://github.com/VidGuiCode/plane-cli',
        relatedProjectIds: ['az-where', 'solidtime-cli', 'dolibarr-cli'],
        featured: false
    },
    {
        id: 'solidtime-cli',
        name: 'solidtime-cli',
        nameKey: 'projects.solidtimecli.title',
        description: 'An open-source unofficial CLI for Solidtime, the open-source time tracking system. Built it because I needed a fast way to manage time entries, projects, tasks, and tags from the terminal without opening a browser. Works with both self-hosted and Solidtime Cloud instances. Like my other CLIs, AI agents can use it directly through shell commands — no protocol overhead, no key exposure.',
        descriptionKey: 'projects.solidtimecli.desc',
        category: 'DevOps',
        categoryKey: 'projects.category.devops',
        categories: ['DevOps', 'Open Source'],
        categoryKeys: ['projects.category.devops', 'projects.category.opensource'],
        tags: ['TypeScript', 'Node.js', 'CLI', 'Solidtime', 'REST API', 'AI Agents', 'Open Source', 'Time Tracking', 'Commander.js'],
        icon: 'timer',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2026-04',
        dateStarted: '2026-04',
        githubUrl: 'https://github.com/VidGuiCode/solidtime-cli',
        relatedProjectIds: ['az-where', 'plane-cli', 'dolibarr-cli'],
        featured: false
    },
    {
        id: 'dolibarr-cli',
        name: 'dolibarr-cli',
        nameKey: 'projects.dolibarrcli.title',
        description: 'An open-source unofficial CLI for Dolibarr ERP with complete REST API coverage from the terminal. Manage customers, invoices, bank accounts, products, and more without leaving the command line. Supports table, JSON, and CSV output formats plus dry-run for safe mutations. Same philosophy as my other CLIs — built for terminal-first workflows and AI agent compatibility.',
        descriptionKey: 'projects.dolibarrcli.desc',
        category: 'DevOps',
        categoryKey: 'projects.category.devops',
        categories: ['DevOps', 'Open Source'],
        categoryKeys: ['projects.category.devops', 'projects.category.opensource'],
        tags: ['TypeScript', 'Node.js', 'CLI', 'Dolibarr', 'ERP', 'REST API', 'AI Agents', 'Open Source', 'Commander.js'],
        icon: 'receipt',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2026-04',
        dateStarted: '2026-04',
        githubUrl: 'https://github.com/VidGuiCode/dolibarr-cli',
        relatedProjectIds: ['az-where', 'plane-cli', 'solidtime-cli'],
        featured: false
    },
    {
        id: 'sentinel',
        name: 'Sentinel',
        nameKey: 'projects.sentinel.title',
        description: 'A lightweight terminal UI (TUI) system monitor for Linux with real-time graphs, container monitoring, security log analysis, and infrastructure-focused design. Inspired by btop, optimized for low-power devices like Raspberry Pi. Features CPU, memory, disk, network, Docker, Kubernetes, and security monitoring with 5 built-in themes.',
        descriptionKey: 'projects.sentinel.desc',
        category: 'Infrastructure',
        categoryKey: 'projects.category.infrastructure',
        categories: ['Infrastructure', 'DevOps', 'Security', 'Open Source'],
        categoryKeys: ['projects.category.infrastructure', 'projects.category.devops', 'projects.category.security', 'projects.category.opensource'],
        tags: ['Python', 'Linux', 'TUI', 'Docker', 'Kubernetes', 'System Monitor', 'Security', 'Raspberry Pi', 'btop', 'Open Source'],
        icon: 'activity',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2026-01',
        dateStarted: '2025-12',
        githubUrl: 'https://github.com/VidGuiCode/sentinel',
        featured: false
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
        featured: false
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
        featured: true,
        priority: 6
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
        id: 'unraid-nas',
        name: 'UnRAID Storage Server (NAS)',
        nameKey: 'projects.unraid.title',
        description: 'For the Cloud Infrastructure 2 module, my two-person team took a bare Intel 2U rack server and turned it into a full NAS: hardware RAID 5 on an Areca ARC-1880 controller, a Btrfs RAID 1 mirror, SMB shares with per-user permissions, out-of-band management, and an iSCSI block-storage target tested from a Windows client.',
        descriptionKey: 'projects.unraid.desc',
        category: 'School Projects',
        categoryKey: 'projects.category.school',
        categories: ['School Projects', 'Infrastructure', 'Networking', 'Database', 'Security'],
        categoryKeys: ['projects.category.school', 'projects.category.infrastructure', 'projects.category.networking', 'projects.category.database', 'projects.category.security'],
        tags: ['UnRAID', 'NAS', 'Intel SR2600', 'Xeon X5650', 'Areca ARC-1880', 'RAID 5', 'RAID 1', 'Btrfs', 'XFS', 'SAS', 'SATA', 'SMB', 'iSCSI', 'LUN', 'NFS', 'IPMI', 'Intel RMM3', 'Linux', 'Rack Server', 'Block Storage', 'Access Control'],
        icon: 'hard-drive',
        iconImage: 'assets/img/logos/unraid-mark.svg',
        status: 'completed',
        statusKey: 'projects.status.completed',
        dateCompleted: '2026-03',
        dateStarted: '2026-02',
        link: 'projects/project-unraid-nas.html',
        featured: true,
        priority: 5
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
