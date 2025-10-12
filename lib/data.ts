import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'viveksharma9451@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Vivek, I am reaching out to you because...',
    
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/onipinaka' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/viveksharma0212' },
    { name: 'X', url: 'https://www.X.com/viveksharmaaa_' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    Other: [
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'ckc OS',
        slug: 'ckcOS',
        liveUrl: 'https://electroev.co.uk/',
        status: 'Currently Working',
        year: 2025,
        description: `
        CKC OS is a browser-based personal operating system that gives a desktop-like experience with windows, tabs, and an app dock. Offline-first and AI-powered, it remembers your workspace, so you can continue exactly where you left off on any device. <br/><br/>

        Key Features:<br/>
        <ul>
        <li><b><i>Desktop-Like Interface:</i></b> Move, resize, and organize windows and tabs effortlessly</li>
        <li><b><i>Smart AI Agent:</i></b> Context-aware assistant for tasks and reminders</li>
        <li><b><i>Biometric Login:</i></b> Secure access with WebAuthn</li>
        <li><b><i>Offline & Sync:</i></b> Works offline, syncs tabs and app states across devices</li>
        <li><b><i>Modular Apps:</i></b> Easily add and manage embedded apps or websites</li>
        </ul><br/>

        Technical Highlights:
        <ul>
        <li><b><i>React & Tailwind:</i></b> Built OS-like UI with draggable, resizable windows</li>
        <li><b><i>Node.js & Express:</i></b> Backend API for user, workspace, and app management</li>
        <li><b><i>MongoDB:</i></b> Stores user data, workspace states, and app configurations</li>
        <li><b><i>Persistent State:</i></b> Tabs, windows, and apps remain consistent across sessions</li>
        <li><b><i>Real-Time Sync:</i></b> WebRTC + backend for cross-device updates</li>
        <li><b><i>Modular Architecture:</i></b> Dynamic app registry for easy app management</li>
        <li><b><i>Security:</i></b> WebAuthn-based biometric authentication</li>
        </ul>
        `,
        role: `
        Full-Stack Developer <br/>
        Owned and handled the entire development lifecycle:
        <ul>
        <li><b><i>Frontend:</i></b> OS interface and interactive components in React and Tailwind CSS</li>
        <li><b><i>Backend:</i></b> Node.js + Express APIs for user and app management</li>
        <li><b><i>Database:</i></b> MongoDB for storing workspace states and app data</li>
        <li><b><i>Real-Time Sync:</i></b> WebRTC integration for cross-device updates</li>
        <li><b><i>AI Integration:</i></b> Context-aware assistant for task automation and suggestions</li>
        <li><b><i>Architecture & Deployment:</i></b> Modular apps, offline-first optimization, and secure login</li>
        </ul>
      `,
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'WebRTC',
            'IndexedDB',
            'Service Workers',
            'WebAuthn',
            'JWT (Authentication)'
        ],
        thumbnail: '/projects/thumbnail/ssl-tmb.png',
        longThumbnail: '/projects/long/ssl-thumbnail.png',
        images: [
            '/projects/long/ssl-thumbnail.png',
            '/projects/long/ssl-thumbnail.png',
        ],
    },
    {
    title: 'Safe Shipping Logistics',
    slug: 'safe-shipping-logistics',
    techStack: [    
        'Next.js',
        'React',
        'Tailwind CSS',
        'Redux',
        'Framer Motion',
        'API Integration',
        'React i18n',
        'Debouncing'
    ],
    status: "Completed",
    thumbnail: '/projects/thumbnail/ssl-tmb.png',
    longThumbnail: '/projects/long/ssl-thumbnail.png',
    images: [
        '/projects/images/ssl-main.png',
        '/projects/images/ssl-full.png',
    ],
    liveUrl: 'https://safeshippinglogistics.com/',
    year: 2025,
    description: `Safe Shipping Logistics is a modern logistics platform that streamlines international shipping operations, imports, and supply chain management. It offers real-time shipment tracking, route optimization, automated notifications, and user-friendly dashboards for clients and admins, providing a seamless shipping experience.`,
    role: `As the lead developer, I: <br/>
    - Built the entire frontend from scratch using Next.js, React, Redux, and Tailwind CSS.<br/>
    - Integrated REST APIs for shipment tracking, order management, and notifications.<br/>
    - Implemented smooth animations and interactions using Framer Motion.<br/>
    - Added multi-language support with React i18n, including right-to-left text handling.<br/>
    - Optimized performance and ensured full responsiveness across all devices.<br/>
    - Deployed the website on Vercel for fast and reliable hosting.`
    },
    {
    title: 'GDG AIT Pune',
    slug: 'gdg-ait-pune',
    techStack: [
        'React.js',
        'Tailwind CSS',
        'GSAP',
        'Framer Motion',
        'React Router',
        'API Integration',
        'figma'
    ],
    status: "Completed",
    thumbnail: '/projects/thumbnail/gdg-main.png',
    longThumbnail: '/projects/images/gdg-full.png',
    images: [
        '/projects/thumbnail/gdg-main.png',
        '/projects/images/gdg-full.png',
    ],
    liveUrl: 'https://gdgaitpune.me/',
    year: 2025,
    description:
        'GDG AIT Pune website is the official platform for the Google Developer Group at AIT Pune. The site showcases events, community initiatives, and resources for developers, with a modern and interactive design. It emphasizes smooth animations, responsive layouts, and an engaging user experience.',
    role: `As the designer and frontend developer, I:<br/>
        - Designed the entire website on figma.<br/>
        - Built the entire frontend using React.js and Tailwind CSS.<br/>
        - Implemented interactive animations and transitions using GSAP and Framer Motion.<br/>
        - Developed responsive and accessible layouts to ensure a seamless experience across devices.<br/>
        - Integrated dynamic content sections for events, blogs, and community updates.<br/>
        - Designed the overall UI/UX to reflect GDG's branding and community focus.`
    },
    {
    title: 'Unnati V',
    slug: 'unnati-ecell',
    techStack: ['React.js', 'Tailwind CSS', 'GSAP', 'Supabase', 'Vercel', 'Form Handling'],
    thumbnail: '/projects/thumbnail/unnati-thumb.png',
    longThumbnail: '/projects/thumbnail/unnati-thumb.jpg',
    images: [
        '/projects/images/unnati3.png',
        '/projects/images/unnati2.png',
        '/projects/images/unnati1.png',
    ],
    sourceCode: 'https://github.com/yourusername/unnati-website',
    liveUrl: 'https://unnati.aitpune.me/',
    year: 2025,
    description: `Unnati 2025 was a flagship event organized by the I&E Cell at AIT. I designed and developed the event website to provide seamless registration, event details, and updates for participants. The platform successfully handled registrations for 570+ students and offered a smooth, interactive user experience with animations and dynamic content.`,
    role: `As the designer and developer, I:<br/>
        - Built the frontend using React.js and Tailwind CSS.<br/>
        - Implemented interactive animations and transitions using GSAP.<br/>
        - Integrated Supabase to manage registrations and event data efficiently.<br/>
        - Created dynamic forms for registration and participant data collection.<br/>
        - Deployed the website on Vercel for fast and reliable access.<br/>
        - Ensured responsive design and a user-friendly experience across devices.`
    }

];

export const MY_EXPERIENCE = [
    {
        title: 'Co-Founder & CTO',
        company: 'Chubs Media',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Webstie Devlopment Lead',
        company: 'Google Developer Groups, AIT Pune',
        duration: 'Aug 2024 - Present',
    },
    {
        title: 'Sponsorhip Head',
        company: 'Entrepreneurship Cell, AIT Pune',
        duration: 'Sep 2024 - Present',
    },
];
