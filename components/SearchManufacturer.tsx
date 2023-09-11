"use client";
import { SearchManufacturerProps } from "@/types";
import React from "react";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constant";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filterManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, " ")
            .includes(query.toLowerCase().replace(/\s+/g, " "));
        });
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="logo image"
              width={20}
              height={20}
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(manufacturer: string) => manufacturer}
          />
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filterManufacturer.map((item) => (
                <Combobox.Option key={item} value={item}>
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {selected}
                      {item}
                    </li>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <button>Search</button>
    </div>
  );
};

export default SearchManufacturer;
