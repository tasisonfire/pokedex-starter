import { useEffect } from "react";
import { usePokemonListStore } from "@/store/pokemonList";
import { pokemonListServices, pokemonDetailServices } from "@/services";
import { useForm } from "react-hook-form";

const useSearchForm = () => {
  // react hook form component
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setFetchPokemonList, fetchPokemon, setPokemonStore } =
    usePokemonListStore();

  // get keyword from the form,  need to be same as register
  const keyword = watch("keyword");

  // function use for get data and store in store data
  const callData = async () => {
    const responseList = await pokemonListServices.getPokemonList();
    const pokeList = [];
    setFetchPokemonList({ data: [], loading: true, error: null });

    if (responseList.status === 200) {
      const responseResults = responseList.data?.results || [];
      // console.log("responseResult", responseResults);
      for (const pokemon of responseResults) {
        // console.log(pokemon);
        const response = await pokemonDetailServices.getPokemonDetail(
          pokemon.name
        );
        const pokeData = response.data;
        if (pokeData) {
          pokeList.push({
            ...pokeData,
            image:
              pokeData.sprites.other.dream_world.front_default ||
              pokeData.sprites.other.home.front_default,
          });
        }
      }
      // console.log("pokelist:", pokeList);
      setFetchPokemonList({ data: pokeList, loading: false, error: null });
    } else {
      setFetchPokemonList({
        data: [],
        loading: false,
        error: responseList.error || null,
      });
    }
  };

  useEffect(() => {
    callData();
  }, []);

  useEffect(() => {
    const data = fetchPokemon.data.filter((item) =>
      item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );

    setPokemonStore({
      data: data,
      loading: false,
      error: null,
    });
  }, [keyword]);

  useEffect(() => {
    console.log("keyword", keyword);
  }, [keyword]);

  return {
    fieldKeyWord: register("keyword"),
  };
};

export { useSearchForm };
