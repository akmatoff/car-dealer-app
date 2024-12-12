import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center w-screen">
      <div className="flex items-center justify-between mid-content py-5">
        <div className="font-semibold text-xl md:text-2xl">
          <Link href="/">CarDealerApp</Link>
        </div>

        <Link href="/">Home</Link>
      </div>
    </header>
  );
}
