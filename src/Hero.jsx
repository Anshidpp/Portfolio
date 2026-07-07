import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Twitter, Download, Eye } from 'lucide-react';
import { personalInfo } from '../portfolio';
import my from './assets/my.jpeg'
import myCV from './assets/Anshid-cv.pdf'

function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;
    const particles = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '0, 255, 209' : '124, 58, 237',
    });

    resize();
    for (let i = 0; i < 120; i++) particles.push(createParticle());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 209, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute rounded-full"
        style={{
          width: '600px', height: '600px',
          top: '-200px', right: '-100px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '400px', height: '400px',
          bottom: '-100px', left: '-100px',
          background: 'radial-gradient(circle, rgba(0,255,209,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
    </div>
  );
}

const socialIcons = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
};

const socials = [
  { icon: 'github', url: 'https://github.com', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
];

export default function Hero() {
  const roles = personalInfo.roles.flatMap(r => [r, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      {/* <ParticlesCanvas /> */}
      <FloatingOrbs />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-mono text-xs">{personalInfo.availability}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="gradient-text text-glow">{personalInfo.name}</span>
            </motion.h1>

            {/* Rotating roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <span className="text-white/40 font-mono text-sm">{'<'}</span>
              <TypeAnimation
                sequence={roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl font-display text-primary font-semibold"
              />
              <span className="text-white/40 font-mono text-sm">{'/>'}</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-lg max-w-xl mb-10 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href={myCV}
                download="anshid.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </motion.a>
              {/* <motion.a
                href={myCV}
                download="anshid.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </motion.a> */}
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-white/30 text-sm font-mono">follow —</span>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, color: '#00FFD1' }}
                  className="text-white/40 hover:text-primary transition-colors"
                  aria-label={s.label}
                >
                  {socialIcons[s.icon]}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #00FFD1, #7C3AED, transparent, #00FFD1)',
                  animation: 'spin 8s linear infinite',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: 'var(--surface)' }} />
              </div>

              {/* Avatar */}
              <div
                className="absolute inset-4 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(0,255,209,0.3))',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Code avatar placeholder */}
                <div className="text-center">
                  <div className="font-display font-bold text-7xl md:text-8xl gradient-text select-none">
                    <img src={my} alt="" />
                  </div>
                  <div className="font-mono text-xs text-white/30 mt-2">{'{ dev: true }'}</div>
                </div>
              </div>

              {/* Floating badges */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-mono text-primary border border-primary/20"
              >
                React ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-xs font-mono text-purple-400 border border-purple-500/20"
              >
                Node.js 🟢
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-12 glass px-3 py-2 rounded-xl text-xs font-mono text-yellow-400 border border-yellow-500/20"
                style={{ transform: 'translateY(-50%)' }}
              >
                5+ yrs ⚡
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16 gap-2 pb-8"
        >
          <span className="text-white/30 text-xs font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}