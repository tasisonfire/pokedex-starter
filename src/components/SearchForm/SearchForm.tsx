import React from "react";
import { generationList, typesList, sortList } from "@/utils/optionList";
import { useSearchForm } from "./SearchFormHook";

const SearchForm = () => {
  const { fieldKeyWord } = useSearchForm();
  // useSearchForm();
  return (
    <div className="grid grid-cols-4 text-white gap-x-[20px] mt-10">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Generation
        </label>
        <select
          id="generation"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-blue-500 block w-full p-2.5 "
        >
          {generationList.map((item, index) => {
            return (
              <option
                className="uppercase"
                key={`generation-key-${index}`}
                value={index}
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="types"
          className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          types
        </label>
        <select
          id="types"
          className="captitalize bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-blue-500 block w-full p-2.5 "
        >
          {typesList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={index}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="sort"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Sort
        </label>
        <select
          id="sort"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-blue-500 block w-full p-2.5 "
        >
          {sortList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={index}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <input
          {...fieldKeyWord}
          id="generation"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-blue-500 block w-full p-2.5 "
        ></input>
      </div>
    </div>
  );
};

export default SearchForm;
