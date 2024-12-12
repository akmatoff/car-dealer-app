import { IOptionItem } from "./common";

export const YEAR_OPTIONS = Array.from(
  { length: 2024 - 2015 + 1 },
  (_, i) => 2015 + i
);

export const yearOptions: IOptionItem[] = YEAR_OPTIONS.map((year) => ({
  label: year.toString(),
  value: year,
}));
