"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const productLinks = [
    { label: "Funzionalità", href: "#features" },
    { label: "Prezzi", href: "#pricing" },
    { label: "Demo", href: "#demo" },
    { label: "Documentazione", href: "/docs" },
  ];

  const supportLinks = [
    { label: "Centro Assistenza", href: "/support" },
    { label: "Guide", href: "/guides" },
    { label: "Tutorial", href: "/tutorials" },
    { label: "FAQ", href: "#faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Termini di Servizio", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ];

  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://facebook.com/scuolaguida.app",
      label: "Facebook",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/scuolaguida_app",
      label: "Twitter",
    },
    {
      Icon: Instagram,
      href: "https://instagram.com/scuolaguida.app",
      label: "Instagram",
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/company/scuolaguida-app",
      label: "LinkedIn",
    },
  ];

  const contactInfo = [
    {
      Icon: Mail,
      text: "info@scuolaguida.app",
      href: "mailto:info@scuolaguida.app",
    },
    { Icon: Phone, text: "+39 02 1234 5678", href: "tel:+390212345678" },
    { Icon: MapPin, text: "Milano, Italia", href: null },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-white">
                ScuolaGuida.app
              </div>
            </Link>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              La piattaforma completa per automatizzare la gestione della tua
              scuola guida. Semplifica iscrizioni, lezioni e progressi con
              un&apos;unica soluzione moderna.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.Icon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-neutral-400">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Prodotto</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Supporto</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Legale</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © 2024 ScuolaGuida.app. Tutti i diritti riservati.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
