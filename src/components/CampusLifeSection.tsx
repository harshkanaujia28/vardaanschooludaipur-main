import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import classroomImage from "@/assets/classroom.jpg";
import sportsImage from "@/assets/sports.jpg";
import culturalImage from "@/assets/cultural.jpg";
import laboratoryImage from "@/assets/laboratory.jpg";

const galleryItems = [
  {
    image: classroomImage,
    title: "Modern Classrooms",
    category: "Learning Spaces",
  },
  {
    image: sportsImage,
    title: "Sports Excellence",
    category: "Athletics",
  },
  {
    image: culturalImage,
    title: "Cultural Celebrations",
    category: "Events",
  },
  {
    image: laboratoryImage,
    title: "Science Labs",
    category: "Innovation",
  },
];

const CampusLifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="campus-life" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Campus Life
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Beyond The Classroom
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the vibrant life at Vardaan through our world-class facilities, 
            exciting events, and enriching activities that shape well-rounded individuals.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? 0 : 10,
                    opacity: hoveredIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-accent text-sm font-medium tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mt-2">
                    {item.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
