import { UserRound } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-op-royal-blue to-op-sky-blue h-11 flex items-center gap-2 p-2 shadow-sm shadow-op-dark-chocolate">
      <Button>Home</Button>
      <Button>Rank</Button>
      <button className="cursor-pointer flex items-center rounded-full p-1 ml-auto hover:shadow hover:bg-op-navy-blue">
        <UserRound />
      </button>
    </nav>
  );
}