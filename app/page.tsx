import React from "react";
import HeroText from "./components/homepage/HeroText";

export default function Page() {
  return (
    <>
      <div className="relative">
        <section className="bg-[url('/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif')] bg-cover bg-center h-[80vh] flex items-center justify-center">
          <HeroText />
        </section>
      </div>

      <main className="p-8 max-w-screen-md mx-auto">
        <p>This is the rest of the page content.</p>
      </main>
    </>
  );
}
