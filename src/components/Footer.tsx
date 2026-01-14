import { Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Vardaan School Logo" className="h-14 w-auto bg-primary-foreground rounded-lg p-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold">Vardaan Sr Sec School</h3>
                <p className="text-sm text-primary-foreground/70">Udaipur, Rajasthan</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-4">
              Empowering young minds with quality education from Pre-Primary to Senior Secondary. 
              Join us in shaping a brighter future with infinite possibilities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vardaanschooludaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@vardaanschooludaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Academics", "Campus Life", "Achievements", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Udaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@vardaanschool.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Vardaan Sr Sec School, Udaipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
