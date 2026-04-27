import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, CheckCircle, CheckCircle2, Phone, Mail, ArrowLeft, User, Cake, Home, Clock, MapPin, Bell, Bot } from "lucide-react";
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
  const [step, setStep] = useState<"form" | "calendly" | "confirmed">("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: undefined,
    phone: "",
    email: "",
    purpose: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookedAt, setBookedAt] = useState<Date>(new Date());

  // Listen for Calendly booking confirmation via postMessage
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data?.event) return;
      if (String(e.data.event).indexOf("calendly") !== 0) return;
      if (e.data.event === "calendly.event_scheduled") {
        setBookedAt(new Date());
        setStep("confirmed");
        toast({
          title: "Appointment confirmed! 🎉",
          description: "We've sent a confirmation to your email.",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [toast]);

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

  const handleBookAnother = () => {
    setFormData({ name: "", dob: undefined, phone: "", email: "", purpose: "" });
    setErrors({});
    setStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              {step === "confirmed" ? (
                <>You're <span className="text-primary">All Set!</span></>
              ) : (
                <>Book Your <span className="text-primary">Free Consultation</span></>
              )}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {step === "form" && "Fill in your details and we'll help you pick the perfect time slot."}
              {step === "calendly" && "Choose a convenient date and time for your consultation."}
              {step === "confirmed" && "Your appointment has been booked successfully. We can't wait to see you!"}
            </p>

            {/* Step indicator */}
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                step === "form" ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
              )}>
                {step === "form" ? "1" : <CheckCircle2 className="h-4 w-4" />}
              </div>
              <div className={cn("h-0.5 flex-1 rounded-full transition-colors", step !== "form" ? "bg-primary" : "bg-border")} />
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                step === "calendly" ? "bg-primary text-primary-foreground"
                  : step === "confirmed" ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              )}>
                {step === "confirmed" ? <CheckCircle2 className="h-4 w-4" /> : "2"}
              </div>
              <div className={cn("h-0.5 flex-1 rounded-full transition-colors", step === "confirmed" ? "bg-primary" : "bg-border")} />
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                step === "confirmed" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                3
              </div>
            </div>
            <div className="mx-auto mt-2 flex max-w-md justify-between">
              <span className={cn("text-xs font-medium", step === "form" ? "text-primary" : "text-muted-foreground")}>Your Info</span>
              <span className={cn("text-xs font-medium", step === "calendly" ? "text-primary" : "text-muted-foreground")}>Pick a Time</span>
              <span className={cn("text-xs font-medium", step === "confirmed" ? "text-primary" : "text-muted-foreground")}>Confirmed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <AnimatePresence mode="wait">
            {step === "form" && (
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

                    <div data-vapi-avoid>
                      <MetalButton variant="primary" className="w-full">
                        Continue to Schedule →
                      </MetalButton>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
            {step === "calendly" && (
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

                {/* Lead submission status */}
                <div className="glass-card-static mb-6 overflow-hidden !p-0">
                  <div className="flex items-center gap-3 border-b border-border/50 bg-primary/5 px-5 py-3">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">Details received — you're in our system</p>
                      <p className="text-xs text-muted-foreground">Pick a time below to lock in your free consultation.</p>
                    </div>
                    <span className="hidden shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary sm:inline">
                      Step 2 of 3
                    </span>
                  </div>

                  <ul className="divide-y divide-border/40 px-5">
                    <li className="flex items-start gap-3 py-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Form submitted securely</p>
                        <p className="text-xs text-muted-foreground">Your name, contact details and concern have been logged.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 py-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">AI assistant standing by</p>
                        <p className="text-xs text-muted-foreground">
                          Use the chat widget in the corner for quick questions while you choose a time — it has full context of your concern.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 py-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Awaiting time selection</p>
                        <p className="text-xs text-muted-foreground">Once you confirm a slot, our team will reach out within 1 business hour.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Calendly embed */}
                <div data-vapi-avoid className="overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm">
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
            {step === "confirmed" && (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="mx-auto max-w-2xl"
              >
                <div className="glass-card-static overflow-hidden !p-0">
                  {/* Success header */}
                  <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 py-10 text-center md:px-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                    >
                      <CheckCircle className="h-10 w-10" />
                    </motion.div>
                    <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      Appointment Confirmed!
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Your free consultation is booked.
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-6 px-6 py-8 md:px-10">
                    <div>
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Booking Details</h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-3">
                          <User className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">Name</p>
                            <p className="truncate text-sm font-medium text-foreground">{formData.name}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-3">
                          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="truncate text-sm font-medium text-foreground">{formData.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-3">
                          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">Phone</p>
                            <p className="truncate text-sm font-medium text-foreground">{formData.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-3">
                          <CalendarIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">Booked On</p>
                            <p className="truncate text-sm font-medium text-foreground">{format(bookedAt, "PP")}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* What's next */}
                    <div>
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">What Happens Next</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Mail className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Confirmation email sent</p>
                            <p className="text-xs text-muted-foreground">Check your inbox for the appointment details and a calendar invite.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Bell className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Friendly reminder</p>
                            <p className="text-xs text-muted-foreground">We'll send a reminder 24 hours before your visit.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Clock className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Arrive 10 minutes early</p>
                            <p className="text-xs text-muted-foreground">A quick check-in helps us start right on time.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">Need directions?</p>
                            <p className="text-xs text-muted-foreground">
                              Visit our <Link to="/contact" className="text-primary underline-offset-2 hover:underline">contact page</Link> for the clinic address.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col gap-3 border-t border-border/50 pt-6 sm:flex-row">
                      <Button asChild variant="outline" className="flex-1 gap-2">
                        <Link to="/">
                          <Home className="h-4 w-4" /> Back to Home
                        </Link>
                      </Button>
                      <Button onClick={handleBookAnother} className="flex-1 gap-2">
                        <CalendarIcon className="h-4 w-4" /> Book Another
                      </Button>
                    </div>

                    <p className="text-center text-xs text-muted-foreground">
                      Need to reschedule? Use the link in your confirmation email or <a href="tel:+1234567890" className="text-primary underline-offset-2 hover:underline">call us</a>.
                    </p>
                  </div>
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
