import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Vardaan Sr Sec School", "Udaipur, Rajasthan", "India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 99999 99999", "+91 88888 88888"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@vardaanschool.edu", "admissions@vardaanschool.edu"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday", "8:00 AM - 4:00 PM"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Contact Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? We'd love to hear from you. 
            Visit us or reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden h-80 lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115434.16791214097!2d73.62969354131824!3d24.571564645954815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a08e53%3A0x9c77d9dc6c94b726!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vardaan School Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
