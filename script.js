// 模擬鞋子資料
const shoesData = [
    {
        id: 1,
        name: 'Nike Air Max 270',
        brand: 'Nike',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1514989771522-458c9b6c035a?w=400',
        description: '時尚外型搭配舒適的氣墊科技，適合日常穿搭'
    },
    {
        id: 2,
        name: 'Adidas Ultraboost 23',
        brand: 'Adidas',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400',
        description: '新一代 BOOST 中底科技，為跑者提供極致回彈'
    },
    {
        id: 3,
        name: 'Puma RS-X Tech',
        brand: 'Puma',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
        description: '復古科技風格設計，搭配舒適的 RS 緩震系統'
    },
    {
        id: 4,
        name: 'New Balance 327',
        brand: 'NewBalance',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1628872354761-c387d45231fa?w=400',
        description: '復古跑鞋重新詮釋，簡約時尚的街頭必備'
    },
    {
        id: 5,
        name: 'Nike Dunk Low',
        brand: 'Nike',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
        description: '經典籃球鞋款，現代街頭文化的代表作'
    },
    {
        id: 6,
        name: 'Adidas Forum Low',
        brand: 'Adidas',
        price: 3000,
        image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=400',
        description: '復古籃球鞋設計，簡約百搭的日常選擇'
    },
    {
        id: 7,
        name: 'Puma Suede Classic',
        brand: 'Puma',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
        description: '經典麂皮設計，都市休閒的完美詮釋'
    },
    {
        id: 8,
        name: 'New Balance 990v5',
        brand: 'NewBalance',
        price: 5200,
        image: 'https://images.unsplash.com/photo-1628872354761-c387d45231fa?w=400',
        description: '美製經典型號，專業跑者首選'
    },
    {
        id: 9,
        name: 'Nike Air Force 1',
        brand: 'Nike',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400',
        description: '街頭文化經典，白色革命的代表作'
    },
    {
        id: 10,
        name: 'Adidas Samba',
        brand: 'Adidas',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=400',
        description: '足球文化傳承，現代生活的時尚選擇'
    },
    {
        id: 11,
        name: 'Nike Jordan 1 Low',
        brand: 'Nike',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
        description: 'Air Jordan 系列經典低筒版本，街頭時尚必備'
    },
    {
        id: 12,
        name: 'Adidas NMD R1',
        brand: 'Adidas',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=400',
        description: 'BOOST中底搭配經典設計，都會時尚首選'
    },
    {
        id: 13,
        name: 'Puma Clyde All-Pro',
        brand: 'Puma',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
        description: '專業籃球鞋款，提供極致包覆與支撐'
    },
    {
        id: 14,
        name: 'New Balance 550',
        brand: 'NewBalance',
        price: 3600,
        image: 'https://images.unsplash.com/photo-1628872354761-c387d45231fa?w=400',
        description: '復古籃球鞋重新演繹，簡約時尚設計'
    },
    {
        id: 15,
        name: 'Nike Air Max 97',
        brand: 'Nike',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        description: '經典全掌氣墊，流線型設計展現未來感'
    },
    {
        id: 16,
        name: 'Adidas Gazelle',
        brand: 'Adidas',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=400',
        description: '經典麂皮設計，復古運動風格的代表'
    },
    {
        id: 17,
        name: 'Puma Future Rider',
        brand: 'Puma',
        price: 2600,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
        description: '現代科技與復古設計的完美結合'
    },
    {
        id: 18,
        name: 'New Balance 2002R',
        brand: 'NewBalance',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1628872354761-c387d45231fa?w=400',
        description: '經典跑鞋重塑，舒適與時尚兼具'
    },
    {
        id: 19,
        name: 'Nike SB Dunk High',
        brand: 'Nike',
        price: 3600,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
        description: '滑板文化經典，高筒設計提供更好保護'
    },
    {
        id: 20,
        name: 'Adidas Stan Smith',
        brand: 'Adidas',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=400',
        description: '網球場上的傳奇，簡約設計成就永恆經典'
    }
];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const priceFilter = document.getElementById('priceFilter');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');

// 搜尋功能
function searchShoes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedPrice = priceFilter.value;

    const filteredShoes = shoesData.filter(shoe => {
        // 名稱搜尋
        const nameMatch = shoe.name.toLowerCase().includes(searchTerm);
        
        // 品牌篩選
        const brandMatch = !selectedBrand || shoe.brand === selectedBrand;
        
        // 價格範圍篩選
        let priceMatch = true;
        if (selectedPrice) {
            const [min, max] = selectedPrice.split('-').map(Number);
            if (max) {
                priceMatch = shoe.price >= min && shoe.price <= max;
            } else {
                // 處理 "5000+" 的情況
                priceMatch = shoe.price >= min;
            }
        }

        return nameMatch && brandMatch && priceMatch;
    });

    displayResults(filteredShoes);
}

// 顯示搜尋結果
function displayResults(shoes) {
    resultsContainer.innerHTML = '';
    
    if (shoes.length === 0) {
        resultsContainer.innerHTML = '<div class="col-12 text-center"><h3>找不到符合的鞋子</h3></div>';
        return;
    }

    shoes.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.className = 'col-md-4 col-lg-3';
        shoeCard.innerHTML = `
            <div class="shoe-card position-relative">
                <img src="${shoe.image}" alt="${shoe.name}" class="card-img-top">
                <span class="brand-badge">${shoe.brand}</span>
                <div class="card-body">
                    <h5 class="card-title">${shoe.name}</h5>
                    <p class="card-text">${shoe.description}</p>
                    <p class="shoe-price">NT$ ${shoe.price}</p>
                </div>
            </div>
        `;
        resultsContainer.appendChild(shoeCard);
    });
}

// 事件監聽
searchBtn.addEventListener('click', searchShoes);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchShoes();
});
brandFilter.addEventListener('change', searchShoes);
priceFilter.addEventListener('change', searchShoes);

// 初始顯示所有鞋子
displayResults(shoesData);