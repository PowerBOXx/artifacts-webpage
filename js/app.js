// js/app.js - 优化后的语言切换和初始化逻辑

// 存储语言偏好的键
const LANG_STORAGE_KEY = 'userLanguagePreference';

/**
 * 切换语言并将偏好存储到 localStorage
 */
function toggleLanguage() {
    // 检查当前的语言，如果未设置，默认为 zh-CN
    const currentLang = document.documentElement.lang || 'zh-CN';
    const newLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
    
    // 存储新的语言偏好
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    
    // 应用新语言
    applyLanguage(newLang);
}

/**
 * 应用指定的语言到 DOM
 * @param {string} lang - 要应用的语言代码 ('zh-CN' 或 'en-US')
 */
function applyLanguage(lang) {
    document.documentElement.lang = lang;

    // 遍历所有带有 data-lang 属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        if (element.dataset.lang === lang) {
            // 恢复默认的 display 属性
            element.style.display = ''; 
        } else {
            element.style.display = 'none';
        }
    });

    const langToggleBtn = document.querySelector('.lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'zh-CN' ? '中文/EN' : 'English/中文';
    }
}

/**
 * 页面加载时初始化语言
 */
function initializeLanguage() {
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    const initialLang = storedLang || 'zh-CN'; // 如果没有存储，则默认为中文

    // 应用初始化语言
    applyLanguage(initialLang);
}

// 确保在 DOM 加载完成后运行初始化
document.addEventListener('DOMContentLoaded', initializeLanguage);