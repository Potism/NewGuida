"use client";

import { motion } from "framer-motion";
import AccordionItem from "@/components/ui/AccordionItem";
import { staggerChildren, fadeInUp, useScrollAnimation } from "@/lib/utils";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo richiede l'implementazione della piattaforma?",
      answer:
        "L'implementazione completa di ScuolaGuida.app richiede tipicamente 24-48 ore. Il nostro team tecnico si occupa di tutto: configurazione del sistema, importazione dei dati esistenti, formazione del personale e test di funzionamento. La tua scuola guida può essere operativa nel giro di 2 giorni lavorativi.",
    },
    {
      question: "È inclusa la formazione per il mio team?",
      answer:
        "Assolutamente sì! La formazione completa del team è inclusa nel pacchetto. Offriamo sessioni di training personalizzate sia online che in presenza, materiali didattici, video tutorial e supporto dedicato durante le prime settimane di utilizzo. Il nostro obiettivo è che tutti si sentano a proprio agio con la piattaforma.",
    },
    {
      question: "Come funziona la migrazione dei dati esistenti?",
      answer:
        "La migrazione dei dati è gestita completamente dal nostro team tecnico. Importiamo tutti i dati degli studenti, cronologia delle lezioni, documenti e preferenze dal vostro sistema attuale. Il processo è sicuro, crittografato e non comporta perdite di dati. Durante la migrazione, il vostro sistema attuale rimane operativo.",
    },
    {
      question: "Che tipo di supporto tecnico è disponibile?",
      answer:
        "Offriamo supporto tecnico prioritario 24/7 attraverso chat live, email e telefono. Il nostro team di esperti è sempre disponibile per risolvere qualsiasi problema tecnico. Inoltre, forniamo aggiornamenti automatici, manutenzione del sistema e backup continui per garantire un'esperienza sempre ottimale.",
    },
    {
      question: "Posso cancellare l'abbonamento in qualsiasi momento?",
      answer:
        "Sì, puoi cancellare l'abbonamento in qualsiasi momento senza penali o costi aggiuntivi. Ti chiediamo solo un preavviso di 30 giorni. Prima della cancellazione, ti forniremo un backup completo di tutti i tuoi dati per permetterti di esportarli facilmente verso altri sistemi.",
    },
    {
      question: "Quali sono i requisiti tecnici minimi?",
      answer:
        "ScuolaGuida.app è una piattaforma cloud-based che funziona su qualsiasi dispositivo con connessione internet. Non richiede installazioni software particolari - basta un browser web moderno (Chrome, Firefox, Safari, Edge). È compatibile con computer, tablet e smartphone, garantendo accesso completo da ovunque.",
    },
    {
      question: "I miei dati sono sicuri e protetti?",
      answer:
        "La sicurezza è la nostra priorità assoluta. Utilizziamo crittografia SSL a 256 bit, server sicuri in Europa conformi al GDPR, backup automatici quotidiani e sistemi di monitoraggio 24/7. Tutti i dati sono protetti secondo i più alti standard di sicurezza bancaria e rispettiamo completamente la normativa italiana sulla privacy.",
    },
    {
      question:
        "Posso personalizzare la piattaforma per le esigenze della mia scuola?",
      answer:
        "Certamente! ScuolaGuida.app è altamente personalizzabile. Puoi modificare loghi, colori, moduli di iscrizione, tipi di corso, prezzi, orari e molto altro. Il nostro team può anche sviluppare funzionalità specifiche per le tue esigenze particolari senza costi aggiuntivi per personalizzazioni standard.",
    },
  ];

  return (
    <section
      id="faq"
      className="section-padding bg-white dark:bg-neutral-900 transition-colors duration-300"
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
            Domande Frequenti
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Risposte alle domande più comuni su ScuolaGuida.app. Non trovi
            quello che cerchi? Contattaci direttamente.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto"
          {...useScrollAnimation()}
          variants={staggerChildren}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          {...useScrollAnimation()}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
              Hai altre domande?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto transition-colors duration-300">
              Il nostro team di esperti è pronto a rispondere a qualsiasi tua
              domanda e a fornirti una consulenza personalizzata gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contatta un Esperto
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open("mailto:info@scuolaguida.app", "_blank");
                }}
              >
                Invia Email
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
