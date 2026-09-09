import { ServiceItem, GalleryItem, Testimonial, InstagramPost, Benefit, TransformationCase } from '../types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85";
export const ABOUT_IMAGE = "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1000&q=85";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'natural-styling',
    title: 'Natural Hair Styling',
    category: 'styling',
    categoryLabel: 'Signature Style',
    description: 'Beautiful, texture-honoring styles designed around your unique curl pattern. From sculpted afro puffs to precision flat twists and wash-and-go definition.',
    duration: '1.5 – 2.5 hrs',
    priceNgn: 'From ₦25,000',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=85',
    tag: 'Most Popular',
    features: [
      'Curl-by-curl definition & hydration',
      'Scalp detox & botanical rinse',
      'Low-manipulation parting',
      'Zero heat damage guarantee'
    ]
  },
  {
    id: 'protective-styles',
    title: 'Protective Styles',
    category: 'protective',
    categoryLabel: 'Crown Defense',
    description: 'Trendy, head-turning looks engineered to shield your delicate ends and retain length. Tension-free knotless braids, boho passion twists, and soft locs.',
    duration: '3.5 – 5.5 hrs',
    priceNgn: 'From ₦40,000',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=85',
    tag: 'Tension Free',
    features: [
      'Feather-light organic feed-in braids',
      'Custom color blends & ombre accents',
      'Edge-safe, tension-free parting',
      'Includes scalp soothing mist'
    ]
  },
  {
    id: 'hair-care-treatments',
    title: 'Hair Care & Steam Therapy',
    category: 'care',
    categoryLabel: 'Hydration Sanctuary',
    description: 'Give your crown the deep restorative care it deserves. Infused botanical steam therapy, chebe protein strengthening, and custom moisture baths.',
    duration: '1 – 2 hrs',
    priceNgn: 'From ₦30,000',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    tag: 'Restorative',
    features: [
      'Micro-mist nano steam infusion',
      'Raw African shea & hibiscus mask',
      'Porosity-matched conditioning',
      'Detangling scalp massage'
    ]
  },
  {
    id: 'special-occasion',
    title: 'Special Occasion & Bridal',
    category: 'special',
    categoryLabel: 'Showstopper',
    description: 'Stand out for birthdays, Owambe weddings, red carpet galas, and momentous celebrations with statement architectural natural hair crowns.',
    duration: '2.5 – 4 hrs',
    priceNgn: 'From ₦65,000',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=85',
    tag: 'VIP Experience',
    features: [
      'Bespoke consultation & moodboard',
      'Cowrie & metallic adornment options',
      'All-day hold without stiffness',
      'Champagne & bridal suite access'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Boho Goddess Knotless',
    category: 'braids',
    categoryLabel: 'Braids',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=85',
    description: 'Featherlight waist-length knotless braids with hand-curled curly human hair tendrils.',
    duration: '4.5 hrs',
    stylist: 'Kemi B.'
  },
  {
    id: 'g2',
    title: 'Architectural Afro Sculpt',
    category: 'natural',
    categoryLabel: 'Natural Styles',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=85',
    description: 'High-volume defined 4C coil shape with organic contouring and moisture seal.',
    duration: '2 hrs',
    stylist: 'Bukky A.'
  },
  {
    id: 'g3',
    title: 'Chunky Passion Twists',
    category: 'twists',
    categoryLabel: 'Twists',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=85',
    description: 'Plump water-wave twists with warm honey highlights and gold cuff accessories.',
    duration: '3.5 hrs',
    stylist: 'Blessing T.'
  },
  {
    id: 'g4',
    title: 'Textured Butterfly Locs',
    category: 'locs',
    categoryLabel: 'Locs',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=85',
    description: 'Distressed soft-touch locs with natural root wrapping and effortless bounce.',
    duration: '4 hrs',
    stylist: 'Kemi B.'
  },
  {
    id: 'g5',
    title: 'Lagos Gala Crown Updo',
    category: 'special',
    categoryLabel: 'Special Occasion',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=85',
    description: 'High-fashion editorial crown weave with sculpted baby hair and copper threads.',
    duration: '3 hrs',
    stylist: 'Kemi B.'
  },
  {
    id: 'g6',
    title: 'Hydrated Wash-&-Go Coil Definition',
    category: 'natural',
    categoryLabel: 'Natural Styles',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    description: 'Full shrinkage reversal with aloe-flaxseed gel cast and high-shine gloss.',
    duration: '1.5 hrs',
    stylist: 'Ngozi M.'
  },
  {
    id: 'g7',
    title: 'Fulani Tribal Cornrows',
    category: 'braids',
    categoryLabel: 'Braids',
    image: 'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&w=800&q=85',
    description: 'Symmetric geometric cornrows adorned with authentic cowrie shells and beads.',
    duration: '3.5 hrs',
    stylist: 'Bukky A.'
  },
  {
    id: 'g8',
    title: 'Bridal Floral Afro Halo',
    category: 'special',
    categoryLabel: 'Special Occasion',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    description: 'Delicately tucked halo roll with fresh botanical florals and pearlescent pins.',
    duration: '2.5 hrs',
    stylist: 'Kemi B.'
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    number: '01',
    title: 'Natural Hair Focus',
    subtitle: 'Expertise',
    description: 'We understand the science, porosity, and curl mechanics of 3A to 4C natural hair and know exactly how to make your crown flourish.',
    iconName: 'Sparkles'
  },
  {
    number: '02',
    title: 'Creative Styling',
    subtitle: 'Artistry',
    description: 'Your hair is art. We bring fresh, runway-worthy creativity to every appointment so your look is bold, original, and deeply personal.',
    iconName: 'Palette'
  },
  {
    number: '03',
    title: 'Quality Care',
    subtitle: 'Nourishment',
    description: 'Styles mean nothing without healthy strands. We prioritize gentle tension-free techniques and rich African botanicals in every session.',
    iconName: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Confidence',
    subtitle: 'Vibe',
    description: 'Step out of our Yaba studio walking taller, glowing brighter, and completely in love with the majestic versatility of your crown.',
    iconName: 'Heart'
  }
];

