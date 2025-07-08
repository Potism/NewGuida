"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { staggerChildren, fadeInUp, useScrollAnimation } from "@/lib/utils";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Direttore",
      company: "Autoscuola Veloce - Milano",
      content:
        "ScuolaGuida.app ha trasformato completamente la gestione della nostra scuola. In 6 mesi abbiamo ridotto le assenze del 40% e aumentato la soddisfazione degli studenti. Il sistema di notifiche automatiche è fantastico.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Sara Bianchi",
      role: "Proprietaria",
      company: "Autoscuola Roma Nord",
      content:
        "Finalmente una piattaforma che comprende veramente le esigenze delle scuole guida italiane. L'assistente IA ci aiuta a personalizzare i percorsi di apprendimento e i risultati sono evidenti.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Giuseppe Ferrari",
      role: "Istruttore Senior",
      company: "Driving School Torino",
      content:
        "La formazione è stata eccellente e il supporto tecnico è sempre disponibile. Ora posso concentrarmi sull'insegnamento invece di perdere tempo con la burocrazia. Consiglio vivamente ScuolaGuida.app.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ];

  const companies = [
    "Autoscuola Europa",
    "Guida Sicura",
    "Driving Academy",
    "ScuolaGuida Plus",
    "AutoScuola Moderna",
    "Patente Facile",
  ];

  const achievements = [
    {
      number: "100+",
      label: "Scuole Guida",
      description: "Utilizzano la nostra piattaforma",
    },
    {
      number: "50K+",
      label: "Studenti",
      description: "Gestiti con successo",
    },
    {
      number: "95%",
      label: "Tasso di Successo",
      description: "Promossi al primo tentativo",
    },
    {
      number: "24/7",
      label: "Supporto",
      description: "Assistenza sempre disponibile",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...useScrollAnimation()}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
            Cosa Dicono le{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Scuole Guida
            </span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Storie di successo reali da scuole guida che hanno trasformato la
            loro gestione con ScuolaGuida.app.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          {...useScrollAnimation()}
          variants={staggerChildren}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-400 dark:text-blue-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 italic transition-colors duration-300">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-300">
                        {testimonial.role}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-300">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies Section */}
        <motion.div
          className="text-center mb-16"
          {...useScrollAnimation()}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 transition-colors duration-300">
            Si Fidano di Noi
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-600 hover:shadow-md transition-all duration-300">
                  <p className="text-neutral-600 dark:text-neutral-300 font-medium text-sm transition-colors duration-300">
                    {company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          {...useScrollAnimation()}
          variants={staggerChildren}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 transition-colors duration-300">
                  {achievement.label}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300 text-sm transition-colors duration-300">
                  {achievement.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="text-center mt-16"
          {...useScrollAnimation()}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-600 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                    ✓
                  </span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 transition-colors duration-300">
                  GDPR Compliant
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm transition-colors duration-300">
                  Conformità totale alle normative europee
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
                    🔒
                  </span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 transition-colors duration-300">
                  SSL Certificato
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm transition-colors duration-300">
                  Crittografia di livello bancario
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold text-xl">
                    ⭐
                  </span>
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 transition-colors duration-300">
                  ISO 27001
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm transition-colors duration-300">
                  Standard internazionale per la sicurezza
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
