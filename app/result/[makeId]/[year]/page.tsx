import Card from "@/shared/components/Card";
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
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <Card key={model.Model_ID}>
            <p>{model.Make_Name}</p>
            <h1 className="font-bold">{model.Model_Name}</h1>
          </Card>
        ))}
      </div>
    </div>
  );
}
