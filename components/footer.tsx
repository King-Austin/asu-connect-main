"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/asu-logo.png" alt="ASU Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-xl">Akpu Students Union</h3>
                <p className="text-primary-foreground/70 text-sm">ASU</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              A well-recognized and respected student body representing indigenous students of Akpu Town across various academic institutions.
            </p>
            <p className="text-primary-foreground/60 italic text-sm">
              &quot;To Restore the Dignity of Our Ethics&quot;
            </p>
          </div>

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

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <a href="mailto:info@asuconnect.org" className="text-sm hover:underline">
                    info@asuconnect.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Phone</p>
                  <a href="tel:+2348012345678" className="text-sm hover:underline">
                    +234 801 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Location</p>
                  <p className="text-sm">Akpu Town, Nigeria</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Akpu Students Union. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
