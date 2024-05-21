export const SocialLists: SocialLists[] = [
    {
        classIcon: 'gg-facebook',
        iconName: 'Facebook',
        path: 'https://www.facebook.com/Genshinimpact.fr/'
    },
    {
        classIcon: 'bi-twitter',
        iconName: 'Twitter',
        path: 'https://twitter.com/genshinimpactfr'
    },
    {
        classIcon: 'bi-youtube',
        iconName: 'Youtube',
        path: 'https://www.youtube.com/c/GenshinImpact'
    },
    {
        classIcon: 'bi-instagram',
        iconName: 'Instagram',
        path: 'https://www.instagram.com/genshinimpact/'
    },
    {
        classIcon: 'bi-discord',
        iconName: 'Discord',
        path: 'https://discord.com/invite/genshinimpact'
    },
    {
        classIcon: 'bi-reddit',
        iconName: 'Reddit',
        path: 'https://www.reddit.com/r/Genshin_Impact'
    },
];

export const SocialConnexion: SocialListsConnexion[] = [
    {
        imgName: 'Google',
        imgSrc: '../../../assets/image/main-register/google-connexion.png',
    },
    {
        imgName: 'Apple',
        imgSrc: '../../../assets/image/main-register/apple-connexion.png',
    },
    {
        imgName: 'Facebook',
        imgSrc: '../../../assets/image/main-register/facebook-connexion.png',
    },
    {
        imgName: 'Twitter',
        imgSrc: '../../../assets/image/main-register/twitter-connexion.png',
    }
]

export interface SocialLists {
    classIcon: string;
    path: string;
    iconName?: string;
}

export interface SocialListsConnexion {
    imgName: string;
    imgSrc: string;
    imgTarget?: string;
}