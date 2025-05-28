export const products = [
  {
    title: "eardrop for Women",
    price: 1350,
    sizes: ["XL", "L", "M"],
    image: "/yearing.jpg",
    bg: "bg-green-100",
  },
  {
    title: "half silk sharee for Girl",
    price: 1400,
    sizes: ["XL", "L", "M"],
    image: "/img/product/half_silk_sharee3.webp",
    bg: "bg-green-100",
  },
  {
    title: "cotton kamiz",
    price: 3200,
    sizes: ["XL", "L", "M"],
    image: "/img/product/cotton_kamiz1.webp",
    bg: "bg-yellow-100",
  },
  {
    title: "half silk sharee for Girl",
    price: 4600,
    sizes: ["XL", "L", "M"],
    image: "/img/product/half_silk_sharee4.webp",
    bg: "bg-green-100",
  },

  {
    title: "Cotton sitched for Girl",
    price: 1500,
    sizes: ["XL", "L", "M"],
    image: "/img/product/cotton_sitched_dress.webp",
    bg: "bg-green-100",
  },
  {
    title: "Lilen Kamiz dress for Girl",
    price: 2000,
    sizes: ["XL", "L", "M"],
    image: "/img/product/linen_kamiz.webp",
    bg: "bg-green-100",
  },
  {
    title: "half silk sharee for Girl",
    price: 2600,
    sizes: ["XL", "L", "M"],
    image: "/img/product/half_silk_sharee.webp",
    bg: "bg-green-100",
  },
];

export const sliders = [
  {
    title: "Step into Style Fresh & Trendy Women's Wear!",
    description:
      "Unveil your unique fashion statement with our latest collection at Girligirl. From comfortable everyday wear to stunning outfits for special occasions, we bring you the best of both worlds. Refresh your wardrobe and elevate your look with our handpicked styles.",
    cta: "Explore the Collection",
    image: "/home_bg.jpg", // Replace with actual image path or URL
  },
  {
    title: "Glamour Awaits  Transform Your Look with Beauty Services",
    description:
      "Treat yourself to the ultimate beauty experience at Ruthi’s Aesthetics Beauty. Whether you're looking for a chic new haircut, a soothing hair steam, or precise threading, we’ve got you covered. Let us help you radiate confidence and elegance every day.",
    cta: "Book Your Beauty Session",
    image: "/home_bg_1.jpg", // Replace with actual image path or URL
  },
  {
    title: "Where Fashion Meets Beauty  A Complete Experience",
    description:
      "At Girligirl, we believe in offering more than just great fashion. From exploring the latest women’s wear to indulging in luxurious beauty treatments, every visit is a new opportunity to redefine your style and glow. ",
    cta: "Visit Us Now",
    image: "/home_bg_2.jpg",
  },
  {
    title: "Elegance in Every Detail Precision Beauty Services",
    description:
      "Looking for a flawless look? Ruthi’s Aesthetics Beauty offers precision services like ear and nose piercings, threading, and haircuts with the highest standards of professionalism and care. ",
    cta: "Get Pampered Today",
    image: "/home_bg_3.jpg", // Replace with actual image path or URL
  },
];

export const categories = [
  "All",
  "Body Care",
  "Hair Care",
  "Makeover",
  "Bridal",
  "Packages",
  "Premium",
  "Henna Art",
  "Hair Removal",
  "Hairstyle",
];

export const filtersByCategory = {
  "Body Care": [
    { label: "Manicure And Pedicure", count: 4 },
    { label: "Facials", count: 10 },
    { label: "Brightening Polish", count: 5 },
    { label: "Massage", count: 7 },
  ],
  "Hair Care": [
    { label: "Hair Spa", count: 6 },
    { label: "Hair Color", count: 8 },
    { label: "Hair Cut", count: 12 },
    { label: "Hair Treatment", count: 5 },
  ],
  Makeover: [
    { label: "Party Makeover", count: 3 },
    { label: "Bridal Makeover", count: 2 },
    { label: "Light Makeover", count: 4 },
  ],
  Bridal: [
    { label: "Bridal Package", count: 2 },
    { label: "Bridal Facial", count: 3 },
  ],
  Packages: [
    { label: "Combo Pack", count: 2 },
    { label: "Seasonal Pack", count: 1 },
  ],
  Premium: [
    { label: "Gold Facial", count: 2 },
    { label: "Diamond Polish", count: 1 },
  ],
  "Henna Art": [
    { label: "Simple Henna", count: 3 },
    { label: "Bridal Henna", count: 2 },
  ],
  "Hair Removal": [
    { label: "Waxing", count: 5 },
    { label: "Threading", count: 7 },
  ],
  Hairstyle: [
    { label: "Bridal Hairstyle", count: 2 },
    { label: "Party Hairstyle", count: 3 },
  ],
};

