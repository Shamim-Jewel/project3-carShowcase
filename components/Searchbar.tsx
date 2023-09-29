"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
  <button type="submit" className={`-ml-3 ${otherclasses}`}>
    <Image
      src="/magnifying-glass.svg"
      className="object-contain"
      width={40}
      height={40}
      alt="search btn"
    />
  </button>
);

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState([]);
  const handleSearch = () => {};

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="search__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherclasses=" sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model"
          className="absloute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <SearchButton otherclasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
