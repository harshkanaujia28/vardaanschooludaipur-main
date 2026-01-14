import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay updated with school events, student achievements, and campus life 
            through our social media channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              @vardaanschooludaipur
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Discover daily moments, event highlights, and student stories 
              from our vibrant school community.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://instagram.com/vardaanschooludaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Follow Us <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-border text-center"
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6">
              <Youtube className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              YouTube
            </h3>
            <p className="text-muted-foreground mb-6">
              Vardaan School Udaipur
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Watch our annual day performances, sports events, educational 
              content, and campus tours.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.youtube.com/@vardaanschooludaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Subscribe <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
