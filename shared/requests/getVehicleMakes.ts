import { API_VEHICLE_MAKES, BaseResponse } from "../config";
import { IVehicleMake } from "../models/vehicleMake";

export async function getVehicleMakes(): Promise<IVehicleMake[]> {
  const res = await fetch(API_VEHICLE_MAKES);

  if (!res.ok) {
    throw new Error("Unexpected error appeared while fetching vehicle makes");
  }

  const data: BaseResponse<IVehicleMake> = await res.json();

  return data.Results;
}
