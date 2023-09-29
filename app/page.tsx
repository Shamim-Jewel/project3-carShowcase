import { CarCard, CustomFilter, Hero, Searchbar } from "@/components";
import { fetchCars } from "@/utils/carData";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    year: searchParams.year || 2022,
    limit: searchParams.limit || 10,
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
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
              <CustomFilter title="year" />
            </div>
            {!isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars.map((car) => (
                    <CarCard car={car} />
                  ))}
                </div>
              </section>
            ) : (
              <div className="home__error-container">we have no cars</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
