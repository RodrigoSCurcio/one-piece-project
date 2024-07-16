import Image from "next/image";

interface IButtonOption {
  text: string;
  src?: string;
  size?: number;
}

export function ButtonOption({ text, src, size = 55 }: IButtonOption) {
  return (
    <button className="flex items-center gap-2 font-semibold w-full transition ease-in-out bg-op-navy-blue p-4 rounded-2xl h-20 justify-center shadow-xl hover:shadow-op-sky-blue hover:bg-op-royal-blue hover:border">
      {src && <Image src={src} width={size} height={size} alt="button img" />}
      {text}
    </button>
  );
}
