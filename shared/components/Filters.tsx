"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { yearOptions } from "../constants";
import { IVehicleMake } from "../models/vehicleMake";
import Button from "./Button";
import Dropdown from "./Dropdown";

interface Props {
  vehicleMakes: IVehicleMake[];
}

export default function Filters({ vehicleMakes }: Props) {
  const [selectedMakeId, setSelectedMakeId] = useState<number>();
  const [selectedYear, setSelectedYear] = useState<number>();

  const isNextButtonDisabled = !selectedMakeId || !selectedYear;

  const vehicleMakesOptions = vehicleMakes.map((make) => ({
    label: make.MakeName,
    value: make.MakeId,
  }));

  const router = useRouter();

  const handleNextButtonClick = () => {
    router.push(`/result/${selectedMakeId}/${selectedYear}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Dropdown
          items={vehicleMakesOptions}
          title="Select a make"
          onSelect={(option) => setSelectedMakeId(option.value)}
        />
        <Dropdown
          items={yearOptions}
          title="Select a year"
          onSelect={(option) => setSelectedYear(option.value)}
        />
      </div>

      <Button onClick={handleNextButtonClick} isDisabled={isNextButtonDisabled}>
        Next
      </Button>
    </div>
  );
}
