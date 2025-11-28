import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-automotive-black via-automotive-dark to-automotive-black pt-24"
    >
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(var(--automotive-red) / 0.1) 10px,
            hsl(var(--automotive-red) / 0.1) 11px
          )`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-automotive-dark border border-primary/30 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="text-primary" size={20} />
            <span className="text-sm font-semibold text-foreground">
              Estética Automotiva Premium
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            MMC Garage{" "}
            <span className="text-primary text-shadow-glow">
              Estética Automotiva
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Proteção, Brilho e Valorização para o Seu Veículo
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            Excelência em detailing automotivo. Técnicas avançadas, produtos premium e resultados que superam expectativas.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2">
              <Shield className="text-primary" size={24} />
              <span className="text-foreground font-medium">Proteção Profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-primary" size={24} />
              <span className="text-foreground font-medium">Qualidade Superior</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary" size={24} />
              <span className="text-foreground font-medium">Resultados Comprovados</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 h-auto shadow-red-glow animate-glow shine-effect"
            >
              <a
                href="https://veltacar.com.br/sistema/cliente/agendamento/detalhe/85350770063"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Agora
              </a>
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Horário de atendimento: 08:30 às 20:30
          </motion.p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-automotive-black to-transparent" />
    </section>
  );
};

export default Hero;
