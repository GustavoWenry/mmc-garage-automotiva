import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Anos de dedicação à estética automotiva com resultados excepcionais",
  },
  {
    icon: Target,
    title: "Compromisso com Qualidade",
    description: "Utilizamos apenas produtos premium e técnicas profissionais avançadas",
  },
  {
    icon: Users,
    title: "Satisfação dos Clientes",
    description: "Nosso objetivo é superar expectativas e criar relacionamentos duradouros",
  },
  {
    icon: Zap,
    title: "Técnicas Avançadas",
    description: "Sempre atualizados com as mais modernas técnicas de detailing automotivo",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-automotive-dark to-automotive-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a <span className="text-primary">MMC Garage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A MMC Garage é referência em estética automotiva, oferecendo serviços especializados
              que combinam paixão por carros, expertise técnica e compromisso absoluto com a qualidade.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Nossa missão é proporcionar aos nossos clientes uma experiência única de cuidado
                  automotivo. Cada veículo que passa por nossas mãos recebe atenção meticulosa aos
                  detalhes, garantindo proteção, valorização e um brilho impecável.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Utilizamos produtos de alta qualidade e técnicas avançadas de detailing para
                  entregar resultados que não apenas atendem, mas superam as expectativas dos
                  proprietários mais exigentes.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Nossa equipe é formada por profissionais apaixonados e altamente qualificados,
                  constantemente atualizados com as últimas tendências e tecnologias da estética
                  automotiva mundial.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 glass-effect rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "100+", label: "Clientes Satisfeitos" },
              { value: "500+", label: "Serviços Realizados" },
              { value: "5★", label: "Avaliação Média" },
              { value: "Premium", label: "Produtos Utilizados" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 glass-effect rounded-lg border border-primary/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
