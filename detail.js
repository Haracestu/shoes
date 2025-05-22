// 從 URL 取得商品 ID
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// DOM 元素
const productImage = document.getElementById('productImage');
const productBrand = document.getElementById('productBrand');
const productName = document.getElementById('productName');
const productDescription = document.getElementById('productDescription');
const productPrice = document.getElementById('productPrice');
const sizeOptions = document.getElementById('sizeOptions');
const relatedProducts = document.getElementById('relatedProducts');
const addToCartBtn = document.getElementById('addToCartBtn');
const addToFavBtn = document.getElementById('addToFavBtn');
const quantitySelect = document.getElementById('quantity');

// 尺寸選項
const sizes = [23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28];

// 從外部資料載入商品資訊
let currentProduct = null;

// 初始化頁面
async function initProductDetail() {
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    // 在實際應用中，這裡會從後端 API 取得資料
    // 目前使用靜態資料模擬
    currentProduct = shoesData.find(shoe => shoe.id === parseInt(productId));
    
    if (!currentProduct) {
        window.location.href = 'index.html';
        return;
    }

    // 更新頁面內容
    updateProductInfo();
    createSizeOptions();
    loadRelatedProducts();
}

// 更新商品資訊
function updateProductInfo() {
    document.title = `${currentProduct.name} - 鞋子搜尋網站`;
    productImage.src = currentProduct.image;
    productImage.alt = currentProduct.name;
    productBrand.textContent = currentProduct.brand;
    productName.textContent = currentProduct.name;
    productDescription.textContent = currentProduct.description;
    productPrice.textContent = `NT$ ${currentProduct.price}`;
}

// 創建尺寸選項
function createSizeOptions() {
    sizeOptions.innerHTML = sizes.map(size => `
        <button type="button" class="size-btn" data-size="${size}">
            ${size}
        </button>
    `).join('');

    // 綁定尺寸選擇事件
    const sizeButtons = sizeOptions.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// 載入相關商品
function loadRelatedProducts() {
    // 篩選同品牌的其他商品
    const related = shoesData
        .filter(shoe => shoe.brand === currentProduct.brand && shoe.id !== currentProduct.id)
        .slice(0, 4); // 最多顯示 4 個相關商品

    relatedProducts.innerHTML = related.map(shoe => `
        <div class="col-md-3 col-sm-6">
            <div class="related-product-card">
                <img src="${shoe.image}" alt="${shoe.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${shoe.name}</h5>
                    <p class="shoe-price">NT$ ${shoe.price}</p>
                    <a href="detail.html?id=${shoe.id}" class="btn btn-primary btn-sm">查看詳情</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 加入購物車
function addToCart() {
    const selectedSize = document.querySelector('.size-btn.active');
    if (!selectedSize) {
        alert('請選擇尺寸');
        return;
    }

    const quantity = parseInt(quantitySelect.value);
    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        brand: currentProduct.brand,
        price: currentProduct.price,
        size: parseFloat(selectedSize.dataset.size),
        quantity: quantity,
        image: currentProduct.image
    };

    // 從 localStorage 取得現有購物車資料
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // 檢查是否已有相同商品和尺寸
    const existingItemIndex = cart.findIndex(item => 
        item.id === cartItem.id && item.size === cartItem.size
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push(cartItem);
    }

    // 儲存到 localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('已加入購物車！');
}

// 加入/移除收藏
function toggleFavorite() {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isFavorite = favorites.some(item => item.id === currentProduct.id);

    if (isFavorite) {
        favorites = favorites.filter(item => item.id !== currentProduct.id);
        addToFavBtn.innerHTML = '<i class="bi bi-heart"></i> 加入收藏';
        addToFavBtn.classList.remove('btn-danger');
        addToFavBtn.classList.add('btn-outline-danger');
    } else {
        favorites.push(currentProduct);
        addToFavBtn.innerHTML = '<i class="bi bi-heart-fill"></i> 已收藏';
        addToFavBtn.classList.remove('btn-outline-danger');
        addToFavBtn.classList.add('btn-danger');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// 綁定事件
addToCartBtn.addEventListener('click', addToCart);
addToFavBtn.addEventListener('click', toggleFavorite);

// 初始化頁面
initProductDetail();
