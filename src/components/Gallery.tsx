import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const images = [
  { src: gallery1, alt: "Porsche vermelho em detalhamento na MMC Garage" },
  { src: gallery2, alt: "BMW azul recebendo tratamento premium" },
  { src: gallery3, alt: "Porsche clássico durante lavagem detalhada" },
  { src: gallery4, alt: "Veículo esportivo em processo de higienização" },
  { src: gallery5, alt: "Limpeza técnica de motor profissional" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-automotive-black to-automotive-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados com excelência e dedicação
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect border border-primary/20 shadow-elegant bg-automotive-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full flex items-center justify-center bg-automotive-black"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-automotive-dark/80 border-primary/30 hover:bg-primary hover:border-primary backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-automotive-dark/80 border-primary/30 hover:bg-primary hover:border-primary backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* Image counter */}
          <p className="text-center mt-4 text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
