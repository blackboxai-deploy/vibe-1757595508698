"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Product } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
  onProductClick: () => void;
  onAddToCart: () => void;
}

export function ProductCard({ product, onProductClick, onAddToCart }: ProductCardProps) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
      <div onClick={onProductClick}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4a0b249-67f4-48df-bc4b-9d50c2717d01.png";
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1">
            {product.isNew && (
              <Badge className="bg-green-500 text-white text-xs">NEW</Badge>
            )}
            {discountPercent > 0 && (
              <Badge className="bg-red-500 text-white text-xs">-{discountPercent}%</Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">✨</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity space-y-1">
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white text-gray-700"
            >
              ❤️
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white text-gray-700"
            >
              📤
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 text-sm md:text-base">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {product.brand}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm py-2"
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}