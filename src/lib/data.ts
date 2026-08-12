export const navLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Import Zone", href: "#import" },
  { label: "Suppliers", href: "#suppliers" },
  { label: "Deals", href: "#deals" },
  { label: "Industries", href: "#industries" },
  { label: "Logistics", href: "#logistics" },
  { label: "Contact", href: "#footer" },
] as const;

export const megaMenuCategories = [
  {
    title: "Food & Beverage",
    items: [
      { name: "Frozen Chicken", count: "2,400+" },
      { name: "Beverages", count: "1,800+" },
      { name: "Dairy Products", count: "1,200+" },
      { name: "Rice & Grains", count: "950+" },
    ],
  },
  {
    title: "Fresh Produce",
    items: [
      { name: "Fruits", count: "800+" },
      { name: "Vegetables", count: "700+" },
      { name: "Seafood", count: "600+" },
      { name: "Meat & Poultry", count: "500+" },
    ],
  },
  {
    title: "Supplies",
    items: [
      { name: "Restaurant Supplies", count: "1,500+" },
      { name: "Retail Store Supplies", count: "1,100+" },
      { name: "Packaging", count: "900+" },
      { name: "Cleaning Products", count: "750+" },
    ],
  },
];

export const heroStats = [
  { value: 25000, suffix: "+", label: "Products" },
  { value: 850, suffix: "+", label: "Suppliers" },
  { value: 12, suffix: "", label: "Countries" },
  { value: 50000, suffix: "+", label: "Buyers" },
];

export const trustBannerItems = [
  {
    icon: "ShieldCheck" as const,
    title: "Verified & Trusted",
    description: "Quality suppliers you can rely on",
  },
  {
    icon: "Truck" as const,
    title: "Shared Truck Logistics",
    description: "Save more with shared shipments",
  },
  {
    icon: "Lock" as const,
    title: "Secure Payments",
    description: "Safe & flexible payment options",
  },
  {
    icon: "Globe" as const,
    title: "Global Trade Network",
    description: "Connecting Algeria to the world",
  },
  {
    icon: "Headphones" as const,
    title: "Dedicated Support",
    description: "Here to help your business grow",
  },
];

export const popularSearches = [
  "Frozen Chicken",
  "Beverages",
  "FMCG",
  "Dairy Products",
  "Rice",
  "Cooking Oil",
];

export const quickFilters = popularSearches;

export const categories = [
  {
    name: "Meat & Poultry",
    productCount: "1,250+",
    supplierCount: "210+",
    image: "/categories/meat.png",
  },
  {
    name: "Beverages",
    productCount: "2,450+",
    supplierCount: "180+",
    image: "/categories/beverages.png",
  },
  {
    name: "Dairy Products",
    productCount: "980+",
    supplierCount: "150+",
    image: "/categories/dairy.png",
  },
  {
    name: "Fruits & Vegetables",
    productCount: "1,200+",
    supplierCount: "160+",
    image: "/categories/fruits.png",
  },
  {
    name: "Grocery",
    productCount: "5,600+",
    supplierCount: "320+",
    image: "/categories/grocery.png",
  },
  {
    name: "Seafood",
    productCount: "850+",
    supplierCount: "120+",
    image: "/categories/seafood.png",
  },
];

export const features = [
  {
    icon: "TrendingDown" as const,
    title: "Better Wholesale Prices",
    description: "Buy directly from trusted suppliers and save more.",
    metric: "30% lower costs",
  },
  {
    icon: "Share2" as const,
    title: "Shared Logistics",
    description: "Share truck space and reduce transportation costs.",
    metric: "40% savings on shipping",
  },
  {
    icon: "BadgeCheck" as const,
    title: "Verified Suppliers",
    description: "All suppliers are verified for quality and reliability.",
    metric: "100% verified",
  },
  {
    icon: "BarChart3" as const,
    title: "Business Growth",
    description: "Tools and support to help your business grow faster.",
    metric: "3x faster scaling",
  },
];

