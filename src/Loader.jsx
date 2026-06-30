import { motion } from 'framer-motion';

export default function Loader({ onDone }) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={onDone}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
            style={{ background: 'var(--surface)' }}
        >
            {/* Animated logo */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-8"
            >
                <div className="font-display font-bold text-6xl gradient-text text-glow">
                    AM
                </div>
                {/* Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                    className="absolute -inset-4 rounded-full"
                    style={{
                        border: '2px solid transparent',
                        borderTopColor: '#00FFD1',
                        borderRightColor: 'rgba(0,255,209,0.3)',
                    }}
                />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00FFD1, #7C3AED)' }}
                    onAnimationComplete={onDone}
                />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-white/30 text-xs mt-4 tracking-widest"
            >
                Loading portfolio...
            </motion.p>
        </motion.div>
    );
}