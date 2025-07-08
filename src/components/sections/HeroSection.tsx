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
      description: "Utilizzano la nostra piattaforma",
      highlight: "Partnership attive",
    },
    {
      icon: Clock,
      value: 25000,
      suffix: "+",
      prefix: "",
      label: "Allievi Gestiti",
      description: "Con successo ogni anno",
      highlight: "Risultati comprovati",
    },
    {
      icon: Award,
      value: 4.9,
      suffix: "/5",
      prefix: "",
      label: "Soddisfazione",
      description: "Valutazione media clienti",
      highlight: "Eccellenza garantita",
    },
  ];

  const trustIndicators = [
    {
      icon: Star,
      text: "Certificato ISO 27001",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Sparkles,
      text: "GDPR Compliant",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Award,
      text: "Supporto 24/7",
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
              <span>La Scuola Guida Digitale del Futuro • Prova Gratuita</span>
            </motion.div>

            {/* Enhanced Headline */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Automatizza la Gestione della Tua{" "}
                <span className="relative">
                  <span className="text-blue-600 dark:text-blue-400">
                    Scuola Guida
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
              La piattaforma completa che{" "}
              <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
                semplifica iscrizioni, lezioni e progressi
              </strong>{" "}
              con gestione centralizzata e automatizzazione intelligente.
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
                    Inizia Prova Gratuita 30 Giorni
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
                  Guarda Demo Live
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
              <p className="text-sm text-neutral-400 dark:text-neutral-500 italic">
                ✨ Utilizzato da oltre 150 scuole guida in Italia con il 98% di
                soddisfazione
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Stats Cards */}
          <motion.div
            className="grid gap-6"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <motion.div
                  className="relative bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-500"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Floating label */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
                    {stat.highlight}
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Enhanced Icon */}
                    <motion.div
                      className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    {/* Stats Content */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-2">
                        <AnimatedCounter
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          className="text-4xl font-bold text-neutral-900 dark:text-white"
                        />
                        <span className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                          {stat.label}
                        </span>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("#features")}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
            Scopri di più
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center relative overflow-hidden"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
