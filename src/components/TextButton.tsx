import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  color?: string;
};

const TextButton: React.FC<ComponentPropsWithoutRef<"button">> & Props = (
  props
) => {
  const { className, color, children } = props;
  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
        className
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
