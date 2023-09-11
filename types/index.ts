import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (value: string) => void;
}
