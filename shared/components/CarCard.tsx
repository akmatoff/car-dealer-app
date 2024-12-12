import Card from "./Card";
import Image from "next/image";

import CarImage from "@/shared/assets/images/banner-car.jpg";
import { IVehicleModel } from "../models/vehicleModel";

interface Props {
  model: IVehicleModel;
}

export default function CarCard({ model }: Props) {
  return (
    <Card key={model.Model_ID}>
      <Image src={CarImage} alt="car" className="rounded-lg" />
      <div className="mt-2 px-2">
        <p className="font-light text-sm">{model.Make_Name}</p>
        <h1 className="font-bold text-xl">{model.Model_Name}</h1>
      </div>
    </Card>
  );
}
