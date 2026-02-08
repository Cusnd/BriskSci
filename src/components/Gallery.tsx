import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
    { src: 'https://picsum.photos/id/1015/600/400', aspect: 'landscape' },
    { src: 'https://picsum.photos/id/1016/400/600', aspect: 'portrait' },
    { src: 'https://picsum.photos/id/1018/600/400', aspect: 'landscape' },
    { src: 'https://picsum.photos/id/1019/400/600', aspect: 'portrait' },
    { src: 'https://picsum.photos/id/1020/600/400', aspect: 'landscape' },
    { src: 'https://picsum.photos/id/1021/400/600', aspect: 'portrait' },
    { src: 'https://picsum.photos/id/1022/600/400', aspect: 'landscape' },
    { src: 'https://picsum.photos/id/1023/400/600', aspect: 'portrait' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 animate-slide-up">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm glass cursor-zoom-in"
                        onClick={() => setSelectedImage(img.src)}
                    >
                        <img
                            src={img.src}
                            alt={`Gallery item ${index}`}
                            className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-sakura-light transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage}
                            alt="Full screen"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
