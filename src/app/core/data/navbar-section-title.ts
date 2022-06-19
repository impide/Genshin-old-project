export const SectionTitle: SectionTitle[] = [
    {
        title: 'Acceuil',
        path: '/main-page-home'
    },
    {
        title: 'Actualités',
        path: '/current-events/news'
    },
    {
        title: 'Personnages',
        path: '/characters'
    },
    {
        title: 'Information',
        path: ''
    },
    {
        title: 'HoYoLAB',
        path: ''
    },
    {
        title: 'Recharge',
        path: ''
    },
    {
        title: 'Code d\'échange',
        path: ''
    },
]

export interface SectionTitle {
    title: string;
    path: string;
}