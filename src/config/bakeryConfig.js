/**
 * Configurable Bakery Data Configuration
 * 
 * Centralized configuration for Paradise Bakery on Scantada.
 * Any phone or WhatsApp contact action uses the centralized DEMO_PHONE_NUMBER.
 */

// Centralized Demo Phone Number (Single source of truth)
export const DEMO_PHONE_DISPLAY = "+91 8951337609";
export const DEMO_PHONE_TEL = "+918951337609";
export const DEMO_WHATSAPP_NUMBER = "918951337609";

export const defaultBakeryConfig = {
  // Bakery Profile
  name: "Paradise Bakery",
  tagline: "Making Every Celebration Sweeter.",
  description: "Beautiful cakes for your sweetest moments.",
  established: "Est. 2018",
  
  // Single subtle supporting hero photograph for Screen 2
  heroPhoto: {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
    alt: "Handcrafted celebration chocolate cake by Paradise Bakery"
  },

  // Gender-neutral premium celebratory palette
  theme: {
    primaryAccent: "#0F172A", // Midnight Navy
    goldAccent: "#D4AF37",    // Muted Champagne Gold
    coralAccent: "#D9534F",   // Soft Coral
    bgCream: "#FAF8F5",       // Warm Ivory
  },

  // Google Reviews Destination
  googleReviewUrl: "https://www.google.com/maps/place/Paradise+Baker's/@17.9122305,77.527941,19z/data=!4m8!3m7!1s0x3bcec7ae23b8ff23:0x5bfc0e58aea07802!8m2!3d17.9122397!4d77.5281425!9m1!1b1!16s%2Fg%2F11qpws_x1c?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",

  // Contact Channels (All phone/WhatsApp actions centralized)
  contact: {
    whatsapp: {
      enabled: true,
      number: DEMO_WHATSAPP_NUMBER,
      display: DEMO_PHONE_DISPLAY,
      prefilledMessage: "Hi Paradise Bakery! 🎉 I scanned the QR code on the cake topper and would love to enquire about ordering a cake.",
      label: "WhatsApp",
    },
    phone: {
      enabled: true,
      display: DEMO_PHONE_DISPLAY,
      tel: DEMO_PHONE_TEL,
      label: "Call",
    },
    directions: {
      enabled: true,
      url: "https://www.google.com/maps/place/Paradise+Baker's/@17.9122305,77.527941,19z/data=!4m8!3m7!1s0x3bcec7ae23b8ff23:0x5bfc0e58aea07802!8m2!3d17.9122397!4d77.5281425!9m1!1b1!16s%2Fg%2F11qpws_x1c?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
      label: "Location",
    },
    instagram: {
      enabled: true,
      url: "https://instagram.com/paradisebakery",
      handle: "@paradisebakery",
      label: "Instagram",
    },
    youtube: {
      enabled: true,
      url: "https://youtube.com/@paradisebakery",
      handle: "@paradisebakery",
      label: "YouTube",
    }
  },

  // Scantada Attribution
  scantada: {
    brandName: "ScanTada.com",
    url: "https://scantada.com",
    line: "Made with love by ScanTada.com"
  },

  // 20 Curated High-Quality Bakery Cake Gallery items with clean, concise names
  gallery: [
  
    {
      id: "cake-2",
      title: "Chocolate Drip Cake",
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
      alt: "Belgian Dark Chocolate Drip Cake"
    },
    {
      id: "cake-3",
      title: "Minimalist Ivory Cake",
      imageUrl: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80",
      alt: "Minimalist Ivory and Champagne Gold Cake"
    },
    {
      id: "cake-4",
      title: "Strawberry Celebration Cake",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
      alt: "Fresh Strawberry Celebration Cake"
    },
    {
      id: "cake-5",
      title: "Vintage Lambeth Cake",
      imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
      alt: "Vintage Royal Piping Lambeth Cake"
    },
    {
      id: "cake-6",
      title: "Kids' Rainbow Fantasy Cake",
      imageUrl: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80",
      alt: "Kids Pastel Rainbow Celebration Cake"
    },
    {
      id: "cake-7",
      title: "Midnight Black & Gold Cake",
      imageUrl: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=80",
      alt: "Midnight Black and Burnished Gold Cake"
    },
    {
      id: "cake-8",
      title: "Korean Bento Cake",
      imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80",
      alt: "Korean Aesthetic Bento Cake"
    },
    {
      id: "cake-9",
      title: "Sweet Heart Cake",
      imageUrl: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
      alt: "Sweet Heart Celebration Cake"
    },
  
   
    
    {
      id: "cake-13",
      title: "Edible Sugar Portrait Cake",
      imageUrl: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=80",
      alt: "Custom Memory Frame Celebration Cake"
    },
    {
      id: "cake-14",
      title: "Pastel Macaron Drip Cake",
      imageUrl: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
      alt: "Pastel Macaron Drip Celebration Cake"
    },
    {
      id: "cake-15",
      title: "Petal Symphony Cake",
      imageUrl: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80",
      alt: "Petal Symphony Celebration Cake"
    },
    {
      id: "cake-16",
      title: "Wild Blueberry Lemon Cake",
      imageUrl: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=900&q=80",
      alt: "Wild Blueberry and Lemon Zest Cake"
    },
    {
      id: "cake-17",
      title: "Classic Red Velvet Cake",
      imageUrl: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=900&q=80",
      alt: "Classic Red Velvet Celebration Cake"
    },
   
    
    {
      id: "cake-20",
      title: "Rosette & Pearl Vintage Cake",
      imageUrl: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=900&q=80",
      alt: "Rosette and Pearl Vintage Celebration Cake"
    }
  ]
};
