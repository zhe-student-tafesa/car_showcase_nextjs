import { MouseEventHandler } from "react";

/// ? is optional
export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setmanufacturer: React.Dispatch<React.SetStateAction<string>>
}