# 鞋子搜尋網站專案規格文件

## 專案概述
這是一個純前端的鞋子搜尋網站，讓使用者可以快速搜尋和篩選各種鞋子商品。專案採用純 HTML、CSS 和 JavaScript 開發，使用 CDN 載入外部函式庫。本專案的目標是建立一個直覺易用、功能完整的線上鞋子購物平台。

## 技術架構
- HTML5：提供網站基本結構
- CSS3：實現響應式設計和動畫效果
- JavaScript (原生，無框架)：處理前端互動邏輯
- Bootstrap 5.3.0 (透過 CDN)：提供基礎 UI 元件和格線系統

## 已完成功能
1. 搜尋和篩選系統 (完成於 2025/05/22)
   - [x] 關鍵字搜尋：可依照鞋名進行模糊搜尋
   - [x] 品牌篩選：支援 Nike、Adidas、Puma、New Balance
   - [x] 價格範圍篩選：分為四個價格區間
   - [x] 即時搜尋結果更新：無需手動點擊搜尋按鈕

2. 使用者介面 (完成於 2025/05/22)
   - [x] 響應式設計：支援桌面、平板和手機瀏覽
   - [x] 鞋子卡片展示：包含圖片、名稱、描述和價格
   - [x] 品牌標籤：右上角顯示品牌標籤
   - [x] 價格顯示：醒目的價格標示

## 待開發功能 (優先順序由高到低)
1. 排序功能 (預計 2025/05/30 完成)
   - [ ] 價格由高至低排序
   - [ ] 價格由低至高排序
   - [ ] 依熱門程度排序
   - [ ] 依上架時間排序

2. 進階篩選功能 (預計 2025/06/15 完成)
   - [ ] 尺寸篩選：需更新資料結構，加入尺寸資訊
   - [ ] 顏色篩選：需更新資料結構，加入顏色資訊
   - [ ] 鞋款類型篩選：運動、休閒、正式等分類

3. 購物車功能 (預計 2025/06/30 完成)
   - [ ] 加入購物車按鈕
   - [ ] 購物車清單頁面
   - [ ] 數量調整功能
   - [ ] 總金額計算
   - [ ] 本地儲存購物車資訊

4. 詳細商品頁面 (預計 2025/07/15 完成)
   - [ ] 大圖展示
   - [ ] 詳細規格說明
   - [ ] 尺寸表
   - [ ] 相關商品推薦
   - [ ] 返回列表功能

5. 使用者收藏功能 (預計 2025/07/30 完成)
   - [ ] 收藏按鈕
   - [ ] 收藏清單頁面
   - [ ] 本地儲存收藏資訊
   - [ ] 收藏商品管理

## 資料結構
目前使用靜態 JSON 資料儲存鞋子資訊：
```javascript
{
    id: Number,          // 商品唯一識別碼
    name: String,        // 鞋款名稱
    brand: String,       // 品牌名稱
    price: Number,       // 價格 (新台幣)
    image: String,       // 商品圖片 URL
    description: String  // 商品描述
}
```

待擴充的資料結構 (用於進階功能)：
```javascript
{
    // ...現有欄位...
    sizes: Array<Number>,    // 可選尺寸
    colors: Array<String>,   // 可選顏色
    type: String,           // 鞋款類型
    createDate: Date,       // 上架時間
    popularity: Number,     // 熱門程度
    stock: Number          // 庫存數量
}
```

## 檔案結構
```
shoes/
├── index.html      # 主要 HTML 頁面，包含網站架構和元件
├── styles.css      # 樣式表，定義網站外觀和動畫效果
├── script.js       # JavaScript 邏輯，處理資料和使用者互動
└── SPEC.md         # 專案規格文件，詳細記錄開發規範和進度
```

## 使用的外部資源
1. Bootstrap 5.3.0
   - CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css
   - JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js
   - 用途：提供基礎 UI 元件和響應式格線系統

## 開發規範
1. 程式碼風格
   - 使用 2 空格縮排
   - 使用駝峰式命名 (camelCase)
   - 所有函數都要加上註解說明

2. 開發原則
   - 保持純前端架構，不使用後端服務
   - 優先使用 CDN 版本的外部函式庫
   - 確保程式碼的可維護性和可讀性
   - 保持響應式設計的一致性
   - 使用 localStorage 儲存使用者資料

3. 效能考量
   - 最小化 DOM 操作
   - 使用事件委派處理列表互動
   - 延遲載入圖片資源
   - 避免不必要的重新渲染

## 測試規範
1. 功能測試
   - 確保所有搜尋和篩選功能正常運作
   - 驗證響應式設計在各種螢幕尺寸下的表現
   - 測試本地儲存功能的可靠性

2. 瀏覽器相容性
   - 支援 Chrome、Firefox、Safari 最新版本
   - 支援 Edge 最新版本
   - 確保基本功能在 IE11 可用

## 貢獻指南
1. 開發流程
   - Fork 專案並創建新分支
   - 完成功能開發和測試
   - 提交 Pull Request
   - 等待代碼審查和合併

2. 提交規範
   - 清晰的提交信息
   - 相關的測試案例
   - 更新文檔和 SPEC.md
   - 標注功能完成狀態

## 版本資訊
- 目前版本：1.0.0
- 最後更新：2025/05/22
- 更新內容：完成基礎搜尋和篩選功能