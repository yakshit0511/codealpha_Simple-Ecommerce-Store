
import { ProductCard } from "./ProductCard";
import { Product } from "@/pages/Index";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Modern Table Lamp",
    price: 149,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop",
    description: "Elegant modern table lamp perfect for any contemporary living space.",
    category: "Home & Living"
  },
  {
    id: 3,
    name: "Luxury Watch",
    price: 599,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop",
    description: "Sophisticated timepiece crafted with precision and attention to detail.",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 249,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=500&fit=crop",
    description: "Stylish designer sunglasses with UV protection and premium materials.",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Organic Skincare Set",
    price: 89,
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=500&h=500&fit=crop",
    description: "Natural and organic skincare products for healthy, glowing skin.",
    category: "Beauty"
  },
  {
    id: 6,
    name: "Premium Coffee Beans",
    price: 29,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop",
    description: "Freshly roasted premium coffee beans from sustainable farms.",
    category: "Food & Beverage"
  }
];

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section className="py-8">
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
    </section>
  );
};
