export const AppStore: AppStore[] = [
    {
        title: 'ps4',
        src: '../../../assets/image/main-page-home/ps4.png'
    },
    {
        title: 'apple',
        src: '../../../assets/image/main-page-home/apple.png'
    },
    {
        title: 'google',
        src: '../../../assets/image/main-page-home/googleplay.png'
    },
    {
        title: 'windows',
        src: '../../../assets/image/main-page-home/windows.png'
    },
]

export interface AppStore {
    title: string;
    src: string;
}