export const logisticsRoutes = [
  {
    from: "Algiers",
    to: "Oran",
    distance: "400 km",
    seats: 12,
    totalSeats: 20,
    savings: "35%",
    status: "Loading" as const,
    eta: "2h 30m",
  },
  {
    from: "Algiers",
    to: "Constantine",
    distance: "320 km",
    seats: 5,
    totalSeats: 20,
    savings: "40%",
    status: "In Transit" as const,
    eta: "4h 15m",
  },
  {
    from: "Algiers",
    to: "Blida",
    distance: "45 km",
    seats: 18,
    totalSeats: 20,
    savings: "25%",
    status: "Departing" as const,
    eta: "45m",
  },
];

export const supplierJourney = [
  {
    icon: "Factory" as const,
    title: "Factory",
    description: "Products sourced directly from verified manufacturers.",
  },
  {
    icon: "Package" as const,
    title: "Container",
    description: "Professional container loading and documentation.",
  },
  {
    icon: "Ship" as const,
    title: "Port",
    description: "Ocean freight from global ports to Algeria.",
  },
  {
    icon: "FileCheck" as const,
    title: "Customs",
    description: "Streamlined customs clearance and compliance.",
  },
  {
    icon: "Truck" as const,
    title: "Shared Truck",
    description: "Last-mile delivery via shared logistics.",
  },
  {
    icon: "Store" as const,
    title: "Buyer",
    description: "Delivered to your warehouse or store.",
  },
];

export const importOpportunities = [
  {
    product: "Brazilian Chicken",
    origin: "Brazil",
    flag: "🇧🇷",
    status: "In Transit" as const,
    arrival: "Aug 15, 2025",
    quantity: "40ft Container",
    progress: 65,
    supplier: "AgroBrasil Exports",
    price: "$2,800/ton",
  },
  {
    product: "Sunflower Oil",
    origin: "Ukraine",
    flag: "🇺🇦",
    status: "Loading" as const,
    arrival: "Sep 2, 2025",
    quantity: "20ft Container",
    progress: 25,
    supplier: "UkraineOil Trading",
    price: "$1,050/ton",
  },
  {
    product: "Thai Rice",
    origin: "Thailand",
    flag: "🇹🇭",
    status: "Customs" as const,
    arrival: "Jul 28, 2025",
    quantity: "40ft Container",
    progress: 85,
    supplier: "Thai Grain Co.",
    price: "$620/ton",
  },
];

export const wholesaleDeals = [
  {
    product: "Frozen Chicken Thighs",
    image: "/deals/chicken.jpg",
    moq: "500 kg",
    price: "$2.15",
    unit: "/kg",
    discount: "18% OFF",
    supplier: "PoultryPro Brasil",
    country: "Brazil",
    flag: "🇧🇷",
    category: "Meat & Poultry",
  },
  {
    product: "Sparkling Water (24-Pack)",
    image: "/deals/water.jpg",
    moq: "200 cases",
    price: "$8.50",
    unit: "/case",
    discount: "12% OFF",
    supplier: "AquaSource Europe",
    country: "France",
    flag: "🇫🇷",
    category: "Beverages",
  },
  {
    product: "UHT Full Cream Milk",
    image: "/deals/milk.jpg",
    moq: "1,000 units",
    price: "$0.85",
    unit: "/unit",
    discount: "15% OFF",
    supplier: "DairyMax Netherlands",
    country: "Netherlands",
    flag: "🇳🇱",
    category: "Dairy",
  },
  {
    product: "Basmati Rice Premium",
    image: "/deals/rice.jpg",
    moq: "2 tons",
    price: "$1.20",
    unit: "/kg",
    discount: "22% OFF",
    supplier: "IndiaGrain Export",
    country: "India",
    flag: "🇮🇳",
    category: "Grocery",
  },
];

