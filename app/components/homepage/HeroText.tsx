function HeroText() {
  return (
    <section className="relative h-[70vh] bg-[url(/images/suscon-background.png)] bg-cover bg-center w-full text-white overflow-hidden pt-[-20px">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
          Nordic Centre for Sustainable Construction
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium text-gray-200">
          Let's build a sustainable future together
        </p>
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
