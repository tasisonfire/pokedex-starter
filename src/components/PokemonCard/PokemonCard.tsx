import { Type } from "@/interface/pokemonDetail";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
}

const PokemonCard = ({ image, name, id, types }: PokemonCardProps) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[275px] rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 p-[10px] bg-white min-w-[260px] ">
        <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover rounded-lg">
          <Link to={`/detail/${name}`}>
            <img
              className="rounded-t-lg max-h-[218px] p-[40px] w-full"
              src={image}
              alt=""
            />
          </Link>
        </div>

        <div className="py-3">
          <div className="flex justify-between" key={`pokemon-${id}`}>
            <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              #{id}
            </h5>
          </div>

          <div className="flex gap-2 justify-end pt-4">
            {types.map((item) => {
              return (
                <span
                  className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[16px] capitalize`}
                >
                  {item.type.name}
                </span>
              );
            })}
          </div>

          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
          {/* <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
