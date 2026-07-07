import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { personalInfo } from '../portfolio';
import SectionHeader from './SectionHeader';

function ContactInfo() {
    const items = [
        { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location, href: null },
        { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: `+${personalInfo.whatsapp}`, href: `https://wa.me/${personalInfo.whatsapp}` },
    ];

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, i) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                    {item.href ? (
                        <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <div className="text-white/70 text-xs font-mono mb-0.5">{item.label}</div>
                                <div className="text-white/80 text-sm font-medium">{item.value}</div>
                            </div>
                        </a>
                    ) : (
                        <div className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                {item.icon}
                            </div>
                            <div>
                                <div className="text-white/70 text-xs font-mono mb-0.5">{item.label}</div>
                                <div className="text-white/80 text-sm font-medium">{item.value}</div>
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `Hello Alex! 👋\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}\n\n_Sent via portfolio contact form_`
        );
        const url = `https://wa.me/${personalInfo.whatsapp}?text=${text}`;
        window.open(url, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    const fieldClass = (name) => `
    w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300
    font-body text-black placeholder-black/50
    ${focused === name
            ? 'border-primary/60 bg-white/6'
            : 'border-white/8 bg-white/4 hover:border-white/15'
        }
    border
  `;

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-10 border border-primary/20 text-center flex flex-col items-center gap-4"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary"
                >
                    <CheckCircle size={32} />
                </motion.div>
                <h3 className="font-display font-bold text-white text-xl">WhatsApp Opened!</h3>
                <p className="text-white/50 text-sm">Your message has been pre-filled in WhatsApp. Just hit send!</p>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 border border-white/5 flex flex-col gap-4"
        >
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-xs font-mono">Your name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        placeholder="John Doe"
                        required
                        className={fieldClass('name')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-xs font-mono">Email address</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        placeholder="john@email.com"
                        required
                        className={fieldClass('email')}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-white/70 text-xs font-mono">Subject</label>
                <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                    placeholder="Project inquiry / Collaboration / Freelance work..."
                    required
                    className={fieldClass('subject')}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-white/70 text-xs font-mono">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Tell me about your project, idea, or what you need help with..."
                    required
                    rows={5}
                    className={`${fieldClass('message')} resize-none`}
                />
            </div>

            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-3 mt-2 py-4 w-full"
            >
                <MessageCircle size={18} />
                Send via WhatsApp
                <Send size={15} />
            </motion.button>

            <p className="text-white/25 text-xs text-center font-mono">
                → Opens WhatsApp with your message pre-filled
            </p>
        </motion.form>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="relative py-28 overflow-hidden">
            <div
                className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
            />
            <div
                className="absolute left-0 top-1/4 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    tag="// 007 — contact"
                    title="Let's build something"
                    highlight="together"
                    subtitle="Have a project in mind? I'm currently available for freelance work and open to interesting opportunities."
                />

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Left sidebar */}
                    <div className="lg:col-span-2 flex flex-col justify-between gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-display font-bold text-2xl text-white mb-2">Get in touch</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Drop me a message!
                            </p>
                            <ContactInfo />
                        </motion.div>

                        {/* Availability card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-2xl p-5 border border-primary/15"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-primary text-sm font-semibold">Available for work</span>
                            </div>
                            <p className="text-white/50 text-xs leading-relaxed">
                                Currently taking on new projects. Typical response time is within 24 hours.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right form */}
                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}