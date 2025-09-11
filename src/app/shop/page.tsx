"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ShoppingCart } from "@/components/shop/ShoppingCart";
import { TopNavigation } from "@/components/common/TopNavigation";
import { MobileNavigation } from "@/components/common/MobileNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  { id: "all", name: "All", count: 24 },
  { id: "electronics", name: "Electronics", count: 8 },
  { id: "fashion", name: "Fashion", count: 12 },
  { id: "home", name: "Home & Living", count: 6 },
  { id: "beauty", name: "Beauty", count: 4 },
  { id: "sports", name: "Sports", count: 3 }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Top Navigation - Desktop */}
      <div className="hidden md:block">
        <TopNavigation />
      </div>

      {/* Shop Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                LineGram Shop
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Discover amazing products from our community
              </p>
            </div>
            
            {/* Cart Button */}
            <Button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <span className="mr-2">🛒</span>
              Cart
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white min-w-[20px] h-5 p-0 flex items-center justify-center text-xs">
                  {cartItems > 99 ? '99+' : cartItems}
                </Badge>
              )}
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="pl-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
              🔍
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Categories Sidebar - Desktop */}
        <div className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-600 dark:text-purple-400 border-2 border-purple-200 dark:border-purple-700'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              ))}
            </div>

            {/* Featured Section */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Featured</h4>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎉</div>
                  <h5 className="font-semibold text-sm text-purple-800 dark:text-purple-300">Flash Sale</h5>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Up to 50% off</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🚚</div>
                  <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-300">Free Shipping</h5>
                  <p className="text-xs text-orange-600 dark:text-orange-400">Orders over $50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <ScrollArea className="h-full">
            <div className="p-4 md:p-6">
              {/* Mobile Categories */}
              <div className="md:hidden mb-6">
                <ScrollArea className="w-full">
                  <div className="flex space-x-3 pb-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`whitespace-nowrap ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : ''
                        }`}
                      >
                        {category.name}
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Products */}
              <ProductGrid 
                category={selectedCategory}
                searchQuery={searchQuery}
                onAddToCart={handleAddToCart}
              />
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <MobileNavigation onOpenSidebar={() => {}} />
      </div>

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          itemCount={cartItems}
        />
      )}
    </div>
  );
}