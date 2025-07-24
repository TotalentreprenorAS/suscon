function HeroText() {
  return (
    <section className="container">
      <div className="flex">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-bold mb-4 font-bold">
            Nordic centre for sustainable construction
          </h1>
          <p className="text-xl">
            SUSCON offers multidisciplinary research and consultancy services on
            sustainable solutions for construction projects and everyday
            situations that affect our living environment.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/suscon-sustainability-leaf.svg"
            className="w-[600px] h-auto max-w-[800px]"
          />
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
