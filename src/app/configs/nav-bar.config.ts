import { Menu } from "@core/models/menu.interface";
import { Roles } from "@core/models/roles.enum";
import { appUrl } from "./app-url.config";

export const navItems: Menu[] = [
    {   
        label: 'Menu', icon: 'build',
        children: [
            { 
                label: 'Sous Menu', icon: 'notifications',
                children: [
                    { label: '', link: '' },
                    { label: '', link: '' },
                    { label: '', link: '' },
                    {   
                        label: '',
                        link: '',
                        roles: [
                            Roles.ADMINISTRATOR
                        ] 
                    },
                ]
            },
        { label: 'App', link: '' },
      ],
    },
    { label: 'Test User', icon: 'file_download', link: appUrl.user.registration },
];


export const paramsNavItems: Menu[] = [
    { label: '', icon: 'arrow_drop_down', link: '/home' },
    { 
        label: 'Profile', icon: 'account_circle',
        children: [
            { label: 'Connexion', link: '/login' },
            { label: 'Profil', link: '/login' },
        ]
    },
];