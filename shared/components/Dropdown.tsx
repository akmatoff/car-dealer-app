"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IOptionItem } from "../common";
import { ArrowDownIcon } from "../assets/icons/ArrowDown";
import Button from "./Button";
import SearchBar from "./SearchBar";

interface Props {
  items: IOptionItem[];
  title: string;
  onSelect: (value: IOptionItem) => void;
}

export default function Dropdown({ items, title, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOptionItem>();

  const [search, setSearch] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    if (!search) return items;

    return items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  const toggle = () => {
    setIsOpen((prev) => !prev);
    setSearch("");
  };

  const handleSelect = (value: IOptionItem) => {
    onSelect(value);
    setSelectedOption(value);
    setIsOpen(false);
    setSearch("");
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <Button onClick={toggle} variant="secondary" isCentered={false}>
        <ArrowDownIcon color="var(--foreground)" />{" "}
        <h1 className="line-clamp-1">{selectedOption?.label || title}</h1>
      </Button>
      {isOpen && (
        <div className="absolute z-20 flex flex-col gap-1 mt-1">
          <SearchBar
            className="relative"
            onChange={handleSearchChange}
            placeholder="Start typing..."
          />
          <div className="relative p-1 max-h-64 md:max-h-96 overflow-y-scroll bg-content rounded-xl scrollbar-none">
            {!!filteredItems.length &&
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-slate-200 duration-300 rounded-lg"
                  onClick={() => handleSelect(item)}
                >
                  {item.label}
                </div>
              ))}
            {!filteredItems.length && (
              <div className="px-4 py-2 text-muted-foreground">No results.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
