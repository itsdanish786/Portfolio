import { motion } from "framer-motion";

const contactLinks = [
  { label: "Email", href: "mailto:fahad.12325061@lpu.in" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/itsdanish786/", external: true },
  { label: "GitHub", href: "https://github.com/itsdanish786/", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.p 
        className="muted"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Let's connect!
      </motion.p>

      <motion.div 
        className="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
          }
        }}
      >
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            className="btn"
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
