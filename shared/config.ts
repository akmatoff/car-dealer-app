export const API_BASE_URL = process.env.NEXT_API_BASE_URL!;

export const API_VEHICLE_MAKES = API_BASE_URL.concat(
  "/vehicles/GetMakesForVehicleType/car?format=json"
);

export const API_VEHICLE_MODELS = (makeId: number, year: number) =>
  API_BASE_URL.concat(
    `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

export interface BaseResponse<T> {
  Count: number;
  Message: string;
  Results: T[];
  SearchCriteria: string;
}
