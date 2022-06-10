export const NewsUpdate: NewsUpdate[] = [
    {
        title: 'Genshin Impact - Cinématique de « Sentier périlleux » : « Entre la vie et la mort »',
        date: '05/06/2022',
        path: 'https://genshin.hoyoverse.com/fr/news/detail/21417'
    },
    {
        title: 'Genshin Impact - Aperçu de l\'histoire : « Seuls les vieux souvenirs restent »',
        date: '02/06/2022',
        path: 'https://genshin.hoyoverse.com/fr/news/detail/21388'
    },
    {
        title: 'Paimon vous présente un aperçu des nouveaux événements de la version 2.7 - Partie I',
        date: '02/06/2022',
        path: 'https://genshin.hoyoverse.com/fr/news/detail/21382'
    },
    {
        title: '[Concours : La fanthéstique aventure de Paimon]',
        date: '01/06/2022',
        path: 'https://genshin.hoyoverse.com/fr/news/detail/21374'
    },
    {
        title: 'Mise à jour de l\'outil « Bilan des combats »',
        date: '31/05/2022',
        path: 'https://genshin.hoyoverse.com/fr/news/detail/21358'
    },
]

export interface NewsUpdate {
    title: string;
    date: string;
    path: string;
}