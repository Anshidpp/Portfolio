import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../portfolio';
import SectionHeader from './SectionHeader';
import useInView from '../useInView';

function ProgressBar({ level, inView }) {
    return (
        <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? `${level}%` : 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #00FFD1, #7C3AED)' }}
            />
        </div>
    );
}

function FloatingOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div
                className="absolute rounded-full"
                style={{
                    width: '500px', height: '500px',
                    top: '30%', left: '30%',
                    background: 'radial-gradient(circle, rgba(0,255,209,0.12) 0%, transparent 40%)',
                    filter: 'blur(40px)',
                    animation: 'float 10s ease-in-out infinite reverse',
                }}
            />
        </div>
    );
}

function SkillCard({ skill, index, inView }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="glass rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-white/85 text-sm">{skill.name}</span>
                </div>
                <span className="font-mono text-xs text-primary">{skill.level}%</span>
            </div>
            <ProgressBar level={skill.level} inView={inView} />
        </motion.div>
    );
}

const categories = Object.keys(skills);

const categoryColors = {
    Frontend: 'from-cyan-400 to-teal-500',
    Backend: 'from-violet-400 to-purple-600',
    Database: 'from-green-400 to-emerald-500',
    Tools: 'from-orange-400 to-amber-500',
};

const categoryIcons = {
    Frontend: '🖥️',
    Backend: '⚙️',
    Database: '🗄️',
    Tools: '🛠️',
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState('Frontend');
    const [ref, inView] = useInView();

    return (
        <section id="skills" className="relative py-28 overflow-hidden">
                <FloatingOrbs/>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                <SectionHeader
                    tag="// 002 — skills"
                    title="My technical"
                    highlight="arsenal"
                    subtitle="A curated set of technologies I use to build exceptional digital products."
                />

                {/* Category tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === cat
                                    ? 'text-surface font-semibold'
                                    : 'glass text-white/60 hover:text-white border border-white/5'
                                }`}
                            style={activeTab === cat ? {
                                background: `linear-gradient(135deg, ${categoryColors[cat].includes('cyan') ? '#00FFD1, #14b8a6' : categoryColors[cat].includes('violet') ? '#a78bfa, #7c3aed' : categoryColors[cat].includes('green') ? '#34d399, #10b981' : '#fb923c, #f59e0b'})`,
                            } : {}}
                        >
                            <span>{categoryIcons[cat]}</span>
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Skills grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
                    >
                        {skills[activeTab].map((skill, i) => (
                            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* All categories overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => {
                                setActiveTab(cat);
                                window.scrollTo({ top: document.querySelector('#skills').offsetTop - 100, behavior: 'smooth' });
                            }}
                            whileHover={{ y: -4 }}
                            className="glass rounded-2xl p-5 text-center border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-3">{categoryIcons[cat]}</div>
                            <div className="font-display font-bold text-white mb-1">{cat}</div>
                            <div className="text-white/40 text-xs font-mono">{skills[cat].length} skills</div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}