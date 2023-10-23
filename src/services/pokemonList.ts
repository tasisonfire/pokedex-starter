import axios from "axios";
import { POKEMOND_BASE_URL } from "@/utils/constant";
import { IGetPokemonList } from "@/interface/pokemonList";
import { handleResponse } from "@/utils/handleResponse";

// interface IGetPokemonList {
//   status: number | undefined;
//   data: IPokemonListResponse;
// }

export const pokemonListServices = {
  getPokemonList: async (
    limit?: number,
    offset?: number
  ): Promise<IGetPokemonList> => {
    try {
      const response = await axios.get(
        `${POKEMOND_BASE_URL}pokemon?limit=${limit || 151}&offset=${
          offset || 0
        }`
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
