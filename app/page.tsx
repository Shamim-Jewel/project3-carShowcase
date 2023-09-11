import { CustomFilter, Hero, Searchbar } from "@/components";

export default function Home() {
  return (
    <main className=" overflow-hideden">
      <Hero />
      <div className="mt-12" id="discover">
        <div className=" home__text-container">
          <h1 className="text-4xl font-extrabold"> Car catalogue </h1>
          <p>Explore the cars you might like </p>
          <div className="home__filter">
            <Searchbar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter
                title="year
              
              "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
