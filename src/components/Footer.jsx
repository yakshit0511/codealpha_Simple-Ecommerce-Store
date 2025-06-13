
export const Footer = () => {
  return (
    <footer className="bg-pink-100 border-t border-pink-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-pink-800">Fashion Hub</h3>
            <p className="text-sm text-pink-600">
              Your trusted destination for premium products and exceptional quality.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-pink-800">Shop</h4>
            <ul className="space-y-2 text-sm text-pink-600">
              <li><a href="#" className="hover:text-pink-800 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Beauty</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-pink-800">Support</h4>
            <ul className="space-y-2 text-sm text-pink-600">
              <li><a href="#" className="hover:text-pink-800 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-pink-800">Company</h4>
            <ul className="space-y-2 text-sm text-pink-600">
              <li><a href="#" className="hover:text-pink-800 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-pink-800 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pink-200 mt-8 pt-8 text-center text-sm text-pink-600">
          <p>&copy; 2024 Fashion Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
