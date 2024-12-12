import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center w-screen">
      <div className="mid-content py-5">
        <div className="font-semibold text-xl md:text-2xl">
          <Link href="/">CarDealerApp</Link>
        </div>
      </div>
    </header>
  );
}
