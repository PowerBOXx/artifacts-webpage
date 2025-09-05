// 通用的语言切换函数，适用于所有页面
function toggleLanguage() {
    const isChinese = document.documentElement.lang === 'zh-CN';
    const newLang = isChinese ? 'en-US' : 'zh-CN';
    document.documentElement.lang = newLang;

    // 遍历所有带有 data-lang 属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.dataset.lang === newLang) {
            element.style.display = ''; // 使用空字符串来恢复默认的display属性
            // 对于某些特定的block级元素，可以显式设置为block
            if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'P' || element.tagName === 'DIV') {
                element.style.display = 'block'; 
            } else if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.style.display = 'inline-block';
            }
        } else {
            element.style.display = 'none';
        }
    });

    const langToggleBtn = document.querySelector('.lang-toggle-btn');
    langToggleBtn.textContent = newLang === 'zh-CN' ? '中文/EN' : 'English/中文';
}