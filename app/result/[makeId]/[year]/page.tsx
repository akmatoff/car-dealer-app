import Banner from "@/shared/components/Banner";
import CarCard from "@/shared/components/CarCard";
import { YEAR_OPTIONS } from "@/shared/constants";
import { getVehicleMakes } from "@/shared/requests/getVehicleMakes";
import { getVehicleModels } from "@/shared/requests/getVehicleModels";

export async function generateStaticParams() {
  const makes = await getVehicleMakes();

  return makes.flatMap((make) =>
    YEAR_OPTIONS.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }))
  );
}

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const { makeId, year } = await params;

  const models = await getVehicleModels(+makeId, +year);

  return (
    <div className="flex flex-col gap-6 min-h-[90dvh] mid-content">
      <Banner text="Results" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {models.map((model, index) => (
          <CarCard model={model} key={`${model.Model_ID}-${index}`} />
        ))}
      </div>
    </div>
  );
}
