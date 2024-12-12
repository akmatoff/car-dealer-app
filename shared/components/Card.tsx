import { ReactNode } from "react";

export default function Card({ children }: { children?: ReactNode }) {
  return <div className="bg-content rounded-xl p-4 w-56">{children}</div>;
}
