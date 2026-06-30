import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../portfolio';
import SectionHeader from './SectionHeader';

const gradientMap = {
    'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06b6d4, #2563eb)',
    'from-violet-500 to-purple-700': 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    'from-yellow-400 to-orange-500': 'linear-gradient(135deg, #facc15, #f97316)',
    'from-green-400 to-emerald-600': 'linear-gradient(135deg, #4ade80, #059669)',
    'from-pink-500 to-rose-600': 'linear-gradient(135deg, #ec4899, #e11d48)',
    'from-indigo-500 to-cyan-500': 'linear-gradient(135deg, #6366f1, #06b6d4)',
};

function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const gradBg = gradientMap[project.gradient] || 'linear-gradient(135deg, #00FFD1, #7C3AED)';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group relative glass rounded-3xl border border-white/5 overflow-hidden flex flex-col
        hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            style={{ '--grd': gradBg }}
        >
            {/* Image area */}
            <div className="relative h-48 overflow-hidden flex items-center justify-center"
                style={{ background: gradBg }}>
                <motion.div
                    animate={{ scale: hovered ? 1.15 : 1 }}
                    transition={{ duration: 0.5 }}
                    className="select-none w-full h-full flex items-center justify-center"
                >
                    {typeof project.image === 'string' && project.image.length === 2 ? (
                        <span className="text-8xl">{project.image}</span>
                    ) : (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    )}
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                >
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github size={14} /> Code
                    </a>
                </motion.div>

                {project.featured && (
                    <span className="absolute top-3 right-3 bg-primary text-surface text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <ArrowUpRight
                        size={18}
                        className="text-white/30 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                    />
                </div>

                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg border border-white/8 text-white/50"
                            style={{ background: 'rgba(255,255,255,0.04)' }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {

    return (
        <section id="projects" className="relative py-28">
            <div
                className="absolute right-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    tag="// 003 — projects"
                    title="Things I've"
                    highlight="built"
                    subtitle="A selection of projects that showcase my range across full stack development, design, and architecture."
                />


                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    {/* <a
                        href="https://github.com/alexmorgan"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <Github size={16} />
                        View all on GitHub
                    </a> */}
                </motion.div>
            </div>
        </section>
    );
}