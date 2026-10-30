// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // ممكن تستخدم الدي دي في index.html
  sayHello: () => "Hello from preload!",
  // أضف أي دوال إضافية تحتاجها
});