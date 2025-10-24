import HeroText from "./components/homepage/HeroText";
import SubjectCards from "./components/homepage/SubjectCards";

export default function Page() {
  return (
    <>
      <HeroText />
      <section className="container px-5 py-20 max-w-[1000px]">
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
      <section className="container px-5 py-20">
        <SubjectCards />
      </section>
    </>
  );
}
