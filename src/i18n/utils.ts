import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function getPreferredLangFromHeader(acceptLanguage: string | null): Lang {
    if (!acceptLanguage) {
        return defaultLang;
    }

    const preferredLocales = acceptLanguage
        .split(',')
        .map((item) => item.trim().toLowerCase().split(';')[0]);

    return preferredLocales.some((locale) => locale === 'zh' || locale.startsWith('zh-'))
        ? 'zh'
        : defaultLang;
}

export function getLangFromRequest(request: Request): Lang {
    return getPreferredLangFromHeader(request.headers.get('accept-language'));
}
