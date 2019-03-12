import Vue from 'vue';
import Router from 'vue-router';

    
import _15524019412009d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1552401941200d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _155240194120067830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    

    
import _15524019412008df541b53e4cb5088c52e8d2c73e2b09 from '@/pages/login.vue';
    

    
import _155240194120091052b4e544af010cd122b5b3b2747de from '@/pages/register.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15524019412009d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/",
        "component": _155240194120067830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/login",
        "component": _15524019412008df541b53e4cb5088c52e8d2c73e2b09,
        "meta": {},
        "name": "login"
    },
    {
        "path": "/register",
        "component": _155240194120091052b4e544af010cd122b5b3b2747de,
        "meta": {},
        "name": "register"
    },
    {
        "path": "/error",
        "component": _1552401941200d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
