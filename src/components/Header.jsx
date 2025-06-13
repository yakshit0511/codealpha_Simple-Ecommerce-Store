
import { ShoppingBag, Search, Menu } from "lucide-react";
import { Button } from "../components/ui/button";

export const Header = ({ cartItemsCount, onCartClick, currentPage, onPageChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-pink-100 via-green-50 to-blue-50 backdrop-blur supports-[backdrop-filter]:bg-pink-100/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-pink-600" />
              <div className="font-bold text-xl bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                Fashion Hub
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onPageChange('home')}
              className={`text-sm font-medium hover:text-pink-600 transition-colors px-4 py-2 rounded-full ${
                currentPage === 'home' 
                  ? 'bg-pink-200 text-pink-800' 
                  : 'text-gray-700 hover:bg-pink-100'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('products')}
              className={`text-sm font-medium hover:text-pink-600 transition-colors px-4 py-2 rounded-full ${
                currentPage === 'products' 
                  ? 'bg-green-200 text-green-800' 
                  : 'text-gray-700 hover:bg-green-100'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => onPageChange('categories')}
              className={`text-sm font-medium hover:text-pink-600 transition-colors px-4 py-2 rounded-full ${
                currentPage === 'categories' 
                  ? 'bg-blue-200 text-blue-800' 
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              Categories
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className={`text-sm font-medium hover:text-pink-600 transition-colors px-4 py-2 rounded-full ${
                currentPage === 'about' 
                  ? 'bg-orange-200 text-orange-800' 
                  : 'text-gray-700 hover:bg-orange-100'
              }`}
            >
              About
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-yellow-100">
              <Search className="h-5 w-5 text-blue-600" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onCartClick}
              className="relative hover:bg-green-100"
            >
              <ShoppingBag className="h-5 w-5 text-green-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
