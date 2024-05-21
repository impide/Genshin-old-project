export const LocationsDesign: LocationsDesign[] = [
    {
        title: 'Mondstadt',
        src: '../../../assets/image/main-page-home/mondstadt.jpg',
        character: '../../../assets/image/main-page-home/jean-ban.png',
        path: '/characters/mondstadt'
    },
    {
        title: 'Liyue',
        src: '../../../assets/image/main-page-home/liyue.jpg',
        character: '../../../assets/image/main-page-home/xiao-ban.png',
        path: '/characters/liyue'
    },
    {
        title: 'Inazuma',
        src: '../../../assets/image/main-page-home/inazuma.jpg',
        character: '../../../assets/image/main-page-home/ayaka-ban.png',
        path: '/characters/inazuma'
    },
]

export interface LocationsDesign {
    title: string;
    src: string;
    character: string;
    path: string;
}