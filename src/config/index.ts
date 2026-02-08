import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export interface SiteConfig {
    site: {
        title: string;
        description: string;
        author: string;
        avatar: string;
    };
    social: {
        github?: string;
        twitter?: string;
        email?: string;
        linkedin?: string;
        google_scholar?: string;
    };
    profile: {
        title: string;
        tagline: string;
    };
    research_interests: string[];
    education: Array<{
        degree: string;
        school: string;
        period: string;
        note?: string;
        current: boolean;
    }>;
    experience: Array<{
        title: string;
        company: string;
        period: string;
        description?: string;
        current: boolean;
    }>;
    skills: Array<{
        name: string;
        level: number;
    }>;
    publications: Array<{
        title: string;
        venue: string;
        role: string;
        description?: string;
        link?: string;
    }>;
}

export type Language = 'en' | 'zh';

export function getSiteConfig(lang: Language = 'en'): SiteConfig {
    // No cache - read fresh every time for hot reload
    // Determine which file to load based on lang
    const filename = lang === 'zh' ? 'site.zh.yaml' : 'site.en.yaml';
    const configPath = path.join(process.cwd(), 'src/config', filename);

    // Fallback to English if file doesn't exist (safety check)
    if (!fs.existsSync(configPath)) {
        console.warn(`Config file for ${lang} not found, falling back to English`);
        const fallbackPath = path.join(process.cwd(), 'src/config/site.en.yaml');
        const fileContent = fs.readFileSync(fallbackPath, 'utf8');
        return yaml.load(fileContent) as SiteConfig;
    }

    const fileContent = fs.readFileSync(configPath, 'utf8');
    return yaml.load(fileContent) as SiteConfig;
}

// Helper to get specific sections
export const getConfig = getSiteConfig;
