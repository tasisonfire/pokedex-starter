import axios from "axios";
import { POKEMOND_BASE_URL } from "@/utils/constant";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { IResponse, handleResponse } from "@/utils/handleResponse";

interface IGetPokemonDetail extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailServices = {
  getPokemonDetail: async (name: string): Promise<IGetPokemonDetail> => {
    try {
      const response = await axios.get(`${POKEMOND_BASE_URL}pokemon/${name}`);
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
