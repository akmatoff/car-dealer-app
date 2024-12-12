import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
  onClick: () => void;
}

export default function Button({
  children,
  variant = "primary",
  isDisabled = false,
  onClick,
}: Props) {
  const STYLES_BY_VARIANT = {
    primary: "bg-primary text-primaryForeground",
    secondary: "bg-white text-foreground",
  };

  return (
    <button
      disabled={isDisabled}
      className={`flex gap-1 items-center justify-center px-4 py-2 rounded-full ${STYLES_BY_VARIANT[variant]} disabled:opacity-50`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
