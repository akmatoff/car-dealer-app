import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary";
  isCentered?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  isCentered = true,
  isDisabled = false,
  onClick,
}: Props) {
  const STYLES_BY_VARIANT = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-content text-foreground",
  };

  return (
    <button
      disabled={isDisabled}
      className={`flex gap-1 items-center ${
        isCentered && "justify-center"
      } px-4 py-2 rounded-full w-full ${
        STYLES_BY_VARIANT[variant]
      } disabled:opacity-50`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
