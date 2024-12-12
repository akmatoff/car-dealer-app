import { API_ALL_VEHICLE_MODELS, BaseResponse } from "../config";
import { IVehicleModel } from "../models/vehicleModel";

export async function getAllVehicleModels(): Promise<IVehicleModel[]> {
  const res = await fetch(API_ALL_VEHICLE_MODELS);

  if (!res.ok) {
    throw new Error("Failed to fetch vehicle models");
  }

  const data: BaseResponse<IVehicleModel> = await res.json();

  return data.Results;
}
