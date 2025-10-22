import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ darkMode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      id: 1,
      headline: "No uncertainties here, move to extraordinary!",
      subtext: "Transform your pension fund management with cutting-edge analytics and AI-driven insights. Make confident decisions backed by real-time data and comprehensive risk assessments.",
      cta: "Get Started Here",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      headline: "Secure Your Financial Future Today",
      subtext: "Comprehensive asset-liability management solutions designed for pension funds, insurance companies, and financial institutions. Monitor, analyze, and optimize your portfolio effortlessly.",
      cta: "Explore Solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      headline: "Data-Driven Investment Strategies",
      subtext: "Leverage advanced algorithms and machine learning to predict market trends, optimize asset allocation, and maximize returns while minimizing risk exposure.",
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      headline: "Regulatory Compliance Made Simple",
      subtext: "Stay ahead of regulatory requirements with automated compliance tracking, audit trails, and comprehensive reporting tools that ensure you meet all industry standards.",
      cta: "View Features",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      headline: "Real-Time Portfolio Monitoring",
      subtext: "Track your assets and liabilities in real-time with intuitive dashboards, customizable alerts, and detailed performance metrics that keep you informed 24/7.",
      cta: "Start Monitoring",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play every 4 seconds
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className={`relative h-[500px] md:h-[600px] overflow-hidden transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
                  : 'bg-gradient-to-r from-blue-50 to-white'
              }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
                  <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                      <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {slide.headline}
                      </h2>
                      <p className={`text-lg md:text-xl ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {slide.subtext}
                      </p>
                      <button
                        className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                        style={{ background: 'linear-gradient(90deg, #2DC35D 0%, #28B650 100%)' }}
                      >
                        {slide.cta}
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="hidden md:block">
                      <img
                        src={slide.image}
                        alt={slide.headline}
                        className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 focus:outline-none ${
          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
        } shadow-lg`}
        aria-label="Previous slide"
      >
        <ChevronLeft className={darkMode ? 'text-white' : 'text-gray-800'} />
      </button>
      <button
        onClick={scrollNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 focus:outline-none ${
          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
        } shadow-lg`}
        aria-label="Next slide"
      >
        <ChevronRight className={darkMode ? 'text-white' : 'text-gray-800'} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? 'bg-green-500 w-8'
                : darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;