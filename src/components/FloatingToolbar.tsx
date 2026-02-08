import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Settings, X, ChevronRight } from 'lucide-react';

interface Props {
    currentLang: 'en' | 'zh';
}

export default function FloatingToolbar({ currentLang }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showLangPicker, setShowLangPicker] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    // Switch language logic
    const switchLang = (lang: 'en' | 'zh') => {
        const currentPath = window.location.pathname;
        // Replace current lang segment or add it
        const segments = currentPath.split('/').filter(Boolean);

        // If first segment is a lang code, replace it
        if (segments[0] === 'en' || segments[0] === 'zh') {
            segments[0] = lang;
        } else {
            // Should not happen with new routing, but fallback
            segments.unshift(lang);
        }

        window.location.href = `/${segments.join('/')}`;
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="flex flex-col gap-3 items-end mb-2"
                        >
                            {/* Language Button */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-medium bg-white/80 backdrop-blur px-2 py-1 rounded shadow-sm text-slate-500">
                                    Language
                                </span>
                                <button
                                    onClick={() => setShowLangPicker(true)}
                                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-slate-600 hover:text-sakura-dark transition-colors"
                                >
                                    <Languages size={20} />
                                </button>
                            </div>

                            {/* Settings Button (Placeholder) */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-medium bg-white/80 backdrop-blur px-2 py-1 rounded shadow-sm text-slate-500">
                                    Settings
                                </span>
                                <button
                                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-slate-600 hover:text-sakura-dark transition-colors"
                                >
                                    <Settings size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Floating Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleOpen}
                    className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-colors z-50 ${isOpen ? 'bg-slate-800' : 'bg-sakura-dark'}`}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Settings size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Language Picker Modal */}
            <AnimatePresence>
                {showLangPicker && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowLangPicker(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl z-[70] p-6 border border-white/50"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-slate-800 font-serif">Select Language</h3>
                                <button
                                    onClick={() => setShowLangPicker(false)}
                                    className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-2">
                                <button
                                    onClick={() => switchLang('en')}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${currentLang === 'en' ? 'bg-sakura-light/30 border border-sakura text-sakura-dark' : 'hover:bg-slate-50 text-slate-600'}`}
                                >
                                    <span className="font-medium">English</span>
                                    {currentLang === 'en' && <div className="w-2 h-2 rounded-full bg-sakura-dark" />}
                                </button>
                                <button
                                    onClick={() => switchLang('zh')}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${currentLang === 'zh' ? 'bg-sakura-light/30 border border-sakura text-sakura-dark' : 'hover:bg-slate-50 text-slate-600'}`}
                                >
                                    <span className="font-medium">简体中文</span>
                                    {currentLang === 'zh' && <div className="w-2 h-2 rounded-full bg-sakura-dark" />}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