export const TRANSFORMATION_DATA: TransformationCase = {
  id: 't1',
  title: 'Hydration Steam Revival & Sculpted Crown',
  description: 'Tackled severe seasonal Lagos humidity dryness and brittle ends. After our signature Nano-Steam Botanical Bath and low-tension coil sculpting, the curls regained elastic spring, 70% more hydration, and mirror-like natural shine.',
  beforeImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85',
  afterImage: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=900&q=85',
  duration: '1 hr 45 min',
  treatment: 'Raw Hibiscus & Shea Steam Therapy'
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Amina Adeleke',
    location: 'Victoria Island, Lagos',
    style: 'Knotless Bohemian Braids',
    text: 'KBee Naturals completely transformed how I see my 4C hair. Zero pain during braiding, edges completely safe, and the stylists are so warm and knowledgeable. I walked out of Iwaya Yaba feeling like an African queen!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1688592969417-953dd3c2b9d8?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    name: 'Chimamanda Eze',
    location: 'Iwaya Yaba, Lagos',
    style: 'Nano-Steam Moisture Therapy & Silk Twist',
    text: 'My hair had suffered so much heat damage from other salons. The team at KBee did a thorough porosity test before touching a single strand. The steam treatment made my hair soft like butter. There is no other salon for me in Lagos.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    name: 'Tiwa Alabi',
    location: 'Ikoyi, Lagos',
    style: 'Bridal Crown & Cowrie Accents',
    text: 'They did my hair for my traditional wedding and registry. People could not stop taking photos of my crown! Bold, modern, culturally grounded, and stayed intact all through the reception dance. 10/10 recommendation.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    date: 'March 2026'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1688592969417-953dd3c2b9d8?auto=format&fit=crop&w=600&q=80',
    likes: 1842,
    comments: 94,
    caption: 'Tension-free knotless perfection. 🍯 No pain, all glory. Book your slot for the weekend!',
    tag: '#KBeeCrowns'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80',
    likes: 2410,
    comments: 132,
    caption: 'Nothing compares to an afro that has been fed botanical steam and genuine love. 🌿✨',
    tag: '#NaturalHairLagos'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80',
    likes: 1530,
    comments: 67,
    caption: 'Boho passion twists with gold hair jewellery. Fresh look for the Lagos creative girlies. 🧡',
    tag: '#KBeeVibes'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
    likes: 3102,
    comments: 204,
    caption: 'Bridal crown season is here! Sculpted to hold, styled to captivate. Tag a bride-to-be! 💍',
    tag: '#LagosBride'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80',
    likes: 1988,
    comments: 85,
    caption: 'Soft butterfly locs with customized distressed texture. Lightweight and ready for the beach. 🌊',
    tag: '#LocLove'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    likes: 2750,
    comments: 148,
    caption: 'The radiance when your wash-and-go actually dries defined and bouncy. Love your crown always! 👑',
    tag: '#CrownQueen'
  }
];

export const SALON_INFO = {
  name: 'KBee Naturals',
  tagline: 'Natural hair. Bold looks.',
  address: '42, Iwaya road, Onike Yaba, Lagos, Nigeria',
  landmark: 'Opposite Ebeano Supermarket, 2nd Floor',
  phonePrimary: '+234 812 345 6789',
  phoneSecondary: '+234 901 888 2333',
  whatsappUrl: 'https://wa.me/2348123456789?text=Hello%20KBee%20Naturals,%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20crown!',
  instagramHandle: '@k_bee_naturals',
  instagramUrl: 'https://instagram.com',
  hours: [
    { days: 'Tuesday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', time: '12:30 PM – 6:30 PM' },
    { days: 'Monday', time: 'Closed (Sanitization & Staff Training)' }
  ]
};
