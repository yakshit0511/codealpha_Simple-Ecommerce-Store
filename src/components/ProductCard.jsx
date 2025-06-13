
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { ShoppingBag, Star } from "lucide-react";

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-gradient-to-r from-pink-200 to-green-200">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-green-50 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-xs text-white bg-gradient-to-r from-pink-500 to-green-500 px-2 py-1 rounded-full uppercase tracking-wide font-bold w-fit">
            {product.category}
          </p>
          <h3 className="font-bold text-lg leading-tight text-gray-800 group-hover:text-pink-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            ${product.price}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={() => onAddToCart(product)}
          className="w-full group/button bg-gradient-to-r from-pink-500 to-green-500 hover:from-pink-600 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          size="lg"
        >
          <ShoppingBag className="mr-2 h-4 w-4 transition-transform group-hover/button:scale-110" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
