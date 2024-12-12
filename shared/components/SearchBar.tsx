import { SearchIcon } from "../assets/icons/SearchIcon";
import { cn } from "../utils";

interface Props {
  className?: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ className, onChange }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-full p-3 bg-content rounded-xl",
        className
      )}
    >
      <SearchIcon color="var(--muted-foreground)" />
      <input
        className="outline-none bg-content text-foreground"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
