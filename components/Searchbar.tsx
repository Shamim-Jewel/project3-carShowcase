"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer == "" && model == "") {
      return alert("Please select a model first before continuing to search ");
    } else {
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    }
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
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
          className="searchbar__input -ml-8"
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <SearchButton otherclasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
