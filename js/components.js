// js/components.js

document.addEventListener('DOMContentLoaded', () => {
    // 找到放置 header 的容器
    const headerContainer = document.getElementById('header-placeholder');
    
    // 如果没有找到占位符，则停止执行
    if (!headerContainer) return;

    // 获取当前页面的文件名（例如：index.html, artifacts.html）
    const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';

    // 1. 加载 Header 组件
    fetch('components/header_component.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch header component: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            // 将 HTML 插入到占位符中
            headerContainer.innerHTML = html;
            
            // 2. 应用 active-link 样式
            setActiveLink(currentPage);
            
            // 3. 重新运行语言切换（因为 header 刚被加载进来）
            // 确保在主页面上 language.js 已经加载
            if (typeof toggleLanguage === 'function') {
                toggleLanguage();
            }
        })
        .catch(error => console.error("Error loading header component:", error));
});


/**
 * 根据当前页面路径设置导航栏中的活动链接样式
 * @param {string} currentPage - 当前页面的简化名称 (如 'index', 'artifacts', 'modeling_process')
 */
function setActiveLink(currentPage) {
    // 映射文件名到我们在组件中设置的 data-page 属性
    let pageMap = {
        'index': 'index',
        'artifacts': 'artifacts',
        'artifact_detail': 'artifacts', // 详情页也高亮'文物'
        'modeling_process': 'process'
    };
    
    const targetPage = pageMap[currentPage] || currentPage;

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        // 移除所有链接的 active 样式
        link.classList.remove('active-link'); 
        
        // 检查 data-page 属性是否匹配目标页面
        if (link.getAttribute('data-page') === targetPage) {
            link.classList.add('active-link');
        }
    });
}