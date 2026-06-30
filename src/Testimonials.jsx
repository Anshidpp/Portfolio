import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../portfolio';
import SectionHeader from './SectionHeader';

const gradientMap = {
    'from-cyan-400 to-blue-500': 'linear-gradient(135deg, #22d3ee, #3b82f6)',
    'from-violet-400 to-purple-600': 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    'from-pink-400 to-rose-500': 'linear-gradient(135deg, #f472b6, #f43f5e)',
    'from-green-400 to-emerald-500': 'linear-gradient(135deg, #4ade80, #10b981)',
};

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const go = (dir) => {
        setDirection(dir);
        setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const t = testimonials[current];
    const grad = gradientMap[t.color] || 'linear-gradient(135deg, #22d3ee, #3b82f6)';

    return (
        <section id="testimonials" className="relative py-28 overflow-hidden"
            style={{ background: 'var(--surface-2)' }}>

            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.04) 0%, transparent 70%)' }}
            />

            <div className="max-w-5xl mx-auto px-6">
                <SectionHeader
                    tag="// 006 — testimonials"
                    title="What clients"
                    highlight="say"
                    subtitle="Don't take my word for it — here's what people I've worked with have to say."
                />

                <div className="relative">
                    {/* Main card */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 80 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-strong rounded-3xl p-8 md:p-12 border border-white/8 relative overflow-hidden"
                        >
                            {/* Accent top border */}
                            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: grad }} />

                            {/* Quote icon */}
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 opacity-80"
                                style={{ background: `${grad}22` }}
                            >
                                <Quote size={20} style={{ color: grad.includes('#22d3ee') ? '#00FFD1' : grad.includes('#a78bfa') ? '#a78bfa' : '#f472b6' }} />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Star size={16} fill="#FFD700" color="#FFD700" />
                                    </motion.div>
                                ))}
                            </div>

                            <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-light">
                                "{t.text}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                                    style={{ background: grad }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-display font-semibold text-white">{t.name}</div>
                                    <div className="text-white/40 text-sm">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setIsAutoPlaying(false); }}
                                    className={`rounded-full transition-all duration-300 ${i === current
                                            ? 'w-8 h-2 bg-primary'
                                            : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => go(-1)}
                                className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center
                  text-white/60 hover:text-white hover:border-primary/30 transition-all duration-300"
                            >
                                <ChevronLeft size={18} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => go(1)}
                                className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center
                  text-white/60 hover:text-white hover:border-primary/30 transition-all duration-300"
                            >
                                <ChevronRight size={18} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mini cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                    {testimonials.map((tt, i) => {
                        const g = gradientMap[tt.color] || 'linear-gradient(135deg, #22d3ee, #3b82f6)';
                        return (
                            <motion.button
                                key={tt.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setIsAutoPlaying(false); }}
                                className={`glass rounded-2xl p-4 text-left border transition-all duration-300 ${i === current ? 'border-primary/40' : 'border-white/5 hover:border-white/15'
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                        style={{ background: g }}
                                    >
                                        {tt.avatar}
                                    </div>
                                    <span className="text-white/70 text-xs font-medium truncate">{tt.name.split(' ')[0]}</span>
                                </div>
                                <p className="text-white/30 text-xs line-clamp-2">{tt.text.slice(0, 55)}…</p>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}