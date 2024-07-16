import { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="cursor-pointer font-bold flex items-center rounded-lg p-1.5 transition ease-in-out shadow-sm hover:shadow-xl hover:bg-op-navy-blue ">
      {children}
    </button>
  );
}
