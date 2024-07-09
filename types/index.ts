import { MouseEventHandler } from "react";

/// ? is optional
export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisable?: boolean,
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setmanufacturer: React.Dispatch<React.SetStateAction<string>>
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface CarDetailsProps {
    car: CarProps,
    isOpen: boolean,
    closeModal: (value: React.SetStateAction<boolean>) => void,
}