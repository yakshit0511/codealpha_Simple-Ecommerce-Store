
import { ShoppingBag, Truck, Shield, Star, Heart, Award } from "lucide-react";

export const About = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white via-green-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
            About Fashion Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Fashion Hub, your premier destination for curated premium products. 
            We believe in bringing you the finest selection of fashion, electronics, beauty, 
            and lifestyle products that define modern elegance and quality.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gradient-to-r from-pink-200 to-green-200">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-pink-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize online shopping by providing an exceptional experience with 
              carefully selected products that combine style, quality, and affordability. 
              We strive to make premium lifestyle accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gradient-to-r from-green-200 to-blue-200">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the world's most trusted online marketplace, where customers 
              discover amazing products and brands connect with their ideal audience. 
              We envision a future where shopping is seamless, enjoyable, and inspiring.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Lightning-fast delivery worldwide with real-time tracking and insurance coverage.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Shopping</h3>
            <p className="text-gray-600">
              Advanced encryption and secure payment processing to protect your information.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Hand-picked products from trusted brands with rigorous quality assurance.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-500 via-green-500 to-blue-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Fashion Hub?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-pink-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Premium Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-yellow-100">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all">
              Contact Support
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all">
              Live Chat
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
