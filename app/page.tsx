import Banner from "@/shared/components/Banner";
import Filters from "@/shared/components/Filters";
import { getVehicleMakes } from "@/shared/requests/getVehicleMakes";

export default async function Home() {
  const vehicleMakes = await getVehicleMakes();

  return (
    <section className="flex flex-col gap-4 min-h-[85dvh] mid-content">
      <h1 className="font-extrabold text-4xl">
        Welcome to the CarDealerApp. Please select car make and year to view the
        cars
      </h1>

      <Banner text="View cars" />
      <Filters vehicleMakes={vehicleMakes} />
    </section>
  );
}
