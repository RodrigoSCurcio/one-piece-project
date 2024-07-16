import { Footer } from "@/components/Footer";
import { GameOption } from "@/components/GameOption";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Image
        src="/assets/imgs/logo.png"
        width={350}
        height={0}
        alt="One Piece Logo"
      />

      <GameOption />
    </main>
  );
}
