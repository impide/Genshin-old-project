export const Events: Events[] = [
    {
        src: '../../../assets/image/current-events/event_1.jpg',
        description: 'Détails de l\'événement « Festival des tambours harmonieux du sublime Arataki »',
        date: '12/06/2022'
    },
    {
        src: '../../../assets/image/current-events/event_2.jpg',
        description: 'Genshin Impact - Cinématique de « Sentier périlleux » : « Entre la vie et la mort »',
        date: '05/06/2022'
    },
    {
        src: '../../../assets/image/current-events/event_3.jpg',
        description: 'Genshin Impact - Aperçu de l\'histoire : « Seuls les vieux souvenirs restent »',
        date: '02/06/2022'
    }
];

export const ContestEvents: Events[] = [
    {
        src: '../../../assets/image/current-events/contest_1.jpg',
        description: '[Concours] Les participations au concours de fanart d\'Arataki Itto « Héros de Hanamizaka » sont désormais ouvertes !',
        date: '15/06/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_2.jpg',
        description: 'Détails de l\'événement « Festival des tambours harmonieux du sublime Arataki »',
        date: '12/06/2022'
    },
    {
        src: '../../../assets/image/current-events/event_2.jpg',
        description: 'Genshin Impact - Cinématique de « Sentier périlleux » : « Entre la vie et la mort »',
        date: '05/06/2022'
    },
    {
        src: '../../../assets/image/current-events/event_3.jpg',
        description: 'Genshin Impact - Aperçu de l\'histoire : « Seuls les vieux souvenirs restent »',
        date: '02/06/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_3.jpg',
        description: 'Paimon vous présente un aperçu des nouveaux événements de la version 2.7 - Partie I',
        date: '02/06/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_4.jpg',
        description: '[Concours : La fanthéstique aventure de Paimon]',
        date: '01/06/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_5.png',
        description: 'Mise à jour de l\'outil « Bilan des combats »',
        date: '31/05/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_6.jpg',
        description: 'Genshin Impact - Yelan : Talent dissimulé et traces couvertes',
        date: '31/05/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_7.png',
        description: '[Annonce des gagnants] Concours photo « Traces dans la nature »',
        date: '31/05/2022'
    },
    {
        src: '../../../assets/image/current-events/contest_8.jpg',
        description: 'FAQ Bêta-test de Genshin Impact sur Google PC',
        date: '31/05/2022'
    }
]

export interface Events {
    src: string;
    description: string;
    date: string;
}