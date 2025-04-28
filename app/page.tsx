import HeroText from "./components/homepage/HeroText";

export default function Page() {
  return (
    <>
      <section className="relative h-[80vh] bg-[url('/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif')] bg-cover bg-center flex items-center justify-end">
        <div className="p-8 rounded-lg text-white max-w-2xl text-center">
          <HeroText />
        </div>
      </section>

      <section className="container mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold mb-4">Welcome to Suscon</h2>
        <p className="text-lg">
          The way we construct our living environment affects both nature and
          human well-being in various ways. We believe that the built
          environment can be durable while safeguarding the environment and
          human health. SUSCON offers multidisciplinary research and consultancy
          services on sustainable solutions for construction projects and
          everyday situations that affect our living environment. The centre is
          rooted in science and industry, and is comprised of engineers,
          architects, biologists, sociologists and technicians.
        </p>
      </section>
    </>
  );
}
