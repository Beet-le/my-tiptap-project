const routes = [
    {
        path:'/',
        redirect:'home'
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('../Tiptap/index.vue')
    },
    {
        name: 'OpenWindow',
        path: '/OpenWindow',
        component: () => import('../components/OpenWindow.vue')
    },
    
];

export default routes
