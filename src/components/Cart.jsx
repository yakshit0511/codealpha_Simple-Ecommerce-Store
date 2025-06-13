
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Minus, Plus, Trash2, CreditCard, Smartphone, Banknote } from "lucide-react";
import { useState } from "react";

export const Cart = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  totalPrice,
}) => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [showPayment, setShowPayment] = useState(false);

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePayment = () => {
    alert(`Payment of $${totalPrice.toFixed(2)} processed successfully via ${selectedPayment}!`);
    setShowPayment(false);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-pink-50 via-white to-green-50 border-l-4 border-gradient-to-b border-pink-300">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
            Shopping Cart
          </SheetTitle>
          <SheetDescription className="text-gray-600">
            {items.length === 0 
              ? "Your cart is empty" 
              : `${items.length} ${items.length === 1 ? 'item' : 'items'} in your cart`
            }
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-200 to-green-200 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 bg-white rounded-xl p-4 border-2 border-gradient-to-r from-pink-200 to-green-200 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-r from-pink-100 to-green-100 flex-shrink-0 border-2 border-pink-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-sm leading-tight text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm font-bold text-green-600">
                        ${item.price}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-pink-300 text-pink-600 hover:bg-pink-100"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center text-sm font-bold text-gray-800 bg-gradient-to-r from-yellow-100 to-orange-100 rounded px-2 py-1">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-green-300 text-green-600 hover:bg-green-100"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-2 text-red-500 hover:text-red-700 hover:bg-red-100"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-6 space-y-4 bg-white rounded-t-xl p-4 shadow-lg">
              <Separator />
              <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                <span>Total:</span>
                <span className="bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              {!showPayment ? (
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-green-500 hover:from-pink-600 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800">Select Payment Method</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedPayment('card')}
                      className={`w-full p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        selectedPayment === 'card' 
                          ? 'border-pink-500 bg-pink-50' 
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      <span>Credit/Debit Card</span>
                    </button>
                    <button
                      onClick={() => setSelectedPayment('mobile')}
                      className={`w-full p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        selectedPayment === 'mobile' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <Smartphone className="h-5 w-5 text-green-600" />
                      <span>Mobile Payment</span>
                    </button>
                    <button
                      onClick={() => setSelectedPayment('cash')}
                      className={`w-full p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        selectedPayment === 'cash' 
                          ? 'border-yellow-500 bg-yellow-50' 
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <Banknote className="h-5 w-5 text-yellow-600" />
                      <span>Cash on Delivery</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-gray-300"
                      onClick={() => setShowPayment(false)}
                    >
                      Back
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-pink-500 to-green-500 hover:from-pink-600 hover:to-green-600 text-white font-bold"
                      onClick={handlePayment}
                    >
                      Pay Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
