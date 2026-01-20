import React from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { CuratedPackages } from '@/app/components/CuratedPackages';
import { ImageGallery } from '@/app/components/ImageGallery';
import { Testimonials } from '@/app/components/Testimonials';
import { ContactForm } from '@/app/components/ContactForm';
import { Footer } from '@/app/components/Footer';

export default function App() {
  // Package data for The Collection section
  const packages = [
    {
      image: 'https://images.unsplash.com/photo-1761158498108-c8190603c7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwbHV4dXJ5JTIwcmVzb3J0fGVufDF8fHx8MTc2ODg3ODM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'COASTAL',
      title: 'Mediterranean Escape',
      price: 'From $8,500 per person',
      rating: 4.9
    },
    {
      image: 'https://images.unsplash.com/photo-1629996628328-a35ab39c5e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGx1eHVyeSUyMGhvdGVsfGVufDF8fHx8MTc2ODg3ODM1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'ALPINE',
      title: 'Swiss Mountain Retreat',
      price: 'From $12,000 per person',
      rating: 5.0
    },
    {
      image: 'https://images.unsplash.com/photo-1682879654288-3bc35430b79f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsdXh1cnklMjByZXNvcnR8ZW58MXx8fHwxNzY4ODc4MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'DESERT',
      title: 'Arabian Nights',
      price: 'From $9,800 per person',
      rating: 4.8
    }
  ];

  // Gallery images for Bento Box grid
  const galleryImages = [
    'https://images.unsplash.com/photo-1663659505064-1ea38cbdcef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njg3ODExMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1737807478491-6e258b44bd04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc2ODg0ODQzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767288533191-cc2c72bad9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBkZXRhaWxzfGVufDF8fHx8MTc2ODg3ODM1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY4ODQ0NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection 
        heroImage="https://images.unsplash.com/photo-1697529019491-7e04bcc720a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBsYW5kc2NhcGUlMjBwYW5vcmFtYXxlbnwxfHx8fDE3Njg4NzgzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <CuratedPackages packages={packages} />
      
      <ImageGallery images={galleryImages} />
      
      <Testimonials />
      
      <ContactForm 
        contactImage="https://images.unsplash.com/photo-1762876244984-f9d493cf4aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBtaW5pbWFsaXN0JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODg3ODM1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <Footer />
    </div>
  );
}
