"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Bell,
  BarChart3,
  Shield,
  Smartphone,
  Zap,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { fadeInUp, staggerChildren } from "@/lib/utils";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Gestione Studenti",
      description:
        "Tieni traccia di tutti i tuoi studenti in un unico posto. Carica documenti, gestisci i pagamenti e monitora i progressi facilmente.",
      size: "large", // Will span 2x2
      color: "blue",
    },
    {
      icon: Calendar,
      title: "Calendario Lezioni",
      description:
        "Programma le lezioni con un calendario semplice. I tuoi studenti possono prenotare direttamente gli slot disponibili.",
      size: "medium", // Will span 1x2
      color: "green",
    },
    {
      icon: BarChart3,
      title: "Statistiche Chiare",
      description:
        "Vedi rapidamente come stanno andando i tuoi studenti e quali argomenti richiedono più attenzione.",
      size: "medium", // Will span 1x2
      color: "purple",
    },
    {
      icon: Bell,
      title: "Promemoria Automatici",
      description:
        "Invia promemoria via WhatsApp, email o SMS per le lezioni e gli esami. Riduci le assenze.",
      size: "small", // Will span 1x1
      color: "orange",
    },
    {
      icon: Shield,
      title: "Dati Sicuri",
      description:
        "I tuoi dati sono protetti e vengono salvati automaticamente ogni giorno.",
      size: "small",
      color: "red",
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description:
        "Accedi da smartphone o tablet. Perfetto quando sei in giro.",
      size: "small",
      color: "indigo",
    },
    {
      icon: Zap,
      title: "Veloce e Semplice",
      description:
        "Non serve essere esperti di computer. L'interfaccia è stata progettata per essere intuitiva.",
      size: "small",
      color: "yellow",
    },
  ];

  const getCardClasses = (size: string, color: string) => {
    const baseClasses =
      "group relative overflow-hidden border border-neutral-200/60 dark:border-neutral-700/60 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-lg";

    const sizeClasses = {
      large: "md:col-span-2 md:row-span-2",
      medium: "md:col-span-1 md:row-span-2",
      small: "md:col-span-1 md:row-span-1",
    };

    const colorClasses = {
      blue: "hover:bg-blue-50/50 dark:hover:bg-blue-900/10",
      green: "hover:bg-green-50/50 dark:hover:bg-green-900/10",
      purple: "hover:bg-purple-50/50 dark:hover:bg-purple-900/10",
      orange: "hover:bg-orange-50/50 dark:hover:bg-orange-900/10",
      red: "hover:bg-red-50/50 dark:hover:bg-red-900/10",
      indigo: "hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10",
      yellow: "hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10",
    };

    return `${baseClasses} ${sizeClasses[size as keyof typeof sizeClasses]} ${
      colorClasses[color as keyof typeof colorClasses]
    }`;
  };

  const getIconClasses = (color: string) => {
    const colorClasses = {
      blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
      green:
        "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
      purple:
        "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
      orange:
        "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
      red: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
      indigo:
        "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30",
      yellow:
        "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30",
    };

    return `w-12 h-12 rounded-2xl flex items-center justify-center ${
      colorClasses[color as keyof typeof colorClasses]
    } group-hover:scale-110 transition-all duration-300`;
  };

  return (
    <section
      id="features"
      className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 transition-colors duration-300"
            variants={fadeInUp}
          >
            <Zap className="w-4 h-4" />
            Funzionalità principali
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300"
            variants={fadeInUp}
          >
            Tutto quello che ti serve per gestire la tua{" "}
            <span className="text-blue-600 dark:text-blue-400">
              scuola guida
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
            variants={fadeInUp}
          >
            Un software pensato per i gestori di scuole guida che vogliono
            risparmiare tempo e organizzare meglio il loro lavoro quotidiano.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={getCardClasses(feature.size, feature.color)}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-0 shadow-none bg-transparent p-8">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-current"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-current"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={getIconClasses(feature.color)}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`font-bold mb-4 text-neutral-900 dark:text-white transition-colors duration-300 ${
                        feature.size === "large"
                          ? "text-2xl md:text-3xl"
                          : feature.size === "medium"
                          ? "text-xl md:text-2xl"
                          : "text-lg md:text-xl"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-8 max-w-2xl mx-auto transition-colors duration-300">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
              Vuoi vedere come funziona?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 transition-colors duration-300">
              Prenota una dimostrazione gratuita di 15 minuti. Ti mostreremo
              come il software può adattarsi alle tue esigenze.
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#pricing");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Prenota una demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
