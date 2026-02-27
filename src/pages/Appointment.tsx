import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, CheckCircle, Phone, Mail } from "lucide-react";

const treatments = ["General Check-up", "Root Canal Treatment", "Dental Implants", "Braces & Aligners", "Cosmetic Dentistry", "Teeth Whitening", "Gum Treatment", "Pediatric Dentistry", "Other"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

const Appointment = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", time: "", treatment: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.treatment) {
      toast({ title: "Please fill required fields", description: "Name, phone, date, time, and treatment are required.", variant: "destructive" });
      return;
    }
    setIsSubmitted(true);
    toast({ title: "Appointment Request Sent!", description: "Our team will contact you shortly to confirm your appointment." });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Thank You!</h1>
              <p className="mt-4 text-lg text-muted-foreground">Your appointment request has been received. Our team will contact you shortly to confirm your appointment.</p>
              <div className="glass-card-static mt-8 text-left">
                <h3 className="mb-4 font-semibold text-foreground">Your Request Details</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Name:</span> {formData.name}</p>
                  <p><span className="text-muted-foreground">Phone:</span> {formData.phone}</p>
                  <p><span className="text-muted-foreground">Date:</span> {formData.date}</p>
                  <p><span className="text-muted-foreground">Time:</span> {formData.time}</p>
                  <p><span className="text-muted-foreground">Treatment:</span> {formData.treatment}</p>
                </div>
              </div>
              <Button className="mt-6 rounded-full" onClick={() => { setIsSubmitted(false); setFormData({ name: "", phone: "", email: "", date: "", time: "", treatment: "", message: "" }); }}>
                Book Another Appointment
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="floating-section bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Schedule A Visit</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Schedule your visit in just a few clicks. We'll confirm your appointment shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="glass-card-static !p-6 md:!p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+1 234 567 890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="date" type="date" className="pl-10" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split("T")[0]} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger><Clock className="mr-2 h-4 w-4 text-muted-foreground" /><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>{timeSlots.map((slot) => (<SelectItem key={slot} value={slot}>{slot}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="treatment">Treatment Type *</Label>
                  <Select value={formData.treatment} onValueChange={(value) => setFormData({ ...formData, treatment: value })}>
                    <SelectTrigger><SelectValue placeholder="Select treatment" /></SelectTrigger>
                    <SelectContent>{treatments.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Problem Description (Optional)</Label>
                  <Textarea id="message" placeholder="Describe your dental concern or any specific requirements..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">Submit Appointment Request</Button>
              </form>
            </div>

            <div className="glass-card-static mt-8">
              <p className="mb-4 text-center text-sm text-muted-foreground">Need immediate assistance? Contact us directly:</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"><Phone className="h-4 w-4" />+1 234 567 890</a>
                <a href="mailto:info@advanceddentalhub.com" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"><Mail className="h-4 w-4" />info@advanceddentalhub.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Appointment;
