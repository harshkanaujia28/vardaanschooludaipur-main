import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    stat: "95%+",
    label: "Board Pass Rate",
    description: "Consistently high success rates in board examinations",
  },
  {
    icon: Medal,
    stat: "500+",
    label: "Competition Wins",
    description: "Awards in academics, sports, and cultural events",
  },
  {
    icon: Star,
    stat: "25+",
    label: "Years of Excellence",
    description: "Decades of trusted educational service",
  },
  {
    icon: TrendingUp,
    stat: "1000+",
    label: "Success Stories",
    description: "Alumni excelling in diverse career paths",
  },
];

const highlights = [
  "State-level champions in science olympiad 2024",
  "Recognized for outstanding academic performance",
  "Annual day celebrations with 500+ performers",
  "Community service initiatives by senior students",
  "Sports day featuring inter-house competitions",
  "Art exhibition showcasing student creativity",
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Achievements
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Excellence in Every Endeavor
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our students consistently demonstrate outstanding performance 
            in academics, sports, and extracurricular activities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-primary text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="font-serif text-4xl font-bold mb-2">{item.stat}</p>
              <p className="font-semibold mb-1">{item.label}</p>
              <p className="text-sm text-primary-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
            Recent Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
