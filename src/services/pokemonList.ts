import axios from "axios";
import { POKEMOND_BASE_URL } from "@/utils/constant";
import { IGetPokemonList } from "@/interface/pokemonList";

// interface IGetPokemonList {
//   status: number | undefined;
//   data: IPokemonListResponse;
// }

export const pokemonListServices = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonList> => {
    const response = await axios.get(
      `${POKEMOND_BASE_URL}pokemon?limit=${limit || 151}&offset=${offset || 0}`
    );
    return response;
  },
};
