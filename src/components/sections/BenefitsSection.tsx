"use client";

import { motion } from "framer-motion";
import {
  Check,
  Video,
  Brain,
  HelpCircle,
  TrendingUp,
  Users,
  Clock,
  Star,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  staggerChildren,
  fadeInUp,
  slideInRight,
  useScrollAnimation,
} from "@/lib/utils";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Video,
      title: "Registrazione e Streaming",
      description:
        "Registra le lezioni pratiche e teoriche per permettere agli studenti di rivedere i contenuti quando necessario.",
    },
    {
      icon: HelpCircle,
      title: "Quiz Interattivi",
      description:
        "Sistema di quiz personalizzabili per verificare la preparazione degli studenti prima degli esami.",
    },
    {
      icon: Brain,
      title: "Assistente IA",
      description:
        "Intelligenza artificiale che suggerisce percorsi di apprendimento personalizzati per ogni studente.",
    },
  ];

  const statistics = [
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Tasso di Successo",
      description: "Studenti promossi al primo tentativo",
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Studenti Attivi",
      description: "Gestiti mensilmente",
    },
    {
      icon: Clock,
      value: 15,
      suffix: "h",
      label: "Tempo Risparmiato",
      description: "A settimana per istruttore",
    },
    {
      icon: Star,
      value: 4.9,
      suffix: "/5",
      label: "Soddisfazione",
      description: "Rating medio clienti",
    },
  ];

  return (
    <section
      id="benefits"
      className="section-padding bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Benefits List */}
          <motion.div
            {...useScrollAnimation()}
            variants={staggerChildren}
            transition={{ duration: 0.6 }}
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Innovazione al Servizio della{" "}
                <span className="gradient-text">Formazione</span>
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed transition-colors duration-300">
                Tecnologie all&apos;avanguardia che trasformano il modo di
                insegnare e apprendere la guida sicura.
              </p>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg transition-colors duration-300">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg transition-colors duration-300"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-green-800 dark:text-green-200 font-medium transition-colors duration-300">
                  Implementazione gratuita e formazione completa del team
                  incluse
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Statistics Card */}
          <motion.div
            {...useScrollAnimation()}
            variants={slideInRight}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 relative overflow-hidden transition-colors duration-300">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full"></div>
              </div>

              <motion.div
                className="text-center mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Risultati Comprovati
                </h3>
                <p className="text-white/90 text-lg">
                  I numeri che parlano del nostro successo
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        className="text-2xl md:text-3xl font-bold text-white"
                        duration={2.5}
                      />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {stat.label}
                    </p>
                    <p className="text-white/80 text-xs">{stat.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 text-center relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-white/90 text-sm">
                  * Dati basati su oltre 100 scuole guida attive
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
