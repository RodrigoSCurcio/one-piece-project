import Image from "next/image";

export function GameOption() {
  return (
    <div>
      <button className="flex items-center bg-op-navy-blue p-1.5 rounded-2xl w-auto">
        <Image
          src="/assets/imgs/nika.svg"
          width={55}
          height={55}
          alt="hito hito no mi model nika"
        />
        Akuma no Mi
      </button>
    </div>
  );
}
