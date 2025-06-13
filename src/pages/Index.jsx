
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { About } from "../components/About";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'products':
      case 'categories':
        return <ProductGrid onAddToCart={addToCart} currentPage={currentPage} />;
      default:
        return (
          <main className="container mx-auto px-4 py-8 bg-gradient-to-br from-pink-50 via-white via-green-50 to-blue-50 min-h-screen">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-pink-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Fashion Hub Store
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
                Discover our curated collection of premium products designed for the modern lifestyle
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-pink-200 text-pink-800 rounded-full text-sm font-medium">Premium Quality</span>
                <span className="px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium">Fast Shipping</span>
                <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">24/7 Support</span>
                <span className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">Best Prices</span>
              </div>
            </div>
            
            <ProductGrid onAddToCart={addToCart} currentPage={currentPage} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      {renderCurrentPage()}

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;
