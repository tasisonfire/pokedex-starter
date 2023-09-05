import React, { useEffect } from "react";
// import { pokemonListServices, pokemonDetailServices } from "@/services";
import SearchForm from "@/components/SearchForm";

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

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      {/* <h1 className="text-white">homePage!</h1> */}
      <div className="flex justify-center">
        <img
          src="./public/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <SearchForm.SearchForm />
    </div>
  );
};

export default homePage;
