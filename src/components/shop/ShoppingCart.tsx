"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  itemCount: number;
}

export function ShoppingCart({ isOpen, onClose, itemCount }: ShoppingCartProps) {
  // Mock cart items for demo
  const [cartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      image: "https://storage.googleapis.com/oi-server-resources/blackbox/audio_headphones_wireless_studio_quality_premium.webp",
      price: 89.99,
      quantity: 1,
      color: "Black"
    },
    {
      id: "2", 
      name: "Smart Fitness Tracker",
      image: "https://storage.googleapis.com/oi-server-resources/blackbox/fitness_tracker_smartwatch_health_monitor_sport.webp",
      price: 149.99,
      quantity: 2
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    // In a real app, this would navigate to checkout
    console.log('Proceeding to checkout');
  };

  const handleShareCart = () => {
    // Share cart to chat
    console.log('Share cart to chat');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md h-full flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Shopping Cart
            </h2>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              {itemCount}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            ✕
          </Button>
        </div>

        {/* Cart Items */}
        <ScrollArea className="flex-1 p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🛒</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                Add some products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm line-clamp-2">
                      {item.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      {item.color && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.color}
                        </span>
                      )}
                      {item.size && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Size: {item.size}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        ${item.price.toFixed(2)}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="w-6 h-6 p-0">
                          -
                        </Button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <Button variant="outline" size="sm" className="w-6 h-6 p-0">
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Cart Summary & Actions */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Free Shipping Banner */}
            {shipping > 0 && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-3 rounded-lg">
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  🚚 Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-2">
              <Button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
              >
                Proceed to Checkout
              </Button>
              <Button
                onClick={handleShareCart}
                variant="outline"
                className="w-full border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                💬 Share Cart with Friends
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}