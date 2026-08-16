import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import SEO from "@/components/SEO";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().max(200, "Subject must be less than 200 characters").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Please fix the errors", description: "Some fields have invalid values.", variant: "destructive" });
      return;
    }
    setErrors({});
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you soon." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <SEO title={"Contact Us | Advanced Dental Hub"} description={"Call, email or visit Advanced Dental Hub. Find our address, opening hours and send us a message."} path="/contact" />
      {/* Hero Section */}
      <section className="floating-section bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Get In Touch</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We're here to help. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">Visit our clinic or reach out through any of the channels below.</p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Our Location", content: "123 Dental Street, Healthcare District\nCity, State 12345" },
                  { icon: Phone, title: "Phone", content: "+1 234 567 890", href: "tel:+1234567890" },
                  { icon: Mail, title: "Email", content: "info@advanceddentalhub.com", href: "mailto:info@advanceddentalhub.com" },
                  { icon: Clock, title: "Working Hours", content: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: Closed" },
                ].map((item, i) => (
                  <div key={i} className="glass-card-static flex items-start gap-4 !p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary">{item.content}</a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600 shadow-lg shadow-green-500/25"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </a>

              <div className="glass-card-static overflow-hidden !p-0">
                <div className="flex h-64 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-10 w-10 text-muted-foreground" />
                    <p className="text-muted-foreground">Google Maps Embed</p>
                    <p className="text-sm text-muted-foreground/70">123 Dental Street, Healthcare District</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="glass-card-static !p-6 md:!p-8">
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" placeholder="John Doe" maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" maxLength={200} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Write your message here..." rows={5} maxLength={2000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