export const suppliers = [
  {
    name: "PoultryPro Brasil",
    country: "Brazil",
    flag: "🇧🇷",
    category: "Meat & Poultry",
    years: 4,
    verified: true,
    products: 120,
  },
  {
    name: "AgroBrasil Exports",
    country: "Brazil",
    flag: "🇧🇷",
    category: "Agriculture",
    years: 6,
    verified: true,
    products: 85,
  },
  {
    name: "AquaSource Europe",
    country: "France",
    flag: "🇫🇷",
    category: "Beverages",
    years: 3,
    verified: true,
    products: 65,
  },
  {
    name: "DairyMax Netherlands",
    country: "Netherlands",
    flag: "🇳🇱",
    category: "Dairy",
    years: 5,
    verified: true,
    products: 45,
  },
  {
    name: "IndiaGrain Export",
    country: "India",
    flag: "🇮🇳",
    category: "Grains & Rice",
    years: 7,
    verified: true,
    products: 200,
  },
  {
    name: "Thai Grain Co.",
    country: "Thailand",
    flag: "🇹🇭",
    category: "Rice & Grains",
    years: 5,
    verified: true,
    products: 150,
  },
  {
    name: "UkraineOil Trading",
    country: "Ukraine",
    flag: "🇺🇦",
    category: "Oils & Fats",
    years: 3,
    verified: true,
    products: 30,
  },
  {
    name: "TurkeyFood Export",
    country: "Turkey",
    flag: "🇹🇷",
    category: "Confectionery",
    years: 4,
    verified: true,
    products: 95,
  },
  {
    name: "UAE Fresh Foods",
    country: "UAE",
    flag: "🇦🇪",
    category: "Mixed Foods",
    years: 2,
    verified: true,
    products: 110,
  },
  {
    name: "ChinaPack Solutions",
    country: "China",
    flag: "🇨🇳",
    category: "Packaging",
    years: 6,
    verified: true,
    products: 300,
  },
];

export const industries = [
  {
    icon: "ShoppingBag" as const,
    name: "Retail Stores",
    description: "Stock your shelves with verified wholesale products at competitive prices.",
  },
  {
    icon: "UtensilsCrossed" as const,
    name: "Restaurants",
    description: "Source premium ingredients in bulk with reliable delivery schedules.",
  },
  {
    icon: "Hotel" as const,
    name: "Hotels",
    description: "Hotel supply chains made simple with one-stop bulk ordering.",
  },
  {
    icon: "Warehouse" as const,
    name: "Distributors",
    description: "Expand your product catalog with access to global manufacturers.",
  },
  {
    icon: "Store" as const,
    name: "Supermarkets",
    description: "Full-category sourcing with volume discounts and logistics support.",
  },
  {
    icon: "Coffee" as const,
    name: "Cafes",
    description: "Specialty supplies for coffee shops, bakeries, and dessert bars.",
  },
];

export const statistics = [
  { value: 25000, suffix: "+", label: "Products" },
  { value: 850, suffix: "+", label: "Verified Suppliers" },
  { value: 12, suffix: "", label: "Source Countries" },
  { value: 50000, suffix: "+", label: "Active Buyers" },
  { value: 100, suffix: "+", label: "Truck Loads Monthly" },
];

export const testimonials = [
  {
    name: "Karim Benali",
    company: "DistribAl",
    country: "Algeria",
    type: "Distributor",
    image: "/testimonials/karim.jpg",
    quote:
      "KingoMart transformed how we source products. The shared logistics alone saved us 35% on shipping costs across our distribution network.",
    metric: "35% lower logistics costs",
  },
  {
    name: "Sofia Meziane",
    company: "Le Jardin Restaurant",
    country: "Algeria",
    type: "Restaurant",
    image: "/testimonials/sofia.jpg",
    quote:
      "We source all our kitchen supplies through KingoMart. The quality is consistent, pricing is transparent, and delivery is always on time.",
    metric: "18% lower sourcing costs",
  },
  {
    name: "Yacine Hadj",
    company: "CityMart",
    country: "Algeria",
    type: "Retailer",
    image: "/testimonials/yacine.jpg",
    quote:
      "From frozen goods to beverages, everything arrives on schedule. The import tracking system gives us complete visibility into our supply chain.",
    metric: "3x faster restocking",
  },
];

