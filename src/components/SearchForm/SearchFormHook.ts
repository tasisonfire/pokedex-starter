import { useEffect } from "react";
import { usePokemonListStore } from "@/store/pokemonList";
import { pokemonListServices, pokemonDetailServices } from "@/services";
import { useForm } from "react-hook-form";

const useSearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setFetchPokemonList } = usePokemonListStore();

  const keyword = watch("keyword");

  const callData = async () => {
    const responseList = await pokemonListServices.getPokemonList();
    const pokeList = [];
    setFetchPokemonList({ data: [], loading: true, error: null });

    if (responseList.status === 200) {
      const responseResults = responseList.data.results || [];
      // console.log("responseResult", responseResults);
      for (const pokemon of responseResults) {
        // console.log(pokemon);
        const response = await pokemonDetailServices.getPokemonDetail(
          pokemon.name
        );
        const pokeData = response.data;
        pokeList.push({ ...pokeData });
      }
      //   console.log("pokelist:", pokeList);
      setFetchPokemonList({ data: pokeList, loading: false, error: null });
    } else {
      setFetchPokemonList({ data: [], loading: false, error: null });
    }
  };

  useEffect(() => {
    callData();
  }, []);

  useEffect(() => {
    console.log("keyword", keyword);
  }, [keyword]);

  return {
    fieldKeyWord: register("keyword"),
  };
};

export { useSearchForm };
