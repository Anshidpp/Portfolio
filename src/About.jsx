import { motion } from 'framer-motion';
import { MapPin, Mail, Zap, Code2, Coffee, Heart } from 'lucide-react';
import { personalInfo, stats } from '../portfolio';
import SectionHeader from './SectionHeader';

function FloatingOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            <div
                className="absolute rounded-full"
                style={{
                    width: '400px', height: '400px',
                    top: '-300px', left: '-100px',
                    background: 'radial-gradient(circle, rgba(0,255,209,0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    animation: 'float 10s ease-in-out infinite reverse',
                }}
            />
        </div>
    );
}

function StatCard({ stat, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass rounded-2xl p-6 text-center group border border-white/5 hover:border-primary/20 transition-all duration-300"
        >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">{stat.value}</div>
            <div className="text-white/50 text-sm">{stat.label}</div>
        </motion.div>
    );
}

const traits = [
    { icon: <Code2 size={16} />, text: 'Clean code advocate' },
    { icon: <Zap size={16} />, text: 'Performance obsessed' },
    { icon: <Heart size={16} />, text: 'Open source contributor' },
    // { icon: <Coffee size={16} />, text: 'Powered by coffee' },
];

export default function About() {
    return (

        <section id="about" className="relative py-28 overflow-hidden">
            {/* Background glow */}
            <FloatingOrbs />

            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    // tag="// 001 — about me"
                    title="The person behind"
                    highlight="the code"
                    subtitle="I build things for the web with precision, purpose, and a healthy obsession with quality."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left — visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Code card */}
                        <div className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-40"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0,255,209,0.05) 0%, rgba(124,58,237,0.08) 100%)',
                                }}
                            />

                            <div className="font-mono text-sm leading-loose relative z-10">
                                <div className="text-white/30 mb-2 text-xs">// ad.config.js</div>
                                <div>
                                    <span className="text-purple-400">const </span>
                                    <span className="text-primary">developer</span>
                                    <span className="text-white/60"> = {'{'}</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">name</span>
                                    <span className="text-white/60">: </span>
                                    <span className="text-green-400">"Anshid PP"</span>
                                    <span className="text-white/60">,</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">location</span>
                                    <span className="text-white/60">: </span>
                                    <span className="text-green-400">"Kerala, India"</span>
                                    <span className="text-white/60">,</span>
                                </div>
                                {/* <div className="pl-6">
                                    <span className="text-blue-400">experience</span>
                                    <span className="text-white/60">: </span>
                                    <span className="text-yellow-400">5</span>
                                    <span className="text-white/60">,</span>
                                </div> */}
                                <div className="pl-6">
                                    <span className="text-blue-400">stack</span>
                                    <span className="text-white/60">: [</span>
                                    <span className="text-green-400">"MERN"</span>
                                    <span className="text-white/60">, </span>
                                    <span className="text-green-400">"Python"</span>
                                    <span className="text-white/60">, </span>
                                    <span className="text-green-400">"MySQL"</span>
                                    <span className="text-white/60">],</span>
                                </div>
                                <div className="pl-6">
                                    <span className="text-blue-400">available</span>
                                    <span className="text-white/60">: </span>
                                    <span className="text-primary">true</span>
                                    <span className="text-white/60">,</span>
                                </div>
                                {/* <div className="pl-6">
                                    <span className="text-blue-400">coffee</span>
                                    <span className="text-white/60">: </span>
                                    <span className="text-yellow-400">Infinity</span>
                                    <span className="text-white/60">,</span>
                                </div> */}
                                <div>
                                    <span className="text-white/60">{'}'}</span>
                                    <span className="text-white/30 ml-1">;</span>
                                </div>
                            </div>

                            {/* Blinking cursor */}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-primary ml-1 rounded-sm"
                            />
                        </div>

                        {/* Trait tags */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {traits.map((t, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.4 }}
                                    className="flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-white/70 border border-white/5"
                                >
                                    <span className="text-primary">{t.icon}</span>
                                    {t.text}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            {personalInfo.bio}
                        </p>

                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <MapPin size={15} className="text-primary flex-shrink-0" />
                                {personalInfo.location}
                            </div>
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <Mail size={15} className="text-primary flex-shrink-0" />
                                {personalInfo.email}
                            </div>
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <Zap size={15} className="text-primary flex-shrink-0" />
                                {personalInfo.availability}
                            </div>
                        </div>

                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Let's Work Together
                        </motion.a>
                    </motion.div>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} />
                    ))}
                </div> */}
            </div>
        </section>
    );
}