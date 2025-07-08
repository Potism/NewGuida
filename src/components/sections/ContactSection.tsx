"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { fadeInUp, staggerChildren } from "@/lib/utils";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefono",
      info: "02 1234 5678",
      description: "Lun-Ven 9:00-18:00",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@scuolaguida.app",
      description: "Risposta entro 24h",
    },
    {
      icon: MapPin,
      title: "Uffici",
      info: "Milano, Roma, Napoli",
      description: "Assistenza in tutta Italia",
    },
    {
      icon: Clock,
      title: "Supporto",
      info: "Lun-Dom 8:00-20:00",
      description: "Via WhatsApp e telefono",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300"
            variants={fadeInUp}
          >
            Hai qualche domanda?{" "}
            <span className="text-blue-600 dark:text-blue-400">Parliamone</span>
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto transition-colors duration-300"
            variants={fadeInUp}
          >
            Il nostro team è qui per aiutarti. Contattaci per una consulenza
            gratuita e scopri come il nostro software può migliorare la tua
            scuola guida.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Invia un messaggio
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Cognome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="la.tua.email@esempio.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Nome della Scuola Guida
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Autoscuola Roma Centro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Raccontaci le tue esigenze e ti contatteremo per una consulenza gratuita..."
                  ></textarea>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Grazie per il tuo interesse! Ti contatteremo presto."
                    );
                  }}
                >
                  Invia messaggio
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 transition-colors duration-300">
                    {contact.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {contact.info}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm transition-colors duration-300">
                    {contact.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quick Call to Action */}
            <motion.div
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
                Preferisci una chiamata immediata?
              </h4>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 transition-colors duration-300">
                Chiamaci ora e parla direttamente con un nostro esperto. Ti
                aiuteremo a capire come il software si adatta alle tue esigenze.
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                onClick={() => {
                  window.open("tel:+390212345678", "_self");
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Chiama ora: 02 1234 5678
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
