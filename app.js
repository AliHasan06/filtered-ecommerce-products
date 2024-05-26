
const products = [
    { name: "Wireless Mouse", price: 25.99, category: "Electronics", brand: "Logitech" },
    { name: "Smartphone", price: 699.99, category: "Electronics", brand: "Samsung" },
    { name: "LED Monitor", price: 129.99, category: "Electronics", brand: "Dell" },
    { name: "Bluetooth Speaker", price: 45.99, category: "Electronics", brand: "JBL" },
    { name: "Laptop", price: 999.99, category: "Electronics", brand: "Apple" },
    { name: "Running Shoes", price: 59.99, category: "Footwear", brand: "Nike" },
    { name: "Sneakers", price: 75.99, category: "Footwear", brand: "Adidas" },
    { name: "Sandals", price: 25.99, category: "Footwear", brand: "Teva" },
    { name: "Formal Shoes", price: 120.00, category: "Footwear", brand: "Clarks" },
    { name: "Boots", price: 150.00, category: "Footwear", brand: "Timberland" },
    { name: "Blender", price: 34.99, category: "Home Appliances", brand: "Oster" },
    { name: "Microwave Oven", price: 99.99, category: "Home Appliances", brand: "Panasonic" },
    { name: "Air Conditioner", price: 299.99, category: "Home Appliances", brand: "LG" },
    { name: "Vacuum Cleaner", price: 149.99, category: "Home Appliances", brand: "Dyson" },
    { name: "Toaster", price: 29.99, category: "Home Appliances", brand: "Breville" },
    { name: "Notebook", price: 3.99, category: "Stationery", brand: "Moleskine" },
    { name: "Pen Set", price: 12.99, category: "Stationery", brand: "Parker" },
    { name: "Highlighters", price: 5.99, category: "Stationery", brand: "Sharpie" },
    { name: "Stapler", price: 7.99, category: "Stationery", brand: "Swingline" },
    { name: "Planner", price: 14.99, category: "Stationery", brand: "Erin Condren" },
    { name: "Desk Chair", price: 89.99, category: "Furniture", brand: "Ikea" },
    { name: "Coffee Table", price: 129.99, category: "Furniture", brand: "West Elm" },
    { name: "Sofa", price: 499.99, category: "Furniture", brand: "Ashley Furniture" },
    { name: "Bookshelf", price: 79.99, category: "Furniture", brand: "Sauder" },
    { name: "Dining Table", price: 399.99, category: "Furniture", brand: "Pottery Barn" },
    { name: "Yoga Mat", price: 19.99, category: "Fitness", brand: "Gaiam" },
    { name: "Dumbbells", price: 49.99, category: "Fitness", brand: "Bowflex" },
    { name: "Treadmill", price: 699.99, category: "Fitness", brand: "NordicTrack" },
    { name: "Resistance Bands", price: 14.99, category: "Fitness", brand: "Fit Simplify" },
    { name: "Exercise Bike", price: 299.99, category: "Fitness", brand: "Peloton" },
    { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances", brand: "Keurig" },
    { name: "Air Fryer", price: 89.99, category: "Kitchen Appliances", brand: "Ninja" },
    { name: "Stand Mixer", price: 199.99, category: "Kitchen Appliances", brand: "KitchenAid" },
    { name: "Refrigerator", price: 799.99, category: "Kitchen Appliances", brand: "Whirlpool" },
    { name: "Dishwasher", price: 399.99, category: "Kitchen Appliances", brand: "Bosch" }
];

function formatPrice(price) {
    let roundedPrice = Math.round(price * 100) / 100;

    let priceString = roundedPrice.toString();

    if (priceString.indexOf('.') === -1) {
        priceString += '.00';
    } else {
        let decimalPart = priceString.split('.')[1];
        if (decimalPart.length === 1) {
            priceString += '0';
        }
    }

    return priceString;
}

function renderProducts(category) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';

    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(function(product) {
            return product.category === category;
        });
    }

    filteredProducts.forEach(function(product) {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${formatPrice(product.price)}</p>
            <p>Brand: ${product.brand}</p>
            <p>Category: ${product.category}</p>
        `;
        productList.appendChild(productItem);
    });
}

window.onload = function() {
    renderProducts('all');
};
