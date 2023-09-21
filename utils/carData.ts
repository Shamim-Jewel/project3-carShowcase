export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f7aa8e3767msh63474bca493c05cp145d5djsn28bb9209f511",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
