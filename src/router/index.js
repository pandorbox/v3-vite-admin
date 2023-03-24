import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/user'
import Layout from "@/layout/index.vue"

// 固定路由
const routes = [
    {
        path: '/',
        name: 'home',
        component: Layout,
        redirect: '/menu1',
        meta: {
            title: 'v3管理后台'
        },
        children: [
            {
                path: 'menu1',
                name: 'menu1',
                component: () => import('@/view/menu1/index.vue'),
                meta: "菜单一"
            },
            {
                path: 'menu2',
                name: 'menu2',
                component: () => import('@/view/menu2/index.vue'),
                meta: "菜单一"
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach(async (to, from, next) => {
    console.log(to, from)
    console.log(useUserStore().getIsLogin)
    // 是否已登录
    if (!useUserStore().getIsLogin) {
        if (to.name == 'login') {
            next()
        } else {
            next({
                name: 'login',
            })
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {

})

export default router
