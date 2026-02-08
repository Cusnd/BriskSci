import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail } from 'lucide-react';

// Spring config for hover effects only
const springConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 20
};

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Floating background decorations - these are okay since they don't affect layout */}
            <motion.div
                className="absolute top-20 left-10 text-6xl opacity-20 select-none"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                🌸
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-10 text-4xl opacity-20 select-none"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                ✨
            </motion.div>

            <div className="z-10 px-4">
                <div className="mb-8 relative inline-block">
                    <motion.div
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden glass"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={springConfig}
                    >
                        <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=Sakura"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 bg-white text-2xl p-2 rounded-full shadow-md">
                        🌸
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
                    Hello, I'm <motion.span
                        className="text-sakura-dark inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={springConfig}
                    >Soren</motion.span>
                </h1>

                <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto mb-8 font-serif leading-relaxed">
                    A minimalist blog for collecting thoughts, code, and dreams. <br />
                    Exploring the world through a <span className="text-sakura-dark font-medium decoration-sakura underline decoration-2 underline-offset-4">Sakura</span> lens.
                </p>

                <div className="flex gap-4 justify-center">
                    <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
                    <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                    <SocialLink href="#" icon={<Mail size={20} />} label="Email" />
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <motion.a
            href={href}
            className="p-3 rounded-full bg-white/50 border border-white/60 text-slate-600"
            aria-label={label}
            whileHover={{
                scale: 1.15,
                y: -5,
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: "0 10px 30px -10px rgba(248, 113, 113, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
        >
            {icon}
        </motion.a>
    );
}


