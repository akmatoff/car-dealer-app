import { ReactNode } from "react";

export default function Card({ children }: { children?: ReactNode }) {
  return <div className="bg-content rounded-xl p-1 w-full">{children}</div>;
}
