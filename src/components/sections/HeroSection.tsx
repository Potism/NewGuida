"use client";

import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Users,
  Clock,
  Award,
  Sparkles,
  Star,
} from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeInUp, staggerChildren } from "@/lib/utils";

const HeroSection = () => {
  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: "+",
      prefix: "",
      label: "Scuole Guida",
      description: "Usano la nostra piattaforma",
      highlight: "Dal 2019",
    },
    {
      icon: Clock,
      value: 25000,
      suffix: "+",
      prefix: "",
      label: "Studenti",
      description: "Hanno ottenuto la patente",
      highlight: "Negli ultimi 3 anni",
    },
    {
      icon: Award,
      value: 4.8,
      suffix: "/5",
      prefix: "",
      label: "Valutazione",
      description: "Media delle recensioni",
      highlight: "Su 500+ recensioni",
    },
  ];

  const trustIndicators = [
    {
      icon: Star,
      text: "Certificato per la Sicurezza",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Sparkles,
      text: "Conforme al GDPR",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Award,
      text: "Assistenza Tecnica",
      color: "text-blue-600 dark:text-blue-400",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-neutral-900 flex items-center overflow-hidden transition-colors duration-300">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-50 dark:bg-blue-900/20 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 dark:bg-blue-800/30 rounded-full opacity-10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container-responsive relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Column - Enhanced Content */}
          <motion.div
            className="space-y-10"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-neutral-800 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm transition-colors duration-300"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)",
              }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4" />
              <span>Software per Scuole Guida • 30 giorni gratis</span>
            </motion.div>

            {/* Enhanced Headline */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Gestisci la tua scuola guida senza{" "}
                <span className="relative">
                  <span className="text-blue-600 dark:text-blue-400">
                    complicazioni
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 dark:bg-blue-800 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl transition-colors duration-300"
              variants={fadeInUp}
            >
              Un software semplice che ti aiuta a{" "}
              <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
                organizzare lezioni, gestire gli studenti e tenere traccia dei
                progressi
              </strong>{" "}
              senza perdere tempo con la burocrazia.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg hover:shadow-xl border-0 px-10 py-5 text-lg font-semibold relative overflow-hidden group"
                  onClick={() => scrollToSection("#pricing")}
                >
                  <span className="relative z-10 flex items-center">
                    Prova gratis per 30 giorni
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500 px-10 py-5 text-lg font-semibold"
                  onClick={() => scrollToSection("#demo")}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Guarda una demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex flex-wrap items-center gap-6 text-neutral-500 dark:text-neutral-400">
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <indicator.icon className={`w-4 h-4 ${indicator.color}`} />
                    <span className="text-sm font-medium">
                      {indicator.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            className="lg:pl-12"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {/* Dashboard Mockup */}
            <motion.div
              className="mb-8 relative"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                {/* Browser Bar */}
                <div className="bg-neutral-100 dark:bg-neutral-700 px-4 py-3 border-b border-neutral-200 dark:border-neutral-600 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 bg-white dark:bg-neutral-600 rounded px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 flex-1">
                    scuolaguida.app/dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      Dashboard Scuola Guida
                    </h3>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Attiva
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/80 dark:bg-neutral-600/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        42
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-300">
                        Studenti attivi
                      </div>
                    </div>
                    <div className="bg-white/80 dark:bg-neutral-600/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        28
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-300">
                        Lezioni oggi
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-white/80 dark:bg-neutral-600/50 p-2 rounded flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-neutral-900 dark:text-white">
                          Marco Rossi
                        </div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-300">
                          Lezione pratica - 14:30
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/80 dark:bg-neutral-600/50 p-2 rounded flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-600 dark:bg-green-400 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-neutral-900 dark:text-white">
                          Sofia Bianchi
                        </div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-300">
                          Lezione teorica - 16:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center transition-colors duration-300">
                        <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-2">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
                          duration={2}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 transition-colors duration-300">
                        {stat.label}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
                        {stat.description}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {stat.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
