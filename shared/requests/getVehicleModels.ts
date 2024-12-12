import { API_VEHICLE_MODELS, BaseResponse } from "../config";
import { IVehicleModel } from "../models/vehicleModel";

export async function getVehicleModels(
  makeId: number,
  year: number
): Promise<IVehicleModel[]> {
  const res = await fetch(API_VEHICLE_MODELS(makeId, year));

  if (!res.ok) {
    throw new Error("Unexpected error appeared while fetching vehicle models.");
  }

  const data: BaseResponse<IVehicleModel> = await res.json();

  return data.Results;
}
