import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import OptimizedImage from "@/components/ui/optimized-image";

const ScrollShowcaseSection = () => {
  return (
    <section className="bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              State-of-the-Art
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Modern Dental <br />
              <span className="bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Experience cutting-edge equipment and techniques in a comfortable, modern environment.
            </p>
          </>
        }
      >
        <OptimizedImage
          src="/images/highlights/equipment.jpg"
          alt="Advanced dental equipment and modern clinic interior"
          className="mx-auto h-full w-full rounded-2xl object-cover object-center"
        />
      </ContainerScroll>
    </section>
  );
};

export default ScrollShowcaseSection;
