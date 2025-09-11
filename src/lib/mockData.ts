// Mock data for the Line app clone

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isFeatured: boolean;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  isOnline: boolean;
  unreadCount: number;
  isTyping: boolean;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
  type: 'text' | 'image' | 'voice';
  status?: 'sent' | 'delivered' | 'read';
}

export interface Story {
  id: string;
  userName: string;
  userAvatar: string;
  timestamp: string;
  content: StoryContent[];
  viewed: boolean;
  isOnline: boolean;
}

interface StoryContent {
  type: 'image' | 'text';
  content: string;
}

// Mock chats data
export const mockChats: Chat[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa4f9133-a6fb-4fba-a29b-5a6bebae51b8.png",
    lastMessage: "Hey! How are you doing today?",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    isOnline: true,
    unreadCount: 2,
    isTyping: false
  },
  {
    id: "2", 
    name: "Bob Smith",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90724c5d-6e31-4676-8629-3768bdb1860c.png",
    lastMessage: "Thanks for the help with the project!",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    isOnline: false,
    unreadCount: 0,
    isTyping: true
  },
  {
    id: "3",
    name: "Design Team",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/551a2c83-95d1-4803-963b-027406aae73e.png",
    lastMessage: "Sarah: Let's review the mockups tomorrow",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isOnline: true,
    unreadCount: 5,
    isTyping: false
  },
  {
    id: "4",
    name: "Emma Wilson",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/554e4725-b2e5-48e5-81cc-ee3026ae6a24.png",
    lastMessage: "🎉 Congratulations on the promotion!",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    isOnline: false,
    unreadCount: 1,
    isTyping: false
  },
  {
    id: "5",
    name: "Michael Chen",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be79a7f3-2653-4c67-b5a0-456ba9dc01b1.png",
    lastMessage: "Voice message",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    isOnline: true,
    unreadCount: 0,
    isTyping: false
  },
  {
    id: "6",
    name: "Sarah Parker",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27782d01-ecb2-418e-bb9f-e73156b6c972.png",
    lastMessage: "Looking forward to our meeting next week",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    isOnline: false,
    unreadCount: 0,
    isTyping: false
  }
];

// Mock messages for different chats
export const mockMessages: { [chatId: string]: Message[] } = {
  "1": [
    {
      id: "m1",
      content: "Hey! How are you doing today?",
      senderId: "alice",
      timestamp: new Date(Date.now() - 10 * 60 * 1000),
      type: 'text',
      status: 'read'
    },
    {
      id: "m2", 
      content: "I'm doing great! Just finished a big project at work. How about you?",
      senderId: "current-user",
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      type: 'text',
      status: 'read'
    },
    {
      id: "m3",
      content: "That's awesome! I'd love to hear more about it. Are you free for coffee this weekend?",
      senderId: "alice",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: 'text',
      status: 'delivered'
    },
    {
      id: "m4",
      content: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9a20221-74cd-4391-9afe-6684d439be38.png",
      senderId: "alice",
      timestamp: new Date(Date.now() - 3 * 60 * 1000),
      type: 'image',
      status: 'delivered'
    }
  ],
  "2": [
    {
      id: "m5",
      content: "Thanks for the help with the project!",
      senderId: "bob",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      type: 'text',
      status: 'read'
    },
    {
      id: "m6",
      content: "No problem at all! Always happy to help. How did the presentation go?",
      senderId: "current-user",
      timestamp: new Date(Date.now() - 25 * 60 * 1000),
      type: 'text',
      status: 'read'
    },
    {
      id: "m7",
      content: "Voice message",
      senderId: "bob",
      timestamp: new Date(Date.now() - 20 * 60 * 1000),
      type: 'voice',
      status: 'read'
    }
  ]
};

