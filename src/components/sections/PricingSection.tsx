"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { fadeInUp, staggerChildren } from "@/lib/utils";

const PricingSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans = [
    {
      name: "Piccola",
      price: "39",
      period: "al mese",
      description: "Per scuole guida con pochi studenti",
      features: [
        "Fino a 100 studenti",
        "Calendario lezioni",
        "Gestione documenti",
        "Promemoria email e SMS",
        "Supporto via email",
        "Backup automatico",
      ],
      popular: false,
      cta: "Prova gratis",
    },
    {
      name: "Media",
      price: "69",
      period: "al mese",
      description: "La più scelta dalle scuole guida italiane",
      features: [
        "Fino a 300 studenti",
        "Tutte le funzioni del piano Piccola",
        "App mobile per studenti",
        "Promemoria WhatsApp",
        "Statistiche avanzate",
        "Supporto telefonico",
        "Formazione gratuita (2 ore)",
        "Setup assistito gratuito",
      ],
      popular: true,
      cta: "Prova gratis",
    },
    {
      name: "Grande",
      price: "99",
      period: "al mese",
      description: "Per scuole guida con più sedi o molti studenti",
      features: [
        "Studenti illimitati",
        "Gestione multi-sede",
        "Tutte le funzioni del piano Media",
        "API per integrazioni",
        "Manager dedicato",
        "Supporto prioritario 24/7",
        "Personalizzazioni su richiesta",
        "Formazione estesa (8 ore)",
      ],
      popular: false,
      cta: "Parliamone",
    },
  ];

  return (
    <section
      id="pricing"
      className="section-padding bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container-responsive">
        <motion.div
          className="text-center mb-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 transition-colors duration-300"
            variants={fadeInUp}
          >
            <Star className="w-4 h-4" />
            Prezzi semplici e trasparenti
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors duration-300"
            variants={fadeInUp}
          >
            Scegli il piano giusto per la tua{" "}
            <span className="text-blue-600 dark:text-blue-400">
              scuola guida
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto transition-colors duration-300"
            variants={fadeInUp}
          >
            Tutti i piani includono 30 giorni di prova gratuita. Puoi cambiare o
            cancellare in qualsiasi momento.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${
                plan.popular ? "md:scale-105 md:z-10" : ""
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    ⭐ Più scelta
                  </div>
                </div>
              )}

              <Card
                className={`h-full p-8 ${
                  plan.popular
                    ? "border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-900/20"
                    : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                } hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6 transition-colors duration-300">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold text-neutral-900 dark:text-white transition-colors duration-300">
                      €{plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-300 ml-2 transition-colors duration-300">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  }`}
                  variant={plan.popular ? "primary" : "outline"}
                  onClick={() => scrollToSection("#contact")}
                >
                  {plan.cta}
                  {plan.cta === "Prova gratis" && (
                    <ArrowRight className="ml-2 w-4 h-4" />
                  )}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16 space-y-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>30 giorni gratis, sempre</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Nessun costo di attivazione</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancellazione facile</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Fatturazione elettronica</span>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl max-w-2xl mx-auto transition-colors duration-300"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 transition-colors duration-300">
              Non sei sicuro di quale piano scegliere?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 transition-colors duration-300">
              Chiamaci al <strong>02 1234 5678</strong> oppure scrivici a{" "}
              <strong>info@scuolaguida.app</strong>. Ti aiuteremo a scegliere il
              piano più adatto alla tua scuola guida.
            </p>
            <motion.button
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                window.open("mailto:info@scuolaguida.app", "_blank");
              }}
            >
              Invia una email →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
