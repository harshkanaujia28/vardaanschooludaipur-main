import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Microscope, Award } from "lucide-react";

const academicLevels = [
  {
    icon: GraduationCap,
    level: "Pre-Primary",
    grades: "Nursery - KG",
    description: "A nurturing start with play-based learning that builds curiosity, social skills, and foundational concepts through engaging activities.",
    color: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
  },
  {
    icon: BookOpen,
    level: "Primary",
    grades: "Classes I - V",
    description: "Strong foundation in core subjects with emphasis on language skills, mathematical concepts, and environmental awareness.",
    color: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
  },
  {
    icon: Microscope,
    level: "Middle School",
    grades: "Classes VI - VIII",
    description: "Expanded curriculum introducing sciences, arts, and technology while developing critical thinking and analytical abilities.",
    color: "bg-primary/10 border-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: Award,
    level: "Senior Secondary",
    grades: "Classes IX - XII",
    description: "Comprehensive preparation for board examinations and competitive entrance tests with specialized streams.",
    color: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
  },
];

const AcademicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Academic Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Complete Educational Path
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the first steps of learning to the threshold of higher education, 
            we provide a continuous, enriching academic experience tailored to each stage of growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {academicLevels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`group relative p-8 rounded-2xl bg-card border-2 ${level.color} hover:shadow-elevated transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-xl ${level.color} flex items-center justify-center flex-shrink-0`}>
                  <level.icon className={`w-8 h-8 ${level.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {level.level}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                      {level.grades}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {level.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