// Mock stories data
export const mockStories: Story[] = [
  {
    id: "s1",
    userName: "Alice Johnson",
    userAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78595b26-18c0-439f-9b77-d3b4f51f53c6.png",
    timestamp: "2 hours ago",
    viewed: false,
    isOnline: true,
    content: [
      {
        type: 'image',
        content: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66980f7b-6792-459e-9848-383794cff520.png'
      },
      {
        type: 'text',
        content: 'Perfect morning with amazing coffee! ☕️'
      }
    ]
  },
  {
    id: "s2",
    userName: "Bob Smith", 
    userAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3534dcdc-2357-4fcc-a3ce-86a7041602df.png",
    timestamp: "4 hours ago",
    viewed: true,
    isOnline: false,
    content: [
      {
        type: 'image',
        content: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/083878f1-1269-460e-9ed7-43ecb7cd5a07.png'
      }
    ]
  },
  {
    id: "s3",
    userName: "Emma Wilson",
    userAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/217fadf4-50ed-41ca-9e15-8d7fccc6fa93.png", 
    timestamp: "6 hours ago",
    viewed: false,
    isOnline: true,
    content: [
      {
        type: 'text',
        content: 'Just finished an amazing book! 📚 Can\'t wait to discuss it with someone.'
      },
      {
        type: 'image',
        content: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/559025b4-4ca8-47b3-bf20-bbdf3cefcb6a.png'
      }
    ]
  },
  {
    id: "s4",
    userName: "Design Team",
    userAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2851c310-21dd-4112-b2d2-cc78e7f550d6.png",
    timestamp: "8 hours ago", 
    viewed: false,
    isOnline: true,
    content: [
      {
        type: 'image',
        content: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fea18077-5285-4234-acdd-d68c9e862b45.png'
      },
      {
        type: 'text',
        content: 'Team brainstorming session! 🚀 Great ideas flowing today.'
      }
    ]
  },
  {
    id: "s5",
    userName: "Michael Chen",
    userAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/482803e3-f2fe-4369-8a05-6ac0b95a051c.png",
    timestamp: "12 hours ago",
    viewed: true,
    isOnline: false,
    content: [
      {
        type: 'image', 
        content: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46e9974a-7a60-4d78-8ff8-2a48d47487bf.png'
      }
    ]
  }
];

