import iq from '/src/project-img/iq-s.png'
import aizoteq from './src/project-img/aizo-t.png'
import aizoplug from './src/project-img/aizo-p.png'
import gulfbay from './src/project-img/gulfbay.png'

export const personalInfo = {
  name: "Anshid PP",
  roles: ["Full Stack Developer", "React Specialist", "Problem Solver", "Designer"],
  tagline: "Crafting digital experiences that live at the intersection of design and technology.",
  bio: "I’m a full-stack developer who loves building things that look great and actually work smoothly. For the past year, I’ve been deep in the trenches with React and Node.js, figuring out how to connect sharp frontend designs with solid backend logic.Right now, I’m wearing two hats as a Faculty Cum Developer. It’s a pretty cool setup—I get to build and deploy production-ready applications while mentoring other aspiring devs along the way. Explaining concepts to others has honestly made my own code a lot cleaner and more deliberate. For me, development isn't just about writing code; it's about solving real-world puzzles and getting a little better with every project I touch.",
  location: "Kerala, India",
  email: "anshid8593@gmail.com",
  whatsapp: "918593806351",
  availability: "Available for freelance",
  resume: "#",
};

export const skills = {
  Frontend: [
    { name: "HTML5 / CSS3", level: 97, icon: "🌐" },
    { name: "JavaScript (ES2024)", level: 95, icon: "⚡" },
    { name: "React.js", level: 93, icon: "⚛️" },
    { name: "Tailwind CSS", level: 91, icon: "🎨" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Next.js", level: 88, icon: "▲" },
  ],
  Backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Express.js", level: 88, icon: "🚀" },
    { name: "PHP", level: 78, icon: "🐘" },
    { name: "REST APIs", level: 92, icon: "🔌" },
  ],
  Database: [
    { name: "MongoDB", level: 87, icon: "🍃" },
    { name: "MySQL", level: 83, icon: "🗄️" },
    { name: "PostgreSQL", level: 79, icon: "🐘" },
    // { name: "Redis", level: 72, icon: "🔴" },
  ],
  Tools: [
    { name: "Git & GitHub", level: 95, icon: "🔀" },
    { name: "VS Code", level: 97, icon: "💻" },
    { name: "AWS", level: 70, icon: "🎭" },
    { name: "Docker", level: 65, icon: "🐳" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "NexaCommerce",
    description: "A full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout flows built for scale.",
    image: iq,
    gradient: "from-cyan-500 to-blue-600",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    live: "https://nexacommerce.demo",
    github: "https://github.com/alexmorgan/nexacommerce",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow AI",
    description: "An intelligent project management tool with AI task prioritization, team collaboration features, and real-time progress dashboards.",
    image: aizoplug,
    gradient: "from-violet-500 to-purple-700",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Tailwind"],
    live: "https://taskflow.demo",
    github: "https://github.com/alexmorgan/taskflow",
    featured: true,
  },
  {
    id: 3,
    title: "CryptoVault Dashboard",
    description: "Real-time cryptocurrency portfolio tracker with advanced charting, price alerts, and DeFi protocol integrations.",
    image: aizoteq,
    gradient: "from-yellow-400 to-orange-500",
    tech: ["React", "D3.js", "WebSockets", "Express", "MySQL"],
    live: "https://cryptovault.demo",
    github: "https://github.com/alexmorgan/cryptovault",
    featured: false,
  },
  {
    id: 4,
    title: "HealthSync",
    description: "A telemedicine platform enabling video consultations, appointment scheduling, and secure medical record management.",
    image: gulfbay,
    gradient: "from-green-400 to-emerald-600",
    tech: ["React", "Node.js", "WebRTC", "MongoDB", "JWT"],
    live: "https://healthsync.demo",
    github: "https://github.com/alexmorgan/healthsync",
    featured: false,
  },
  {
    id: 5,
    title: "DevCollab",
    description: "A real-time collaborative code editor with syntax highlighting, video chat, and Git integration for remote pair programming.",
    image: "👨‍💻",
    gradient: "from-pink-500 to-rose-600",
    tech: ["React", "Socket.io", "Monaco Editor", "Node.js", "Redis"],
    live: "https://devcollab.demo",
    github: "https://github.com/alexmorgan/devcollab",
    featured: false,
  },
  {
    id: 6,
    title: "LinguaLearn",
    description: "An adaptive language learning platform with spaced repetition, AI conversation practice, and gamified progress tracking.",
    image: "🌍",
    gradient: "from-indigo-500 to-cyan-500",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "TTS API"],
    live: "https://linguallearn.demo",
    github: "https://github.com/alexmorgan/linguallearn",
    featured: false,
  },
];

