import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, highlight, subtitle }) {
    return (
        <div className="text-center mb-16">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-tag mb-4"
            >
                {tag}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5"
            >
                {title}{' '}
                {highlight && <span className="gradient-text">{highlight}</span>}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}