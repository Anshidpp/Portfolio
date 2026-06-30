import { motion } from 'framer-motion';
import { services } from '../portfolio';
import SectionHeader from './SectionHeader';

const gradients = {
    'from-cyan-400 to-primary': 'linear-gradient(135deg, #22d3ee, #00FFD1)',
    'from-violet-400 to-purple-600': 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    'from-pink-400 to-rose-500': 'linear-gradient(135deg, #f472b6, #f43f5e)',
    'from-amber-400 to-orange-500': 'linear-gradient(135deg, #fbbf24, #f97316)',
    'from-green-400 to-emerald-500': 'linear-gradient(135deg, #4ade80, #10b981)',
    'from-blue-400 to-indigo-500': 'linear-gradient(135deg, #60a5fa, #6366f1)',
};

function ServiceCard({ service, index }) {
    const grad = gradients[service.color] || 'linear-gradient(135deg, #00FFD1, #7C3AED)';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative glass rounded-3xl p-7 border border-white/5 overflow-hidden
        hover:border-white/15 transition-all duration-500 cursor-default"
        >
            {/* Hover gradient bg */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `${grad.replace('135deg', '135deg').replace(')', ', 0.06)')}` }}
            />

            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: grad }}
            />

            {/* Number */}
            <div className="absolute top-6 right-6 font-mono text-xs text-white/10 group-hover:text-white/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Icon */}
            <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10"
                style={{ background: `${grad}22`, border: `1px solid ${grad}33` }}
            >
                {service.icon}
            </motion.div>

            <h3 className="font-display font-bold text-white text-xl mb-3 relative z-10
        group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{ '--grad': grad }}
            >
                <span
                    className="group-hover:opacity-0 transition-opacity duration-300 block"
                >
                    {service.title}
                </span>
                <span
                    className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                    {service.title}
                </span>
            </h3>

            <p className="text-white/50 text-sm leading-relaxed relative z-10 group-hover:text-white/65 transition-colors duration-300">
                {service.description}
            </p>

            {/* Arrow */}
            <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="mt-5 flex items-center gap-2 text-xs font-medium"
                style={{ color: grad.includes('#22d3ee') ? '#00FFD1' : grad.includes('#a78bfa') ? '#a78bfa' : '#f472b6' }}
            >
                Learn more →
            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative py-28 overflow-hidden">

            <div
                className="absolute left-1/4 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    tag="// 004 — services"
                    title="What I"
                    highlight="offer"
                    subtitle="From concept to deployment — I cover every layer of the modern web stack."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, i) => (
                        <ServiceCard key={service.id} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}