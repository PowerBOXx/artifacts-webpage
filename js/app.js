// js/app.js - 语言逻辑的唯一权威

const LANG_STORAGE_KEY = 'userLanguagePreference';

/**
 * 切换语言并保存偏好
 */
function toggleLanguage() {
    const currentLang = document.documentElement.lang || 'zh-CN';
    const newLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    applyLanguage(newLang);
}

/**
 * 应用指定语言到整个文档
 * @param {string} lang - 'zh-CN' 或 'en-US'
 */
function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = element.dataset.lang === lang ? '' : 'none';
    });
    const langToggleBtn = document.querySelector('.lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'zh-CN' ? '中文/EN' : 'English/中文';
    }
    
    // 触发语言切换事件
    const event = new CustomEvent('languageChanged', { detail: { lang } });
    document.dispatchEvent(event);
}


/**
 * 页面加载时，从 localStorage 读取并应用语言
 */
function initializeLanguage() {
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'zh-CN';
    applyLanguage(storedLang);
}

// DOM 准备好后，立即初始化语言
document.addEventListener('DOMContentLoaded', initializeLanguage);

