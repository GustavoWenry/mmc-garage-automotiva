import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-black border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img
              src="/logo.png"
              alt="MMC Garage"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Estética automotiva premium com produtos de alta qualidade e
              resultados excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                "Início",
                "Serviços",
                "Trabalhos",
                "Depoimentos",
                "Sobre",
                "Contato",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        item
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin
                  className="text-primary flex-shrink-0 mt-0.5"
                  size={16}
                />
                <span>
                  Rua Iracema, 45
                  <br />
                  Monte Carlo, Cachoeirinha – RS
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="text-primary flex-shrink-0" size={16} />
                <a
                  href="tel:+5551982569235"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (51) 98256-9235
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock
                  className="text-primary flex-shrink-0 mt-0.5"
                  size={16}
                />
                <span>Seg - Sáb: 08:30 - 20:30</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Redes Sociais
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Acompanhe nossos trabalhos e novidades
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mmcgarageestetica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-automotive-dark border border-primary/30 hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574186724316&locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-automotive-dark border border-primary/30 hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} MMC Garage Estética Automotiva. Todos
              os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Desenvolvido por <span className="text-primary">@wenrydev</span>{" "}
              para excelência automotiva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
