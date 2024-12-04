import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Small Business Owner',
    company: 'Craft Coffee Co.',
    quote: 'The AI-powered recommendations helped me improve my credit score by 120 points in just 6 months. Incredible results!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Software Engineer',
    company: 'Tech Innovations',
    quote: 'The dispute automation system saved me countless hours. It\'s like having a credit repair expert working 24/7.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    title: 'Real Estate Agent',
    company: 'Premier Properties',
    quote: 'I recommend this to all my clients preparing for home purchases. The credit simulator is a game-changer.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <TestimonialCard {...testimonials[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrent(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-[#003366]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}