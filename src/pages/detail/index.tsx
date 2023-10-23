import { useEffect, useState } from "react";
import { pokemonDetailServices, pokemonListServices } from "@/services";
import { useParams } from "react-router-dom";
import { usePokemonListStore } from "@/store/pokemonList";
import {
  IPokemonDetailResponse,
  Type,
  IGetPokemonDetail,
} from "@/interface/pokemonDetail";

type pokemonType = {
  data: IPokemonDetailResponse;
  loading: boolean;
  error: null | any;
};

const detailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  console.log("pokemon ", pokemon);

  const callData = async (name: string) => {
    const response = await pokemonDetailServices.getPokemonDetail(name);

    if (response.status === 200) {
      console.log("response data: ", response.data);
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other.home.front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error || null,
      });
    }
  };

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div className=" w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/public/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>

      <section>
        <div className="flex justify-center">
          <div className="max-w-[600px] min-w-[400px]">
            <div className="h-[250px] bg-center aspect-square w-full bg-cover rounded-lg relative ">
              <img
                className="absolute h-[300px] w-[auto] translate-x-[50%]"
                src="/images/pokemon_bg.png"
                alt=""
              />
              <img
                className="absolute rounded-t-lg h-[200px] w-full translate-y-[30%] translate-x-[0%]"
                src={pokemon.data?.image}
                alt=""
              />
            </div>

            <div className="mt-[100px] py-5 bg-cyan-950 rounded-[20px] p-[16px] w-[600px]">
              <div className="grid grid-col-2">
                <div
                  className="flex justify-between"
                  key={`pokemon-${pokemon.data?.id}`}
                >
                  <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-white">
                    {pokemon.data?.name}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                    #{pokemon.data?.id}
                  </h5>
                </div>

                <div className="grid grid-rows-2 text-white">
                  <div className="flex gap-x-[10px]">
                    <div>Height</div>
                    <div>{(pokemon.data?.height / 10).toFixed(2)} m</div>
                  </div>
                  <div className="flex gap-x-[10px]">
                    <div>Weight</div>
                    <div>{(pokemon.data?.weight / 10).toFixed(2)} kg</div>
                  </div>
                </div>

                <div className="flex gap-2 justify-end pt-4">
                  {pokemon.data?.types.map((item) => {
                    return (
                      <span
                        className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[16px] capitalize`}
                      >
                        {item.type.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <h5 className="text-white font-bold">abilities</h5>
                {pokemon.data?.abilities.map((item) => {
                  return (
                    <>
                      <span className="grid grid-rows-1 px-[14px] py-1 rounded-[16px] capitalize text-white">
                        {item.ability.name}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {pokemon.data && (
          <PokemonCard.PokemonCard
            image={pokemon.data?.image || ""}
            name={pokemon.data?.name}
            id={pokemon.data?.id}
            types={pokemon.data?.types}
          />
        )} */}
    </div>
  );
};

export default detailPage;
