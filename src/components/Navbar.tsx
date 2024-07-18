import { BookOpen, Home, LineChart, UserRound } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-op-navy-blue to-op-sky-blue h-11 flex items-center gap-2 p-2 shadow-sm shadow-op-dark-chocolate">
      <Button link="/">
          <Home width={20} /> Home
      </Button>
      <Button link="/rank">
        <LineChart width={20} /> Rank
      </Button>
      <Button link="/wiki">
        <BookOpen width={20} /> Wiki
      </Button>
      <button className="flex items-center rounded-full p-1 ml-auto transition ease-in-out hover:shadow hover:bg-op-navy-blue">
        <UserRound />
      </button>
    </nav>
  );
}
