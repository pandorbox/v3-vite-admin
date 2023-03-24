import { Button } from 'vant';
import FixedBottom from "@/components/FixedBottom.vue"


// 全局方法挂载
export default function globalComponents(app) {
    app.component('Button', Button)
    app.component('FixedBottom', FixedBottom)
}
