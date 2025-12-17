import Layout from "@/components/layout/Layout";
import { Award, GraduationCap, Clock, Heart, CheckCircle, Users } from "lucide-react";

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-accent/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
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
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-secondary shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-primary">Dentist Photo</p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">BDS, MDS</p>
                    <p className="text-sm text-muted-foreground">Dental Surgery</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
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
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
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
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Our Philosophy
              </h2>
              <p className="mt-4 text-muted-foreground">
                At Advanced Dental Hub, we believe in treating every patient like family.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Patient Care</h3>
                <p className="text-sm text-muted-foreground">
                  Your comfort and well-being are at the heart of everything we do.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to the highest standards of dental care and treatment outcomes.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Building lasting relationships through honesty, transparency, and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
