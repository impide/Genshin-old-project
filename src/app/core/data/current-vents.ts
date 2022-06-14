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
] 

export interface Events {
    src: string;
    description: string;
    date: string;
}