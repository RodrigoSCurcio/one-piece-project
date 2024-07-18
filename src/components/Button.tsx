import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
}

export function Button({ link, children, ...rest }: IButton) {
  return (
    <button className="font-bold flex items-center gap-1 rounded-lg p-1.5 transition ease-in-out shadow-sm shadow-op-royal-blue hover:shadow-md hover:shadow-op-white hover:bg-op-royal-blue">
      {link ? (
        <Link href={link} className="flex items-center gap-1">
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}
