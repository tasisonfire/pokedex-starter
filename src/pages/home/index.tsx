import React, { useEffect } from "react";
// import { pokemonListServices, pokemonDetailServices } from "@/services";
import SearchForm from "@/components/SearchForm";
import { usePokemonListStore } from "@/store/pokemonList";
import PokemonCard from "@/components/PokemonCard";

const homePage = () => {
  // const callData = async () => {
  //   // const data = await pokemonListServices.getPokemonList();
  //   const data = await pokemonDetailServices.getPokemonDetail("ditto");
  //   console.log("data", data.data.abilities);

  //   const data1 = await pokemonListServices.getPokemonList();
  //   console.log("data1", data1.data);
  // };

  // useEffect(() => {
  //   callData();
  // }, []);

  const { pokemon } = usePokemonListStore();

  console.log(pokemon);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px] pb-8">
      {/* <h1 className="text-white">homePage!</h1> */}
      <div className="flex justify-center">
        <img
          src="./public/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <SearchForm.SearchForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-5 justify-center">
        {pokemon.data.map((item) => {
          return (
            // <div className="text-white" key={`pokemon-${item.id}`}>
            //   {item.name}
            // </div>
            <PokemonCard.PokemonCard
              image={item.image || ""}
              name={item.name}
              id={item.id}
              types={item.types}
            />
          );
        })}
      </div>
    </div>
  );
};

export default homePage;
