import 'boxicons';

export const navData = [
    /* 
        path: '',
        title: '',
        icon: ,
        class: ''
    */
    {
        path: '/',
        title: 'Dashboard',
        icon: <box-icon name='home-alt-2' color='white'></box-icon>,
        class: 'nav-item'
    },
    {
        path: '/programs',
        title: 'Programs',
        icon: <box-icon name='task' color='white'></box-icon>,
        class: 'nav-item'
    },
    {
        path: '/log',
        title: 'Exercise Log',
        icon: <box-icon name='notepad' color='white'></box-icon>,
        class: 'nav-item'
    },
    {
        path: '/settings',
        title: 'Settings',
        icon: <box-icon name='cog' color='white'></box-icon>,
        class: 'nav-item'
    }
]