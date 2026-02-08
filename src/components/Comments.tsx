import React from 'react';

export default function Comments() {
    return (
        <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold font-serif text-slate-800 mb-4">Comments</h3>
            <div className="text-center py-12 text-slate-400 bg-white/50 rounded-xl border border-dashed border-slate-200">
                <p>Comments system (Giscus/Waline) will be initialized here.</p>
                <p className="text-xs mt-2">Configure repo ID to enable.</p>
            </div>
        </div>
    );
}