export const allServices = [
  // Body Care
  {
    category: "Body Care",
    filters: ["Manicure And Pedicure"],
    title: "MANICURE AND PEDICURE",
    subtitle: "Spa Manicure with Pack",
    duration: "40 min",
    orders: 1397,
    price: 750,
    image: "/service/Bangs1673798978.webp",
  },
  {
    category: "Body Care",
    filters: ["Manicure And Pedicure"],
    title: "MANICURE AND PEDICURE",
    subtitle: "Spa Pedicure with Pack",
    duration: "45 min",
    orders: 9612,
    price: 750,
    image: "/service/bridal1.webp",
  },
  {
    category: "Body Care",
    filters: ["Manicure And Pedicure"],
    title: "MANICURE AND PEDICURE",
    subtitle: "Spa Manicure and Pedicure",
    duration: "85 min",
    orders: 15912,
    price: 1199,
    image: "/service/bridal2.webp",
  },
  {
    category: "Body Care",
    filters: ["Facials"],
    title: "BODY FACIAL",
    subtitle: "Brightening Facial",
    duration: "60 min",
    orders: 2100,
    price: 950,
    image: "/service/engagemaker.webp",
  },
  {
    category: "Body Care",
    filters: ["Massage"],
    title: "BODY MASSAGE",
    subtitle: "Relaxing Full Body Massage",
    duration: "50 min",
    orders: 1200,
    price: 1200,
    image: "/service/spa2.webp",
  },
  // Hair Care
  {
    category: "Hair Care",
    filters: ["Hair Spa"],
    title: "HAIR SPA",
    subtitle: "Nourishing Hair Spa",
    duration: "40 min",
    orders: 800,
    price: 850,
    image: "/service/frontent1.webp",
  },
  {
    category: "Hair Care",
    filters: ["Hair Color"],
    title: "HAIR COLOR",
    subtitle: "Global Hair Color",
    duration: "90 min",
    orders: 450,
    price: 1800,
    image: "/service/hair_long.webp",
  },
  // Makeover
  {
    category: "Makeover",
    filters: ["Party Makeover"],
    title: "PARTY MAKEOVER",
    subtitle: "Evening Party Look",
    duration: "60 min",
    orders: 300,
    price: 2000,
    image: "/service/treatment1.webp",
  },
  // Bridal
  {
    category: "Bridal",
    filters: ["Bridal Package"],
    title: "BRIDAL PACKAGE",
    subtitle: "Full Bridal Makeover",
    duration: "120 min",
    orders: 150,
    price: 8000,
    image: "/service/spa2.webp",
  },
  // Packages
  {
    category: "Packages",
    filters: ["Combo Pack"],
    title: "COMBO PACK",
    subtitle: "Facial + Manicure + Pedicure",
    duration: "120 min",
    orders: 500,
    price: 2000,
    image: "/packages/package1.webp",
  },
  // Premium
  {
    category: "Premium",
    filters: ["Gold Facial"],
    title: "GOLD FACIAL",
    subtitle: "Premium Gold Facial",
    duration: "70 min",
    orders: 100,
    price: 2500,
    image: "/packages/package2.webp",
  },
  // Henna Art
  {
    category: "Henna Art",
    filters: ["Simple Henna"],
    title: "HENNA ART",
    subtitle: "Simple Henna Design",
    duration: "30 min",
    orders: 200,
    price: 400,
    image: "/packages/bridal2.webp",
  },
  // Hair Removal
  {
    category: "Hair Removal",
    filters: ["Waxing"],
    title: "WAXING",
    subtitle: "Full Arms Waxing",
    duration: "30 min",
    orders: 600,
    price: 600,
    image: "/service/hair3.webp",
  },
  // Hairstyle
  {
    category: "Hairstyle",
    filters: ["Bridal Hairstyle"],
    title: "BRIDAL HAIRSTYLE",
    subtitle: "Classic Bridal Bun",
    duration: "40 min",
    orders: 80,
    price: 1200,
    image: "/service/loghair.webp",
  },
];

