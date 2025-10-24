function HeroText() {
  return (
    <section className="relative h-[50vh] bg-[url(/images/suscon-background.png)] bg-contain bg-bottom w-full text-white">
      {/* Gradient Overlay (bottom to top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 flex items-end justify-center h-full pb-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold leading-[1.4]">
            Nordic Centre for Sustainable Construction
          </h1>
          <p className="text-2xl font-semibold text-gray-300">
            Let's build a sustainable future together
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroText;

{
  /* <p>
  The way we construct our living environment affects both nature and human
  well-being in various ways. We believe that the built environment can be
  durable while safeguarding the environment and human health. SUSCON offers
  multidisciplinary research and consultancy services on sustainable solutions
  for construction projects and everyday situations that affect our living
  environment. The centre is rooted in science and industry, and is comprised of
  engineers, architects, biologists, sociologists and technicians.
</p>; */
}
