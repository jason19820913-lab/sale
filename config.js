// ══════════════════════════════════════════════
//  擇木良食 × 金鶯診所｜共用設定檔
//  修改此檔案即可同步更新前台與後台
// ══════════════════════════════════════════════

const APP_CONFIG = {

  // Google Apps Script 網頁應用程式 URL
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwyR1ZBcNCR7yCJH8kmKHCJtB-jE3I2YV6uj-NXjVpCYlCJwV5zDSbBscUmZneOe_Ub/exec',

  // localStorage 共用 Key（前後台必須一致，勿修改）
  KEYS: {
    SALES:    'clinicSalesLog',
    GS_URL:   'gsUrl',
    PIN:      'adminPin',
    STAFF:    'clinicStaff',
    PRODUCTS: 'clinicProducts',
  },

};

// 初始化：將 GAS_URL 寫入 localStorage，讓前後台的舊邏輯也能正常讀取
(function initConfig() {
  try {
    // 若 localStorage 尚未設定，或與 config 不同，自動更新
    if (localStorage.getItem(APP_CONFIG.KEYS.GS_URL) !== APP_CONFIG.GAS_URL) {
      localStorage.setItem(APP_CONFIG.KEYS.GS_URL, APP_CONFIG.GAS_URL);
      console.info('[config.js] GAS_URL 已同步至 localStorage');
    }
  } catch(e) {
    console.warn('[config.js] 無法存取 localStorage:', e);
  }
})();
