import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Building2, Lightbulb, Shield, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated educators with proven track records in nurturing academic excellence and personal growth.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art classrooms, labs, library, and sports facilities designed for comprehensive learning.",
  },
  {
    icon: Lightbulb,
    title: "Student-Centric Learning",
    description: "Personalized attention with innovative teaching methods that cater to diverse learning styles.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure campus with disciplined atmosphere ensuring peace of mind for students and parents.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Consistent academic achievements with students excelling in board exams and competitive tests.",
  },
  {
    icon: Clock,
    title: "Balanced Schedule",
    description: "Thoughtfully designed timetable balancing academics, activities, and personal development.",
  },
];

const WhyVardaanSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-vardaan" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Vardaan Advantage
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine traditional values with modern education to create 
            an environment where students thrive academically and personally.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVardaanSection;
