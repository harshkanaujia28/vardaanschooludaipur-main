import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdmissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentClass: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We will contact you shortly.",
    });
    setFormData({ parentName: "", phone: "", studentClass: "" });
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in admission enquiry for Vardaan Sr Sec School.";
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="admission" className="section-padding bg-primary" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Admissions Open
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Begin Your Child's Journey
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Give your child the gift of quality education. Join the Vardaan family 
              and watch them grow into confident, capable individuals ready to take 
              on the world.
            </p>

            {/* WhatsApp Button */}
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Quick Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent's Name</Label>
                <Input
                  id="parentName"
                  placeholder="Enter your full name"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentClass">Class Seeking Admission</Label>
                <Input
                  id="studentClass"
                  placeholder="e.g., Nursery, Class 5, Class 10"
                  value={formData.studentClass}
                  onChange={(e) =>
                    setFormData({ ...formData, studentClass: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Submit Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
