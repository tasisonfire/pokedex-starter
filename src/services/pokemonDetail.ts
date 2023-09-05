import axios from "axios";
import { POKEMOND_BASE_URL } from "@/utils/constant";
import { IGetPokemonDetail } from "@/interface/pokemonDetail";

// interface IGetPokemonDetail {
//   status: number | undefined;
//   data: IPokemonDetailResponse;
// }

export const pokemonDetailServices = {
  getPokemonDetail: async (name: string): Promise<IGetPokemonDetail> => {
    const response = await axios.get(`${POKEMOND_BASE_URL}pokemon/${name}`);
    return response;
  },
};
