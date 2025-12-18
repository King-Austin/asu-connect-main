import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import asuLogo from "@/assets/asu-logo.png";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={asuLogo} alt="ASU Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-xl">Akpu Students Union</h3>
                <p className="text-primary-foreground/70 text-sm">ASU</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              A well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions. Affiliated under Akpu Town Union.
            </p>
            <p className="text-primary-foreground/60 italic text-sm">
              "To Restore the Dignity of Our Ethics"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Executives", "Programs", "Events", "Gallery"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Akpu Town, Orumba Region, Anambra State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 flex-shrink-0" />
                <a
                  href="mailto:akpustudentsunion@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  akpustudentsunion@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Akpu Students Union. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Affiliated under Akpu Town Union
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
