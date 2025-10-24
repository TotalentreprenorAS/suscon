function HeroText() {
  return (
    <section className="relative h-[80vh] bg-[url(/images/suscon-background.png)] bg-cover bg-center w-full text-white">
      {/* Gradient Overlay (bottom to top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 flex items-end justify-center h-full pb-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold leading-[1.2]">
            Nordic centre for sustainable construction
          </h1>
          <p className="text-3xl font-semibold text-yellow-500">
            Build a sustainable future together
          </p>
          <button className="py-3 px-6 bg-[#13AC9C] self-start font-bold text-xl rounded-lg">
            Get to know us
          </button>
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
