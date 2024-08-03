import { component$, Resource, useResource$ } from "@builder.io/qwik";

export interface Beer {
  name: string;
  price: number;
}
export const BeerSelector = component$(() => {
  // http://localhost:5173/api/beers
  const beersRessource = useResource$<Beer[]>(async () =>{
    const response = await fetch("http://localhost:5173/api/beers");
    return await response.json();
  })

  return (
    <div>
    <Resource
      value={beersRessource}
      onPending={() => <div>Loading...</div>}
      onResolved={(beers) => {
        return <select name="" id="">
          {beers.map((beer) => (
            <option key={beer.name + "" + beer.price} value={beer.name}>
              {beer.name}
            </option>
          ))}
        </select>
      }}
    />
    </div>
  );
});
