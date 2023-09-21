"use client";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils/carRent";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from ".";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [IsOpen, setIsOpen] = useState(false);
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  return (
    <div className="car-cad-group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold ">$</span>
        {calculateCarRent(car.city_mpg, car.year)}
        <span className="self-start text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 obvject-contain">
        <Image
          src="/hero.png"
          fill
          alt="car-model"
          className="object-contain"
        />
      </div>
      <div className="relative flex mt-2 w-full group">
        <div className="flex w-full justify-between text-gray-500 group-hover:invisible  ">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission == "a " ? "automatic" : "manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            handleClick={() => setIsOpen(true)}
            containerStyle="w-full py-[14px] rounded-full bg-primary-blue text-white"
            rightIcon="right-arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
