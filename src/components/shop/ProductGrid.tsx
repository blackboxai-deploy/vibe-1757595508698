"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";
import { mockProducts, Product } from "@/lib/mockData";

interface ProductGridProps {
  category: string;
  searchQuery: string;
  onAddToCart: () => void;
}

export function ProductGrid({ category, searchQuery, onAddToCart }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on category and search
  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart();
    // In a real app, you'd add the specific product to cart
    console.log('Added to cart:', product.name);
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">📦</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          No products found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
          {searchQuery 
            ? `No products match "${searchQuery}". Try adjusting your search.`
            : `No products available in this category yet.`
          }
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={() => handleProductClick(product)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => {
            handleAddToCart(selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}
    </>
  );
}