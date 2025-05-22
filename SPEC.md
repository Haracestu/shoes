# 鞋子搜尋網站專案規格文件

## 專案概述
這是一個純前端的鞋子搜尋網站，讓使用者可以快速搜尋和篩選各種鞋子商品。專案採用純 HTML、CSS 和 JavaScript 開發，使用 CDN 載入外部函式庫。

## 技術架構
- HTML5
- CSS3
- JavaScript (原生，無框架)
- Bootstrap 5.3.0 (透過 CDN)

## 主要功能
1. 鞋子搜尋
   - [x] 關鍵字搜尋（依鞋名）
   - [x] 品牌篩選
   - [x] 價格範圍篩選
   - [x] 即時搜尋結果更新

2. 使用者介面
   - [x] 響應式設計（RWD）
   - [x] 鞋子卡片展示
   - [x] 品牌標籤
   - [x] 價格顯示

## 資料結構
目前使用靜態 JSON 資料儲存鞋子資訊，每個鞋子物件包含：
```javascript
{
    id: Number,
    name: String,
    brand: String,
    price: Number,
    image: String,
    description: String
}
```

## 目前進度
- [x] 基礎頁面架構
- [x] 搜尋功能實作
- [x] 篩選功能實作
- [x] 響應式設計
- [x] 基本樣式設計

## 待開發功能
- [ ] 排序功能（價格高低、熱門程度）
- [ ] 進階篩選（尺寸、顏色、類型）
- [ ] 購物車功能
- [ ] 詳細商品頁面
- [ ] 使用者收藏功能

## 檔案結構
```
shoes/
├── index.html      # 主要 HTML 頁面
├── styles.css      # 樣式表
├── script.js       # JavaScript 邏輯
└── SPEC.md         # 專案規格文件
```

## 使用的外部資源
1. Bootstrap 5.3.0
   - CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css
   - JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js

## 開發注意事項
1. 保持純前端架構，不使用後端服務
2. 優先使用 CDN 版本的外部函式庫
3. 確保程式碼的可維護性和可讀性
4. 保持響應式設計的一致性

## 貢獻指南
1. 遵循現有的程式碼風格
2. 新功能開發前先更新此規格文件
3. 確保所有新功能都經過完整測試
4. 更新時標注功能完成狀態

## 版本資訊
- 目前版本：1.0.0
- 最後更新：2025/05/22