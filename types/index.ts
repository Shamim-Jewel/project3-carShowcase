import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (value: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FiltersProps {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}
export interface CustomFilterProps {
  options: option[];
  title: string;
}
export interface option {
  title: string;
  value: string | number;
}
