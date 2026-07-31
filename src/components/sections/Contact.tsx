import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Send, MapPin, MessageSquare, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ranjanpriyanshu441@gmail.com",
    href: "mailto:ranjanpriyanshu441@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "7398425022",
    href: "tel:7398425022"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    href: null
  }
];

const socialLinks = [
  {
    icon: Mail,
    label: "Gmail",
    href: "mailto:ranjanpriyanshu441@gmail.com",
    color: "#EA4335"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshu-ranjan-74170a227/",
    color: "#0077B5"
  },
  {
    icon: Instagram,
    label: "Instagram", 
    href: "https://www.instagram.com/priyanshu.ranjan02?igsh=MW5zdjI5bTZ2dDUwcg%3D%3D&utm_source=qr",
    color: "#E4405F"
  }
];

export function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqarjddy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };


  return (
  <section id="contact" className="py-20 bg-muted/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </p>
      </motion.div>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT — LET'S CONNECT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Let's Connect
          </h3>

          {/* Contact Details */}
          <div className="space-y-6 mb-10">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — SEND MESSAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
            Send Me a Message
          </h3>
          <p className="text-muted-foreground mb-8">
            Have a question or want to work together? Let’s connect.
          </p>

          <Card className="p-8 md:p-10 bg-card border border-border shadow-blue hover:shadow-glow transition-all duration-500">
            <form
              action="https://formspree.io/f/xqarjddy"
              method="POST"
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full text-lg bg-primary hover:bg-primary/90 transition"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              {status === "success" && (
                <p className="text-green-500 text-sm text-center mt-4">
                  ✅ Message sent successfully! I’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm text-center mt-4">
                  ❌ Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </Card>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          Designed & Developed by Priyanshu Ranjan • © 2026 All Rights Reserved
        </p>
      </motion.div>

    </div>
  </section>
);
}