import HeroText from "./components/homepage/HeroText";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <HeroText />
      <section className="container px-5 py-20 max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-4">Welcome to Suscon</h2>
        <p className="text-lg">
          The way we construct our living environment affects both nature and
          human well-being in various ways. At Suscon we believe that the built
          environment can be durable, livable and affordable while safeguarding the environment and
          human health.
          <span className="block mt-5"> Suscon engages in multidisciplinary research and consultancy
          on a wide range of topics for that construction industry and
          everyday situations that affect our living environment. The centre is
          rooted in science and industry, and is comprised of engineers,
          architects, biologists, sociologists and technicians.
          </span> 
        </p>
        <div className="flex gap-5 justify-even mt-10">

        <Link href="areasofresearch" className="py-3 px-6 bg-gray-800 text-white self-start font-bold text-md lg:text-2xl rounded-lg cursor-pointer">
            What we do
          </Link>
          <Link href="projects" className="py-3 px-6 bg-gray-800 text-white self-start font-bold text-md lg:text-2xl rounded-lg cursor-pointer">
            See our projects
          </Link>
          <Link href="contact" className="py-3 px-6 bg-gray-800 text-white self-start font-bold text-md lg:text-2xl rounded-lg cursor-pointer">
            Meet the people
          </Link>
          </div>
      </section>
    </>
  );
}