// Mock products data for shopping
export const mockProducts: Product[] = [
  // Electronics
  {
    id: "p1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium quality wireless headphones with noise cancellation, 30-hour battery life, and crystal clear audio. Perfect for music lovers and professionals.",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d032cae8-233f-476c-9fc0-7a65b96f97ae.png",
    category: "electronics",
    brand: "AudioTech",
    rating: 4.5,
    reviews: 234,
    isNew: false,
    isFeatured: true,
    colors: ["Black", "White", "Blue"],
    inStock: true
  },
  {
    id: "p2", 
    name: "Smart Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, GPS, and 7-day battery life. Track your health and fitness goals.",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05074713-f266-4df5-be87-b8a12ab0ee84.png",
    category: "electronics",
    brand: "FitLife",
    rating: 4.3,
    reviews: 189,
    isNew: true,
    isFeatured: false,
    colors: ["Black", "Pink", "Blue"],
    inStock: true
  },
  {
    id: "p3",
    name: "Smartphone Wireless Charger",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overheat protection.",
    price: 29.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/121f37f1-a17a-47eb-8e5d-b20504ab1b70.png",
    category: "electronics", 
    brand: "ChargePro",
    rating: 4.1,
    reviews: 156,
    isNew: false,
    isFeatured: false,
    inStock: true
  },
  
  // Fashion
  {
    id: "p4",
    name: "Casual Denim Jacket",
    description: "Classic denim jacket made from premium cotton. Vintage-inspired design with modern fit. Perfect for layering in any season.",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9371145a-b9c7-4240-988b-9fe98cab5cc3.png",
    category: "fashion",
    brand: "UrbanStyle",
    rating: 4.4,
    reviews: 87,
    isNew: false,
    isFeatured: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Blue"],
    inStock: true
  },
  {
    id: "p5",
    name: "Athletic Running Shoes",
    description: "Lightweight running shoes with advanced cushioning technology. Breathable mesh upper and durable rubber outsole for maximum performance.",
    price: 119.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a77a8e5-562c-453a-9a7f-5b5b246f7a97.png",
    category: "fashion",
    brand: "RunMax",
    rating: 4.6,
    reviews: 312,
    isNew: true,
    isFeatured: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Red", "Blue"],
    inStock: true
  },
  {
    id: "p6",
    name: "Minimalist Watch",
    description: "Elegant minimalist watch with leather strap. Japanese movement, water-resistant design. Perfect accessory for any outfit.",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed36c12b-18a6-499a-a283-692ef7ccb24d.png",
    category: "fashion",
    brand: "TimeCore",
    rating: 4.2,
    reviews: 98,
    isNew: false,
    isFeatured: false,
    colors: ["Brown", "Black", "Navy"],
    inStock: true
  },

  // Home & Living
  {
    id: "p7",
    name: "Smart LED Desk Lamp",
    description: "Adjustable LED desk lamp with wireless charging base, USB ports, and app control. Perfect for home office or study space.",
    price: 69.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4333df22-ee36-4151-905e-6518ef648599.png",
    category: "home",
    brand: "HomeLight",
    rating: 4.3,
    reviews: 145,
    isNew: true,
    isFeatured: false,
    colors: ["White", "Black"],
    inStock: true
  },
  {
    id: "p8",
    name: "Cozy Throw Blanket",
    description: "Ultra-soft throw blanket made from premium microfiber. Perfect for couch, bed, or outdoor use. Machine washable.",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e79fd87-7480-425d-b424-47e27de0ae0b.png",
    category: "home",
    brand: "ComfortHome",
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isFeatured: true,
    colors: ["Gray", "Beige", "Navy", "Pink"],
    inStock: true
  },

  // Beauty
  {
    id: "p9",
    name: "Skincare Routine Set",
    description: "Complete skincare set with cleanser, toner, serum, and moisturizer. Suitable for all skin types. Natural and cruelty-free ingredients.",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/abc2f1ce-321a-4dcf-9a94-79162b558ab7.png",
    category: "beauty",
    brand: "GlowSkin",
    rating: 4.5,
    reviews: 167,
    isNew: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: "p10",
    name: "Professional Makeup Brush Set",
    description: "High-quality makeup brush set with 12 brushes for face and eye makeup. Soft synthetic bristles with ergonomic handles.",
    price: 49.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2b3ecb3-24db-43d5-aff5-8d436ce5fbd8.png",
    category: "beauty",
    brand: "BeautyPro",
    rating: 4.4,
    reviews: 89,
    isNew: false,
    isFeatured: false,
    inStock: true
  },

  // Sports
  {
    id: "p11",
    name: "Yoga Mat Premium",
    description: "Non-slip yoga mat with superior grip and cushioning. Eco-friendly materials, lightweight and durable. Includes carrying strap.",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f009f26-f56b-412f-a675-07cd9163f498.png",
    category: "sports",
    brand: "ZenFit",
    rating: 4.6,
    reviews: 134,
    isNew: false,
    isFeatured: true,
    colors: ["Purple", "Blue", "Green", "Pink"],
    inStock: true
  },
  {
    id: "p12",
    name: "Protein Shaker Bottle",
    description: "Leak-proof protein shaker with built-in mixing ball. BPA-free, dishwasher safe. Perfect for gym and travel.",
    price: 19.99,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1ad283c-d28a-47d7-82bb-4ded4eb94b2b.png",
    category: "sports",
    brand: "FitShake",
    rating: 4.2,
    reviews: 78,
    isNew: false,
    isFeatured: false,
    colors: ["Black", "Blue", "Red"],
    inStock: true
  }
];