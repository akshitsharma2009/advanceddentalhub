import Layout from "@/components/layout/Layout";
import { Award, GraduationCap, Clock, Heart, CheckCircle, Users } from "lucide-react";
import SEO from "@/components/SEO";

const specializations = [
  "Root Canal Treatment",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Braces & Aligners",
  "Teeth Whitening",
  "Pediatric Dentistry",
];

const About = () => {
  return (
    <Layout>
      <SEO title={"About Our Dentist | Advanced Dental Hub"} description={"Meet the team behind Advanced Dental Hub — 15+ years of experience in endodontics, implants, orthodontics and cosmetic dentistry."} path="/about" />
      {/* Hero Section */}
      <section className="floating-section bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">About Us</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Meet Our <span className="text-primary">Dentist</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Dedicated to providing exceptional dental care with precision, compassion, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Dentist Profile */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Photo Placeholder */}
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="glass-card-static aspect-[3/4] !p-0 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/50">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-primary">Dentist Photo</p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="glass-card absolute -bottom-4 -right-4 !p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  Dr. Expert Name
                </h2>
                <p className="mt-1 text-lg text-primary">BDS, MDS - Dental Surgery</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in comprehensive dental care, our lead dentist combines 
                cutting-edge technology with a gentle, patient-first approach. Passionate about creating 
                beautiful, healthy smiles, they specialize in advanced treatments while ensuring every 
                patient feels comfortable and cared for.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-card-static flex items-center gap-3 !p-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">BDS, MDS</p>
                    <p className="text-sm text-muted-foreground">Dental Surgery</p>
                  </div>
                </div>
                <div className="glass-card-static flex items-center gap-3 !p-4">
                  <Award className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Board Certified</p>
                    <p className="text-sm text-muted-foreground">Dental Association</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-foreground">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary"
                    >
                      <CheckCircle className="h-3 w-3" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy */}
      <section className="floating-section bg-muted/20 py-16 md:py-20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Our Values</p>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Our Philosophy
              </h2>
              <p className="mt-4 text-muted-foreground">
                At Advanced Dental Hub, we believe in treating every patient like family.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Heart, title: "Patient Care", desc: "Your comfort and well-being are at the heart of everything we do." },
                { icon: Award, title: "Excellence", desc: "Committed to the highest standards of dental care and treatment outcomes." },
                { icon: Users, title: "Trust", desc: "Building lasting relationships through honesty, transparency, and reliability." },
              ].map((item, i) => (
                <div key={i} className="glass-card text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
