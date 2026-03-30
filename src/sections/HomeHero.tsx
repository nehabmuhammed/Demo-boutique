import HeroVideo from "@/components/HeroVideo";

const HomeHero = () => {
  return (
    <HeroVideo
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      posterSrc="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070"
      title="Intelligence Meets Elegance"
      subtitle="Redefine your living space with our next-generation smart home appliances. Seamless control, ultimate efficiency, breathtaking design."
      overlayOpacity={0.65}
    />
  );
};

export default HomeHero;
