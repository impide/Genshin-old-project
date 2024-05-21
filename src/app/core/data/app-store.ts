export const AppStore: AppStore[] = [
    {
        title: 'ps4',
        src: '../../../assets/image/main-page-home/ps4.png',
        link: 'https://www.playstation.com/fr-fr/games/genshin-impact/'
    },
    {
        title: 'apple',
        src: '../../../assets/image/main-page-home/apple.png',
        link: 'https://apps.apple.com/app/id1517783697'
    },
    {
        title: 'google',
        src: '../../../assets/image/main-page-home/googleplay.png',
        link: 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact'
    },
    {
        title: 'windows',
        src: '../../../assets/image/main-page-home/windows.png',
        link: '#'
    },
]

export interface AppStore {
    title: string;
    src: string;
    link: string;
}