export const footerLinks = {
  Products: ["Categories", "Wholesale Products", "Deals", "New Arrivals"],
  Suppliers: ["Become a Supplier", "Supplier Directory", "Supplier Verification"],
  "Import Zone": ["Import Opportunities", "Shipments", "Logistics"],
  Industries: ["Retail", "Restaurants", "Hotels", "Supermarkets"],
  Services: ["Trade Protection", "Shared Logistics", "Payments"],
  Company: ["About", "Contact", "Careers"],
  Support: ["Help Center", "FAQ", "Contact Support"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export const upcomingImportOpportunities = [
  {
    title: "Brazilian Chicken",
    booked: "80%",
    arriving: "Aug 28, 2025",
    image: "/products/chicken.png",
  },
  {
    title: "Sunflower Oil",
    booked: "60%",
    arriving: "Sep 05, 2025",
    image: "/products/sunflower-oil.png",
  },
  {
    title: "Thai White Rice",
    booked: "40%",
    arriving: "Sep 12, 2025",
    image: "/products/thai-rice.png",
  },
];

export const liveTruckLoads = [
  {
    route: "Algiers → Oran",
    departing: "Aug 12, 2025",
    seatsLeft: "3 Seats Left",
  },
  {
    route: "Algiers → Constantine",
    departing: "Aug 13, 2025",
    seatsLeft: "5 Seats Left",
  },
  {
    route: "Algiers → Blida",
    departing: "Aug 14, 2025",
    seatsLeft: "2 Seats Left",
  },
];

export const topWholesaleDeals = [
  {
    title: "Frozen Chicken (10kg)",
    moq: "100kg",
    originalPrice: "2,400 DZD",
    discountPrice: "1,950 DZD",
    discount: "18% OFF",
    image: "/products/chicken.png",
  },
  {
    title: "Sunflower Oil (5L)",
    moq: "50 Cartons",
    originalPrice: "2,100 DZD",
    discountPrice: "1,650 DZD",
    discount: "21% OFF",
    image: "/products/sunflower-oil.png",
  },
  {
    title: "Coca Cola (24 x 330ml)",
    moq: "100 Cartons",
    originalPrice: "2,800 DZD",
    discountPrice: "2,250 DZD",
    discount: "20% OFF",
    image: "/products/cola.png",
  },
];

export const topVerifiedSuppliers = [
  {
    name: "Sadia",
    years: "20+ Years",
    flag: "🇧🇷",
  },
  {
    name: "Almarai",
    years: "15+ Years",
    flag: "🇸🇦",
  },
  {
    name: "Coca-Cola",
    years: "30+ Years",
    flag: "🇺🇸",
  },
  {
    name: "Nestlé",
    years: "20+ Years",
    flag: "🇨🇭",
  },
  {
    name: "PepsiCo",
    years: "25+ Years",
    flag: "🇺🇸",
  },
];

export const industriesWeServe = [
  { name: "Retail Stores", icon: "Store" },
  { name: "Restaurants", icon: "UtensilsCrossed" },
  { name: "Hotels", icon: "Hotel" },
  { name: "Supermarkets", icon: "ShoppingBag" },
  { name: "Distributors", icon: "Warehouse" },
  { name: "Cafés", icon: "Coffee" },
];

export const appFeatures = [
  {
    icon: "Package" as const,
    title: "Order Tracking",
    description: "Track orders in real time",
  },
  {
    icon: "Truck" as const,
    title: "Manage Shipments",
    description: "Join & manage truck loads",
  },
  {
    icon: "FileText" as const,
    title: "Invoices & Payments",
    description: "All your invoices in one place",
  },
  {
    icon: "Bell" as const,
    title: "Alerts & Offers",
    description: "Never miss a deal",
  },
];

export const platformStats = [
  { value: "25,000+", label: "Products" },
  { value: "850+", label: "Verified Suppliers" },
  { value: "12", label: "Countries" },
  { value: "50,000+", label: "Business Buyers" },
  { value: "100+", label: "Truck Loads Monthly" },
  { value: "98%", label: "On-time Delivery" },
];
