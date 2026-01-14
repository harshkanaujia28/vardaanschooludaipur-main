import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to foster critical thinking and lifelong learning.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Nurturing mind, body, and spirit through diverse activities and experiences.",
  },
  {
    icon: Users,
    title: "Community Values",
    description: "Building character through respect, integrity, and social responsibility.",
  },
  {
    icon: Target,
    title: "Future Ready",
    description: "Preparing students for success in an ever-changing global landscape.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shaping Futures Since Day One
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Vardaan Sr Sec School, we believe every child holds infinite potential. 
            Our commitment to holistic education empowers students from Pre-Primary to 
            Senior Secondary to discover their passions, develop their abilities, and 
            become responsible citizens of tomorrow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground text-center"
        >
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Our Vision</p>
          <p className="font-serif text-xl md:text-2xl lg:text-3xl italic leading-relaxed max-w-4xl mx-auto">
            "To be a beacon of educational excellence, nurturing young minds to become 
            compassionate leaders who contribute positively to society while staying 
            rooted in our cultural values."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
