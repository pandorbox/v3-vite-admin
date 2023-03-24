import { useUserStore } from "@/store/user.js"
// 全局方法挂载
export default function globalProperties(app) {
    app.config.globalProperties.$useUserStore = useUserStore
}
