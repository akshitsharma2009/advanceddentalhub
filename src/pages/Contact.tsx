import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-accent/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
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
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  Get in Touch
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Visit our clinic or reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Dental Street, Healthcare District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 234 567 890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@advanceddentalhub.com" className="text-muted-foreground hover:text-primary">
                      info@advanceddentalhub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </a>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl border bg-muted/50">
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
              <div className="rounded-3xl border bg-card p-6 shadow-lg md:p-8">
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
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
