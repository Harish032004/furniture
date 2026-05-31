// products-data.js - Master product database for Xspica

const XspicaProducts = {
  // Executive Cabin Collection
  "executive-cabin": {
    name: "Executive Cabin Collection",
    slug: "executive-cabin",
    heroImage: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Command authority with our executive cabin furniture designed for leaders who demand the best. Premium materials, ergonomic excellence, and timeless design.",
    badge: "✦ PREMIUM COLLECTION",
    stats: { designs: 12, finishes: 8, sizes: 5 },
    products: [
      {
        id: "exec-001",
        name: "Regent Executive Desk",
        slug: "regent-executive-desk",
        price: 85000,
        originalPrice: 95000,
        category: "Executive Desk",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium walnut finish executive desk with integrated cable management and soft-close drawers.",
        features: ["Solid walnut wood", "Integrated cable management", "Soft-close drawers", "Keyboard tray", "2 side pedestals"],
        dimensions: { width: 180, depth: 90, height: 76 },
        colors: ["Walnut", "Mahogany", "Cherry"],
        inStock: true,
        sku: "EX-1001"
      },
      {
        id: "exec-002",
        name: "Prestige Executive Chair",
        slug: "prestige-executive-chair",
        price: 45000,
        originalPrice: 55000,
        category: "Executive Chair",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Italian leather executive chair with adjustable lumbar support and 24/7 pneumatic lift mechanism.",
        features: ["Italian premium leather", "Adjustable lumbar support", "4D armrests", "Headrest included", "Tilt mechanism"],
        dimensions: { width: 70, depth: 72, height: 120 },
        colors: ["Black", "Brown", "Tan"],
        inStock: true,
        sku: "EX-1002"
      },
      {
        id: "exec-003",
        name: "Executive Side Cabinet",
        slug: "executive-side-cabinet",
        price: 32000,
        category: "Storage",
        image: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Lockable side cabinet with premium veneer finish and soft-close mechanism.",
        features: ["Lockable drawers", "Soft-close mechanism", "Premium veneer finish", "Anti-tip design"],
        dimensions: { width: 45, depth: 50, height: 65 },
        colors: ["Walnut", "Mahogany"],
        inStock: true,
        sku: "EX-1003"
      },
      {
        id: "exec-004",
        name: "Executive Bookcase",
        slug: "executive-bookcase",
        price: 48000,
        category: "Storage",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "4-tier adjustable bookcase with tempered glass doors and integrated LED lighting.",
        features: ["4 adjustable shelves", "Tempered glass doors", "LED lighting", "Premium wood finish"],
        dimensions: { width: 90, depth: 35, height: 200 },
        colors: ["Walnut", "Oak", "Mahogany"],
        inStock: true,
        sku: "EX-1004"
      },
      {
        id: "exec-005",
        name: "Executive Conference Table",
        slug: "executive-conference-table",
        price: 125000,
        category: "Conference",
        image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Large executive conference table with power outlets and data ports.",
        features: ["Integrated power outlets", "Data ports", "Premium wood finish", "Seats 8-10 people"],
        dimensions: { width: 300, depth: 120, height: 76 },
        colors: ["Walnut", "Mahogany"],
        inStock: true,
        sku: "EX-1005"
      }
    ]
  },

  // Dining Collection
  "dining": {
    name: "Dining Collection",
    slug: "dining",
    heroImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Elevate your dining experience with our premium dining furniture. Crafted from solid wood with elegant finishes.",
    badge: "✦ HOME COLLECTION",
    stats: { designs: 15, finishes: 10, sizes: 6 },
    products: [
      {
        id: "din-001",
        name: "Marble Dining Table",
        slug: "marble-dining-table",
        price: 65000,
        originalPrice: 75000,
        category: "Dining Table",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Elegant marble top dining table with solid wood base. Seats 6 comfortably.",
        features: ["Natural marble top", "Solid wood base", "Seats 6 people", "Scratch resistant", "Easy to clean"],
        dimensions: { width: 160, depth: 90, height: 76 },
        colors: ["White Marble", "Black Marble", "Grey Marble"],
        inStock: true,
        sku: "DIN-1001"
      },
      {
        id: "din-002",
        name: "Velvet Dining Chair",
        slug: "velvet-dining-chair",
        price: 12000,
        category: "Dining Chair",
        image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Luxurious velvet dining chair with gold finish legs. Perfect for modern homes.",
        features: ["Premium velvet fabric", "Gold finish legs", "High-density foam", "Ergonomic backrest", "Set of 2"],
        dimensions: { width: 48, depth: 55, height: 90 },
        colors: ["Emerald Green", "Navy Blue", "Burgundy", "Charcoal", "Blush Pink"],
        inStock: true,
        sku: "DIN-1002"
      },
      {
        id: "din-003",
        name: "Solid Wood Dining Bench",
        slug: "solid-wood-dining-bench",
        price: 18000,
        category: "Dining Bench",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Handcrafted solid teak wood dining bench with natural finish.",
        features: ["Solid teak wood", "Natural finish", "Seats 3 people", "Handcrafted", "Durable construction"],
        dimensions: { width: 140, depth: 35, height: 45 },
        colors: ["Natural Teak", "Walnut", "Honey Oak"],
        inStock: true,
        sku: "DIN-1003"
      },
      {
        id: "din-004",
        name: "Glass Dining Table",
        slug: "glass-dining-table",
        price: 55000,
        originalPrice: 65000,
        category: "Dining Table",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Contemporary tempered glass dining table with chrome legs.",
        features: ["Tempered glass top", "Chrome finish legs", "Seats 6-8 people", "Scratch resistant", "Modern design"],
        dimensions: { width: 180, depth: 90, height: 76 },
        colors: ["Clear Glass", "Frosted Glass"],
        inStock: true,
        sku: "DIN-1004"
      }
    ]
  },

  // Seating Collection
  "seating": {
    name: "Seating Collection",
    slug: "seating",
    heroImage: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Discover our premium seating range - from ergonomic office chairs to luxurious lounge sofas.",
    badge: "✦ COMFORT COLLECTION",
    stats: { designs: 20, colors: 15, styles: 8 },
    products: [
      {
        id: "seat-001",
        name: "Ergonomic Task Chair",
        slug: "ergonomic-task-chair",
        price: 25000,
        originalPrice: 32000,
        category: "Office Chair",
        image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Fully adjustable ergonomic task chair for all-day comfort. BIFMA certified.",
        features: ["Breathable mesh back", "3D adjustable armrests", "Lumbar support", "Seat depth adjustment", "Headrest included"],
        dimensions: { width: 68, depth: 68, height: 120 },
        colors: ["Black", "Grey", "Blue", "Red"],
        inStock: true,
        sku: "SEAT-1001"
      },
      {
        id: "seat-002",
        name: "Lounge Sofa",
        slug: "lounge-sofa",
        price: 55000,
        originalPrice: 68000,
        category: "Lounge",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Plush lounge sofa perfect for breakout areas and waiting rooms.",
        features: ["High-density foam", "Premium fabric", "Removable covers", "Sturdy wooden frame", "3-seater"],
        dimensions: { width: 200, depth: 85, height: 80 },
        colors: ["Charcoal", "Navy", "Beige", "Olive Green"],
        inStock: true,
        sku: "SEAT-1002"
      },
      {
        id: "seat-003",
        name: "Executive High-Back Chair",
        slug: "executive-high-back-chair",
        price: 38000,
        originalPrice: 45000,
        category: "Executive Chair",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium high-back executive chair with genuine leather upholstery.",
        features: ["Genuine leather", "High back support", "Reclining mechanism", "Padded armrests", "Chrome base"],
        dimensions: { width: 72, depth: 75, height: 125 },
        colors: ["Black Leather", "Brown Leather", "Tan Leather"],
        inStock: true,
        sku: "SEAT-1003"
      },
      {
        id: "seat-004",
        name: "Guest Chair",
        slug: "guest-chair",
        price: 15000,
        category: "Guest Chair",
        image: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Elegant guest chair for reception and meeting areas.",
        features: ["Padded seat", "Chrome legs", "Stackable design", "Breathable fabric", "Lightweight"],
        dimensions: { width: 55, depth: 60, height: 85 },
        colors: ["Black", "Grey", "Blue", "Red"],
        inStock: true,
        sku: "SEAT-1004"
      }
    ]
  },

  // Meeting Tables Collection
  "meeting-tables": {
    name: "Meeting Tables Collection",
    slug: "meeting-tables",
    heroImage: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Professional meeting tables designed for collaboration and productivity.",
    badge: "✦ CORPORATE COLLECTION",
    stats: { designs: 8, sizes: 6, finishes: 7 },
    products: [
      {
        id: "mt-001",
        name: "Boardroom Table",
        slug: "boardroom-table",
        price: 95000,
        originalPrice: 115000,
        category: "Meeting Table",
        image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Large boardroom table with power and data ports. Seats 12 people.",
        features: ["Power outlets", "Data ports", "Premium wood finish", "Seats 12 people", "Cable management"],
        dimensions: { width: 360, depth: 150, height: 76 },
        colors: ["Walnut", "Mahogany", "Cherry"],
        inStock: true,
        sku: "MT-1001"
      },
      {
        id: "mt-002",
        name: "Round Meeting Table",
        slug: "round-meeting-table",
        price: 45000,
        category: "Meeting Table",
        image: "https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Round meeting table perfect for collaborative discussions.",
        features: ["Round shape", "Sturdy base", "Seats 6 people", "Modern design", "Easy assembly"],
        dimensions: { width: 120, depth: 120, height: 76 },
        colors: ["White", "Black", "Walnut"],
        inStock: true,
        sku: "MT-1002"
      },
      {
        id: "mt-003",
        name: "Training Table",
        slug: "training-table",
        price: 12000,
        category: "Training Table",
        image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Foldable training table for flexible classroom setups.",
        features: ["Foldable legs", "Lightweight", "Durable laminate top", "Stackable", "Wheel casters"],
        dimensions: { width: 180, depth: 60, height: 76 },
        colors: ["White", "Grey", "Beech"],
        inStock: true,
        sku: "MT-1003"
      }
    ]
  },

  // Cabinets Collection
  "cabinets": {
    name: "Cabinets Collection",
    slug: "cabinets",
    heroImage: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Stylish and functional storage solutions for every space.",
    badge: "✦ STORAGE COLLECTION",
    stats: { designs: 10, sizes: 8, finishes: 6 },
    products: [
      {
        id: "cab-001",
        name: "Filing Cabinet",
        slug: "filing-cabinet",
        price: 18000,
        category: "Filing Cabinet",
        image: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Lockable filing cabinet with 4 drawers for A4 and legal files.",
        features: ["Lockable drawers", "Ball-bearing slides", "Anti-tip mechanism", "Durable steel", "Label holders"],
        dimensions: { width: 46, depth: 62, height: 132 },
        colors: ["Black", "White", "Grey"],
        inStock: true,
        sku: "CAB-1001"
      },
      {
        id: "cab-002",
        name: "Storage Cupboard",
        slug: "storage-cupboard",
        price: 35000,
        category: "Storage",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Large storage cupboard with adjustable shelves.",
        features: ["Adjustable shelves", "Lockable doors", "Premium finish", "Soft-close hinges", "Ventilation"],
        dimensions: { width: 90, depth: 45, height: 180 },
        colors: ["Walnut", "Oak", "White"],
        inStock: true,
        sku: "CAB-1002"
      },
      {
        id: "cab-003",
        name: "Bookcase",
        slug: "bookcase",
        price: 25000,
        category: "Bookcase",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "5-tier open bookcase for home or office library.",
        features: ["5 adjustable shelves", "Open design", "Sturdy construction", "Wall mountable", "Modern look"],
        dimensions: { width: 80, depth: 30, height: 180 },
        colors: ["Walnut", "White", "Black"],
        inStock: true,
        sku: "CAB-1003"
      }
    ]
  },

  // Signature Collection
  "signature": {
    name: "Signature Collection",
    slug: "signature",
    heroImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Our most exclusive collection - limited edition pieces for discerning clients.",
    badge: "✦ EXCLUSIVE COLLECTION",
    stats: { designs: 5, finishes: 4, sizes: 3 },
    products: [
      {
        id: "sig-001",
        name: "Limited Edition Desk",
        slug: "limited-edition-desk",
        price: 250000,
        category: "Signature Desk",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Handcrafted limited edition executive desk with precious wood inlays.",
        features: ["Solid teak wood", "Gold leaf inlays", "Hand-carved details", "Numbered edition", "Certificate of authenticity"],
        dimensions: { width: 200, depth: 100, height: 76 },
        colors: ["Mahogany", "Ebony"],
        inStock: true,
        sku: "SIG-1001"
      },
      {
        id: "sig-002",
        name: "Designer Chair",
        slug: "designer-chair",
        price: 85000,
        category: "Signature Chair",
        image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Award-winning designer chair for the modern executive.",
        features: ["Italian leather", "Polished aluminum base", "Ergonomic design", "Limited production", "Designer signature"],
        dimensions: { width: 70, depth: 75, height: 115 },
        colors: ["Black", "Tan", "Navy"],
        inStock: true,
        sku: "SIG-1002"
      }
    ]
  },

  // Hotel Collection
  "hotel": {
    name: "Hotel Collection",
    slug: "hotel",
    heroImage: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Premium furniture solutions for hotels, resorts, and hospitality spaces.",
    badge: "✦ HOSPITALITY COLLECTION",
    stats: { designs: 25, finishes: 12, sizes: 10 },
    products: [
      {
        id: "htl-001",
        name: "Lobby Sofa",
        slug: "lobby-sofa",
        price: 65000,
        category: "Lobby Furniture",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Large lobby sofa designed for high-traffic hospitality areas.",
        features: ["Commercial grade", "Stain resistant fabric", "Fire retardant", "Heavy duty frame", "5-year warranty"],
        dimensions: { width: 220, depth: 90, height: 80 },
        colors: ["Charcoal", "Navy", "Beige", "Burgundy"],
        inStock: true,
        sku: "HTL-1001"
      },
      {
        id: "htl-002",
        name: "Hotel Bed Frame",
        slug: "hotel-bed-frame",
        price: 45000,
        category: "Bedroom",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Premium hotel bed frame with upholstered headboard.",
        features: ["Upholstered headboard", "Solid wood frame", "Slat base included", "Easy assembly", "Hotel grade"],
        dimensions: { width: 180, depth: 200, height: 110 },
        colors: ["Grey", "Beige", "Navy"],
        inStock: true,
        sku: "HTL-1002"
      },
      {
        id: "htl-003",
        name: "Restaurant Chair",
        slug: "restaurant-chair",
        price: 8500,
        category: "Restaurant",
        image: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Stackable dining chair for restaurants and cafes.",
        features: ["Stackable design", "Scratch resistant", "Easy to clean", "Commercial grade", "Set of 4"],
        dimensions: { width: 45, depth: 52, height: 85 },
        colors: ["Black", "White", "Brown"],
        inStock: true,
        sku: "HTL-1003"
      }
    ]
  },

  // Lounge Collection
  "lounge": {
    name: "Lounge Collection",
    slug: "lounge",
    heroImage: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Comfortable and stylish lounge furniture for breakout areas and waiting rooms.",
    badge: "✦ COMFORT COLLECTION",
    stats: { designs: 12, colors: 10, sizes: 6 },
    products: [
      {
        id: "lng-001",
        name: "Modular Sofa",
        slug: "modular-sofa",
        price: 75000,
        category: "Lounge Sofa",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Modular lounge sofa configurable to your space.",
        features: ["Modular design", "High-density foam", "Premium fabric", "Removable covers", "Endless configurations"],
        dimensions: { width: 250, depth: 80, height: 75 },
        colors: ["Grey", "Blue", "Green", "Yellow"],
        inStock: true,
        sku: "LNG-1001"
      },
      {
        id: "lng-002",
        name: "Armchair",
        slug: "armchair",
        price: 28000,
        category: "Armchair",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Comfortable armchair perfect for reading nooks.",
        features: ["Plush cushioning", "Wooden legs", "Ergonomic back", "Breathable fabric", "Lightweight"],
        dimensions: { width: 75, depth: 80, height: 85 },
        colors: ["Navy", "Burgundy", "Emerald", "Grey"],
        inStock: true,
        sku: "LNG-1002"
      },
      {
        id: "lng-003",
        name: "Ottoman",
        slug: "ottoman",
        price: 12000,
        category: "Ottoman",
        image: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Versatile ottoman for footrest or extra seating.",
        features: ["Multi-purpose", "Storage inside", "Soft cushion", "Wooden legs", "Easy to move"],
        dimensions: { width: 50, depth: 50, height: 45 },
        colors: ["Grey", "Beige", "Navy"],
        inStock: true,
        sku: "LNG-1003"
      }
    ]
  },

  // Lighting Collection
  "lighting": {
    name: "Lighting Collection",
    slug: "lighting",
    heroImage: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Illuminate your space with our premium lighting solutions.",
    badge: "✦ LIGHTING COLLECTION",
    stats: { designs: 15, finishes: 5, sizes: 4 },
    products: [
      {
        id: "lit-001",
        name: "LED Desk Lamp",
        slug: "led-desk-lamp",
        price: 4500,
        category: "Desk Lamp",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Energy-efficient LED desk lamp with adjustable brightness.",
        features: ["LED technology", "Adjustable brightness", "Touch control", "USB charging port", "Eye protection"],
        dimensions: { width: 15, depth: 20, height: 45 },
        colors: ["Black", "White", "Silver"],
        inStock: true,
        sku: "LIT-1001"
      },
      {
        id: "lit-002",
        name: "Floor Lamp",
        slug: "floor-lamp",
        price: 8500,
        category: "Floor Lamp",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Modern floor lamp for ambient lighting.",
        features: ["Steel construction", "Fabric shade", "Foot switch", "Energy efficient", "Stable base"],
        dimensions: { width: 30, depth: 30, height: 150 },
        colors: ["Black", "White", "Gold"],
        inStock: true,
        sku: "LIT-1002"
      },
      {
        id: "lit-003",
        name: "Pendant Light",
        slug: "pendant-light",
        price: 12000,
        category: "Pendant",
        image: "https://images.pexels.com/photos/375714/pexels-photo-375714.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Elegant pendant light for dining or meeting areas.",
        features: ["Glass shade", "Brass finish", "Adjustable height", "LED compatible", "Easy installation"],
        dimensions: { width: 40, depth: 40, height: 30 },
        colors: ["Brass", "Black", "White"],
        inStock: true,
        sku: "LIT-1003"
      }
    ]
  },

  // Modern Collection
  "modern": {
    name: "Modern Collection",
    slug: "modern",
    heroImage: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    description: "Contemporary designs for the modern workspace.",
    badge: "✦ CONTEMPORARY COLLECTION",
    stats: { designs: 18, finishes: 8, sizes: 7 },
    products: [
      {
        id: "mod-001",
        name: "Minimalist Desk",
        slug: "minimalist-desk",
        price: 35000,
        category: "Desk",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Clean, minimalist desk for modern workspaces.",
        features: ["Scandinavian design", "Solid oak", "Hidden storage", "Cable tray", "Easy assembly"],
        dimensions: { width: 140, depth: 70, height: 74 },
        colors: ["Natural Oak", "White Oak", "Walnut"],
        inStock: true,
        sku: "MOD-1001"
      },
      {
        id: "mod-002",
        name: "Height Adjustable Desk",
        slug: "height-adjustable-desk",
        price: 55000,
        originalPrice: 68000,
        category: "Standing Desk",
        image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Electric height adjustable desk for sit-stand workspace.",
        features: ["Electric motor", "Memory presets", "Quiet operation", "Sturdy frame", "Anti-collision"],
        dimensions: { width: 150, depth: 75, height: 65-125 },
        colors: ["White", "Black", "Oak"],
        inStock: true,
        sku: "MOD-1002"
      },
      {
        id: "mod-003",
        name: "Mesh Task Chair",
        slug: "mesh-task-chair",
        price: 22000,
        category: "Chair",
        image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        description: "Breathable mesh task chair with modern design.",
        features: ["Breathable mesh", "Adjustable height", "Tilt mechanism", "Padded armrests", "Smooth casters"],
        dimensions: { width: 65, depth: 65, height: 95-110 },
        colors: ["Black", "Grey"],
        inStock: true,
        sku: "MOD-1003"
      }
    ]
  }
};

// Helper function to get collection by slug
function getCollectionBySlug(slug) {
  return XspicaProducts[slug] || null;
}

// Helper function to get product by ID
function getProductById(productId) {
  for (const collection in XspicaProducts) {
    const products = XspicaProducts[collection].products;
    const product = products.find(p => p.id === productId);
    if (product) return product;
  }
  return null;
}

// Helper function to get all products
function getAllProducts() {
  const allProducts = [];
  for (const collection in XspicaProducts) {
    allProducts.push(...XspicaProducts[collection].products);
  }
  return allProducts;
}

// Helper function to get featured products
function getFeaturedProducts(limit = 8) {
  const allProducts = getAllProducts();
  return allProducts.slice(0, limit);
}

// Helper function to search products
function searchProducts(query) {
  const allProducts = getAllProducts();
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
}