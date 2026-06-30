import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Dribbble, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../portfolio';

const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Dribbble size={18} />, href: 'https://dribbble.com', label: 'Dribbble' },
];

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer
            className="relative pt-16 pb-8 border-t overflow-hidden"
            style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}
        >
            {/* Top glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,209,0.4), transparent)', filter: 'blur(4px)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Main footer content */}
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="font-display font-bold text-2xl mb-3">
                            <span className="gradient-text">AM</span>
                            <span className="text-white/20 mx-1">/</span>
                            <span className="text-white/40 text-base font-normal">dev</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
                            {personalInfo.tagline}
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40
                    hover:text-primary border border-white/5 hover:border-primary/30 transition-colors duration-300"
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Nav links */}
                    <div>
                        <h4 className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">Navigation</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-white/40 hover:text-primary text-sm transition-colors duration-200 py-1"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact quick */}
                    <div>
                        <h4 className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">Get in touch</h4>
                        <div className="flex flex-col gap-2">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-white/40 hover:text-primary text-sm transition-colors duration-200"
                            >
                                {personalInfo.email}
                            </a>
                            <a
                                href={`https://wa.me/${personalInfo.whatsapp}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white/40 hover:text-primary text-sm transition-colors duration-200"
                            >
                                WhatsApp: +{personalInfo.whatsapp}
                            </a>
                            <span className="text-white/40 text-sm">{personalInfo.location}</span>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2 mt-5 glass px-3 py-2 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary text-xs font-mono">Open to opportunities</span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
                    style={{ borderTop: '1px solid var(--border)' }}
                >
                    <p className="text-white/25 text-xs font-mono flex items-center gap-1.5">
                        © {new Date().getFullYear()} {personalInfo.name}. Made with
                        <Heart size={11} className="text-rose-500 fill-rose-500" />
                        and a lot of coffee.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center
              text-primary hover:bg-primary hover:text-surface transition-all duration-300"
                    >
                        <ArrowUp size={16} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}