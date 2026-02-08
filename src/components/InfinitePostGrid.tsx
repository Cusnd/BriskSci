import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Post {
    id: string;
    title: string;
    description: string;
    pubDate: string;
    tags?: string[];
    heroImage?: string;
}

interface Props {
    initialPosts: Post[];
    allPosts: Post[];
    lang: string;
}

export default function InfinitePostGrid({ initialPosts, allPosts, lang }: Props) {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [hasMore, setHasMore] = useState(initialPosts.length < allPosts.length);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);
    const postsPerLoad = 6;

    const loadMore = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulate async loading
        setTimeout(() => {
            const currentLength = posts.length;
            const nextPosts = allPosts.slice(currentLength, currentLength + postsPerLoad);

            if (nextPosts.length > 0) {
                setPosts(prev => [...prev, ...nextPosts]);
            }

            if (currentLength + nextPosts.length >= allPosts.length) {
                setHasMore(false);
            }

            setLoading(false);
        }, 300);
    }, [loading, hasMore, posts.length, allPosts]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMore();
                }
            },
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [hasMore, loading, loadMore]);

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <section id="posts" className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
                        Latest Posts
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Thoughts, tutorials, and explorations in AI and beyond.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <a
                            key={post.id}
                            href={`/${lang}/blog/${post.id}/`}
                            className="group block"
                            style={{
                                animationDelay: `${(index % postsPerLoad) * 50}ms`,
                            }}
                        >
                            <article className="glass p-6 rounded-2xl h-full flex flex-col">
                                {/* Image placeholder */}
                                <div className="w-full h-32 bg-gradient-to-br from-sakura-light/30 to-sakura/20 rounded-xl mb-4 flex items-center justify-center text-3xl overflow-hidden">
                                    {post.heroImage ? (
                                        <img src={post.heroImage} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <span>🌸</span>
                                    )}
                                </div>

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-sakura-light/30 text-sakura-dark font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sakura-dark transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 text-sm line-clamp-2 flex-1 mb-4">
                                    {post.description}
                                </p>

                                {/* Date */}
                                <div className="text-xs text-slate-400 font-serif">
                                    {formatDate(post.pubDate)}
                                </div>
                            </article>
                        </a>
                    ))}
                </div>

                {/* Loading indicator */}
                {loading && (
                    <div className="flex justify-center py-8">
                        <div className="w-8 h-8 border-2 border-sakura-dark border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Intersection observer target */}
                <div ref={observerRef} className="h-10" />

                {/* End message */}
                {!hasMore && posts.length > 0 && (
                    <div className="text-center py-8 text-slate-400 text-sm">
                        ✨ You've reached the end
                    </div>
                )}

                {/* Empty state */}
                {posts.length === 0 && (
                    <div className="text-center py-16 text-slate-400">
                        <p className="text-4xl mb-4">📝</p>
                        <p>No posts yet. Stay tuned!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
