
import { useState } from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Modern Table Lamp",
    price: 149,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    description: "Elegant modern table lamp perfect for any contemporary living space.",
    category: "Home & Living"
  },
  {
    id: 3,
    name: "Luxury Watch",
    price: 599,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Sophisticated timepiece crafted with precision and attention to detail.",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 249,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description: "Stylish designer sunglasses with UV protection and premium materials.",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Organic Skincare Set",
    price: 89,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    description: "Natural and organic skincare products for healthy, glowing skin.",
    category: "Beauty"
  },
  {
    id: 6,
    name: "Premium Coffee Beans",
    price: 29,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    description: "Freshly roasted premium coffee beans from sustainable farms.",
    category: "Food & Beverage"
  },
  {
    id: 7,
    name: "Leather Handbag",
    price: 399,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    description: "Premium leather handbag with elegant design and spacious interior.",
    category: "Fashion"
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 159,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Comfortable and stylish running shoes for active lifestyle.",
    category: "Sports"
  },
  {
    id: 9,
    name: "Smart Phone",
    price: 899,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    description: "Latest smartphone with advanced camera and processing power.",
    category: "Electronics"
  },
  {
    id: 10,
    name: "Gaming Laptop",
    price: 1299,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
    description: "High-performance gaming laptop for ultimate gaming experience.",
    category: "Electronics"
  },
  {
    id: 11,
    name: "Designer Dress",
    price: 199,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    description: "Elegant designer dress perfect for special occasions.",
    category: "Fashion"
  },
  {
    id: 12,
    name: "Perfume",
    price: 129,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
    description: "Luxury perfume with captivating fragrance that lasts all day.",
    category: "Beauty"
  }
];

const categories = ["All", "Electronics", "Home & Living", "Accessories", "Beauty", "Food & Beverage", "Fashion", "Sports"];

export const ProductGrid = ({ onAddToCart, currentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (currentPage === 'products') {
    return (
      <section className="py-8 bg-gradient-to-br from-pink-50 via-white to-green-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
            All Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (currentPage === 'categories') {
    return (
      <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-yellow-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
            Shop by Categories
          </h1>
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Home page view
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.slice(1, 5).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-green-500 text-white'
                  : 'bg-gradient-to-r from-pink-200 to-green-200 text-gray-800 hover:from-pink-300 hover:to-green-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.slice(0, 6).map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
};
