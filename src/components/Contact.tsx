import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5551982569235?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para conversar conosco!",
    });
    
    // Reset form
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-automotive-black">
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
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para cuidar do seu veículo com excelência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="bg-automotive-dark border-primary/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="bg-automotive-dark border-primary/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Serviço Desejado</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Vitrificação, Polimento..."
                      className="bg-automotive-dark border-primary/30"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Conte-nos mais sobre o que você precisa..."
                      className="bg-automotive-dark border-primary/30 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-red-glow"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Address */}
            <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Iracema, 45<br />
                      Bairro Monte Carlo<br />
                      Cachoeirinha – Rio Grande do Sul
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telefone / WhatsApp</h3>
                    <a
                      href="tel:+5551982569235"
                      className="text-primary hover:text-primary/80 text-xl font-medium"
                    >
                      (51) 98256-9235
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sábado<br />
                      08:30 às 20:30
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/mmcgarageestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574186724316&locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-red-glow animate-glow"
            >
              <a
                href="https://veltacar.com.br/sistema/cliente/agendamento/detalhe/85350770063"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Atendimento Online
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
