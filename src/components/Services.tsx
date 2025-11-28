import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  CircleDot,
  Shield,
  Sofa,
  Wrench,
  Paintbrush,
  Wind,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Higienização Interna Completa",
    description: "Limpeza profunda e sanitização de todo o interior do veículo",
    benefits: [
      "Eliminação de bactérias e odores",
      "Limpeza de carpetes e estofados",
      "Aspiração detalhada",
    ],
  },
  {
    icon: Sparkles,
    title: "Lavagem Detalhada (Detailing)",
    description: "Lavagem minuciosa com atenção a cada detalhe do seu veículo",
    benefits: [
      "Técnicas profissionais de lavagem",
      "Produtos premium",
      "Acabamento impecável",
    ],
  },
  {
    icon: CircleDot,
    title: "Polimento Técnico Profissional",
    description: "Recuperação e restauração do brilho original da pintura",
    benefits: [
      "Remoção de riscos e marcas",
      "Restauração do brilho",
      "Preparação para vitrificação",
    ],
  },
  {
    icon: Shield,
    title: "Vitrificação da Pintura",
    description: "Proteção de longa duração com camada de cristal líquido",
    benefits: [
      "Proteção contra raios UV",
      "Resistência a riscos",
      "Brilho intenso duradouro",
    ],
  },
  {
    icon: Sofa,
    title: "Hidratação dos Bancos",
    description: "Tratamento especial para manter o couro macio e protegido",
    benefits: [
      "Prevenção de rachaduras",
      "Maciez restaurada",
      "Proteção UV",
    ],
  },
  {
    icon: Wrench,
    title: "Limpeza Técnica de Motor",
    description: "Limpeza profissional do compartimento do motor",
    benefits: [
      "Remoção de sujeira e óleo",
      "Proteção dos componentes",
      "Melhor dissipação de calor",
    ],
  },
  {
    icon: Wind,
    title: "Revitalização de Plásticos",
    description: "Recuperação e proteção de plásticos internos e externos",
    benefits: [
      "Cor restaurada",
      "Proteção contra desbotamento",
      "Acabamento fosco ou brilhante",
    ],
  },
  {
    icon: Paintbrush,
    title: "Tratamento de Couro",
    description: "Cuidado especializado para superfícies de couro",
    benefits: [
      "Limpeza profunda",
      "Hidratação intensiva",
      "Proteção e maciez",
    ],
  },
  {
    icon: Shield,
    title: "Proteção com Selante ou Coating",
    description: "Camada de proteção avançada para a pintura",
    benefits: [
      "Durabilidade superior",
      "Efeito hidrofóbico",
      "Facilita limpeza futura",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-automotive-black">
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
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de estética automotiva com produtos de alta qualidade e técnicas profissionais
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-red group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href="https://veltacar.com.br/sistema/cliente/agendamento/detalhe/85350770063"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar Orçamento
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
