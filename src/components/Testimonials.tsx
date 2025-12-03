import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo Silva",
    role: "Proprietário de BMW M3",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment:
      "Serviço excepcional! A vitrificação ficou perfeita e o carro está brilhando como nunca. A equipe da MMC é extremamente profissional e cuidadosa com cada detalhe. Recomendo muito!",
  },
  {
    name: "Juliana Martins",
    role: "Proprietária de Audi A4",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment:
      "Fiquei impressionada com a qualidade do polimento! O meu carro estava com a pintura opaca e agora parece novo. O atendimento foi ótimo e o resultado superou minhas expectativas. Vale cada centavo!",
  },
  {
    name: "Roberto Almeida",
    role: "Proprietário de Porsche 911",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5,
    comment:
      "Melhor detailing que já fiz! A higienização interna ficou impecável e a lavagem foi extremamente detalhada. Vocês conquistaram um cliente fiel. Parabéns pelo trabalho de excelência!",
  },
  {
    name: "Fernanda Costa",
    role: "Proprietária de Mercedes C180",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    comment:
      "Profissionalismo e qualidade em primeiro lugar! A equipe cuidou do meu carro com tanto carinho que parecia estar cuidando do próprio veículo. O resultado final foi simplesmente perfeito!",
  },
  {
    name: "André Pereira",
    role: "Proprietário de Volvo XC60",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    rating: 5,
    comment:
      "Incrível! A limpeza técnica do motor foi feita com extrema precisão. O acabamento ficou show e ainda ganhei dicas valiosas de manutenção. Super recomendo a MMC Garage!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-automotive-black">
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
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiança e satisfação são nossos maiores valores
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-red">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-primary/30"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <Quote
                      className="text-primary/30 flex-shrink-0"
                      size={24}
                    />
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary fill-primary"
                        size={16}
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {testimonial.comment}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
