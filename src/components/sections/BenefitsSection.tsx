"use client";

import { motion } from "framer-motion";
import {
  Check,
  Video,
  FileText,
  MessageCircle,
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
      icon: FileText,
      title: "Documenti Digitali",
      description:
        "Non perdere più tempo con la carta. Carica certificati medici, documenti di identità e tutto il resto direttamente nel sistema.",
    },
    {
      icon: MessageCircle,
      title: "Comunicazione Diretta",
      description:
        "Invia messaggi ai tuoi studenti direttamente dalla piattaforma. Riduci le telefonate e tieni traccia di tutte le comunicazioni.",
    },
    {
      icon: Video,
      title: "Materiale Didattico",
      description:
        "Carica video, immagini e guide che i tuoi studenti possono consultare prima delle lezioni. Migliora la preparazione teorica.",
    },
  ];

  const statistics = [
    {
      icon: TrendingUp,
      value: 87,
      suffix: "%",
      label: "Meno assenze",
      description: "Grazie ai promemoria automatici",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Studenti al mese",
      description: "Gestiti dalla scuola guida media",
    },
    {
      icon: Clock,
      value: 8,
      suffix: "h",
      label: "Tempo risparmiato",
      description: "A settimana per ogni istruttore",
    },
    {
      icon: Star,
      value: 9.2,
      suffix: "/10",
      label: "Soddisfazione",
      description: "Valutazione media dei gestori",
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
                Perché scegliere il nostro{" "}
                <span className="gradient-text">software</span>
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed transition-colors duration-300">
                Dopo 5 anni di esperienza con le scuole guida italiane, abbiamo
                sviluppato un software che risolve i problemi reali che incontri
                ogni giorno.
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
                  Setup gratuito e formazione di 2 ore inclusa nel prezzo
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
            {/* Mobile App Mockup */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-[500px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-blue-600 px-4 py-3 text-white text-sm flex justify-between items-center">
                      <span className="font-medium">ScuolaGuida</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-white rounded-sm">
                          <div className="w-full h-2 bg-white rounded-sm"></div>
                        </div>
                        <span className="text-xs">100%</span>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="p-4 space-y-4 bg-neutral-50">
                      {/* Welcome Message */}
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          Benvenuto Marco!
                        </h3>
                        <p className="text-sm text-neutral-600">
                          La tua prossima lezione è tra 2 ore
                        </p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-blue-600">
                            12
                          </div>
                          <div className="text-xs text-neutral-600">
                            Lezioni fatte
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-green-600">
                            8
                          </div>
                          <div className="text-xs text-neutral-600">
                            Ore rimanenti
                          </div>
                        </div>
                      </div>

                      {/* Upcoming Lessons */}
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="px-4 py-3 bg-neutral-100 border-b">
                          <h4 className="font-medium text-neutral-900 text-sm">
                            Prossime lezioni
                          </h4>
                        </div>
                        <div className="space-y-3 p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">
                                Oggi 16:00
                              </div>
                              <div className="text-xs text-neutral-600">
                                Lezione pratica
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">
                                Dom 14:30
                              </div>
                              <div className="text-xs text-neutral-600">
                                Lezione teorica
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-blue-600 text-white py-2 px-3 rounded-lg text-xs font-medium">
                          Prenota lezione
                        </button>
                        <button className="border border-neutral-300 text-neutral-700 py-2 px-3 rounded-lg text-xs font-medium">
                          Messaggi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating notification */}
                <motion.div
                  className="absolute -right-4 top-20 bg-white rounded-lg shadow-xl p-3 border border-neutral-200 w-48"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-neutral-900">
                      Nuovo promemoria
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    La tua lezione di domani è confermata per le 14:30
                  </p>
                </motion.div>
              </div>
            </motion.div>

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
                  I risultati parlano chiaro
                </h3>
                <p className="text-white/90 text-lg">
                  Dati reali dalle scuole guida che usano il nostro software
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-white/90 text-sm">
                  * Dati raccolti da 150+ scuole guida negli ultimi 2 anni
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