export const WomenProducts = [
  {
    id: 15,
    name: "Watch",
    price: 1680,
    image: "/img/ourproduct/photo_2025-05-28_13-44-48 (4).jpg",
    category: "Women",
  },
  {
    id: 16,
    name: "Ornaments",
    price: 1240,
    image: "/img/ourproduct/photo_2025-05-28_13-44-48 (3).jpg",
    category: "Women",
  },
  {
    id: 17,
    name: "Watch",
    price: 1590,
    image: "/img/ourproduct/photo_2025-05-28_13-44-48.jpg",
    category: "Watch",
  },
  {
    id: 18,
    name: "eardrop ",
    price: 800,
    image: "/img/ourproduct/photo_2025-05-28_13-44-47.jpg",
    category: "Women",
  },
  {
    id: 19,
    name: "eardrop ",
    price: 1890,
    image: "/img/ourproduct/photo_2025-05-28_13-44-47 (4).jpg",
    category: "Women",
  },
  {
    id: 20,
    name: "eardrop ",
    price: 1700,
    image: "/img/ourproduct/photo_2025-05-28_13-44-47 (2).jpg",
    category: "Women",
  },
  {
    id: 21,
    name: "ornaments",
    price: 1900,
    image: "/img/ourproduct/photo_2025-05-28_13-44-47 (3).jpg",
    category: "Women",
  },
  {
    id: 22,
    name: "Womens Bag",
    price: 1046,
    image: "/img/ourproduct/photo_2025-05-28_13-44-46.jpg",
    category: "Women",
  },
  {
    id: 23,
    name: "eardrop",
    price: 1890,
    image: "/img/ourproduct/photo_2025-05-28_13-44-46 (5).jpg",
    category: "Women",
  },
  {
    id: 23,
    name: "bracelet",
    price: 500,
    image: "/img/ourproduct/photo_2025-05-28_13-44-46 (4).jpg",
    category: "Women",
  },
  {
    id: 1,
    name: "Women's Sharee",
    price: 2190,
    image: "/img/product/half_silk_sharee3.webp",
    category: "Women",
  },

  {
    id: 2,
    name: "Women's Single Kamiz",
    price: 3190,
    image: "/img/product/linen_kamiz.webp",
    category: "Women",
  },
  {
    id: 3,
    name: "Women's Sharee",
    price: 1790,
    image: "/img/product/half_silk_sharee.webp",
    category: "Women",
  },
  {
    id: 4,
    name: "Women's Single Kamiz",
    price: 1590,
    image: "/img/product/half_silk_sharee4.webp",
    category: "Women",
  },

  {
    id: 5,
    name: "Cotton kamiz",
    price: 3290,
    image: "/img/product/cotton_kamiz1.webp",
    category: "Women",
  },

  {
    id: 6,
    name: "Women's Cotton Sitched Dress",
    price: 1750,
    image: "/img/product/cotton_sitched_dress.webp",
    category: "Women",
  },
  {
    id: 7,
    name: "eardrop for Women",
    price: 2050,
    image: "/yearing.jpg",
    category: "Women",
  },

  {
    id: 9,
    name: "Women's Sharee",
    price: 2490,
    image:
      "https://rang-bd.com/wp-content/uploads/2025/05/Rang-Bangladesh-RB-W-SHR-NJ-C1-25088-3-768x768.webp",
    category: "Women",
  },
  {
    id: 10,
    name: "Women's Sharee",
    price: 2990,
    image:
      "https://rang-bd.com/wp-content/uploads/2025/05/Rang-Bangladesh-RB-W-SHR-NJ-ET-25099-3-768x768.webp",
    category: "Sale Offer",
  },
  {
    id: 11,
    name: "Baby Dress",
    price: 1590,
    image: "/img/ourproduct/photo_2025-05-28_13-44-43 (2).jpg",
    category: "Baby",
  },
  {
    id: 12,
    name: "Nail palish",
    price: 690,
    image: "/img/ourproduct/photo_2025-05-28_13-44-43 (4).jpg",
    category: "Women",
  },
  {
    id: 13,
    name: "Ornaments",
    price: 1590,
    image: "/img/ourproduct/photo_2025-05-28_13-44-48 (6).jpg",
    category: "Women",
  },
  {
    id: 14,
    name: "Watch",
    price: 2090,
    image: "/img/ourproduct/photo_2025-05-28_13-44-48 (5).jpg",
    category: "Women",
  },
];

export const galleryImages = [
  {
    id: 1,
    image: "/img/ourproduct/photo_2025-05-28_13-44-43.jpg",
  },
  {
    id: 2,
    image: "/img/ourproduct/photo_2025-05-28_13-44-43 (3).jpg",
  },
  {
    id: 3,
    image: "/img/ourproduct/photo_2025-05-28_13-44-44 (2).jpg",
  },
  {
    id: 4,
    image: "/img/ourproduct/photo_2025-05-28_13-44-44 (3).jpg",
  },
  {
    id: 5,
    image: "/img/ourproduct/photo_2025-05-28_13-44-44.jpg",
  },

  {
    id: 6,
    image: "/img/ourproduct/photo_2025-05-28_13-44-45.jpg",
  },

  {
    id: 10,
    image: "/img/ourproduct/photo_2025-05-28_13-44-46.jpg",
  },
  {
    id: 11,
    image: "/img/ourproduct/photo_2025-05-28_13-44-47.jpg",
  },
];
