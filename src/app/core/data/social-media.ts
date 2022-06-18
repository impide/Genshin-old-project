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
]

export interface SocialLists {
    classIcon: string;
    iconName?: string;
}