import { Team } from "../../data/team";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
export default function Page({ params }: any) {
  try {
    const team = Team.find((t) => t.slug === params.slug);

    if (!team) return notFound();

    return (
      <div className=" max-w-4xl mx-auto">
        <h1 className="text-3xl mt-10 text-center mb-10"> {team.name} </h1>
        <div className="flex justify-between">
          <div className="flex justify-center items-center bg-gray-700 w-full h-96">
            <p className="text-white font-semibold"> {team.description} </p>
          </div>
          <div className="">
            <img
              src={team.image}
              alt={team.name}
              className="w-110 h-96 object-contain p-2"
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="text-md">
            <ReactMarkdown>{team.summary}</ReactMarkdown>
          </div>
          <div className="text-md mt-5">
            <ReactMarkdown>{team.summary2}</ReactMarkdown>
          </div>
          <div className="text-md mt-5">
            <ReactMarkdown>{team.summary3}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading team", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  return Team.map((team) => ({
    slug: team.slug.replace("/contact/", ""), // Just contact/name
  }));
}
