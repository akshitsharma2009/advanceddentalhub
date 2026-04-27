import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, CheckCircle, CheckCircle2, Phone, Mail, ArrowLeft, User, Cake, Home, Clock, MapPin, Bell } from "lucide-react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { MetalButton } from "@/components/ui/liquid-glass-button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const appointmentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  dob: z.date({ required_error: "Date of birth is required" }),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters").regex(/^[+\d\s()-]+$/, "Invalid phone number format"),
  email: z.string().trim().min(1, "Email is required").max(255).email("Invalid email address"),
  purpose: z.string().trim().min(1, "Purpose is required").max(2000, "Purpose must be less than 2000 characters"),
});

type FormData = {
  name: string;
  dob: Date | undefined;
  phone: string;
  email: string;
  purpose: string;
};

const Appointment = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<"form" | "calendly">("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: undefined,
    phone: "",
    email: "",
    purpose: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = appointmentSchema.safeParse(formData);
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
    setStep("calendly");
    toast({ title: "Great! Now pick a time", description: "Choose a convenient slot on the calendar below." });
  };

  const calendlyUrl = `https://calendly.com/akshitsharmayt-2/new-meeting?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&a1=${encodeURIComponent(formData.phone)}&a2=${encodeURIComponent(formData.purpose)}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="floating-section bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Schedule A Visit</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Book Your <span className="text-primary">Free Consultation</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {step === "form"
                ? "Fill in your details and we'll help you pick the perfect time slot."
                : "Choose a convenient date and time for your consultation."}
            </p>

            {/* Step indicator */}
            <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-3">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                step === "form" ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
              )}>
                1
              </div>
              <div className={cn("h-0.5 flex-1 rounded-full transition-colors", step === "calendly" ? "bg-primary" : "bg-border")} />
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                step === "calendly" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                2
              </div>
            </div>
            <div className="mx-auto mt-2 flex max-w-xs justify-between">
              <span className={cn("text-xs font-medium", step === "form" ? "text-primary" : "text-muted-foreground")}>Your Info</span>
              <span className={cn("text-xs font-medium", step === "calendly" ? "text-primary" : "text-muted-foreground")}>Pick a Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <AnimatePresence mode="wait">
            {step === "form" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-2xl"
              >
                <div className="glass-card-static !p-6 md:!p-8">
                  <h2 className="mb-6 text-xl font-semibold text-foreground">Tell us about yourself</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" /> Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    {/* DOB */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Cake className="h-4 w-4 text-muted-foreground" /> Date of Birth *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.dob && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.dob ? format(formData.dob, "PPP") : <span>Pick your date of birth</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.dob}
                            onSelect={(date) => setFormData({ ...formData, dob: date })}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                            captionLayout="dropdown-buttons"
                            fromYear={1920}
                            toYear={new Date().getFullYear()}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.dob && <p className="text-sm text-destructive">{errors.dob}</p>}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" /> Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 890"
                          maxLength={20}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" /> Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Purpose */}
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose of Consultation *</Label>
                      <Textarea
                        id="purpose"
                        placeholder="e.g. Teeth whitening consultation, general check-up, braces inquiry..."
                        rows={4}
                        maxLength={2000}
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        required
                      />
                      {errors.purpose && <p className="text-sm text-destructive">{errors.purpose}</p>}
                    </div>

                    <MetalButton variant="primary" className="w-full">
                      Continue to Schedule →
                    </MetalButton>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="calendly"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-4xl"
              >
                {/* Back button */}
                <Button
                  variant="ghost"
                  className="mb-4 gap-2"
                  onClick={() => setStep("form")}
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Details
                </Button>

                {/* Summary card */}
                <div className="glass-card-static mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 !py-4">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium text-foreground">{formData.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium text-foreground">{formData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium text-foreground">{formData.phone}</span>
                  </div>
                </div>

                {/* Calendly embed */}
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm">
                  <iframe
                    src={calendlyUrl}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Schedule a consultation"
                    className="w-full"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Appointment;
