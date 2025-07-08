"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerChildren } from "@/lib/utils";

const CTASection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Setup in 30 minuti",
    "Assistenza via WhatsApp",
    "Migrazione dati inclusa",
    "30 giorni gratis",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Light mode gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-indigo-100/80 dark:from-slate-900/90 dark:via-slate-800/50 dark:to-slate-900/90"></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>

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

      <div className="container-responsive relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-blue-200/50 dark:border-slate-600/50 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 shadow-lg dark:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <CheckCircle className="w-4 h-4" />
            Inizia oggi stesso
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300 leading-tight"
            variants={fadeInUp}
          >
            Pronto a semplificare la gestione della tua{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              scuola guida?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
            variants={fadeInUp}
          >
            Smetti di perdere tempo con la burocrazia. Inizia a usare un
            software che funziona davvero e che è stato pensato per le scuole
            guida italiane.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={staggerChildren}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-5 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-600/50 shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="leading-tight">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                onClick={() => scrollToSection("#contact")}
              >
                Inizia la prova gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:border-slate-400 dark:hover:border-slate-400 px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("#contact")}
              >
                Chiama ora
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            className="text-slate-500 dark:text-slate-400 text-sm mt-8 font-medium transition-colors duration-300"
            variants={fadeInUp}
          >
            ✨ Nessuna carta di credito richiesta • Assistenza in italiano •
            Puoi cancellare quando vuoi
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
