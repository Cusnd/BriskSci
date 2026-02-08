import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
    href: string;
    label: string;
}

interface Props {
    lang?: 'en' | 'zh';
    navItems?: NavItem[];
}

export default function Header({ lang = 'en', navItems = [] }: Props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Use passed navItems or fallback (though ideally should always be passed)
    const links = navItems.length > 0 ? navItems : [
        { href: `/${lang}/`, label: 'Home' },
        { href: `/${lang}/blog/`, label: 'Blog' },
        { href: `/${lang}/projects/`, label: 'Projects' },
        { href: `/${lang}/mood/`, label: 'Moods' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center pointer-events-auto">
                <nav className={`
                    flex justify-between items-center w-full px-6 py-3 rounded-full transition-all duration-300 border-none
                    ${isScrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg !border !border-white/50' : 'bg-transparent'}
                `}>
                    <a href={`/${lang}/`} className="font-serif font-bold text-xl text-sakura-dark tracking-tighter hover:opacity-80 transition-opacity">
                        🌸 Soren
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                        {links.map(link => (
                            <a key={link.href} href={link.href} className="hover:text-sakura-dark transition-colors relative group">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sakura-dark transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-slate-600 hover:text-sakura-dark"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -30, scale: 0.95, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(4px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute top-20 left-4 right-4 p-6 glass rounded-2xl md:hidden pointer-events-auto shadow-xl"
                    >
                        <div className="flex flex-col gap-2 text-center font-serif text-lg text-slate-700">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
                                    className="py-3 px-4 rounded-xl hover:bg-sakura-light/30 hover:text-sakura-dark transition-colors"
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
