import Filters from "@/shared/components/Filters";
import { getVehicleMakes } from "@/shared/requests/getVehicleMakes";

export default async function Home() {
  const vehicleMakes = await getVehicleMakes();

  return (
    <section className="flex flex-col gap-8">
      <Filters vehicleMakes={vehicleMakes} />
    </section>
  );
}
