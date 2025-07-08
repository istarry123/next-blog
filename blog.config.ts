import { GiscusProps } from '@giscus/react';

type Config = {
    title: string;
    description: string;
    keywords: string[];
    url: string;
    language: string;
    // 评论功能
    comment?: GiscusProps;
    // GitHub userid
    github?: string;
    x?: string;
    // 页面分析
    analytics?: {
        google?: string;
        la51?: string;
        umami?: string;
    };
    // https://follow.is/
    follow?: {
        feedId: string;
        userId: string;
    };
};

const config: Config = {
    title: 'Istarry',
    description: 'Istarry的个人博客，记录一些技术或者想法',
    keywords: ['blog', '博客', 'Istarry', '技术', '生活', 'Istarry'],
    url: 'https://blog.istarry.top',
    language: 'zh-CN',
    github: 'istarry123',
    x: 'istarry123',
    comment: {
        repo: 'istarry123/blog',
        repoId: 'R_kgDOJfgQ9g',
        mapping: 'pathname',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJfgQ9s4Cdhrx',
        lang: 'zh-CN',
        strict: '1',
        reactionsEnabled: '0',
        emitMetadata: '0',
        inputPosition: 'top',
        loading: 'lazy',
    },
    analytics: {
        la51: 'JmvyCfPiIR4wTw9W',
        // google: 'G-XFQZ8KB23B',
        // umami: '8727a795-62d6-4c79-9cb0-bdf322099374',
    },
    follow: {
        feedId: '48224099084379136',
        userId: '47261911326774272',
    },
};

export { config };
