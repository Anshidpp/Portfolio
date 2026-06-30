import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../portfolio';
import SectionHeader from './SectionHeader';

function ExperienceCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line and Dot for Mobile/Desktop */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
            <div className="md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,209,0.8)]"></div>

            <div className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Timeline for Desktop */}
                <div className="hidden md:flex flex-col items-center mt-2 relative">
                    <div className="w-12 h-12 rounded-2xl glass border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-surface transition-all duration-300 z-10 shadow-[0_0_15px_rgba(0,255,209,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,209,0.6)]">
                        <Briefcase size={20} />
                    </div>
                    {index !== experience.length - 1 && (
                        <div className="w-px h-full min-h-[150px] absolute top-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
                    )}
                </div>

                {/* Card Content */}
                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl"></div>
                    <div className="glass rounded-3xl p-6 md:p-8 border border-white/5 group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1">
                        
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                            <div>
                                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">{item.role}</h3>
                                <div className="text-white/70 font-medium text-lg flex items-center gap-2">
                                    <span className="w-4 h-px bg-primary/50"></span>
                                    {item.company}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-white/40 text-sm font-mono bg-white/5 px-4 py-3 rounded-2xl border border-white/5 shrink-0">
                                <span className="flex items-center gap-2">
                                    <Calendar size={14} className="text-primary/70" />
                                    {item.period}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={14} className="text-primary/70" />
                                    {item.location}
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 text-base leading-relaxed mb-8 max-w-3xl relative z-10">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full font-medium text-white/70 border border-white/10 bg-white/5 group-hover:border-primary/20 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="relative py-28 md:py-36 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <SectionHeader
                    tag="// 005 — journey"
                    title="Professional"
                    highlight="Experience"
                    subtitle="My professional path and the milestones that shaped my career."
                />

                <div className="flex flex-col gap-8 md:gap-4 mt-16 md:mt-24">
                    {experience.map((item, i) => (
                        <ExperienceCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}