export const services = [
  {
    id: 1,
    icon: "🖥️",
    title: "Web Development",
    description: "Building fast, scalable web applications using React, Next.js, and Node.js with a focus on performance and clean architecture.",
    color: "from-cyan-400 to-primary",
  },
  {
    id: 2,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces in Figma and translating them into pixel-perfect code with smooth animations.",
    color: "from-violet-400 to-purple-600",
  },
  {
    id: 3,
    icon: "📱",
    title: "Responsive Design",
    description: "Every project I build is fully responsive — flawless on mobile, tablet, and desktop across all modern browsers.",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 4,
    icon: "🔌",
    title: "API Integration",
    description: "Connecting your product to third-party APIs, building RESTful services, and designing robust backend architectures.",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    icon: "⚡",
    title: "Full Stack Development",
    description: "End-to-end development from database design to deployment — I handle the entire stack so you don't have to.",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 6,
    icon: "🚀",
    title: "Performance Optimization",
    description: "Auditing and optimizing existing apps for speed, Core Web Vitals, SEO, and accessibility compliance.",
    color: "from-blue-400 to-indigo-500",
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    role: "Senior Full Stack Developer",
    company: "TechNova Inc.",
    period: "2022 – Present",
    location: "San Francisco, CA",
    description: "Leading a team of 6 engineers building enterprise SaaS products. Architected a micro-services backend serving 500K+ daily active users. Reduced page load times by 60% through strategic optimization.",
    tags: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: 2,
    type: "work",
    role: "Frontend Developer",
    company: "PixelCraft Studio",
    period: "2020 – 2022",
    location: "Remote",
    description: "Built 20+ client websites and web apps with React. Introduced a component library that cut development time by 40% across projects. Mentored 3 junior developers.",
    tags: ["React", "TypeScript", "Tailwind", "Figma", "GraphQL"],
  },
  {
    id: 3,
    type: "work",
    role: "Junior Web Developer",
    company: "WebFlow Agency",
    period: "2019 – 2020",
    location: "Austin, TX",
    description: "Developed responsive websites and landing pages. Integrated REST APIs and payment gateways. Collaborated closely with design team on UI/UX improvements.",
    tags: ["JavaScript", "PHP", "MySQL", "CSS3", "jQuery"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO at NexaLabs",
    avatar: "SC",
    color: "from-cyan-400 to-blue-500",
    text: "Alex delivered our platform ahead of schedule and the quality exceeded all expectations. The codebase is clean, well-documented, and our engineering team loves working with it. Truly a 10x developer.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO at TaskFlow",
    avatar: "MR",
    color: "from-violet-400 to-purple-600",
    text: "We hired Alex to rescue a struggling project and he transformed it completely. His technical depth is impressive but what sets him apart is his ability to communicate complex ideas clearly to non-technical stakeholders.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Lead at HealthSync",
    avatar: "PS",
    color: "from-pink-400 to-rose-500",
    text: "Alex has an incredible eye for design AND deep technical skills — a rare combination. Our app's user retention jumped 35% after his redesign and performance improvements. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "James Mitchell",
    role: "Founder at DevCollab",
    avatar: "JM",
    color: "from-green-400 to-emerald-500",
    text: "From day one, Alex was proactive, professional, and passionate about the work. He introduced us to several architectural patterns that have scaled beautifully. Best developer we've worked with.",
    rating: 5,
  },
];

export const stats = [
  { label: "Projects Delivered", value: "50+", icon: "🚀" },
  { label: "Happy Clients", value: "35+", icon: "🤝" },
  { label: "Years Experience", value: "5+", icon: "⚡" },
  { label: "GitHub Stars", value: "2.4K", icon: "⭐" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/alexmorgan", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexmorgan", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexmorgan", icon: "twitter" },
  { name: "Dribbble", url: "https://dribbble.com/alexmorgan", icon: "dribbble" },
];