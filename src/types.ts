export interface ServiceItem {
  id: string;
  title: string;
  category: 'styling' | 'protective' | 'care' | 'special';
  categoryLabel: string;
  description: string;
  duration: string;
  priceNgn: string;
  image: string;
  tag?: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'twists' | 'braids' | 'locs' | 'natural' | 'special';
  categoryLabel: string;
  image: string;
  description: string;
  duration: string;
  stylist: string;
  aspect?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  style: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
}

export interface Benefit {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TransformationCase {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  treatment: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  hairLength: string;
  notes: string;
}
