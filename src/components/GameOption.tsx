import { ButtonOption } from "./ButtonOption";

export function GameOption() {
  return (
    <div className="flex flex-col gap-3 items-center sm:w-5/6 md:w-2/5 xl:w-1/5 bg-op-navy-blue p-8 rounded-2xl shadow-2xl shadow-op-dark-chocolate border border-op-royal-blue ">
      <ButtonOption text="Guess the Character" src="/assets/imgs/sunny.svg" />
      <ButtonOption text="Akuma no Mi" src="/assets/imgs/nika.svg" />
      <ButtonOption text="Wanted Poster" src="/assets/imgs/straw-hat.svg" size={75} />
      <ButtonOption text="Who Laughed" src="/assets/imgs/luffy-laugh.svg" size={85} />
    </div>
  );
}
