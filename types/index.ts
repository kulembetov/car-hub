import { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IFilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface ICustomFilterProps<T> {
  options: IOptionProps[];
  setFilter: (selected: T) => void;
}

export interface ICarProps {
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

export type ICarState = ICarProps[] & { message?: string };

export interface IHomeProps {
  searchParams: IFilterProps;
}

export interface IOptionProps {
  title: string;
  value: string;
}

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface ISearchManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export interface ISearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}
