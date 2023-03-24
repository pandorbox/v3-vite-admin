// Toast
import { showToast, setToastDefaultOptions } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';

// 全局方法挂载
export default function globalShowBlock(app) {
    setToastDefaultOptions('loading', { message: '122' });
    app.config.globalProperties.$showToast = showToast
    app.config.globalProperties.$showDialog = showDialog
    app.config.globalProperties.$showNotify = showNotify
    app.config.globalProperties.$showImagePreview = showImagePreview
}
