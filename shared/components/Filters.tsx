"use client";

import { useState } from "react";
import { yearOptions } from "../constants";
import { IVehicleMake } from "../models/vehicleMake";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";

interface Props {
  vehicleMakes: IVehicleMake[];
}

export default function Filters({ vehicleMakes }: Props) {
  const router = useRouter();

  const [selectedMakeId, setSelectedMakeId] = useState<number>();
  const [selectedYear, setSelectedYear] = useState<number>();

  const isNextButtonDisabled = !selectedMakeId || !selectedYear;

  const vehicleMakesOptions = vehicleMakes.map((make) => ({
    label: make.MakeName,
    value: make.MakeId,
  }));

  const handleVehicleMakeSelect = (value: number) => {
    setSelectedMakeId(value);
  };

  const handleNextButtonClick = () => {
    router.push(`/result/${selectedMakeId}/${selectedYear}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex gap-3 flex-[3_1_20%]">
          <Dropdown
            items={vehicleMakesOptions}
            title="Select car make"
            onSelect={(option) => handleVehicleMakeSelect(option.value)}
          />
          <Dropdown
            items={yearOptions}
            title="Select year"
            onSelect={(option) => setSelectedYear(option.value)}
          />
        </div>
        <div className="flex-[1_1_0%]">
          <Button
            onClick={handleNextButtonClick}
            isDisabled={isNextButtonDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
