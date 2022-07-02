export const SocialLists: SocialLists[] = [
    {
        classIcon: 'gg-facebook',
        iconName: 'Facebook'
    },
    {
        classIcon: 'bi-twitter',
        iconName: 'Twitter'
    },
    {
        classIcon: 'bi-youtube',
        iconName: 'Youtube'
    },
    {
        classIcon: 'bi-instagram',
        iconName: 'Instagram'
    },
    {
        classIcon: 'bi-discord',
        iconName: 'Discord'
    },
    {
        classIcon: 'bi-reddit',
        iconName: 'Reddit'
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
    iconName?: string;
}

export interface SocialListsConnexion {
    imgName: string;
    imgSrc: string;
    imgTarget?: string;
}